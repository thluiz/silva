---
name: add-silvae-note-from-podcast-annotation
description: Cria nota no Silva a partir de anotações de um episódio Vox. Recebe URL do episódio e timestamps. Busca as anotações do JSON, sugere título e comentários, confirma antes de criar.
argument-hint: "<url-vox> <HH:MM:SS,HH:MM:SS,...>"
---

Cria uma nota no blog Silva baseada em anotações de um episódio publicado no Vox.

## Parâmetros

Extraia de `$ARGUMENTS`:
- **url** — URL do episódio Vox (ex: `https://vox.thluiz.com/2026/03/W14/slug`). Se ausente, pergunte.
- **timestamps** — lista separada por vírgula (ex: `58:54,01:01:02`). Se ausente, pergunte.
- **título** — opcional. Se não fornecido, será sugerido com base nas anotações.
- **comentário** — opcional. Texto adicional do utilizador a incluir na nota.

## Processo

### 1. Extrair path do episódio

Da URL `https://vox.thluiz.com/YYYY/MM/WXX/slug`, extraia o path relativo: `YYYY/MM/WXX/slug`.

### 2. Ler o JSON do episódio

```bash
wsl -d HermesTools -u hermes -- bash -c "cat ~/vox-content/YYYY/MM/WXX/slug.json"
```

O JSON tem:
- `annotations`: lista de `{ts: "HH:MM:SS", title: "...", description: "..."}`
- `title`: título do episódio
- `metadata.podcast`: nome do podcast
- `tags`: tags do episódio (usar como referência, mas filtrar pelo conteúdo das anotações selecionadas)

### 3. Encontrar anotações pelos timestamps

Para cada timestamp fornecido, normalizar para `HH:MM:SS` e encontrar a anotação mais próxima (±90s) em `annotations[].ts`.

Se nenhuma anotação for encontrada próxima de um timestamp, avisar o utilizador e perguntar se deseja prosseguir sem ela.

### 4. Construir proposta de nota

- **Título sugerido**: se há uma anotação, usar o `title` dela; se há várias, compor um título que as una. Máx 60 chars. Perguntar ao utilizador se aceita ou quer outro.
- **Corpo**: para cada anotação encontrada, incluir o timestamp e a `description`. Se o utilizador forneceu comentário, incluir em itálico após as anotações.
- **Fonte**: link para o episódio Vox com timestamp âncora quando possível.

Formato do corpo sugerido (para cada anotação):

```
**HH:MM:SS** — Título da anotação

Descrição da anotação.
```

Se o utilizador forneceu comentário:

```
*Comentário do utilizador aqui.*
```

### 5. Confirmar antes de criar

Mostrar preview completo do arquivo `.md` e aguardar confirmação explícita.

### 6. Criar nota e publicar

Após confirmação:
1. Gerar slug a partir do título (lowercase, sem acentos, hífens)
2. Selecionar tags: começar pelas `tags` do episódio, filtrar as que têm relação direta com o conteúdo das anotações selecionadas, descartar as genéricas do podcast. O idioma das tags segue o idioma do episódio (PT ou EN). 2–4 tags.
3. Escrever `E:/silva/src/content/note/<slug>.md`
4. `git add` + `git commit -m "feat: nota sobre <slug>"` + `git push`

## Regras

- Título máx 60 chars (`z.string().max(60)` — build falha se exceder)
- Sem campo `lang` nas notas
- Fonte na última linha separada por linha em branco
- Commit sem Co-Authored-By (conteúdo é do utilizador/episódio)
- Se o JSON não existir no caminho esperado, avisar e sugerir verificar se o episódio está publicado no Vox

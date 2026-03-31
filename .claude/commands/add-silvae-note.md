---
name: add-silvae-note
description: Cria uma nova nota no blog Silva (src/content/note/). Recebe título, corpo e fonte. Pergunta o que faltar.
argument-hint: "[título] | [corpo] | [fonte]"
---

Cria uma nova nota no blog Silva em `E:/silva/src/content/note/`.

## Parâmetros

Os argumentos podem vir em `$ARGUMENTS` no formato livre. Extraia:
- **título** — string curta (máx 60 chars). Se não fornecido, pergunte.
- **corpo** — conteúdo principal da nota em markdown. Se não fornecido, pergunte.
- **fonte** — URL ou referência bibliográfica. Se não fornecido, pergunte.

Se algum dos três estiver ausente, pergunte antes de continuar.

## Processo

1. **Gerar slug** a partir do título: lowercase, remover acentos, substituir espaços e pontuação por `-`, máx ~50 chars.

2. **Inferir tags** a partir do conteúdo (2–4 tags, kebab-case). O idioma das tags deve acompanhar o idioma da nota — PT para notas em português, EN para notas em inglês.

3. **Criar o arquivo** em `E:/silva/src/content/note/<slug>.md` com este formato:

```
---
title: "<título>"
publishDate: "YYYY-MM-DDTHH:MM:SS+01:00"
tags: ["tag1", "tag2"]
---

<corpo>

Fonte: <fonte formatada como link markdown se for URL>
```

4. **Mostrar preview** do arquivo ao utilizador e aguardar confirmação antes de escrever.

5. Após confirmação: escrever o arquivo, fazer `git add` + `git commit` + `git push`.

## Regras

- **`publishDate` é OBRIGATÓRIO e deve incluir data + hora + offset** — formato exato: `"YYYY-MM-DDTHH:MM:SS+01:00"`. Build falha se omitido ou se for só uma data sem hora.
- Título máx 60 chars (schema `z.string().max(60)` — build falha se exceder)
- Sem campo `lang` (só existe no schema de posts, não de notas)
- Fonte sempre na última linha, separada por linha em branco
- Se a fonte for URL, formatar como `[Título do artigo — Publicação](URL)`
- Commit message: `feat: nota sobre <slug>` — sem Co-Authored-By (o conteúdo é do utilizador)

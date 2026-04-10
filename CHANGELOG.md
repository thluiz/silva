# Changelog

## 2026-04-10

### Features
- Layout de cards (PostCard.astro) para listagens de posts, inspirado no Scholion
- Tag cloud com contagem na página /tags/ e na home
- Caixa visual (.silva-post) nos posts individuais e na página Sobre
- Cover image nos cards (posts com coverImage mostram imagem no topo)
- Campo pin_weight no schema para ordenar posts fixados
- Links sociais (GitHub, LinkedIn) no header
- Página Tags no menu de navegação
- Indicador visual de página ativa no nav
- Seção "Explorar por tag" na home

### Edits
- Post "Estamos Velhos, Xavier" adaptado do Obsidian para publicação
- Post 拳無禮讓，棍無兩響: Bruce Lee, Si Baak Anderson, Si Hing Vladimir, fontes, assinatura
- Imagem de floresta (Unsplash) no post Silva
- Frase do Scholion atualizada na página Sobre
- Página /posts/ simplificada: lista única sem agrupamento por ano nem paginação
- Meta descriptions traduzidas para português
- Rocket emoji removido do footer

### Visual
- Tema verde (#4cc908 light / oklch(62% 0.24 150) dark) substituindo terracota
- Fundo Apple gray (#f5f5f7) no tema claro
- Cards e post box com fundo levemente verde-branco (light) e preto-verde (dark)
- Tag cloud com dark mode
- Favicon trocado para selo 士 (Si)
- 知 em vermelho no footer
- Header reduzido de mb-28 para mb-16
- Grid pinned responsivo (3 cols > 2 cols > 1 col)
- Fontes mínimas nos cards aumentadas (tags 0.7rem, datas 0.7rem)
- Hover dos cards limitado a dispositivos com pointer (hover: hover)
- Prose dos posts de prose-sm para prose (16px)
- Pin indicator movido para canto superior direito

## 2026-04-09

### Features
- Fontes estruturadas no frontmatter, compatíveis com Scholion (campo `sources` no schema)
- Componente `Sources.astro` para renderizar fontes numeradas nos posts
- Links externos em terracota com indicador `↗`, internos em accent
- Links externos abrem em nova aba com `noreferrer noopener`
- Post "Notas sobre Confessions of a Millennial in Tech" migrado do Scholion
- Parágrafo sobre o Scholion na página Sobre

### Edits
- Notas do Chinês Instrumental: romanizações, ideogramas, Si Mo na trilha de ancestralidade
- Suaviza atribuições a Si Fu em notas publicadas
- Remove limite de 60 caracteres no título de posts

### Fixes
- Links de `/notes/` corrigidos de `silva.thluiz.com` para `scholion.thluiz.com`
- Remove RSS órfão de `/notes/rss.xml`
- Destaque visual nos links de fontes

### Chores
- Remove note collection (conteúdo movido para Scholion)

## 2026-04-08

### Features
- 6 notas citáveis do IV Encontro de Chinês Instrumental
- Nota-mãe do IV Encontro de Chinês Instrumental
- 7 notas citáveis do III Encontro de Chinês Instrumental
- 8 notas citáveis do II Encontro de Chinês Instrumental
- 7 notas citáveis do I Encontro de Chinês Instrumental
- Notas sobre etimologia de Cham Xun, termos Biu Ji, tons do cantonês e mandarim
- 9 notas de Viramaxxing com Letícia Cesarino

### Edits
- Ideogramas e radicais nas notas do IV Encontro
- Remove fio condutor e tarefas de casa das notas dos encontros

## 2026-04-07

### Features
- Notas sobre feedback loops e emergent behavior (Systems Thinking)
- 6 notas de Systems Thinking (Complete Developer Podcast)

## 2026-04-04

### Features
- Nota-mãe do III Encontro de Chinês Instrumental
- 9 notas sobre Systems Thinking for Humans (Fallthrough)
- Notas sobre projeto nacional e desindustrialização (Jabbour)
- Notas sobre Bloom's taxonomy, SOLID, Law of Demeter, design patterns GoF
- Notas sobre prototype-based programming, functional programming, Erlang/OTP, Elixir

### Fixes
- Ajustes finais no post Organizações contra a Entropia

## 2026-04-03

### Features
- Post "Organizações contra a Entropia" com 28 fontes
- Notas sobre pensamento chinês (Giorgio Sinedino), filosofia pré-imperial, Streisand effect

### Fixes
- Revisão gramatical no post Organizações contra a Entropia
- Corrige legenda de imagem no post perguntas-movem-o-mundo

## 2026-04-02

### Features
- Notas sobre systems thinking, Jevons paradox, Chin Woo, indústria cultural
- Notas sobre câmbio e remessas (Bresser-Pereira), comunicação como disciplina
- Notas sobre Bertalanffy e autopoiese (Maturana & Varela)

## 2026-04-01

### Features
- Nota sobre "We shape our tools" (Culkin/McLuhan)
- Nota rascunho sobre o que é Kung Fu

## 2026-03-31

### Features
- Skills `add-silvae-note` e `add-silvae-note-from-podcast-annotation`
- Notas sobre neuronal workspace theory, naturalização do desejo, Bat Chuen Ji Bei

### Fixes
- Formato de publishDate com timezone explícito
- Substituir fonte morta por Encyclopedia.com

### Chores
- Atualizar dependências e corrigir 31 vulnerabilidades

## 2026-03-30

### Features
- Notas paginadas cronológicas com página `/notes/tags/` independente
- Tags com links na página de nota
- Logo seal + favicon chi
- Página Sobre com história completa do nome Silva
- Migração de posts do algumaspalavras (2019)
- Posts com imagens co-localizadas + posts históricos (WebRTC, Space Shooter, Silent Ilha, Gentle Introduction to DI, Spying on Methods with Jest)
- Pin "Como conseguir mais tempo"
- Post de boas-vindas com link para `/about/`

### Fixes
- Limitar notas na home a 3
- publishDate com timezone correto

### Chores
- Remove nota de exemplo Hello Welcome
- Remove draft saam-faat-em-novembro-de-2019

## 2026-03-29

### Features
- Setup inicial do Silva sobre Astro Cactus
- Notas do segundo encontro de cantonês instrumental
- Nota-mãe do I Encontro de Chinês Instrumental

### Infrastructure
- Azure Static Web Apps workflow + config
- Node.js 22 (requisito Astro 6)

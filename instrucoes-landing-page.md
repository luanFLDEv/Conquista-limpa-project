# Tarefa: Criar Landing Page — Conquista Limpa

## Contexto

O projeto atual é uma aplicação React com Tailwind CSS e Leaflet. Atualmente existe apenas a tela do mapa interativo. Precisamos adicionar uma **landing page** como página principal do projeto.

---

## O que fazer

1. **Manter o mapa exatamente como está** — apenas mover a rota para `/mapa`
2. **Criar a landing page** em `/` (rota raiz)
3. **Criar um componente de navegação** (`Navbar`) simples presente em ambas as páginas
4. Seguir fielmente o design system atual descrito abaixo

---

## Estrutura de Rotas

Configure o React Router (ou o roteador já usado no projeto) assim:

```
/        → LandingPage
/mapa    → MapaPage (componente atual, sem alterações)
```

---

## Design System a seguir

### Cores
- Verde principal: `#22c55e` / `rgb(34, 197, 94)`
- Azul descarte: `#3b82f6`
- Âmbar esgoto: `#f59e0b`
- Vermelho denúncia: `#ef4444`
- Roxo ONGs: `#a020f0`
- Fundo escuro primário: `#050a05`
- Fundo escuro secundário: `#0a140a`
- Overlay: `rgba(10, 20, 10, 0.92)`
- Borda sutil: `rgba(34, 197, 94, 0.15)`
- Borda moderada: `rgba(34, 197, 94, 0.3)`
- Texto primário: `rgb(232, 245, 232)`
- Texto secundário: `rgba(134, 239, 172, 0.6)`

### Tipografia
- Fonte: **DM Sans** (já usada no projeto)
- Tamanhos seguindo padrão existente

### Efeitos
- `backdrop-blur-md` em cards e painéis flutuantes
- Bordas com opacidade baixa no padrão `border-green-500/20`
- Sombra de botões CTA: `0 4px 20px rgba(34, 197, 94, 0.4)`
- Hover em botões: `hover:scale-105 transition-transform duration-200`

---

## Navbar

Criar um componente `Navbar.jsx` ou `Navbar.tsx` com:

- Logo/nome: **🌿 Conquista Limpa** à esquerda
- Links à direita: `Início`, `Guia`, `Agenda`, `Aprenda`, `Ajude`, e um botão destacado **Ver Mapa** que leva para `/mapa`
- Fundo: `rgba(5, 10, 5, 0.98)` com `backdrop-blur-md`
- Borda inferior: `rgba(34, 197, 94, 0.15)`
- Sticky (fixo no topo enquanto scroll)
- Mobile: hamburger menu colapsável

---

## Seções da Landing Page

### 1. Hero
- Fundo escuro `#050a05` com leve textura ou gradiente radial sutil em verde
- Título grande, ex: **"Vitória da Conquista mais limpa, começa com você"**
- Subtítulo: breve descrição do projeto como iniciativa estudantil de extensão
- Dois botões:
  - CTA principal: **"Ver o Mapa"** → leva para `/mapa` — gradiente `from-[#22c55e] to-[#16a34a]` com shadow verde
  - CTA secundário: **"Saiba mais"** → scroll suave para a próxima seção — fundo transparente, borda `rgba(34, 197, 94, 0.3)`, texto verde

---

### 2. Guia de Reciclagem (`#guia`)

Título da seção: **Guia de Reciclagem**

Card grid responsivo (2 colunas mobile, 3 ou 4 desktop) com os tipos de materiais recicláveis. Cada card deve ter:
- Cor do tipo (usar as cores do design system — verde, azul, âmbar, vermelho)
- Ícone emoji representativo
- Nome do material
- Lista curta de exemplos do que pode/não pode reciclar

Materiais sugeridos:
| Ícone | Material | Cor |
|-------|----------|-----|
| 📄 | Papel e Papelão | Azul `#3b82f6` |
| 🥤 | Plástico | Vermelho `#ef4444` |
| 🍶 | Vidro | Verde `#22c55e` |
| 🔧 | Metal | Âmbar `#f59e0b` |
| 📦 | Embalagem Longa Vida | Roxo `#a020f0` |
| 🔋 | Eletrônicos / Pilhas | Vermelho `#ef4444` |

Estilo dos cards:
- Fundo: `rgba(10, 20, 10, 0.7)`
- Borda: `1px solid rgba(cor_do_tipo, 0.3)`
- `backdrop-blur-md`
- `rounded-xl`
- Hover: leve `scale-[1.02]` e borda com mais opacidade

---

### 3. Agenda de Eventos e Ações (`#agenda`)

Título da seção: **Agenda de Eventos**

Lista de cards de eventos (mockados inicialmente). Cada card deve ter:
- Data (ex: `15 JUN`)
- Título do evento
- Descrição curta
- Local
- Tag de tipo (ex: "Mutirão", "Palestra", "Coleta")
- Botão: **Saiba mais** (placeholder por enquanto)

Mockups de eventos sugeridos:
1. **Mutirão de Limpeza — Centro** | 15 Jun | Praça Tancredo Neves | tag: Mutirão
2. **Palestra: Descarte Consciente** | 22 Jun | UESB — Auditório | tag: Palestra
3. **Coleta de Pilhas e Eletrônicos** | 28 Jun | Shopping Conquista Sul | tag: Coleta

Estilo dos cards:
- Layout horizontal (data destacada à esquerda em coluna separada)
- Fundo: `rgba(10, 20, 10, 0.7)`, borda sutil verde, `rounded-xl`
- Tag com cor de fundo opaca correspondente ao tipo

---

### 4. Conteúdos Educativos (`#aprenda`)

Título da seção: **Aprenda**

Dividir em 3 abas ou sub-seções visuais:
- 📹 **Vídeos**
- 📚 **Artigos**
- 📖 **Materiais / Cartilhas**

Cada item é um card com:
- Thumbnail placeholder (fundo escuro com ícone centralizado)
- Título
- Fonte / Autor
- Botão: **Acessar** (link externo, `target="_blank"`, placeholder `#` por enquanto)

Sugestões de conteúdo mockado:
- Vídeo: "Como funciona a coleta seletiva?" — Canal CETESB
- Artigo: "Impacto do lixo irregular em cidades do interior" — Artigo acadêmico
- Cartilha: "Guia de Reciclagem do MMA" — Ministério do Meio Ambiente

Estilo:
- Grid de cards com fundo escuro, bordas sutis, `rounded-xl`, hover com leve escala

---

### 5. Quero Ajudar (`#ajude`)

Título da seção: **Quero Ajudar**

Texto introdutório sobre ser um projeto estudantil de extensão aberto a parcerias, voluntários e colaboradores.

Dois cards/opções lado a lado:
1. **Ser Voluntário** — preencher formulário simples (nome + email + mensagem) → botão enviar (placeholder, sem backend por enquanto)
2. **Ser Parceiro** — instituições, ONGs, empresas → botão **Entrar em Contato** que abre `mailto:` ou link WhatsApp placeholder

Estilo:
- Fundo de seção ligeiramente diferenciado (gradiente radial sutil verde escuro)
- Cards com fundo `rgba(10, 20, 10, 0.8)`, borda verde
- Botão principal: gradiente verde com shadow

---

### 6. Footer

Reutilizar o padrão já existente no projeto:
- Fundo: `rgba(5, 10, 5, 0.98)`
- Borda topo: `rgba(34, 197, 94, 0.15)`
- Logo/nome à esquerda
- Links: Sobre o projeto | Fale conosco | Prefeitura de VDC
- Copyright: `🌿 © 2025 Conquista Limpa — Vitória da Conquista, BA`

---

## Organização de Arquivos sugerida

```
src/
├── pages/
│   ├── LandingPage.jsx      ← nova
│   └── MapaPage.jsx         ← mover o componente atual para cá
├── components/
│   ├── Navbar.jsx           ← nova
│   ├── Footer.jsx           ← extrair do existente ou criar
│   └── landing/
│       ├── Hero.jsx
│       ├── GuiaReciclagem.jsx
│       ├── Agenda.jsx
│       ├── Conteudos.jsx
│       └── QueroAjudar.jsx
└── App.jsx                  ← configurar rotas
```

---

## Restrições importantes

- **Não alterar nenhuma lógica do mapa atual** — apenas mover para `/mapa` e garantir que tudo funciona igual
- Todos os dados (eventos, conteúdos, guia) são **mockados em constantes locais** por enquanto — sem backend
- **Não usar bibliotecas de UI externas** (sem shadcn, sem MUI) — apenas Tailwind puro, seguindo o estilo já adotado
- Manter **DM Sans** como fonte principal em toda a landing page
- A landing deve ser **totalmente responsiva** (mobile-first)
- Scroll suave entre âncoras (`scroll-behavior: smooth` no CSS global ou `scroll-smooth` no `html`)
- Usar **React Router** para navegação entre `/` e `/mapa` (instalar se ainda não estiver no projeto)

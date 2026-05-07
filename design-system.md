# Design System — Conquista Limpa

## Identidade Visual

### Projeto
- **Nome**: Conquista Limpa
- **Descrição**: Aplicação de mapeamento colaborativo para denúncias ambientais e pontos de reciclagem em Vitória da Conquista, BA
- **Foco**: Sustentabilidade, engajamento comunitário, monitoramento ambiental

---

## Paleta de Cores

### Cores Primárias
| Uso | Cor | Código | RGB |
|-----|-----|--------|-----|
| Reciclagem (principal) | Verde | #22c55e | rgb(34, 197, 94) |
| Descarte / Geral | Azul | #3b82f6 | rgb(59, 130, 246) |
| Esgoto / Alerta | Âmbar | #f59e0b | rgb(245, 158, 11) |
| Denúncia / Crítico | Vermelho | #ef4444 | rgb(239, 68, 68) |
| ONGs | Roxo | #a020f0 | rgb(160, 32, 240) |

### Cores de Fundo
| Contexto | Cor | Código |
|----------|-----|--------|
| Fundo principal | Preto muito escuro | #050a05 |
| Fundo alternativo | Verde muito escuro | #0a140a |
| Overlay semi-transparente | rgba(10, 20, 10, 0.92) |
| Overlay com efeito | rgba(5, 10, 5, 0.98) |

### Cores de Texto e Bordas
| Elemento | Cor | Código |
|----------|-----|--------|
| Texto primário | Verde claro | #e8f5e8 |
| Texto secundário | Verde 60% opaco | rgba(134, 239, 172, 0.6) |
| Bordas suaves | Verde 15% opaco | rgba(34, 197, 94, 0.15) |
| Bordas moderadas | Verde 30% opaco | rgba(34, 197, 94, 0.3) |
| Bordas de badge | Igual à cor do ícone com 13.3% opaco | rgba(cor, 0.133) |

---

## Tipografia

### Fontes Utilizadas
- **Primária**: DM Sans (sans-serif)
- **Fallback**: sans-serif genérica

### Pesos
- **Bold**: 700+
- **Regular**: 400

### Tamanhos Típicos
| Contexto | Tamanho |
|----------|---------|
| Rótulo de filtro | 10px |
| Badge de contagem | 11px |
| Texto de filtro | 12px |
| Texto de resumo estatístico | 12px |
| Rodapé | 12-14px |
| Ícones em marcadores | 14px |

---

## Componentes Principais

### Filtro (Filter Panel)
**Localização**: Topo esquerdo (desktop) / Hidden by default (mobile)

**Desktop**:
- Classe: `hidden md:flex`
- Posição: `absolute top-4 left-4 z-50`
- Fundo: `bg-[rgba(10,20,10,0.92)] backdrop-blur-md`
- Borda: `border border-green-500/20`
- Border Radius: `rounded-xl`
- Padding: `p-3`
- Layout: `flex flex-col gap-2`
- Largura mínima: `min-w-[170px]`

**Mobile**:
- Botão flutuante no topo
- Classe: `md:hidden`
- Estilo: `bg-green-600 text-white px-3 py-2 rounded-lg`

**Items do Filtro**:
- Flex: `flex items-center gap-2`
- Padding: `px-2 py-1`
- Border Radius: `rounded-lg`
- Transição: `transition`
- Fundo ativo: `bg-green-500/10 border border-green-500/30`
- Opacidade: `opacity-100` (ativo) ou `opacity-40` (inativo)

**Marcador Teórico** (tamanho reduzido):
- Dimensões: `w-[10px] h-[10px]`
- Forma: `rounded-[50%_50%_50%_0]` (tear drop)
- Rotação: `rotate-[-45deg]`

**Badge de Contagem**:
- Layout: `flex items-center`
- Tamanho fonte: `text-[11px]`
- Peso: `font-semibold`
- Padding: `px-2`
- Border Radius: `rounded-full`
- Cor: Igual ao ícone
- Fundo: Cor com 13.3% opacidade

---

### Barra de Resumo Estatístico (Stats Bar)
**Localização**: Bottom center (desktop only)

**Container**:
- Posição: `hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50`
- Fundo: `bg-[#0a140aeb]`
- Efeito: `backdrop-blur-md`
- Borda: `border border-[#22c55e26]`
- Border Radius: `rounded-full`
- Padding: `px-5 py-2`
- Gap: `gap-0`
- Whitespace: `whitespace-nowrap`

**Item Individual**:
- Display: `flex`
- Align: `items-center`
- Gap: `gap-6px`
- Padding: `0px 16px`
- Borda entre itens: `border-right: 1px solid rgba(34, 197, 94, 0.15)`

**Ponto de cor** (dot):
- Dimensões: `8x8px`
- Border Radius: `50%`
- Fundo: Cor correspondente

**Texto**:
- Fonte: DM Sans
- Tamanho: 12px
- Cor primária: rgb(232, 245, 232) - verde claro
- Número em **bold**: Cor correspondente ao ícone

---

### Botão de Denúncia (CTA Principal)
**Localização**: Bottom center (mobile) / Bottom right (desktop)

**Container**:
- Mobile: `absolute bottom-11 left-1/2 -translate-x-1/2`
- Desktop: `sm:left-auto sm:right-4 sm:translate-x-0`
- Z-index: `z-50`
- Display: `flex items-center justify-center gap-2`

**Styling**:
- Fundo: `bg-gradient-to-br from-[#22c55e] to-[#16a34a]` (gradiente verde)
- Borda: `border-none`
- Cursor: `cursor-pointer`
- Border Radius: Mobile `rounded-xl` / Desktop `sm:rounded-full`
- Padding: Mobile `px-4 py-2` / Desktop `sm:p-0`
- Dimensões desktop: `sm:w-13 sm:h-13`
- Shadow: `shadow-[0_4px_20px_rgba(34,197,94,0.4)]`
- Hover: `hover:scale-105 transition-transform duration-200`

**Conteúdo**:
- Ícone: 📢 (tamanho `text-lg`)
- Texto (mobile): "Fazer denúncia" (`sm:hidden text-sm font-bold`)

---

### Marcadores de Mapa (Map Markers)
**Padrão de Marker**:
- Dimensões: 36x36px
- Forma: Teardrop (50% 50% 50% 0% border-radius)
- Rotação: -45deg
- Borda: 3px solid white
- Shadow: `0 2px 8px rgba(0,0,0,0.25)`
- Display: `flex items-center justify-center`
- Cursor: `cursor-pointer`

**Cores por Tipo**:
- Reciclagem: #22c55e (verde)
- Descarte: #3b82f6 (azul)
- Esgoto: #f59e0b (âmbar)
- Denúncia: #ef4444 (vermelho)

**Ícone dentro**:
- Rotação: 45deg (para compensar rotação do marker)
- Font Size: 14px

---

### Rodapé (Footer)
**Container**:
- Fundo: `bg-[rgba(5,10,5,0.98)]`
- Borda: `border-t border-[rgba(34,197,94,0.15)]`
- Padding: `p-4`
- Z-index: `z-[100]`
- Flex Shrink: `flex-shrink-0`
- Display: Mobile `flex-col` / Desktop `md:flex-row`
- Align: `items-center`
- Justify: `justify-between`
- Gap: `gap-3`
- Text Align: `text-center`

**Seção Esquerda** (info):
- Display: `flex`
- Align: `items-center`
- Gap: `gap-8px`
- Justify: `justify-center`
- Flex Wrap: `flex-wrap`
- Ícone: 🌿 (tamanho 14px)
- Texto: 12px, cor `rgba(134, 239, 172, 0.6)`, fonte DM Sans

**Seção Direita** (links):
- Display: `flex`
- Flex Direction: `flex-direction: row`
- Gap: `gap-10px`
- Align: `items-center`

**Link/Botão**:
- Background: none
- Border: none
- Cor: `rgba(134, 239, 172, 0.5)`
- Fonte: DM Sans, 12px
- Cursor: `cursor-pointer`
- Transição: `transition: color 0.2s`

---

## Efeitos e Interações

### Backdrop Blur
- `backdrop-blur-md` aplicado em painéis flutuantes

### Sombras
- Marcadores: `0 2px 8px rgba(0,0,0,0.25)`
- Botão CTA: `0_4px_20px_rgba(34,197,94,0.4)` (verde)

### Transições
- Filtros e botões: `transition`
- Botão CTA hover: `transition-transform duration-200`
- Links: `transition: color 0.2s`

### Escala e Transformação
- Botão CTA: `hover:scale-105`
- Marcadores: Rotação -45deg para compensar leaflet rotation

---

## Grid e Layout

### Z-Index Stack
| Elemento | Z-Index |
|----------|---------|
| Footer | 100 |
| Filtros / Stats / CTA | 50 |
| Mapa (base) | Padrão |

### Responsive Breakpoints (Tailwind)
- `sm:` para desktop (small and up)
- `md:` para tablets+ (medium and up)

---

## Acessibilidade

### Marcadores de Mapa
- `tabindex="0"`
- `role="button"`
- `aria-label` nos botões de zoom

### Keyboard Navigation
- Botões de zoom: ✓ (Leaflet padrão)
- Marcadores: Interativos via teclado

---

## Estatísticas e Dados

### Contadores (conforme design)
- Reciclagem: 2
- Descarte: 2
- Esgoto: 1
- Denúncia: 3
- ONGs: 0

---

## Stack Técnico (para referência)

- **Framework**: React (componentes)
- **CSS**: Tailwind v3.4.19
- **Mapa**: Leaflet.js
- **Tipografia**: DM Sans (importado)
- **Animação**: CSS nativa (transform, transition)

---

## Notas para IA

1. **Tema escuro**: Verde + preto, sem brancos brilhantes
2. **Filosofia de cores**: Cada tipo de denúncia/ponto tem cor própria (sistema intuitivo)
3. **Responsividade**: Mobile-first com fallbacks desktop
4. **Performance**: Usar `backdrop-blur-md` com cuidado em conexões lentas
5. **Acessibilidade**: Todos os botões devem ter labels e roles apropriadas
6. **Ícones**: Usar emojis ou ícones SVG com rotação compensada

---

## Referências Rápidas

```css
/* Cor primária */
--color-green-600: #22c55e;

/* Fundo escuro */
--bg-dark: #050a05;
--bg-dark-secondary: #0a140a;

/* Overlay vidro */
--backdrop: rgba(10, 20, 10, 0.92);

/* Borda sutil */
--border-subtle: rgba(34, 197, 94, 0.15);
```

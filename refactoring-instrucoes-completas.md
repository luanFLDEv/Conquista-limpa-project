# Refatoração — Boas Práticas e Padrões de Código

## Objetivo

Refatorar **todo o projeto** Conquista Limpa aplicando rigorosamente padrões de qualidade, componentização, reutilização e separação de responsabilidades. Este documento é **mandatório** — o agente deve seguir todas as regras sem exceção.

---

## 1. Estrutura de Pastas (Obrigatória)

```
src/
├── App.jsx                          ← apenas roteamento
├── index.css                        ← estilos globais (scroll-smooth, reset)
│
├── pages/
│   ├── LandingPage.jsx             ← composição de seções, sem lógica
│   └── MapaPage.jsx                ← composição do mapa, sem lógica
│
├── components/
│   ├── common/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx          ← apenas estrutura visual
│   │   │   └── Navbar.module.css   ← estilos scoped (opcional, preferir Tailwind)
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Button/
│   │   │   └── Button.jsx          ← botão reutilizável com variantes
│   │   ├── Card/
│   │   │   └── Card.jsx            ← card base reutilizável
│   │   └── Badge/
│   │       └── Badge.jsx           ← badge/tag reutilizável
│   │
│   ├── landing/
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   ├── GuiaReciclagem/
│   │   │   ├── GuiaReciclagem.jsx  ← composição de cards
│   │   │   ├── MaterialCard.jsx    ← componente individual de material
│   │   │   └── hooks/
│   │   │       └── useGuiaReciclagem.js ← lógica de filtro/estado se houver
│   │   ├── Agenda/
│   │   │   ├── Agenda.jsx          ← composição de eventos
│   │   │   ├── EventCard.jsx       ← componente individual de evento
│   │   │   └── hooks/
│   │   │       └── useAgenda.js    ← lógica de filtro/ordenação
│   │   ├── Conteudos/
│   │   │   ├── Conteudos.jsx       ← composição com abas
│   │   │   ├── ConteudoCard.jsx    ← componente individual
│   │   │   ├── AbaSeletor.jsx      ← componente de abas reutilizável
│   │   │   └── hooks/
│   │   │       └── useConteudoAbas.js ← estado de abas ativas
│   │   └── QueroAjudar/
│   │       ├── QueroAjudar.jsx     ← composição das seções
│   │       ├── FormularioVoluntario.jsx ← formulário de voluntário
│   │       ├── CardParceiro.jsx    ← card de parcerias
│   │       └── hooks/
│   │           ├── useFormularioVoluntario.js ← validação e estado do form
│   │           └── useContatoParceiro.js    ← lógica de contato
│   │
│   └── mapa/
│       ├── MapContainer/
│       │   ├── MapContainer.jsx    ← componente raiz do mapa
│       │   ├── hooks/
│       │   │   ├── useMapLogica.js      ← toda lógica do mapa (filtros, markers)
│       │   │   ├── useMarkers.js        ← gerenciar markers
│       │   │   └── useFiltros.js        ← estado de filtros
│       │   └── utils/
│       │       ├── markerConfig.js      ← configuração de cores/estilos de markers
│       │       └── leafletHelpers.js    ← funções auxiliares do Leaflet
│       ├── FilterPanel/
│       │   ├── FilterPanel.jsx     ← painel de filtros
│       │   ├── FilterButton.jsx    ← botão individual de filtro
│       │   └── hooks/
│       │       └── useFilterState.js
│       ├── StatsBar/
│       │   ├── StatsBar.jsx        ← barra de estatísticas
│       │   ├── StatItem.jsx        ← item individual de stat
│       │   └── hooks/
│       │       └── useStats.js     ← calcular estatísticas
│       ├── BotaoDenuncia/
│       │   ├── BotaoDenuncia.jsx   ← botão flutuante CTA
│       │   └── hooks/
│       │       └── useBotaoDenuncia.js
│       └── utils/
│           └── (compartilhado com mapa)
│
├── hooks/                           ← custom hooks globais, reutilizáveis
│   ├── useMediaQuery.js            ← detectar breakpoint (mobile/desktop)
│   └── useScrollSuave.js           ← smooth scroll para âncoras
│
├── utils/
│   ├── constants.js                ← constantes globais
│   ├── colors.js                   ← mapa de cores do design system
│   ├── cn.js ou classNameUtils.js  ← utilitário para Tailwind (tipo clsx)
│   └── validators.js               ← funções de validação reutilizáveis
│
├── mocks/
│   ├── guiaReciclagem.mock.js      ← dados de guia de reciclagem
│   ├── agenda.mock.js              ← dados de eventos
│   ├── conteudos.mock.js           ← dados de vídeos/artigos/cartilhas
│   └── mapa.mock.js                ← dados de markers do mapa (se não vier de API)
│
├── styles/
│   ├── tailwind.config.js          ← configuração de cores e estilos
│   ├── globals.css                 ← reset e estilos globais
│   └── design-tokens.css           ← CSS variables do design system
│
└── types/ (opcional, se usar TypeScript)
    ├── landing.types.ts
    ├── mapa.types.ts
    └── common.types.ts
```

---

## 2. Princípios de Componentização (Obrigatório)

### 2.1 Componentes Pequenos e Focados

**❌ ERRADO:**
```jsx
export function GuiaReciclagem() {
  return (
    <div className="...">
      <h2>Guia</h2>
      {/* 200 linhas de JSX misturando cards, lógica, dados */}
    </div>
  );
}
```

**✅ CORRETO:**
```jsx
// GuiaReciclagem.jsx — apenas composição
export function GuiaReciclagem() {
  const materiais = GUIA_RECICLAGEM_MOCK;
  
  return (
    <section id="guia" className="...">
      <h2>Guia de Reciclagem</h2>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {materiais.map(material => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </section>
  );
}

// MaterialCard.jsx — responsável por um item
export function MaterialCard({ material }) {
  const { nome, icone, cor, exemplos } = material;
  
  return (
    <Card className={`border-${cor}-500/30`}>
      <div className="text-3xl">{icone}</div>
      <h3 className="text-white font-bold">{nome}</h3>
      <ul className="text-sm text-green-200/60">
        {exemplos.map((ex, i) => (
          <li key={i}>✓ {ex}</li>
        ))}
      </ul>
    </Card>
  );
}
```

### 2.2 Separação de Responsabilidades

**Cada componente deve fazer UMA coisa bem:**
- `Navbar` → apenas renderizar navbar
- `Button` → apenas renderizar botão com variantes
- `FilterPanel` → renderizar painel e passar estado para cima (lift state)
- `useFilterState` → gerenciar estado de filtros
- `markerConfig.js` → dados sobre colors/styling de markers

**❌ NÃO fazer:**
- Lógica de API dentro de componentes visuais
- Estado global em componentes pequenos
- Múltiplas responsabilidades em um hook

---

## 3. Padrão de Dados (Mocks)

### 3.1 Estrutura de Mocks (Obrigatória)

**`src/mocks/guiaReciclagem.mock.js`:**
```javascript
export const GUIA_RECICLAGEM_MOCK = [
  {
    id: 'papel',
    nome: 'Papel e Papelão',
    icone: '📄',
    cor: 'blue',     // nome da cor Tailwind
    hexColor: '#3b82f6', // para usar diretamente em SVG/canvas
    exemplos: ['Jornais', 'Caixas', 'Revistas'],
    naoReciclar: ['Papel sujo', 'Papel plastificado'],
    ordem: 1,
  },
  // ... mais materiais
];
```

**`src/mocks/agenda.mock.js`:**
```javascript
export const AGENDA_EVENTOS_MOCK = [
  {
    id: 'evento-001',
    titulo: 'Mutirão de Limpeza',
    local: 'Praça Tancredo Neves',
    data: new Date('2025-06-15'),
    tipo: 'mutirao', // tag type
    descricao: '...',
    imagem: null, // placeholder
  },
  // ... mais eventos
];
```

**`src/mocks/conteudos.mock.js`:**
```javascript
export const CONTEUDOS_MOCK = {
  videos: [
    {
      id: 'video-001',
      titulo: 'Como funciona a coleta seletiva?',
      autor: 'CETESB',
      url: '#',
      thumbnail: null,
    },
    // ...
  ],
  artigos: [
    // ... estrutura similar
  ],
  cartilhas: [
    // ... estrutura similar
  ],
};
```

**`src/mocks/mapa.mock.js`:**
```javascript
export const MARKERS_MOCK = [
  {
    id: 'marker-001',
    lat: -14.8626,
    lng: -40.8394,
    tipo: 'reciclagem', // ou descarte, esgoto, denuncia, ong
    titulo: 'Centro de Reciclagem X',
    descricao: '...',
    imagem: null,
  },
  // ... mais markers
];
```

### 3.2 Importações de Mocks (Padrão)

Todos os mocks devem ser **importados no topo do arquivo** que os usa:

```javascript
import { GUIA_RECICLAGEM_MOCK } from '@/mocks/guiaReciclagem.mock';
import { AGENDA_EVENTOS_MOCK } from '@/mocks/agenda.mock';
```

**Não criar mocks dentro de componentes ou hooks.**

---

## 4. Padrão de Hooks Customizados

### 4.1 Hooks com Lógica (Obrigatório)

Se há estado complexo ou lógica que não seja trivial, **separar em hook**.

**❌ ERRADO:**
```jsx
export function Agenda() {
  const [eventosAtivos, setEventosAtivos] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState('');
  
  useEffect(() => {
    // 30 linhas de lógica de filtro aqui
  }, [filtroTipo]);
  
  return <div>...</div>;
}
```

**✅ CORRETO:**
```javascript
// hooks/useAgenda.js
export function useAgenda() {
  const [eventosAtivos, setEventosAtivos] = useState(AGENDA_EVENTOS_MOCK);
  const [filtroTipo, setFiltroTipo] = useState('');
  
  const eventosFiltrados = useMemo(() => {
    if (!filtroTipo) return eventosAtivos;
    return eventosAtivos.filter(e => e.tipo === filtroTipo);
  }, [eventosAtivos, filtroTipo]);
  
  return {
    eventos: eventosFiltrados,
    filtroTipo,
    setFiltroTipo,
    todosOsEventos: eventosAtivos,
  };
}

// components/landing/Agenda/Agenda.jsx
export function Agenda() {
  const { eventos, filtroTipo, setFiltroTipo } = useAgenda();
  
  return (
    <section>
      <div className="flex gap-2 mb-4">
        {/* filtros */}
      </div>
      <div className="grid gap-4">
        {eventos.map(e => <EventCard key={e.id} evento={e} />)}
      </div>
    </section>
  );
}
```

### 4.2 Nomes de Hooks

Sempre começar com `use`:
- `useFilterState()`
- `useFormularioVoluntario()`
- `useMarkers()`
- `useStats()`

---

## 5. Utilitários e Constantes

### 5.1 Cores (Obrigatório)

**`src/utils/colors.js`:**
```javascript
export const DESIGN_COLORS = {
  primary: {
    reciclagem: '#22c55e',  // rgb(34, 197, 94)
    descarte: '#3b82f6',    // rgb(59, 130, 246)
    esgoto: '#f59e0b',      // rgb(245, 158, 11)
    denuncia: '#ef4444',    // rgb(239, 68, 68)
    ong: '#a020f0',         // rgb(160, 32, 240)
  },
  background: {
    dark: '#050a05',
    darkSecondary: '#0a140a',
    overlay: 'rgba(10, 20, 10, 0.92)',
    overlayFooter: 'rgba(5, 10, 5, 0.98)',
  },
  text: {
    primary: 'rgb(232, 245, 232)',
    secondary: 'rgba(134, 239, 172, 0.6)',
  },
  border: {
    subtle: 'rgba(34, 197, 94, 0.15)',
    moderate: 'rgba(34, 197, 94, 0.3)',
  },
};

// Função helper para mapear tipo para cor
export function getTipoColor(tipo) {
  return DESIGN_COLORS.primary[tipo] || DESIGN_COLORS.primary.descarte;
}
```

### 5.2 Constantes Globais

**`src/utils/constants.js`:**
```javascript
export const ROUTES = {
  HOME: '/',
  MAPA: '/mapa',
  GUIA: '/#guia',
  AGENDA: '/#agenda',
  APRENDA: '/#aprenda',
  AJUDE: '/#ajude',
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const ANIMATION = {
  duration: 200,
  easing: 'ease-in-out',
};
```

### 5.3 Utilitários de Classe (classNames)

**`src/utils/cn.js`:**
```javascript
// Simples implementação ou usar clsx
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Uso:
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" && "primary-class"
)}>
```

---

## 6. Componentes Reutilizáveis Base

### 6.1 Button Component (Obrigatório)

**`src/components/common/Button/Button.jsx`:**
```jsx
export function Button({
  children,
  variant = 'primary', // primary | secondary | ghost
  size = 'md',         // sm | md | lg
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-105',
    secondary: 'border border-green-500/30 text-green-200 hover:border-green-500/60 bg-green-500/10',
    ghost: 'text-green-200 hover:bg-green-500/10 border border-transparent hover:border-green-500/20',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Uso:**
```jsx
<Button variant="primary" size="lg">Ver Mapa</Button>
<Button variant="secondary" size="md">Saiba Mais</Button>
<Button variant="ghost">Link</Button>
```

### 6.2 Card Component (Obrigatório)

**`src/components/common/Card/Card.jsx`:**
```jsx
export function Card({
  children,
  className = '',
  highlighted = false,
  ...props
}) {
  return (
    <div
      className={cn(
        'bg-[rgba(10,20,10,0.7)] backdrop-blur-md rounded-xl',
        'border border-green-500/20',
        'p-4 transition-all duration-200',
        highlighted && 'border-green-500/60 bg-[rgba(10,20,10,0.9)]',
        'hover:scale-[1.02] hover:border-green-500/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### 6.3 Badge Component (Obrigatório)

**`src/components/common/Badge/Badge.jsx`:**
```jsx
export function Badge({ children, color = 'green', className = '', ...props }) {
  const colorClasses = {
    green: 'bg-green-500/20 text-green-200',
    blue: 'bg-blue-500/20 text-blue-200',
    amber: 'bg-amber-500/20 text-amber-200',
    red: 'bg-red-500/20 text-red-200',
    purple: 'bg-purple-500/20 text-purple-200',
  };
  
  return (
    <span
      className={cn(
        'inline-block text-xs font-semibold rounded-full px-3 py-1',
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
```

---

## 7. Padrão de Props e Tipagem

### 7.1 Documentar Props (Obrigatório)

Sempre usar comentários JSDoc:

```jsx
/**
 * @component Renderiza um card reutilizável com estilos do design system
 * 
 * @param {React.ReactNode} children - Conteúdo do card
 * @param {string} [className=''] - Classes Tailwind adicionais
 * @param {boolean} [highlighted=false] - Se deve usar estilo destacado
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Atributos HTML padrão
 * 
 * @returns {React.ReactElement}
 * 
 * @example
 * <Card highlighted>
 *   <h3>Título</h3>
 *   <p>Conteúdo</p>
 * </Card>
 */
export function Card({ children, className = '', highlighted = false, ...props }) {
  // ...
}
```

---

## 8. Estado e Props (Regras)

### 8.1 Prop Drilling Prevention

**❌ ERRADO:** Passar 5 níveis de props de um componente ao outro
```jsx
<Parent filtro={filtro} setFiltro={setFiltro} eventos={eventos} />
<Child filtro={filtro} setFiltro={setFiltro} eventos={eventos} />
<GrandChild filtro={filtro} setFiltro={setFiltro} eventos={eventos} />
```

**✅ CORRETO:** Usar hooks customizados
```jsx
export function Child() {
  const { filtro, setFiltro, eventos } = useAgenda();
  return <GrandChild />;
}

export function GrandChild() {
  const { filtro, setFiltro, eventos } = useAgenda();
  return <div>...</div>;
}
```

### 8.2 Lift State Up (Sem Excesso)

Se dois componentes irmãos compartilham estado, levantar para o pai:
```jsx
export function Agenda() {
  const { eventos, filtroTipo, setFiltroTipo } = useAgenda();
  
  return (
    <div>
      <FilterButtons filtro={filtroTipo} onChange={setFiltroTipo} />
      <EventosList eventos={eventos} />
    </div>
  );
}
```

---

## 9. Organização de Arquivos por Componente

Cada componente "maior" deve ter sua própria pasta com subcamadas:

```
src/components/landing/GuiaReciclagem/
├── GuiaReciclagem.jsx          ← componente pai
├── MaterialCard.jsx            ← sub-componente
├── hooks/
│   └── useGuiaReciclagem.js   ← lógica se houver estado
└── utils/
    └── (se houver funções auxiliares)
```

**Sempre que um componente tiver:**
- Lógica complexa → criar hook
- Configurações/dados → separar em constante na pasta ou em `mocks/`
- Funções auxiliares → separar em `utils/`

---

## 10. Mapa (Refatoração Obrigatória)

O mapa atual deve ser **TOTALMENTE refatorado** em componentes:

```
src/components/mapa/
├── MapContainer/
│   ├── MapContainer.jsx         ← apenas render <MapComponent>
│   └── hooks/
│       ├── useMapLogica.js      ← TODA lógica: estado, handlers, efeitos
│       ├── useMarkers.js        ← gerenciar markers especificamente
│       └── useFiltros.js        ← estado de filtros
├── FilterPanel/
│   ├── FilterPanel.jsx
│   ├── FilterButton.jsx         ← botão individual
│   └── hooks/
│       └── useFilterState.js
├── StatsBar/
│   ├── StatsBar.jsx
│   ├── StatItem.jsx
│   └── hooks/
│       └── useStats.js
├── BotaoDenuncia/
│   └── BotaoDenuncia.jsx
└── utils/
    ├── markerConfig.js          ← cores, estilos de markers
    ├── leafletHelpers.js        ← funções auxiliares
    └── markerIcons.js           ← geração de ícones
```

**Exemplo de refatoração do mapa:**

```jsx
// MapContainer.jsx — apenas composição
export function MapContainer() {
  const { 
    markers, 
    filtrosAtivos, 
    toggleFiltro, 
    stats,
    localizacao 
  } = useMapLogica();
  
  return (
    <div className="flex flex-col h-screen">
      <FilterPanel filtros={filtrosAtivos} onToggle={toggleFiltro} />
      <MapComponent markers={markers} localizacao={localizacao} />
      <StatsBar stats={stats} />
      <BotaoDenuncia />
    </div>
  );
}

// hooks/useMapLogica.js — TODA a lógica
export function useMapLogica() {
  const [markers, setMarkers] = useState(MARKERS_MOCK);
  const [filtrosAtivos, setFiltrosAtivos] = useState({});
  
  const markersFiltrados = useMemo(() => {
    return markers.filter(m => {
      if (!filtrosAtivos[m.tipo]) return false;
      return true;
    });
  }, [markers, filtrosAtivos]);
  
  const stats = useMemo(() => {
    return {
      reciclagem: markers.filter(m => m.tipo === 'reciclagem').length,
      // ... etc
    };
  }, [markers]);
  
  const toggleFiltro = (tipo) => {
    setFiltrosAtivos(prev => ({
      ...prev,
      [tipo]: !prev[tipo]
    }));
  };
  
  return { 
    markers: markersFiltrados, 
    filtrosAtivos, 
    toggleFiltro, 
    stats,
    localizacao: { lat: -14.8626, lng: -40.8394 }
  };
}
```

---

## 11. Validação e Formulários

### 11.1 Hook de Formulário (Padrão)

**`src/components/landing/QueroAjudar/hooks/useFormularioVoluntario.js`:**
```javascript
export function useFormularioVoluntario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);
  
  const validar = () => {
    const novosErros = {};
    
    if (!formData.nome.trim()) novosErros.nome = 'Nome é obrigatório';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      novosErros.email = 'Email inválido';
    }
    if (!formData.mensagem.trim()) novosErros.mensagem = 'Mensagem é obrigatória';
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpar erro ao usuário começar a digitar
    if (erros[name]) {
      setErros(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      // TODO: Enviar para backend
      console.log('Enviando:', formData);
      setEnviado(true);
      // Resetar após 3s
      setTimeout(() => {
        setFormData({ nome: '', email: '', mensagem: '' });
        setEnviado(false);
      }, 3000);
    }
  };
  
  return {
    formData,
    erros,
    enviado,
    handleChange,
    handleSubmit,
  };
}
```

---

## 12. Imports e Exports (Padrão Obrigatório)

### 12.1 Named Exports (Padrão)

**✅ USAR:**
```javascript
export function Button({ ... }) { ... }
export function Card({ ... }) { ... }

// Importar assim:
import { Button, Card } from '@/components/common';
```

**❌ NÃO USAR default exports**, exceto em pages.

### 12.2 Index Files (Barril Exports)

**`src/components/common/index.js`:**
```javascript
export { Button } from './Button/Button';
export { Card } from './Card/Card';
export { Badge } from './Badge/Badge';
```

**Uso:**
```javascript
import { Button, Card, Badge } from '@/components/common';
```

---

## 13. Organização de Imports

Em todo arquivo, seguir esta ordem:

1. Imports do React / bibliotecas externas
2. Imports de componentes locais
3. Imports de hooks
4. Imports de utils
5. Imports de mocks
6. Imports de tipos (se houver)

**Exemplo:**
```javascript
import React, { useState, useMemo } from 'react';

import { Button } from '@/components/common';
import { EventCard } from './EventCard';

import { useAgenda } from './hooks/useAgenda';
import { formatData } from '@/utils/formatters';

import { AGENDA_EVENTOS_MOCK } from '@/mocks/agenda.mock';

import type { Evento } from '@/types/landing.types';
```

---

## 14. Convenções de Nomenclatura

| O quê | Convenção | Exemplo |
|-------|-----------|---------|
| Componentes | PascalCase | `Button`, `FilterPanel`, `EventCard` |
| Arquivos de componente | PascalCase | `Button.jsx`, `FilterPanel.jsx` |
| Arquivos de hook | camelCase com prefixo `use` | `useFilterState.js`, `useAgenda.js` |
| Arquivos de util/const | camelCase | `colors.js`, `constants.js`, `cn.js` |
| Arquivos de mock | camelCase com sufixo `.mock` | `guiaReciclagem.mock.js`, `agenda.mock.js` |
| Funções | camelCase | `getTipoColor()`, `formatData()`, `validarEmail()` |
| Constantes | UPPER_SNAKE_CASE | `DESIGN_COLORS`, `ROUTES`, `MAX_LENGTH` |
| Arquivos de tipo | camelCase com sufixo `.types` | `landing.types.ts`, `mapa.types.ts` |
| Variáveis | camelCase | `eventosAtivos`, `filtrosAbertos`, `userEmail` |

---

## 15. Testes (Estrutura, não implementação obrigatória)

Se usar testes, separar em pasta `__tests__`:

```
src/components/common/Button/
├── Button.jsx
├── Button.module.css
└── __tests__/
    └── Button.test.jsx
```

---

## 16. Checklist de Refatoração (Obrigatório)

O agente deve executar os seguintes passos **nesta ordem**:

### Passo 1: Estrutura de Pastas
- [ ] Criar todas as pastas conforme seção 1
- [ ] Mover arquivos existentes para novas pastas
- [ ] Criar arquivos faltantes

### Passo 2: Mocks
- [ ] Criar `src/mocks/guiaReciclagem.mock.js` com dados
- [ ] Criar `src/mocks/agenda.mock.js` com dados
- [ ] Criar `src/mocks/conteudos.mock.js` com dados
- [ ] Criar `src/mocks/mapa.mock.js` com dados de markers
- [ ] Verificar que nenhum mock está duplicado em componentes

### Passo 3: Utilitários
- [ ] Criar `src/utils/colors.js` com `DESIGN_COLORS` e `getTipoColor()`
- [ ] Criar `src/utils/constants.js` com `ROUTES`, `BREAKPOINTS`, etc
- [ ] Criar `src/utils/cn.js` com função de classNames
- [ ] Criar `src/utils/validators.js` com funções de validação

### Passo 4: Componentes Base
- [ ] Criar `Button.jsx` com variantes (primary, secondary, ghost) e tamanhos (sm, md, lg)
- [ ] Criar `Card.jsx` reutilizável
- [ ] Criar `Badge.jsx` com cores
- [ ] Adicionar index file em `src/components/common/index.js`

### Passo 5: Refatorar Navbar
- [ ] Separar em componente `Navbar.jsx`
- [ ] Tornar responsiva com hamburger menu (mobile)
- [ ] Usar `Button` para o CTA "Ver Mapa"

### Passo 6: Refatorar Footer
- [ ] Separar em componente `Footer.jsx`
- [ ] Reutilizar padrão existente
- [ ] Adicionar em ambas as páginas (landing e mapa)

### Passo 7: Refatorar Landing Page
- [ ] Criar `pages/LandingPage.jsx` — apenas composição de seções
- [ ] Criar `components/landing/Hero/Hero.jsx`
- [ ] Criar `components/landing/GuiaReciclagem/` com `GuiaReciclagem.jsx` + `MaterialCard.jsx` + `hooks/useGuiaReciclagem.js`
- [ ] Criar `components/landing/Agenda/` com `Agenda.jsx` + `EventCard.jsx` + `hooks/useAgenda.js`
- [ ] Criar `components/landing/Conteudos/` com `Conteudos.jsx` + `ConteudoCard.jsx` + `AbaSeletor.jsx` + `hooks/useConteudoAbas.js`
- [ ] Criar `components/landing/QueroAjudar/` com `QueroAjudar.jsx` + `FormularioVoluntario.jsx` + `CardParceiro.jsx` + hooks de validação
- [ ] Verificar que nenhum componente tem mais de 150 linhas (se tiver, extrair)

### Passo 8: Refatorar Mapa
- [ ] Criar `pages/MapaPage.jsx` — apenas composição
- [ ] Refatorar componente atual em `components/mapa/MapContainer/` com hooks:
  - `useMapLogica.js` — toda lógica principal
  - `useMarkers.js` — gerenciar markers
  - `useFiltros.js` — gerenciar filtros
- [ ] Criar `components/mapa/FilterPanel/` com `FilterPanel.jsx` + `FilterButton.jsx`
- [ ] Criar `components/mapa/StatsBar/` com `StatsBar.jsx` + `StatItem.jsx`
- [ ] Criar `components/mapa/BotaoDenuncia/` com `BotaoDenuncia.jsx`
- [ ] Criar `components/mapa/utils/markerConfig.js` com configuração de cores/estilos
- [ ] Criar `components/mapa/utils/leafletHelpers.js` com funções auxiliares

### Passo 9: Configurar Roteamento
- [ ] Instalar/configurar React Router se não estiver
- [ ] Criar `App.jsx` com rotas:
  - `/` → `LandingPage`
  - `/mapa` → `MapaPage`
- [ ] Adicionar `Navbar` e `Footer` em layout wrapper ou em ambas as páginas

### Passo 10: Hooks Globais
- [ ] Criar `src/hooks/useMediaQuery.js` para detectar breakpoints mobile/desktop
- [ ] Criar `src/hooks/useScrollSuave.js` para scroll smooth entre âncoras

### Passo 11: Estilos Globais
- [ ] Configurar `tailwind.config.js` com cores customizadas do design system
- [ ] Criar `src/styles/globals.css` com reset e `scroll-behavior: smooth`
- [ ] Criar `src/styles/design-tokens.css` com CSS variables (opcional mas recomendado)

### Passo 12: Validação Final
- [ ] Executar projeto localmente
- [ ] Verificar que `/` carrega landing page
- [ ] Verificar que `/mapa` carrega mapa sem erros
- [ ] Verificar que Navbar funciona em ambas
- [ ] Verificar que links de âncoras scrollam suave
- [ ] Verificar que mobile é responsivo
- [ ] **NÃO há console errors ou warnings**

---

## 17. Erros Comuns a Evitar

### ❌ NÃO FAZER:

1. **Misturar dados com componentes**
   ```jsx
   // ❌ ERRADO
   export function MaterialCard() {
     const dados = [ /* 50 linhas */ ];
     return <div>{/* JSX */}</div>;
   }
   ```

2. **Criar hooks sem `use` prefix**
   ```jsx
   // ❌ ERRADO
   export function agendaLogica() { ... }
   ```

3. **Default exports em componentes**
   ```jsx
   // ❌ ERRADO
   export default function Button() { ... }
   ```

4. **Props com muitos níveis de aninhamento**
   ```jsx
   // ❌ ERRADO
   <Component data={{ nested: { deeply: { value: 'x' } } }} />
   ```

5. **Lógica de API em componentes**
   ```jsx
   // ❌ ERRADO
   function Agenda() {
     useEffect(() => {
       fetch('/api/eventos').then(...);
     }, []);
   }
   ```

6. **Duplicar mocks em vários arquivos**
   ```jsx
   // ❌ ERRADO
   // Em 5 componentes diferentes
   const EVENTS = [ /* ... */ ];
   ```

7. **Componentes com mais de 200 linhas**
   - Se ultrapassar, quebrar em sub-componentes

8. **Usar classes CSS em vez de Tailwind**
   - Usar apenas Tailwind utility classes
   - Se precisar de CSS custom, usar CSS variables (tokens)

---

## 18. Exemplo Completo de Refatoração (Referência)

### ANTES (❌ Monolítico):
```jsx
export function Agenda() {
  const [eventos, setEventos] = useState([
    { id: 1, titulo: '...', tipo: 'mutirao' },
  ]);
  const [filtro, setFiltro] = useState('');
  
  const filtrados = eventos.filter(e => 
    e.tipo === filtro || filtro === ''
  );
  
  return (
    <section>
      <h2>Agenda</h2>
      <div className="flex gap-2">
        <button onClick={() => setFiltro('mutirao')}>Mutirão</button>
        <button onClick={() => setFiltro('palestra')}>Palestra</button>
      </div>
      <div className="grid gap-4">
        {filtrados.map(evento => (
          <div key={evento.id} className="bg-[...] p-4 rounded-xl">
            <h3>{evento.titulo}</h3>
            <span className="text-xs bg-[...] px-2 py-1 rounded-full">
              {evento.tipo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### DEPOIS (✅ Refatorado):

**`src/mocks/agenda.mock.js`:**
```javascript
export const AGENDA_EVENTOS_MOCK = [
  { id: 1, titulo: 'Mutirão de Limpeza', tipo: 'mutirao', data: new Date('2025-06-15'), local: '...', descricao: '...' },
  { id: 2, titulo: 'Palestra: Descarte Consciente', tipo: 'palestra', data: new Date('2025-06-22'), local: '...', descricao: '...' },
];

export const TIPOS_EVENTO = ['mutirao', 'palestra', 'coleta'];
```

**`src/components/landing/Agenda/hooks/useAgenda.js`:**
```javascript
export function useAgenda() {
  const [eventos] = useState(AGENDA_EVENTOS_MOCK);
  const [filtro, setFiltro] = useState('');
  
  const eventosFiltrados = useMemo(() => {
    return eventos.filter(e => !filtro || e.tipo === filtro);
  }, [eventos, filtro]);
  
  return { eventos: eventosFiltrados, filtro, setFiltro, todos: eventos };
}
```

**`src/components/landing/Agenda/EventCard.jsx`:**
```javascript
/**
 * Card individual de evento
 */
export function EventCard({ evento }) {
  const { titulo, tipo, data, local } = evento;
  
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div>
          <time className="text-sm text-green-200/60">
            {data.toLocaleDateString('pt-BR')}
          </time>
          <h3 className="font-bold text-white mt-2">{titulo}</h3>
          <p className="text-sm text-green-200/60 mt-1">📍 {local}</p>
        </div>
        <Badge color={getTipoColor(tipo)}>{tipo}</Badge>
      </div>
    </Card>
  );
}
```

**`src/components/landing/Agenda/Agenda.jsx`:**
```javascript
export function Agenda() {
  const { eventos, filtro, setFiltro } = useAgenda();
  
  return (
    <section id="agenda" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-white mb-8">Agenda de Eventos</h2>
      
      <div className="flex gap-2 mb-8">
        {['mutirao', 'palestra', 'coleta'].map(tipo => (
          <Button
            key={tipo}
            variant={filtro === tipo ? 'primary' : 'secondary'}
            onClick={() => setFiltro(filtro === tipo ? '' : tipo)}
          >
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </Button>
        ))}
      </div>
      
      <div className="grid gap-4">
        {eventos.map(evento => (
          <EventCard key={evento.id} evento={evento} />
        ))}
      </div>
    </section>
  );
}
```

---

## 19. Sumário de Responsabilidades

| Tipo de Arquivo | Responsabilidade | Exemplo |
|---|---|---|
| Componente (`.jsx`) | Render apenas | `Button.jsx`, `Card.jsx` |
| Página (`.jsx` em `/pages`) | Composição de seções | `LandingPage.jsx` |
| Hook (`.js` em `/hooks`) | Lógica e estado | `useAgenda.js`, `useFilterState.js` |
| Mock (`.mock.js`) | Dados constantes | `agenda.mock.js` |
| Utils (`.js` em `/utils`) | Funções puras auxiliares | `cn.js`, `colors.js` |
| Config (`.js`) | Configurações | `markerConfig.js` |

---

## 20. Comando de Validação Final

Antes de finalizar, o agente deve verificar:

```bash
# 1. Não há arquivos mal nomeados
find src -name "*.jsx" -o -name "*.js" | sort

# 2. Não há imports em círculo
# (verificar manualmente ou com ferramentas de lint)

# 3. Todos os mocks estão em src/mocks/
ls src/mocks/

# 4. Todos os componentes têm índices de exportação
cat src/components/common/index.js

# 5. Nenhum console.log em produção (exceto errors)

# 6. Testes de funcionalidade:
npm run dev
# Abrir http://localhost:5173
# Verificar landing page
# Clicar em botões e links
# Navegar para /mapa
# Verificar console (sem erros)
```

---

## 21. Resultado Final Esperado

Após refatoração, o projeto deve:
- ✅ Ser facilmente navegável e manutenível
- ✅ Ter 0 duplicação de código
- ✅ Ter componentes menores que 150 linhas
- ✅ Ter mocks centralizados
- ✅ Ter hooks reutilizáveis
- ✅ Ter utilitários globais
- ✅ Ser 100% responsivo
- ✅ Rodar sem erros no console
- ✅ Seguir o design system fielmente
- ✅ Estar pronto para adicionar features futuras

---

**Fim das instruções. O agente deve executar de acordo com este documento, sem desvios ou improvisações.**

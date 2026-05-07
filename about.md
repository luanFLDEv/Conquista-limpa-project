---
🌿 Visão Geral do Projeto
O Conquista Limpa é uma plataforma interativa voltada para a gestão ambiental urbana em Vitória da Conquista. Seu
objetivo principal é mapear pontos de descarte correto, reciclagem e, principalmente, permitir que cidadãos denunciem
irregularidades (como esgoto a céu aberto ou lixo em locais indevidos).
---

🏗️ Arquitetura e Tecnologias
O projeto é construído com tecnologias modernas de frontend:

- Framework: React 19 (Vite como bundler).
- Mapas: Leaflet.js (utilizando OpenStreetMap).
- Estilização: Tailwind CSS para componentes estruturais e Inline Styles (CSS-in-JS) para layouts específicos e
  controle dinâmico.
- Fontes: Syne (títulos e branding) e DM Sans (corpo de texto e interface).

---

🛠️ Como o Projeto Funciona (Fluxo de Dados)

1. Gerenciamento do Mapa (App.jsx)
   O coração da aplicação está no App.jsx, que utiliza um useEffect para inicializar o Leaflet.

- Carregamento: O CSS e o Script do Leaflet são injetados dinamicamente no cabeçalho.
- Coordenadas: O mapa é centralizado em Vitória da Conquista (-14.865, -40.844).

2. Dados e Configuração (src/data/pins.js)
   Toda a inteligência dos pontos no mapa vem deste arquivo:

- PINS: Array de objetos contendo as coordenadas, tipo, título, descrição e status de cada ponto.
- PIN_CONFIG: Define a identidade visual (cor, emoji, labels) para cada categoria:
  - recycle (Reciclagem - Verde)
  - descarte (Descarte - Azul)
  - esgoto (Atenção - Amarelo)
  - denuncia (Denúncia - Vermelho)

3. Sistema de Filtros
   No App.jsx, o estado filterActive controla quais categorias de pins são visíveis. Sempre que o usuário interage com o
   FilterPanel, o mapa é limpo e os marcadores são re-renderizados baseados nos filtros ativos.

4. Interatividade

- Popups: Ao clicar em um pin, o estado selectedPin é preenchido, disparando a exibição do componente PinPopup, que
  mostra detalhes e fotos do local.
- Denúncias via WhatsApp: O componente DenunciaModal não salva dados localmente. Em vez disso, ele atua como uma
  ponte, gerando um link diretoAqui está um guia detalhado do funcionamento atual do projeto Conquista Limpa:

1. Objetivo do Projeto
   O Conquista Limpa é uma plataforma interativa focada na gestão ambiental urbana de Vitória da Conquista. Ele permite
   que cidadãos visualizem pontos de reciclagem, locais de descarte, problemas de esgoto e façam denúncias de
   irregularidades diretamente no mapa.

---

2. Arquitetura Técnica

- Framework: React (v19) com Vite.
- Mapa: Leaflet.js (carregado via CDN no App.jsx).
- Estilização: Mistura de Tailwind CSS (configurado no projeto) e Inline Styles (utilizados extensivamente nos
  componentes principais para controle fino de design).
- Tipografia: Utiliza as fontes Syne (para títulos/branding) e DM Sans (para textos de leitura).

---

3. Estrutura de Dados (src/data/pins.js)
   Este é o "coração" da aplicação. Ele define:

- PINS: Lista de objetos contendo id, type, lat, lng, title, desc e status.
- PIN_CONFIG: Define a identidade visual de cada categoria (cor, emoji, labels).
- STATUS_STYLE: Define as cores para os estados: Verificado, Em análise e Triagem.
- WHATSAPP_NUMBER: O número de destino para as denúncias.

---

4. Funcionalidades Principais

A. Mapa Interativo (App.jsx)

- Centralizado em Vitória da Conquista ([-14.865, -40.844]).
- Renderiza marcadores customizados (divs circulares com rotação de -45° para criar o efeito de "pin" e um emoji
  central).
- Gerencia o estado de filtros: ao desmarcar uma categoria no painel, os marcadores correspondentes são removidos do
  mapa em tempo real.

B. Sistema de Filtros (FilterPanel.jsx)

- Permite alternar a visibilidade de: Reciclagem, Descarte, Esgoto e Denúncia.
- Exibe contadores dinâmicos de quantos pontos existem em cada categoria.

C. Detalhes do Ponto (PinPopup.jsx)

- Ao clicar em um marcador, abre-se um popup lateral/inferior com:
  - Título e descrição.
  - Badge de status estilizado.
  - Imagem do local (se disponível no objeto do pin).

D. Fluxo de Denúncia (DenunciaModal.jsx)

- Acessível pelo Header ou pelo botão flutuante (FAB).
- Não possui formulário interno; em vez disso, oferece opções de categorias que, ao serem clicadas, redirecionam o
  usuário para o WhatsApp com uma mensagem pré-preenchida.

E. Menu de Informações (Header.jsx)

- Contém seções como "Início", "Como funciona" (que abre uma explicação sobre o projeto) e "Parceiros" (atualmente
  com um estado de placeholder).

---

Este é um guia técnico e funcional do projeto Conquista Limpa, baseado na análise do código atual.

---

🌿 Visão Geral do Projeto
O Conquista Limpa é uma plataforma interativa voltada para o mapeamento ambiental em Vitória da Conquista. O objetivo
principal é permitir que cidadãos visualizem pontos de descarte correto, áreas de reciclagem e registrem denúncias de
problemas ambientais (como esgoto ou lixo irregular).

---

🛠️ Estrutura Técnica

- Framework: React (Vite).
- Mapas: Leaflet.js (carregado via CDN em tempo de execução no App.jsx).
- Estilização: Mix de Tailwind CSS (em componentes como Header) e Inline Styles (em App.jsx e DenunciaModal), com
  foco em um tema dark (#0f1a0f) e detalhes em verde (#22c55e).
- Fontes: Utiliza as famílias Syne (títulos/identidade) e DM Sans (corpo de texto).

---

⚙️ Como Funciona Atualmente

1. Gerenciamento de Dados (src/data/pins.js)
   Toda a inteligência dos pontos no mapa vem deste arquivo.

- PINS: Uma lista de objetos contendo id, type, lat, lng, title, desc e status.
- PIN_CONFIG: Define a estética de cada categoria (cor, emoji, labels).
- Categorias Atuais:
  - recycle (♻️): Pontos de reciclagem.
  - descarte (🗑️): Locais oficiais de descarte de lixo.
  - esgoto (⚠️): Problemas de saneamento relatados.
  - denuncia (📍): Locais de descarte irregular ou lixo acumulado.

2. O Mapa (src/App.jsx)
   O componente principal gerencia o ciclo de vida do Leaflet:

- Carregamento: O script e o CSS do Leaflet são injetados dinamicamente no document.head.
- Renderização: Os marcadores são criados como divIcon personalizados (em formato de "gota/pin" com o emoji
  centralizado).
- Filtros: O estado filterActive controla quais tipos de pins aparecem. Quando você desmarca um filtro no painel
  lateral, o mapa é limpo e os marcadores são reconstruídos apenas com os tipos ativos.

3. Fluxo de Denúncia (src/components/DenunciaModal.jsx)
   Diferente de um sistema com banco de dados complexo, o projeto utiliza uma abordagem prática:

- Ao clicar em "Fazer denúncia", o usuário vê opções de categorias.
- Ao selecionar uma, ele é redirecionado para o WhatsApp (5577999695024) com uma mensagem pré-formatada.
- A triagem e inclusão de novos pontos no mapa parecem ser feitas manualmente no código após o contato.

4. Componentes de Interface

- Header.jsx: Navegação responsiva. Contém modais internos para "Como funciona" e "Parceiros".
- FilterPanel.jsx: Painel flutuante que mostra as categorias e a quantidade de pontos em cada uma.
- PinPopup.jsx: O card que aparece ao clicar em um pin, mostrando a descrição e o status (ex: "Verificado", "Em
  análise").
- StarBar.jsx: Uma barra de progresso ou estatística visual (provavelmente na base do mapa).
- Fab.jsx: Botão flutuante de ação rápida (Floating Action Button) para mobile, facilitando a denúncia.

---

🚀 Resumo do Fluxo de Usuário

1.  O usuário entra e vê o mapa centralizado em Vitória da Conquista.
2.  Ele pode filtrar os pontos que deseja ver (ex: quer ver apenas onde reciclar).
3.  Ao clicar em um ícone, ele lê os detalhes daquele local.
4.  Se encontrar um problema na rua, ele clica em "Fazer denúncia", escolhe o tipo e envia as informações via WhatsApp
    para a equipe do projeto.

O projeto está pronto para visualização e coleta de dados via chat, mantendo uma interface moderna e de fácil
navegação.

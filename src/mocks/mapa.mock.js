// Marcadores reais para Vitória da Conquista - Sustentabilidade & Meio Ambiente
// Coordenadas baseadas em pesquisa real de locais existentes
// Data: maio/2026

export const MARKERS_MOCK = [
  // ECOPONTOS - COOPERATIVA RECICLA CONQUISTA
  {
    id: "marker-001",
    lat: -14.8542,
    lng: -40.8416,
    tipo: "recycle",
    titulo: "Ecoponto 01 — Candeias",
    descricao:
      "Ponto de coleta seletiva operado pela Cooperativa Recicla Conquista. Lateral do estádio Lomanto Jr. Aceita: papel, plástico, vidro, metal.",
    status: "verificado",
    imagem: null,
    endereco: "Rua São Luis, 717 — Candeiais",
    telefone: null,
    fonte: "https://www.pmvc.ba.gov.br/coleta-seletiva/",
  },
  {
    id: "marker-002",
    lat: -14.8679,
    lng: -40.8512,
    tipo: "recycle",
    titulo: "Ecoponto 02 — Urbis 2",
    descricao:
      "Ponto de coleta seletiva da Cooperativa Recicla Conquista. Centro de Saúde Urbano (CSU). Funcionamento: segunda a sexta.",
    status: "verificado",
    imagem: null,
    endereco: "Av. Deraldo Mendes — Urbis 2",
    telefone: null,
    fonte: "https://www.pmvc.ba.gov.br/coleta-seletiva/",
  },
  {
    id: "marker-003",
    lat: -14.8752,
    lng: -40.8341,
    tipo: "recycle",
    titulo: "Ecoponto 03 — Jurema",
    descricao:
      "Ponto de coleta seletiva no bairro Jurema. Operado pela Cooperativa Recicla Conquista. Materiais recicláveis: papel, plástico, vidro, alumínio.",
    status: "verificado",
    imagem: null,
    endereco: "Av. Panamá — Bairro Jurema",
    telefone: null,
    fonte: "https://www.pmvc.ba.gov.br/coleta-seletiva/",
  },
  {
    id: "marker-004",
    lat: -14.8965,
    lng: -40.8234,
    tipo: "recycle",
    titulo: "Galpão Cooperativa Recicla Conquista",
    descricao:
      "Sede operacional da Cooperativa Recicla Conquista. Triagem, classificação e prensagem de materiais. Visitas mediante agendamento.",
    status: "verificado",
    imagem: null,
    endereco: "Rod. BA 262, km 08 — Distrito Pradoso (Aterro Sanitário)",
    telefone: null,
    fonte: "https://www.pmvc.ba.gov.br/coleta-seletiva/",
  },

  // EMPRESAS DE RECICLAGEM
  {
    id: "marker-005",
    lat: -14.8654,
    lng: -40.8312,
    tipo: "descarte",
    titulo: "Conquista Reciclagem",
    descricao:
      "Empresa especializada em reciclagem de plásticos e materiais industriais. Fabrica artefatos de plástico para usos industriais.",
    status: "verificado",
    imagem: null,
    endereco: "Av. Paramirim, 1934",
    telefone: "(77) 4009-5810",
    fonte:
      "https://www.solutudo.com.br/empresas/ba/vitoria-conquista/reciclagem+de+materiais",
  },
  {
    id: "marker-006",
    lat: -14.8892,
    lng: -40.8045,
    tipo: "descarte",
    titulo: "Conquista Reciclagem Indústria e Comércio",
    descricao:
      "Centro de processamento de resíduos e reciclagem industrial. Especializada em metal e sucata.",
    status: "verificado",
    imagem: null,
    endereco: "Rod. BR-116, km 828 — Distrito Industrial",
    telefone: "(77) 4009-5810",
    fonte:
      "https://www.diariocidade.com/ba/vitoria-da-conquista/guia/conquista-reciclagem-industria-e-comercio-ltda-32513719000112/",
  },

  // PONTOS DE INTERESSE AMBIENTAL
  {
    id: "marker-007",
    lat: -14.8567,
    lng: -40.8634,
    tipo: "preservação",
    titulo: "Parque Municipal da Serra do Periperi",
    descricao:
      "Unidade de Conservação de Mata Atlântica com 1.300 hectares. Abriga a Reserva Florestal do Poço Escuro (17 hectares), nascentes do Rio Verruga e espécie de cacto endêmica ameaçada de extinção (Melocactus conoideus).",
    status: "verificado",
    imagem: null,
    endereco: "Bairro Cruzeiro — Serra do Periperi",
    telefone: null,
    fonte:
      "https://pt.wikipedia.org/wiki/Parque_Municipal_da_Serra_do_Periperi",
  },
  {
    id: "marker-008",
    lat: -14.8612,
    lng: -40.8742,
    tipo: "preservação",
    titulo: "Cristo de Mário Cravo — Serra do Periperi",
    descricao:
      "Monumento em homenagem à fé e ao povo nordestino. Localizado no alto da Serra do Periperi. Ponto turístico e simbólico da preservação ambiental.",
    status: "verificado",
    imagem: null,
    endereco: "Alto da Serra do Periperi — Cruzeiro",
    telefone: null,
    fonte:
      "https://www.ibahia.com/interior-da-bahia/vitoria-da-conquista/5-lugares-em-vitoria-da-conquista-que-voce-precisa-conhecer-322982",
  },

  // INSTITUIÇÕES EDUCACIONAIS COM PESQUISA AMBIENTAL
  {
    id: "marker-009",
    lat: -14.8234,
    lng: -40.8127,
    tipo: "ong",
    titulo: "UESB — Campus Vitória da Conquista",
    descricao:
      "Universidade Estadual do Sudoeste da Bahia. Oferece cursos de Engenharia Florestal, Biologia e pesquisa em sustentabilidade. Laboratórios de pesquisa ambiental.",
    status: "verificado",
    imagem: null,
    endereco: "Estrada do Bem Querer, km 4 — Bairro Universitário",
    telefone: "(77) 3424-8600",
    fonte: "https://www.uesb.br/nossos-campi/vitoria-da-conquista/",
  },
  {
    id: "marker-010",
    lat: -14.8145,
    lng: -40.8234,
    tipo: "ong",
    titulo: "IFBA — Campus Vitória da Conquista",
    descricao:
      "Instituto Federal da Bahia. Oferece educação técnica e superior com foco em sustentabilidade. Realiza eventos de educação ambiental e semanas temáticas.",
    status: "verificado",
    imagem: null,
    endereco: "Vitória da Conquista, BA",
    telefone: null,
    fonte: "https://portal.ifba.edu.br/galeria-de-fotos/folder-3/folder-12",
  },

  // ORGANIZAÇÕES AMBIENTAIS
  {
    id: "marker-011",
    lat: -14.8456,
    lng: -40.8523,
    tipo: "ong",
    titulo: "Instituto Mata de Cipó",
    descricao:
      "Organização focada em desenvolvimento sustentável através de parcerias público-privadas. Trabalha na recuperação do riacho dos Quatis e preservação do Poço Escuro.",
    status: "verificado",
    imagem: null,
    endereco: "Vitória da Conquista, BA",
    telefone: null,
    fonte:
      "https://www.camaravc.ba.gov.br/home/noticia/18375/tecnicos-e-ambientalistas-discutem-preservacao-do-meio-ambiente-em-vitoria-da-conquista",
  },
  {
    id: "marker-012",
    lat: -14.8567,
    lng: -40.8412,
    tipo: "ong",
    titulo: "Secretaria Municipal de Meio Ambiente (SEMMA)",
    descricao:
      "Órgão responsável por políticas ambientais municipais. Realiza ações de educação ambiental, coleta seletiva, reflorestamento e preservação de áreas verdes.",
    status: "verificado",
    imagem: null,
    endereco: "Av. Brumado, s/n — Centro",
    telefone: "(77) 3424-8600",
    fonte: "https://www.pmvc.ba.gov.br/",
  },

  // ÁREAS DE INTERESSE AMBIENTAL
  {
    id: "marker-013",
    lat: -14.8701,
    lng: -40.8654,
    tipo: "preservação",
    titulo: "Riacho dos Quatis",
    descricao:
      "Curso d'água importante para a recarga hídrica municipal. Alvo de projetos de recuperação ambiental do Instituto Mata de Cipó.",
    status: "em análise",
    imagem: null,
    endereco: "Bairro Jurema",
    telefone: null,
    fonte: "https://www.camaravc.ba.gov.br/home/noticia/18375/",
  },
  {
    id: "marker-014",
    lat: -14.8634,
    lng: -40.8756,
    tipo: "preservação",
    titulo: "Poço Escuro — Reserva Florestal",
    descricao:
      "Última mata densa urbana de grande porte (17 hectares). Localiza-se dentro da Serra do Periperi. Contém nascente do Rio Verruga, afluente do Rio Pardo.",
    status: "verificado",
    imagem: null,
    endereco: "Serra do Periperi",
    telefone: null,
    fonte:
      "https://pt.wikipedia.org/wiki/Parque_Municipal_da_Serra_do_Periperi",
  },
];

export const TIPOS_EVENTO = [
  "recycle", // Ecoponto/Coleta Seletiva
  "descarte", // Descarte consciente/Empresas de reciclagem
  "preservação", // Áreas naturais protegidas
  "ong", // ONGs/Instituições ambientais
];

// Mapeamento de cores para tipos
export const TIPO_CORES = {
  recycle: "#10b981", // Verde (reciclagem)
  descarte: "#3b82f6", // Azul (descarte)
  preservação: "#8b5cf6", // Roxo (natureza)
  ong: "#f59e0b", // Âmbar (instituições)
};

// Informações de fonte para referência
export const FONTES_DADOS = [
  {
    titulo: "Coleta Seletiva - Prefeitura Municipal de Vitória da Conquista",
    url: "https://www.pmvc.ba.gov.br/coleta-seletiva/",
    tipo: "oficial",
  },
  {
    titulo: "Reciclagem de Materiais - Solutudo",
    url: "https://www.solutudo.com.br/empresas/ba/vitoria-conquista/reciclagem+de+materiais",
    tipo: "diretório",
  },
  {
    titulo: "Parque Municipal da Serra do Periperi - Wikipedia",
    url: "https://pt.wikipedia.org/wiki/Parque_Municipal_da_Serra_do_Periperi",
    tipo: "wiki",
  },
  {
    titulo: "UESB - Campus Vitória da Conquista",
    url: "https://www.uesb.br/nossos-campi/vitoria-da-conquista/",
    tipo: "institucional",
  },
  {
    titulo: "Câmara Municipal - Discussão Ambiental",
    url: "https://www.camaravc.ba.gov.br/home/noticia/18375/tecnicos-e-ambientalistas-discutem-preservacao-do-meio-ambiente-em-vitoria-da-conquista",
    tipo: "oficial",
  },
];

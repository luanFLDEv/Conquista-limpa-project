export const AGENDA_EVENTOS_MOCK = [
	{
		id: 'evento-001',
		titulo: 'Mutirão de Limpeza — Centro',
		local: 'Praça Tancredo Neves',
		data: new Date('2026-06-15T00:00:00'),
		tipo: 'mutirão',
		descricao: 'Ação coletiva para retirada de resíduos na Praça Tancredo Neves e arredores.',
		imagem: null
	},
	{
		id: 'evento-002',
		titulo: 'Palestra: Descarte Consciente',
		local: 'UESB — Auditório',
		data: new Date('2026-06-22T00:00:00'),
		tipo: 'palestra',
		descricao: 'Conversa sobre a importância da separação do lixo e logística reversa.',
		imagem: null
	},
	{
		id: 'evento-003',
		titulo: 'Coleta de Pilhas e Eletrônicos',
		local: 'Shopping Conquista Sul',
		data: new Date('2026-06-28T00:00:00'),
		tipo: 'coleta',
		descricao: 'Ponto de entrega voluntária para materiais de descarte especial.',
		imagem: null
	}
]

export const TIPOS_EVENTO = ['mutirão', 'palestra', 'coleta']

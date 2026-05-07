export const GUIA_RECICLAGEM_MOCK = [
	{
		id: 'papel',
		nome: 'Papel e Papelão',
		icone: '📄',
		cor: 'blue',
		hexColor: '#3b82f6',
		exemplos: ['Jornais', 'Revistas', 'Caixas de papelão'],
		naoReciclar: ['Papel higiênico', 'Papel carbono'],
		ordem: 1
	},
	{
		id: 'plastico',
		nome: 'Plástico',
		icone: '🥤',
		cor: 'red',
		hexColor: '#ef4444',
		exemplos: ['Garrafas PET', 'Embalagens de limpeza', 'Copos descartáveis'],
		naoReciclar: ['Cabos de panela', 'Tomadas'],
		ordem: 2
	},
	{
		id: 'vidro',
		nome: 'Vidro',
		icone: '🍶',
		cor: 'green',
		hexColor: '#22c55e',
		exemplos: ['Garrafas', 'Potes de conserva', 'Frascos de perfume'],
		naoReciclar: ['Espelhos', 'Cristais', 'Lâmpadas'],
		ordem: 3
	},
	{
		id: 'metal',
		nome: 'Metal',
		icone: '🔧',
		cor: 'amber',
		hexColor: '#f59e0b',
		exemplos: ['Latas de alumínio', 'Latas de aço', 'Tampinhas'],
		naoReciclar: ['Esponjas de aço', 'Grampos'],
		ordem: 4
	},
	{
		id: 'longa-vida',
		nome: 'Embalagem Longa Vida',
		icone: '📦',
		cor: 'purple',
		hexColor: '#a020f0',
		exemplos: ['Caixas de leite', 'Caixas de suco'],
		naoReciclar: ['Embalagens metalizadas de salgadinhos'],
		ordem: 5
	},
	{
		id: 'eletronicos',
		nome: 'Eletrônicos / Pilhas',
		icone: '🔋',
		cor: 'red',
		hexColor: '#ef4444',
		exemplos: ['Pilhas AA/AAA', 'Baterias', 'Celulares antigos'],
		naoReciclar: ['Lixo comum'],
		ordem: 6
	}
]

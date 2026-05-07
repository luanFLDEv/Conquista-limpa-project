import { useConteudoAbas } from './hooks/useConteudoAbas'
import { ConteudoCard } from './ConteudoCard'
import { CONTEUDOS_MOCK } from '../../../mocks/conteudos.mock'
import { Button } from '../../common'

export function Conteudos() {
	const { abas, abaAtiva, setAbaAtiva } = useConteudoAbas()
	const conteudosAtivos = CONTEUDOS_MOCK[abaAtiva] || []
	const tipoLabel = abas.find(a => a.id === abaAtiva)?.label

	return (
		<section id="aprenda" className="py-24 bg-[#0a140a]">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
					<span className="text-[#22c55e]">Aprenda</span> mais
				</h2>

				{/* ABAS SELETOR */}
				<div className="flex flex-wrap justify-center gap-2 mb-12">
					{abas.map(aba => (
						<Button
							key={aba.id}
							variant={abaAtiva === aba.id ? 'primary' : 'secondary'}
							onClick={() => setAbaAtiva(aba.id)}
						>
							<span className="mr-2">{aba.icone}</span> {aba.label}
						</Button>
					))}
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{conteudosAtivos.map((item) => (
						<ConteudoCard key={item.id} conteudo={item} tipo={tipoLabel} />
					))}
				</div>
			</div>
		</section>
	)
}

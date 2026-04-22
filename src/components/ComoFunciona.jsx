export default function ComoFunciona() {
	const steps = [
		{
			emoji: '📍',
			title: 'Faça uma denúncia',
			desc: 'Acesse o site, clique em "Fazer denúncia" e escolha o tipo de ocorrência.'
		},
		{
			emoji: '💬',
			title: 'Envie pelo WhatsApp',
			desc: 'Você será redirecionado ao WhatsApp. Informe o endereço, descrição e uma foto.'
		},
		{
			emoji: '🗺️',
			title: 'Aparece no mapa',
			desc: 'Após triagem da nossa equipe, o ponto é aprovado e aparece no mapa da cidade.'
		}
	]

	return (
		<div className="pt-6 pb-2">
			<h2 className="text-center text-xl font-bold text-[#f0fdf4] mb-2">
				Como funciona
			</h2>
			<p className="text-center text-sm text-[rgba(134,239,172,0.6)] mb-8">
				Três passos simples para deixar Vitória da Conquista mais limpa
			</p>

			<div className="flex flex-col md:flex-row gap-4">
				{steps.map((step, i) => (
					<div
						key={i}
						className="flex-1 bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.15)] rounded-xl p-6 flex flex-col items-center text-center gap-3"
					>
						<div className="text-5xl">{step.emoji}</div>
						<div className="w-6 h-6 rounded-full bg-[#22c55e] text-[#052e16] text-xs font-bold flex items-center justify-center">
							{i + 1}
						</div>
						<div className="text-[#f0fdf4] font-bold text-sm">{step.title}</div>
						<div className="text-[rgba(134,239,172,0.7)] text-xs leading-relaxed">
							{step.desc}
						</div>
					</div>
				))}
			</div>

			<div className="mt-6 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] rounded-xl p-4 flex items-center gap-3">
				<span className="text-xl">⏱️</span>
				<p className="text-xs text-[#93c5fd]">
					A triagem é feita em até 24h pela nossa equipe. Denúncias anônimas são
					aceitas.
				</p>
			</div>
		</div>
	)
}

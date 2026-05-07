import { Card } from '../../common'

/**
 * Card individual de conteúdo educativo
 */
export function ConteudoCard({ conteudo, tipo }) {
	const { titulo, autor, url, icon } = conteudo

	return (
		<Card className="flex flex-col">
			<div className="aspect-video bg-[#050a05] rounded-xl flex items-center justify-center text-5xl mb-6 border border-[rgba(34,197,94,0.1)]">
				{icon}
			</div>
			<div className="text-[10px] font-bold uppercase tracking-widest text-[#22c55e] mb-2">
				{tipo}
			</div>
			<h3 className="text-lg font-bold mb-2 text-[#f0fdf4]">{titulo}</h3>
			<p className="text-xs text-[rgba(134,239,172,0.5)] mb-6 mt-auto">Fonte: {autor}</p>
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="inline-block w-full text-center py-3 bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.15)] rounded-lg text-sm font-bold text-[#e8f5e8] hover:bg-[rgba(34,197,94,0.1)] transition-colors no-underline"
			>
				Acessar Conteúdo
			</a>
		</Card>
	)
}

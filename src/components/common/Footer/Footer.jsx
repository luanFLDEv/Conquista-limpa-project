export function Footer() {
	return (
		<footer className="bg-[rgba(5,10,5,0.98)] border-t border-[rgba(34,197,94,0.15)] p-6 md:p-8 z-[100] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left mt-auto">
			{/* LOGO & INFO */}
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-center md:justify-start gap-2">
					<span className="text-sm">🌿</span>
					<span className="text-[#f0fdf4] font-bold text-sm">Conquista Limpa</span>
				</div>
				<p className="text-[12px] text-[rgba(134,239,172,0.6)] font-['DM_Sans'] max-w-xs">
					Iniciativa colaborativa para uma Vitória da Conquista mais sustentável e consciente.
				</p>
			</div>

			{/* LINKS */}
			<div className="flex flex-wrap justify-center gap-6">
				{['Sobre o projeto', 'Fale conosco', 'Prefeitura de VDC'].map((link) => (
					<a
						key={link}
						href="#"
						className="text-[12px] text-[rgba(134,239,172,0.5)] hover:text-[#22c55e] transition-colors no-underline font-medium"
					>
						{link}
					</a>
				))}
			</div>

			{/* COPYRIGHT */}
			<div className="text-[11px] text-[rgba(134,239,172,0.4)] font-medium">
				🌿 © {new Date().getFullYear()} Conquista Limpa — Vitória da Conquista, BA
			</div>
		</footer>
	)
}

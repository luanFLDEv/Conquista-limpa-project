import { useState } from 'react'

export default function Header({ onDenunciaClick }) {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className="flex items-center justify-between px-4 h-[60px] bg-[rgba(10,20,10,0.95)] border-b border-[rgba(34,197,94,0.2)] relative z-[100]">
			{/* LOGO */}
			<div className="flex items-center gap-2.5 md:flex-none flex-1 md:flex-initial justify-center md:justify-start">
				<div className="hidden w-8 h-8 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#16a34a] md:flex items-center justify-center text-lg">
					🌿
				</div>
				<div className="flex flex-col leading-[1.1]">
					<div className="text-base font-extrabold text-[#f0fdf4] ">
						Conquista <span className="text-[#22c55e]">Limpa</span>
					</div>
					<div className="text-[10px] text-[rgba(134,239,172,0.7)]">
						VITÓRIA DA CONQUISTA
					</div>
				</div>
			</div>

			{/* DESKTOP NAV */}
			<nav className="hidden md:flex items-center gap-2">
				{['Início', 'Como funciona', 'Parceiros'].map(item => (
					<button
						key={item}
						className="bg-transparent border-none text-[rgba(134,239,172,0.8)] cursor-pointer px-3 py-1.5 hover:text-[#22c55e] transition-colors"
					>
						{item}
					</button>
				))}
				<button
					onClick={() => onDenunciaClick(true)}
					className="bg-[#22c55e] border-none px-4 py-2 rounded-lg cursor-pointer font-bold text-[#052e16] hover:bg-[#16a34a] transition-colors"
				>
					📢 Fazer denúncia
				</button>
			</nav>

			{/* MOBILE MENU BUTTON */}
			<button
				onClick={() => setMenuOpen(!menuOpen)}
				className="md:hidden bg-transparent border-none text-[#22c55e] cursor-pointer text-2xl"
			>
				{menuOpen ? '✕' : '☰'}
			</button>

			{/* MOBILE DROPDOWN */}
			{menuOpen && (
				<div className="md:hidden absolute top-[60px] right-2.5 bg-[#0f1a0f] border border-[rgba(34,197,94,0.2)] rounded-xl p-3 flex flex-col gap-2 min-w-[180px] z-50">
					{['Início', 'Como funciona', 'Parceiros'].map(item => (
						<button
							key={item}
							className="bg-transparent border-none text-[#e8f5e8] text-left px-2 py-1.5 cursor-pointer hover:text-[#22c55e] transition-colors"
						>
							{item}
						</button>
					))}
					<button
						onClick={() => {
							onDenunciaClick(true)
							setMenuOpen(false)
						}}
						className="bg-[#22c55e] border-none p-2 rounded-md cursor-pointer font-bold text-[#052e16] hover:bg-[#16a34a] transition-colors"
					>
						📢 Fazer denúncia
					</button>
				</div>
			)}
		</header>
	)
}

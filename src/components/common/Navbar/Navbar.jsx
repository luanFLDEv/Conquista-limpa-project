import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../index'

export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	const navLinks = [
		{ name: 'Início', path: '/' },
		{ name: 'Guia', path: '/#guia' },
		{ name: 'Agenda', path: '/#agenda' },
		{ name: 'Aprenda', path: '/#aprenda' },
		{ name: 'Ajude', path: '/#ajude' }
	]

	const handleNavClick = (e, path) => {
		e.preventDefault()
		setMenuOpen(false)

		if (path.startsWith('/#')) {
			const hash = path.substring(1) // "#guia"
			if (location.pathname === '/') {
				const element = document.querySelector(hash)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			} else {
				navigate(path)
			}
		} else {
			navigate(path)
		}
	}

	return (
		<nav className="sticky top-0 z-[100] bg-[rgba(5,10,5,0.98)] backdrop-blur-md border-b border-[rgba(34,197,94,0.15)] h-[60px] flex items-center justify-between px-4 md:px-8">
			{/* LOGO */}
			<Link to="/" className="flex items-center gap-2 text-decoration-none">
				<span className="text-xl">🌿</span>
				<div className="flex flex-col leading-tight">
					<span className="text-[#f0fdf4] font-extrabold text-lg">
						Conquista <span className="text-[#22c55e]">Limpa</span>
					</span>
					<span className="text-[10px] text-[rgba(134,239,172,0.6)] font-bold tracking-wider">
						VITÓRIA DA CONQUISTA
					</span>
				</div>
			</Link>

			{/* DESKTOP LINKS */}
			<div className="hidden md:flex items-center gap-6">
				{navLinks.map((link) => (
					<a
						key={link.name}
						href={link.path}
						onClick={(e) => handleNavClick(e, link.path)}
						className="text-[rgba(134,239,172,0.6)] hover:text-[#22c55e] transition-colors text-sm font-medium cursor-pointer no-underline"
					>
						{link.name}
					</a>
				))}
				<Button onClick={() => navigate('/mapa')} size="sm">
					Ver Mapa
				</Button>
			</div>

			{/* MOBILE MENU BUTTON */}
			<button
				onClick={() => setMenuOpen(!menuOpen)}
				className="md:hidden text-[#22c55e] text-2xl bg-transparent border-none cursor-pointer"
			>
				{menuOpen ? '✕' : '☰'}
			</button>

			{/* MOBILE MENU */}
			{menuOpen && (
				<div className="absolute top-[60px] left-0 w-full bg-[#050a05] border-b border-[rgba(34,197,94,0.15)] p-4 flex flex-col gap-4 md:hidden">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.path}
							onClick={(e) => handleNavClick(e, link.path)}
							className="text-[#e8f5e8] text-lg font-medium no-underline"
						>
							{link.name}
						</a>
					))}
					<Button onClick={() => { setMenuOpen(false); navigate('/mapa'); }} className="w-full">
						Ver Mapa
					</Button>
				</div>
			)}
		</nav>
	)
}

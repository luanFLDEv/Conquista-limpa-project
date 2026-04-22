export default function Fab({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="
	absolute
	bottom-[76px] 
	sm:right-4 
	sm:left-auto
		left-1/2
	transform -translate-x-1/2 sm:translate-x-0
	z-50

	w-[120px] h-[44px]        /* mobile (retangular) */
	sm:w-[52px] sm:h-[52px]  /* desktop (quadrado) */

	rounded-md               /* mobile */
	sm:rounded-full          /* desktop */

	bg-gradient-to-br from-[#22c55e] to-[#16a34a]
	border-none
	text-[22px]
	cursor-pointer
	shadow-[0_4px_20px_rgba(34,197,94,0.4)]
	flex items-center justify-center
	transition-transform transition-shadow duration-200
"
			onMouseEnter={e => {
				e.currentTarget.style.transform = 'scale(1.1)'
				e.currentTarget.style.boxShadow = '0 6px 28px rgba(34,197,94,0.6)'
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = 'scale(1)'
				e.currentTarget.style.boxShadow = '0 4px 20px rgba(34,197,94,0.4)'
			}}
			title="Fazer denúncia"
		>
			<span className="md:hidden gap-2 px-3 text-sm">Fazer denúncia</span>
			📢
		</button>
	)
}

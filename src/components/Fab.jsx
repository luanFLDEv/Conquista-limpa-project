export default function Fab({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="
        absolute bottom-14 left-1/2 -translate-x-1/2
        sm:left-auto sm:right-4 sm:translate-x-0
        sm:w-13 sm:h-13 sm:rounded-full
        z-50 flex items-center justify-center gap-2
        bg-gradient-to-br from-[#22c55e] to-[#16a34a]
        border-none cursor-pointer rounded-xl
        px-4 py-2 sm:p-0
        shadow-[0_4px_20px_rgba(34,197,94,0.4)]
        hover:scale-105 transition-transform duration-200
      "
			title="Fazer denúncia"
		>
			<span className="text-lg">📢</span>
			<span className="sm:hidden text-sm font-bold">Fazer denúncia</span>
		</button>
	)
}

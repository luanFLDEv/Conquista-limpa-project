export default function Modal({ onClose, children }) {
	return (
		<div
			className="fixed inset-0 z-[200] bg-black/70 overflow-y-auto"
			onClick={onClose}
		>
			<div
				className="bg-[#0f1a0f] border border-[rgba(34,197,94,0.2)] rounded-2xl p-8 w-[90%] max-w-3xl relative my-8 mx-auto"
				onClick={e => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-3 right-4 bg-transparent border-none text-[#22c55e] text-2xl cursor-pointer"
				>
					×
				</button>
				{children}
			</div>
		</div>
	)
}

import { useState } from 'react'
import DenunciaModal from '../../../components/DenunciaModal'

export function BotaoDenuncia() {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<>
			<button
				onClick={() => setModalOpen(true)}
				className="absolute bottom-[70px] md:bottom-4 right-4 z-[50] bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-[#052e16] w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl shadow-[0_4px_20px_rgba(34,197,94,0.4)] border-none cursor-pointer hover:scale-110 transition-transform"
				aria-label="Fazer denúncia"
			>
				📢
			</button>
			{modalOpen && <DenunciaModal onClose={() => setModalOpen(false)} />}
		</>
	)
}

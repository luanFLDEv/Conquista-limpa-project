import { cn } from '../../../utils/cn'

/**
 * @component Renderiza um card base reutilizável
 *
 * @param {React.ReactNode} children - Conteúdo interno do card
 * @param {boolean} [highlighted=false] - Define se o card tem estilo destacado
 * @param {string} [className=''] - Classes Tailwind adicionais
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML padrão da div
 *
 * @returns {React.ReactElement}
 */
export function Card({
	children,
	highlighted = false,
	className = '',
	...props
}) {
	return (
		<div
			className={cn(
				'bg-[rgba(10,20,10,0.7)] backdrop-blur-md rounded-xl',
				'border border-[rgba(34,197,94,0.2)]',
				'p-6 transition-all duration-200',
				highlighted && 'border-[rgba(34,197,94,0.6)] bg-[rgba(10,20,10,0.9)] shadow-lg',
				'hover:scale-[1.02] hover:border-[rgba(34,197,94,0.4)]',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

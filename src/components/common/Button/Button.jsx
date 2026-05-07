import { cn } from '../../../utils/cn'

/**
 * @component Renderiza um botão reutilizável com variantes
 *
 * @param {React.ReactNode} children - Conteúdo do botão
 * @param {'primary' | 'secondary' | 'ghost'} [variant='primary'] - Variante visual
 * @param {'sm' | 'md' | 'lg'} [size='md'] - Tamanho do botão
 * @param {boolean} [disabled=false] - Estado desabilitado
 * @param {string} [className=''] - Classes adicionais Tailwind
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Props padrão de botão
 *
 * @returns {React.ReactElement}
 */
export function Button({
	children,
	variant = 'primary',
	size = 'md',
	disabled = false,
	className = '',
	...props
}) {
	const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center cursor-pointer'

	const variantClasses = {
		primary:
			'bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-105 border-none',
		secondary:
			'bg-transparent border border-[rgba(34,197,94,0.3)] text-[#22c55e] hover:bg-[rgba(34,197,94,0.05)]',
		ghost:
			'bg-transparent border-transparent text-[#e8f5e8] hover:text-[#22c55e] hover:bg-[rgba(34,197,94,0.05)]'
	}

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg rounded-full' // rounded-full on large buttons for CTAs usually
	}

	return (
		<button
			className={cn(
				baseClasses,
				variantClasses[variant],
				sizeClasses[size],
				disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
				className
			)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
}

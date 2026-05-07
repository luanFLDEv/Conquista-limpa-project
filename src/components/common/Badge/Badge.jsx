import { cn } from '../../../utils/cn'
import { getTipoColor } from '../../../utils/colors'

/**
 * @component Renderiza uma tag/badge baseada na cor do tipo
 *
 * @param {React.ReactNode} children - Texto da badge
 * @param {string} [colorHex] - Cor explícita em hex, se não fornecido usa fallback (verde)
 * @param {string} [className=''] - Classes Tailwind adicionais
 *
 * @returns {React.ReactElement}
 */
export function Badge({ children, colorHex = '#22c55e', className = '', ...props }) {
	return (
		<span
			className={cn(
				'inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md whitespace-nowrap',
				className
			)}
			style={{
				backgroundColor: `${colorHex}20`, // 20% opacity
				color: colorHex
			}}
			{...props}
		>
			{children}
		</span>
	)
}

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utilitário para mesclar classes Tailwind de forma inteligente
 * Resolve conflitos de classes e permite classes condicionais
 * @param {...(string | undefined | null | false)} inputs - Classes a serem mescladas
 * @returns {string} Classes finais mescladas
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

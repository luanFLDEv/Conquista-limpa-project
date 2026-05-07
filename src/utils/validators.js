/**
 * Valida se um endereço de email tem um formato aceitável
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Valida se o nome fornecido não está vazio e tem pelo menos 2 caracteres
 * @param {string} nome
 * @returns {boolean}
 */
export function isValidNome(nome) {
	return nome && nome.trim().length >= 2
}

/**
 * Valida se a mensagem não está vazia e tem um tamanho mínimo
 * @param {string} msg
 * @returns {boolean}
 */
export function isValidMensagem(msg) {
	return msg && msg.trim().length >= 10
}

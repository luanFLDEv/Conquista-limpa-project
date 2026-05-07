import { useState } from 'react'
import { isValidEmail, isValidNome, isValidMensagem } from '../../../../utils/validators'

export function useFormularioVoluntario() {
	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		mensagem: ''
	})

	const [erros, setErros] = useState({})
	const [enviado, setEnviado] = useState(false)

	const validar = () => {
		const novosErros = {}

		if (!isValidNome(formData.nome)) novosErros.nome = 'Nome inválido'
		if (!isValidEmail(formData.email)) novosErros.email = 'Email inválido'
		if (!isValidMensagem(formData.mensagem)) novosErros.mensagem = 'Mensagem muito curta'

		setErros(novosErros)
		return Object.keys(novosErros).length === 0
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		if (erros[name]) {
			setErros(prev => ({ ...prev, [name]: '' }))
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (validar()) {
			console.log('Enviando:', formData)
			setEnviado(true)
			setTimeout(() => {
				setFormData({ nome: '', email: '', mensagem: '' })
				setEnviado(false)
			}, 3000)
		}
	}

	return {
		formData,
		erros,
		enviado,
		handleChange,
		handleSubmit
	}
}

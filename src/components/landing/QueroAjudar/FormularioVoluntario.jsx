import { useFormularioVoluntario } from './hooks/useFormularioVoluntario'
import { Button, Card } from '../../common'

export function FormularioVoluntario() {
	const { formData, erros, enviado, handleChange, handleSubmit } = useFormularioVoluntario()

	return (
		<Card highlighted>
			<div className="text-3xl mb-4">🤝</div>
			<h3 className="text-2xl font-bold mb-4 text-[#f0fdf4]">Ser Voluntário</h3>
			<p className="text-sm text-[rgba(134,239,172,0.7)] mb-8">
				Ajude-nos a mapear novos pontos, organizar mutirões ou produzir conteúdos educativos.
			</p>

			<form className="space-y-4" onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="nome"
						value={formData.nome}
						onChange={handleChange}
						placeholder="Seu nome"
						className={`w-full bg-[#050a05] border ${erros.nome ? 'border-red-500' : 'border-[rgba(34,197,94,0.15)]'} rounded-lg px-4 py-3 text-sm text-[#e8f5e8] focus:outline-none focus:border-[#22c55e] transition-colors`}
					/>
					{erros.nome && <span className="text-red-500 text-xs mt-1 block">{erros.nome}</span>}
				</div>
				<div>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Seu e-mail"
						className={`w-full bg-[#050a05] border ${erros.email ? 'border-red-500' : 'border-[rgba(34,197,94,0.15)]'} rounded-lg px-4 py-3 text-sm text-[#e8f5e8] focus:outline-none focus:border-[#22c55e] transition-colors`}
					/>
					{erros.email && <span className="text-red-500 text-xs mt-1 block">{erros.email}</span>}
				</div>
				<div>
					<textarea
						name="mensagem"
						value={formData.mensagem}
						onChange={handleChange}
						placeholder="Como você gostaria de ajudar?"
						rows="3"
						className={`w-full bg-[#050a05] border ${erros.mensagem ? 'border-red-500' : 'border-[rgba(34,197,94,0.15)]'} rounded-lg px-4 py-3 text-sm text-[#e8f5e8] focus:outline-none focus:border-[#22c55e] transition-colors resize-none`}
					></textarea>
					{erros.mensagem && <span className="text-red-500 text-xs mt-1 block">{erros.mensagem}</span>}
				</div>
				<Button type="submit" className="w-full">
					{enviado ? 'Enviado com sucesso!' : 'Enviar Mensagem'}
				</Button>
			</form>
		</Card>
	)
}

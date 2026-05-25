import { Button, Card, Badge } from '../../common'

export function TrocasSustentaveis() {
	return (
		<section id="trocas" className="relative py-24 bg-[#050a05] overflow-hidden">
			{/* Efeitos de luz de fundo premium */}
			<div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#22c55e] opacity-[0.03] blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#16a34a] opacity-[0.04] blur-[130px] rounded-full translate-x-1/4 translate-y-1/4"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<div className="inline-flex gap-2 mb-4">
						<Badge colorHex="#22c55e">Projeto de Extensão</Badge>
						<Badge colorHex="#3b82f6">Economia Circular</Badge>
					</div>
					<h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
						Troca <span className="text-[#22c55e]">Sustentável</span>
					</h2>
					<p className="text-[rgba(134,239,172,0.6)] text-lg">
						Promovendo a reutilização, o consumo consciente e a colaboração no desenvolvimento sustentável de Vitória da Conquista.
					</p>
				</div>

				<div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
					{/* Coluna 1: Informações e Convite (7 colunas no desktop) */}
					<div className="lg:col-span-7 space-y-6">
						<Card highlighted className="relative overflow-hidden group">
							<div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e] opacity-[0.02] blur-xl rounded-full transition-all group-hover:scale-150"></div>
							
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 rounded-xl bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] flex items-center justify-center text-2xl shadow-inner">
									🌱
								</div>
								<div>
									<h3 className="text-xl font-bold text-[#f0fdf4]">Participe do nosso Grupo</h3>
									<p className="text-xs text-[rgba(134,239,172,0.5)]">Espaço comunitário de trocas livres e conscientes</p>
								</div>
							</div>

							<div className="space-y-4 text-sm text-[rgba(134,239,172,0.8)] leading-relaxed">
								<p>
									Como parte de uma iniciativa de extensão acadêmica voltada ao desenvolvimento sustentável, criamos este canal prático de interação direta. Nosso objetivo é conectar pessoas para dar uma nova vida a objetos que seriam descartados.
								</p>
								<p>
									No grupo, os participantes podem divulgar itens que não usam mais e demonstrar interesse por outros, criando um ciclo contínuo de economia circular.
								</p>
							</div>

							<div className="grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[rgba(34,197,94,0.1)]">
								<div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(34,197,94,0.02)] border border-[rgba(34,197,94,0.05)] hover:border-[rgba(34,197,94,0.15)] transition-all">
									<span className="text-lg">👕</span>
									<div>
										<h4 className="text-xs font-bold text-[#e8f5e8]">Roupas & Acessórios</h4>
										<p className="text-[11px] text-[rgba(134,239,172,0.5)] mt-0.5">Renove seu estilo de forma ecológica e consciente.</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(34,197,94,0.02)] border border-[rgba(34,197,94,0.05)] hover:border-[rgba(34,197,94,0.15)] transition-all">
									<span className="text-lg">📚</span>
									<div>
										<h4 className="text-xs font-bold text-[#e8f5e8]">Livros & Objetos</h4>
										<p className="text-[11px] text-[rgba(134,239,172,0.5)] mt-0.5">Troque saberes, decorações, eletrônicos e outros itens.</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(34,197,94,0.02)] border border-[rgba(34,197,94,0.05)] hover:border-[rgba(34,197,94,0.15)] transition-all">
									<span className="text-lg">♻️</span>
									<div>
										<h4 className="text-xs font-bold text-[#e8f5e8]">Consumo Consciente</h4>
										<p className="text-[11px] text-[rgba(134,239,172,0.5)] mt-0.5">Evite resíduos no lixo e estimule a reutilização prática.</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(34,197,94,0.02)] border border-[rgba(34,197,94,0.05)] hover:border-[rgba(34,197,94,0.15)] transition-all">
									<span className="text-lg">💚</span>
									<div>
										<h4 className="text-xs font-bold text-[#e8f5e8]">Ajuda Mútua</h4>
										<p className="text-[11px] text-[rgba(134,239,172,0.5)] mt-0.5">Colabore diretamente com os vizinhos e com o planeta.</p>
									</div>
								</div>
							</div>

							<div className="mt-8">
								<a
									href="https://chat.whatsapp.com/JSQ5SFk7KFp8x2NfveF9qE?mode=gi_t"
									target="_blank"
									rel="noreferrer"
									className="inline-block w-full no-underline"
								>
									<Button variant="primary" size="lg" className="w-full relative py-4 flex items-center justify-center gap-3 overflow-hidden group shadow-[0_4px_25px_rgba(34,197,94,0.3)]">
										<span className="relative z-10 flex items-center gap-2 text-base md:text-lg font-bold">
											<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
												<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.883-6.963C16.588 1.928 14.122.87 11.493.87 6.058.87 1.633 5.291 1.629 10.725c-.001 1.639.429 3.236 1.246 4.643L1.879 21.6l6.477-1.704zM17.07 14.37c-.3-.15-1.772-.875-2.046-.975-.276-.101-.476-.15-.676.15-.199.3-.772.975-.947 1.174-.173.199-.349.224-.648.075-.3-.15-1.266-.467-2.41-1.487-.89-.793-1.49-1.773-1.665-2.072-.173-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.149-.174.199-.3.3-.497.099-.2.049-.374-.025-.523-.075-.15-.675-1.625-.924-2.224-.244-.589-.493-.51-.676-.519-.173-.009-.373-.01-.573-.01-.2 0-.523.075-.797.373-.274.3-1.047 1.022-1.047 2.49 0 1.468 1.069 2.887 1.218 3.087.149.2 2.105 3.214 5.099 4.507.712.308 1.27.493 1.704.631.717.227 1.369.195 1.884.118.574-.085 1.771-.724 2.021-1.42.249-.697.249-1.295.174-1.42-.075-.125-.275-.199-.575-.349z"/>
											</svg>
											Entrar no Grupo de Trocas
										</span>
										<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0"></span>
									</Button>
								</a>
							</div>
						</Card>
					</div>

					{/* Coluna 2: Mockup do Whatsapp (5 colunas no desktop) */}
					<div className="lg:col-span-5 relative">
						{/* Gradiente luminoso sutil atrás do mockup */}
						<div className="absolute inset-0 bg-gradient-to-br from-[#22c55e] to-transparent opacity-10 blur-2xl rounded-3xl -z-10"></div>
						
						<div className="w-full bg-[#0a100a] border border-[rgba(34,197,94,0.15)] rounded-2xl overflow-hidden shadow-2xl">
							{/* Header do Mockup */}
							<div className="bg-[#0b160b] px-4 py-3 flex items-center justify-between border-b border-[rgba(34,197,94,0.1)]">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] flex items-center justify-center text-lg shadow-inner">
										♻️
									</div>
									<div>
										<h4 className="text-sm font-bold text-[#f0fdf4] leading-tight">Troca Sustentável 🌿</h4>
										<p className="text-[10px] text-[rgba(134,239,172,0.5)]">Projeto de Extensão • Online</p>
									</div>
								</div>
								<div className="flex items-center gap-3 text-[rgba(134,239,172,0.4)] text-xs">
									<span>📞</span>
									<span>🔍</span>
									<span>⋮</span>
								</div>
							</div>

							{/* Corpo de Mensagens */}
							<div className="p-4 space-y-4 max-h-[360px] overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(5,15,5,0.3)] to-[#070c07] min-h-[300px]">
								{/* Mensagem 1 (Carolina - Administradora/Grupo) */}
								<div className="flex flex-col max-w-[85%] bg-[rgba(15,25,15,0.7)] backdrop-blur-sm border border-[rgba(34,197,94,0.1)] rounded-r-xl rounded-bl-xl p-3 shadow-sm relative">
									<span className="text-[10px] font-extrabold text-[#22c55e] mb-1">Carolina (Extensão UESB)</span>
									<p className="text-xs text-[#e8f5e8] leading-relaxed">
										🌱♻️ Oi, pessoal! Criei um grupo de Troca Sustentável como parte do nosso projeto de extensão. A ideia é incentivar a reutilização de roupas, acessórios e outros itens, promovendo consumo consciente. 💚
									</p>
									<span className="text-[9px] text-[rgba(134,239,172,0.4)] text-right mt-1.5 block">09:12</span>
								</div>

								{/* Mensagem 2 (Você - Entrando na conversa) */}
								<div className="flex flex-col max-w-[85%] ml-auto bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.25)] rounded-l-xl rounded-br-xl p-3 shadow-sm relative">
									<span className="text-[10px] font-extrabold text-[#86efac] mb-1 text-right">Você</span>
									<p className="text-xs text-[#e8f5e8] leading-relaxed">
										Iniciativa maravilhosa! Tenho duas jaquetas e algumas camisas em ótimo estado que gostaria de disponibilizar para troca hoje! 👕✨
									</p>
									<span className="text-[9px] text-[rgba(134,239,172,0.4)] text-right mt-1.5 block">09:15</span>
								</div>

								{/* Mensagem 3 (Mateus - Outro participante) */}
								<div className="flex flex-col max-w-[85%] bg-[rgba(15,25,15,0.7)] backdrop-blur-sm border border-[rgba(34,197,94,0.1)] rounded-r-xl rounded-bl-xl p-3 shadow-sm relative">
									<span className="text-[10px] font-extrabold text-[#3b82f6] mb-1">Mateus</span>
									<p className="text-xs text-[#e8f5e8] leading-relaxed">
										Excelente! Eu tenho alguns livros de literatura e vasos de plantas ornamentais que posso trocar. Vamos movimentar a economia circular! 🌿📚
									</p>
									<span className="text-[9px] text-[rgba(134,239,172,0.4)] text-right mt-1.5 block">09:18</span>
								</div>
							</div>

							{/* Footer do Mockup (Input fake) */}
							<div className="bg-[#0b160b] px-4 py-3 flex items-center gap-3 border-t border-[rgba(34,197,94,0.1)] text-xs">
								<div className="flex-grow bg-[#050a05] border border-[rgba(34,197,94,0.1)] rounded-full px-4 py-2 text-[rgba(134,239,172,0.4)] flex items-center justify-between">
									<span>Digite uma mensagem...</span>
									<span>📎</span>
								</div>
								<div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center text-white cursor-pointer shadow-md">
									🎤
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

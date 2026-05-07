import { Hero } from '../components/landing/Hero/Hero'
import { GuiaReciclagem } from '../components/landing/GuiaReciclagem/GuiaReciclagem'
import { Agenda } from '../components/landing/Agenda/Agenda'
import { Conteudos } from '../components/landing/Conteudos/Conteudos'
import { QueroAjudar } from '../components/landing/QueroAjudar/QueroAjudar'

export default function LandingPage() {
	return (
		<div className="flex flex-col">
			<Hero />
			<GuiaReciclagem />
			<Agenda />
			<Conteudos />
			<QueroAjudar />
		</div>
	)
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/common/Navbar/Navbar'
import { Footer } from './components/common/Footer/Footer'
import LandingPage from './pages/LandingPage'
import MapaPage from './pages/MapaPage'

export default function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen bg-[#050a05] text-[#e8f5e8] font-['DM_Sans']">
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/mapa" element={<MapaPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'

import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'
import { Project } from './pages/Project'

import ScrollToTop from './utils/scrollToTop'

import './styles/main.css'

function App() {
  return (
    <div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path='/vite-react-portfolio/' element= {<Home />} />
					<Route path='/vite-react-portfolio/projects' element= {<Projects />} />
					<Route path='/vite-react-portfolio/project/:id' element= {<Project />} />
					<Route path='/vite-react-portfolio/contacts' element= {<Contacts />} />
				</Routes>
				<Footer />
			</Router>
    </div>
  );
}

export default App;

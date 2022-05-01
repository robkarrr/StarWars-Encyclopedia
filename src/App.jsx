import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navgiation'
import FilmsPage from './pages/FilmsPage'
import PeoplePage from './pages/PeoplePage'
import FilmPage from './pages/FilmPage'
import PersonPage from './pages/PersonPage'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
const App = () => {
  
  return (
		<div id="App">
      <Navigation />

			<Container>
				  <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/people/:id" element={<PersonPage />} />
              <Route path="/films" element={<FilmsPage />} />
              <Route path="/films/:id" element={<FilmPage />} />
              <Route path="*" element={<h1 className="text-center mt-5">Page not found...</h1>} />  
			  	</Routes>
			</Container>
		</div>
	)
}

export default App;
	
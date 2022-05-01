import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navgiation'
import FilmsPage from './pages/FilmsPage'
import PeoplePage from './pages/PeoplePage'
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
              <Route path="/films" element={<FilmsPage />} />
			  	</Routes>
			</Container>
		</div>
	)
}

export default App;
	
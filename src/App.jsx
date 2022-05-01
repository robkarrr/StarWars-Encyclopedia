import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navgiation'
import Films from './pages/Films'
import People from './pages/People'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
const App = () => {

	return (
		<div id="App">
      <Navigation />

			<Container>
				  <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/people" element={<People />} />
              <Route path="/films" element={<Films />} />
			  	</Routes>
			</Container>
		</div>
	)
}

export default App;
	
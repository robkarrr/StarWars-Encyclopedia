import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {

	return (
		<div id="App">
			<Container>
				<Routes>
					<Route path="/" element={<h1>HomePage</h1>} />
					<Route path="/people" element={<h1>People</h1>} />
					<Route path="/films" element={<h1>FilmsPage</h1>} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;
	
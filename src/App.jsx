import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import About from './pages/about/about';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		/* basename="/portfolio" — это КЛЮЧЕВАЯ настройка. 
      Она говорит роутеру, что главная страница находится по адресу /portfolio/, 
      а не в корне сайта.
    */
		<BrowserRouter basename='/portfolio'>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<About />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

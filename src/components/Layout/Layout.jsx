import './layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Outlet } from 'react-router';

export default function Layout() {
	return (
		<div className='layout'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Burger from '../Burger/Burger';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isMenuOpen]);

	return (
		<header className='header'>
			<NavLink to='/' className='header-logo__title' onClick={closeMenu}>
				Maker<span className='text-primary'>Port</span>.
			</NavLink>

			{/* Передаем функции управления меню в бургер */}
			<Burger isActive={isMenuOpen} setIsActive={setIsMenuOpen} />

			{/* Используем div вместо dialog для стабильности */}
			<div className={`menu-overlay ${isMenuOpen ? 'is-open' : ''}`}>
				<nav className='header-nav__links'>
					<NavLink to='/' onClick={closeMenu}>
						Обо мне
					</NavLink>
					<NavLink to='/skills' onClick={closeMenu}>
						Навыки
					</NavLink>
					<NavLink to='/projects' onClick={closeMenu}>
						Проекты
					</NavLink>
					<NavLink to='/contact' onClick={closeMenu}>
						Контакты
					</NavLink>
				</nav>
			</div>
		</header>
	);
}

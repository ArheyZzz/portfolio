import './About.css';
import profileImg from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<section className='about'>
			<div className='about-left'>
				<span className='about-left__status'>Доступен для работы</span>

				<h1 className='about-left__title'>
					Создаю
					<br />
					<span className='text-gradient typing'>цифровой опыт</span>
				</h1>

				<p className='about-left__description'>
					Я фронтенд-разработчик, специализирующийся на создании интерфейсов,
					которые сочетают в себе эстетику и производительность.
				</p>

				<div className='about-left__buttons'>
					<Link to='/projects' className='btn btn-primary'>
						Мои работы
					</Link>

					<Link to='/contact' className='btn btn-secondary'>
						Контакты
					</Link>
				</div>
			</div>

			<div className='about-right'>
				<div className='about-right__image'>
					<img src={profileImg} alt='Profile' />
					{/* Рамка теперь внутри контейнера с фото */}
					<div className='about-right__border'></div>
				</div>
			</div>
		</section>
	);
}

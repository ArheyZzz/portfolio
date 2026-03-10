import './Projects.css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
	{
		title: 'Movie Explorer (VPN required)',
		tags: ['React', 'REST API', 'Search', 'Favorites'],
		desc: 'Полнофункциональный поиск фильмов через API. Из-за региональных ограничений базы данных (TMDB), для загрузки контента в Украине необходим VPN.',
		link: 'https://arheyzzz.github.io/movie-explorer/',
		image: '/projects/movie-explorer.webp',
	},
	{
		title: 'Greeting Generator',
		tags: ['React', 'AI Integration', 'UX/UI', 'Zustand'],
		desc: 'Интеллектуальный сервис для создания персональных поздравлений. Интеграция с Google Gemini AI, кастомизация стилей и адаптивный стеклянный интерфейс.',
		link: 'https://arheyzzz.github.io/greeting-generator/',
		image: '/projects/greeting.webp',
	},
	{
		title: 'InterviewQuiz',
		tags: ['React', 'State', 'UX Flow'],
		desc: 'Тренажёр для собеседований: уровни, прогресс, вопросы и результат. Тёмная тема и аккуратный UI.',
		link: 'https://arheyzzz.github.io/interviewquiz/',
		image: '/projects/interviewquiz.webp',
	},
	{
		title: 'Escuelajs-shop',
		tags: ['React', 'REST API', 'Cart'],
		desc: 'Мини-магазин: категории, товары, корзина и работа с API. Упор на компоненты и структуру приложения.',
		link: 'https://arheyzzz.github.io/escuelajs-shop/',
		image: '/projects/escuelajs-shop.webp',
	},
	{
		title: 'InviteList',
		tags: ['React', 'State', 'Search'],
		desc: 'Список приглашённых: поиск, добавление/удаление, два списка и модалка результата. Есть переключение темы.',
		link: 'https://arheyzzz.github.io/invitelist/',
		image: '/projects/invitelist.webp',
	},
	{
		title: 'Favorite App',
		tags: ['React', 'Zustand', 'CRUD', 'Async'],
		desc: 'Избранное + глобальное состояние: загрузка данных, управление задачами, статусы и современный UI.',
		link: 'https://arheyzzz.github.io/favorite-app/',
		image: '/projects/favorite-app.webp',
	},
	{
		title: 'SpaceX Explorer',
		tags: ['React', 'REST API', 'Filters', 'Pagination'],
		desc: 'Каталог запусков SpaceX: фильтры по статусу, пагинация, карточки миссий и чистая сетка.',
		link: 'https://arheyzzz.github.io/Spacex-Explorer/',
		image: '/projects/spacex-explorer.webp',
	},
];

export default function Projects() {
	return (
		<section className='projects' id='projects'>
			<div className='projects-head'>
				<div className='projects-titlebox'>
					<h2 className='projects-title'>
						Избранные <span className='text-primary'>проекты</span>
					</h2>
					<p className='projects-subtitle'>Решения, которыми я горжусь</p>
				</div>

				<div className='projects-nav'>
					<button className='projects-nav-btn projects-nav-prev'>←</button>
					<button className='projects-nav-btn projects-nav-next'>→</button>
				</div>
			</div>

			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={24}
				speed={650}
				loop={true}
				navigation={{
					prevEl: '.projects-nav-prev',
					nextEl: '.projects-nav-next',
				}}
				className='projects-swiper'
			>
				{projects.map((p, idx) => (
					<SwiperSlide key={idx}>
						<article className='project-card'>
							<div className='project-preview'>
								<img src={p.image} alt={p.title} loading='lazy' />
							</div>

							<div className='project-content'>
								<div className='project-tags'>
									{p.tags.map(t => (
										<span key={t} className='project-tag'>
											{t.toUpperCase()}
										</span>
									))}
								</div>

								<h3 className='project-title-card'>{p.title}</h3>
								<p className='project-desc'>{p.desc}</p>

								<a
									className='project-link'
									href={p.link}
									target='_blank'
									rel='noopener noreferrer'
								>
									Смотреть кейс <span className='project-link-arrow'>→</span>
								</a>
							</div>
						</article>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

import './NotFound.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NotFound() {
	const [count, setCount] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		if (count === 0) {
			navigate('/');
			return;
		}

		const timer = setTimeout(() => {
			setCount(prev => prev - 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, [count, navigate]);

	return (
		<section className='notfound'>
			<div className='notfound-card'>
				<h1 className='notfound-code'>404</h1>

				<h2 className='notfound-title'>Страница не найдена</h2>

				<p className='notfound-text'>
					Вы будете перенаправлены на главную через
					<span className='notfound-count'> {count} </span>
					сек.
				</p>

				<button className='notfound-btn' onClick={() => navigate('/')}>
					Перейти на главную
				</button>
			</div>
		</section>
	);
}

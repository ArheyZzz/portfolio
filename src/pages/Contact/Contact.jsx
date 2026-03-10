import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
	const formRef = useRef();
	const [status, setStatus] = useState('');

	const sendEmail = e => {
		e.preventDefault();
		setStatus('sending');

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAIL_PUBLIC_KEY,
			)
			.then(() => {
				setStatus('success');
				formRef.current.reset();
				setTimeout(() => setStatus(''), 4000);
			})
			.catch(err => {
				console.error('EmailJS Error:', err);
				setStatus('error');
				setTimeout(() => setStatus(''), 4000);
			});
	};

	return (
		<section className='contact' id='contact'>
			<h2 className='contact-title'>
				Связаться <span className='text-primary'>со мной</span>
			</h2>

			<div className='contact-card'>
				<div className='contact-left'>
					<h3 className='contact-left-title'>Контакты</h3>
					<ul className='contact-list'>
						<li className='contact-item'>
							<span className='contact-ic'>in</span>
							<a
								className='contact-link'
								href='https://www.linkedin.com/in/%D1%8E%D1%80%D0%B8%D0%B9-%D0%BC%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2-533429189/'
								target='_blank'
								rel='noreferrer'
							>
								linkedin.com/in/yuriy-mykhailov
							</a>
						</li>
						<li className='contact-item'>
							<span className='contact-ic'>⌘</span>
							<a
								className='contact-link'
								href='https://github.com/ArheyZzz'
								target='_blank'
								rel='noreferrer'
							>
								github.com/arheyZzz
							</a>
						</li>
						<li className='contact-item'>
							<span className='contact-ic'>📍</span>
							<span className='contact-text'>Киев, Украина</span>
						</li>
					</ul>
					<p className='contact-note'>
						Открыт к предложениям о работе и фриланс-проектах.
					</p>
				</div>

				<form ref={formRef} className='contact-form' onSubmit={sendEmail}>
					<label className='field'>
						<span className='field-label'>Ваше имя</span>
						<input
							name='name'
							className='field-input'
							type='text'
							placeholder='Иван'
							required
						/>
					</label>
					<label className='field'>
						<span className='field-label'>Email</span>
						<input
							name='email'
							className='field-input'
							type='email'
							placeholder='ivan@gmail.com'
							required
						/>
					</label>
					<label className='field'>
						<span className='field-label'>Сообщение</span>
						<textarea
							name='message'
							className='field-textarea'
							rows={5}
							placeholder='Привет, хочу заказать сайт...'
							required
						/>
					</label>
					<button
						className='contact-btn'
						type='submit'
						disabled={status === 'sending'}
					>
						{status === 'sending' ? 'Отправка...' : 'Отправить'}
					</button>

					<div className='form-status'>
						{status === 'success' && (
							<p style={{ color: '#22c55e', marginTop: '10px' }}>
								Сообщение отправлено!
							</p>
						)}
						{status === 'error' && (
							<p style={{ color: '#ef4444', marginTop: '10px' }}>
								Ошибка отправки. Попробуйте снова.
							</p>
						)}
					</div>
				</form>
			</div>
		</section>
	);
}

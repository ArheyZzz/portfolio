import './Skills.css';

const skills = [
	{
		title: 'React',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	},
	{
		title: 'TypeScript',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
	},
	{
		title: 'JavaScript',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
	},
	{
		title: 'HTML5',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
	},
	{
		title: 'CSS3',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
	},
	{
		title: 'Zustand',
		icon: 'https://raw.githubusercontent.com/pmndrs/zustand/main/docs/zustand-logo.sol.svg',
	},
	{
		title: 'Node.js',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
	},
	{
		title: 'Express',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
	},
	{
		title: 'Git',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
	},
	{
		title: 'Vite',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
	},
	{
		title: 'REST API',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
	},
	{
		title: 'React Query',
		icon: 'https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg',
	},
];

function SkillCard({ title, icon }) {
	return (
		<article className='skill-card'>
			<div className='skill-icon'>
				<img src={icon} alt={title} />
			</div>
			<h3 className='skill-title'>{title}</h3>
		</article>
	);
}

export default function Skills() {
	return (
		<section className='skills'>
			<h2 className='skills-title'>
				Технологии, которые <span className='text-primary'>я использую</span>
			</h2>

			<div className='skills-grid'>
				{skills.map(s => (
					<SkillCard key={s.title} title={s.title} icon={s.icon} />
				))}
			</div>
		</section>
	);
}

import './Footer.css'

import vk from './icons/vk.svg'
import instagram from './icons/instagram.svg'
import github from './icons/gitHub.svg'
import linkedIn from './icons/linkedIn.svg'

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item"><a href="#!"><img src={ vk } alt="Link"/></a></li>
						<li className="social__item"><a href="#!"><img src={ instagram } alt="Link"/></a></li>
						<li className="social__item"><a href="#!"><img src={ github } alt="Link"/></a></li>
						<li className="social__item"><a href="#!"><img src={ linkedIn } alt="Link"/></a></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

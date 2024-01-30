import gitHubIcon from './icons/gitHub-black.svg'

import './BtnGitHub.css'

export const BtnGitHub = ({ link }) => {
	return (
		<a href={ link } target='_blank' className="btn-outline" rel="noreferrer">
		<img src={ gitHubIcon } alt=""/>
		GitHub repo
	</a>
	)
}

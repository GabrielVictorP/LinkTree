import './redesSociais.css';
import { FaInstagram, FaLinkedin, FaGlobe, FaGithub } from 'react-icons/fa';

const RedesSociais = () => {
  const ListaRedes = [
    { id: 1, urlNome: 'Portfólio', url: 'https://portfolio-gabrielvictorp.vercel.app/', icon: FaGlobe },
    { id: 2, urlNome: 'Instagram', url: 'https://www.instagram.com/gabriel.victor.j/', icon: FaInstagram },
    { id: 3, urlNome: 'Linkedin', url: 'https://www.linkedin.com/in/gabriel-victor-a27570260', icon: FaLinkedin },
    { id: 4, urlNome: 'Github', url: 'https://github.com/GabrielVictorP', icon: FaGithub }
  ];

  const linksRedes = ListaRedes.map((props) => (
    <div key={props.id} className='conteudo-links'>
      <a href={props.url} className='link'>
        <props.icon size={24} className='icone' />
        {props.urlNome}
      </a>
    </div>
  ));

  return (
    <div className="conteudo_links">
      {linksRedes}
    </div>
  );
}

export default RedesSociais;


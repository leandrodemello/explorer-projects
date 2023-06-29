import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto8() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>S</span>PA <span>U</span>NIVERSE</h1>
            <p>Uma SPA construída com Javascript puro</p>
            <img src="144814.jpg" alt="móveis planejados" />

        </div>

        <div className="buttons">
             <a href="https://spa-universe-ro.netlify.app" target="_blank" rel="noreferrer"> 
                <button><p>Deploy</p></button> </a>
            <a href="https://github.com/leandrodemello/SpaceUniverse" target="_blank" rel="noreferrer"> 
                <button><p>GitHub</p></button> </a> 
        </div>
 
        <div className="return">
          <Link to="/">
              <p> <FiArrowLeft/> Voltar</p>
          </Link>
        </div>

     </div>
    </Container>
  )
}
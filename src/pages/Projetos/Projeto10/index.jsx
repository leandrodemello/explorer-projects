import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto10() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>R</span>OCKETNOTES </h1>
            <p>Uma aplicação para guardar links e anotações | React & Styled-Components | Node & SQlite</p>
            <img src="rocket.gif" alt="móveis planejados" />

        </div>

        <div className="buttons">
             <a href="https://anotacoesfaceis.netlify.app/" target="_blank" rel="noreferrer"> 
                <button><p>Deploy</p></button> </a>
            <a href="https://github.com/leandrodemello/rocketnotes_frontend" target="_blank" rel="noreferrer"> 
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
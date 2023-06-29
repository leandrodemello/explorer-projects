import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto9() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>J</span>OGO <span>D</span>A <span>A</span>DIVINHAÇÃO</h1>
            <p>Injeção de dependências e manipulação da DOM</p>
            <img src="jogo-adived.gif" alt="móveis planejados" />

        </div>

        <div className="buttons">
             <a href="https://jogo-da-adivinhcao.netlify.app/" target="_blank" rel="noreferrer"> 
                <button><p>Deploy</p></button> </a>
            <a href="https://github.com/leandrodemello/JogoDaAdivinhacao" target="_blank" rel="noreferrer"> 
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
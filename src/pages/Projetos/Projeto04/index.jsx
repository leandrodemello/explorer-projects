import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto4() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>F</span>ORMUÁRIOS</h1>
            <p>Tags de formulário, pseudo-classes e Flexbox.</p>
            <img src="formularios.gif" alt="móveis planejados" />
            <a href="https://codepen.io/leandrodemello/pen/gOvZaop" target="_blank"> 
            <button><p>Ir para o projeto</p></button> </a> 
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
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto2() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>T</span>REINE-ME</h1>
            <p>Tags semânticas do HTML.</p>
            <img src="140255.jpg" alt="móveis planejados" />
            <a href="https://codepen.io/leandrodemello/pen/VwQroae" target="_blank"> 
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
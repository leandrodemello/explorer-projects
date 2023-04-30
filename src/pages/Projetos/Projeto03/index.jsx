import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto3() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>R</span>OCKET.SECT </h1>
            <p>Landing Page</p>
            <img src="141235.jpg" alt="móveis planejados" />
            <a href="https://codepen.io/leandrodemello/pen/WNMdRNQ" target="_blank"> 
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
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto1() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>M</span>ÓVEIS <span>P</span>LANEJADOS</h1>
            <p>Conceitos básicos de HTML e CSS</p>
            <img src="145710.jpg" alt="móveis planejados" />
            <a href="https://codepen.io/leandrodemello/pen/JjpOMVb" target="_blank"> 
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
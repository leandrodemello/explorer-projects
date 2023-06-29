import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto5() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>S</span>PACE <span>C</span>REAM</h1>
            <p>Display Grid, responsividade e keyframes.</p>
            <img src="space-crem.gif" alt="móveis planejados" />

        </div>

        <div className="buttons">
             <a href="https://codepen.io/leandrodemello/pen/eYVbpPK" target="_blank" rel="noreferrer"> 
                <button><p>Deploy</p></button> </a>
            <a href="https://github.com/leandrodemello/SpaceCream" target="_blank" rel="noreferrer"> 
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
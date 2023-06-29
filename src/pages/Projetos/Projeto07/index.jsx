import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto7() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>C</span>ALCULADORA DE <span>I</span>MC</h1>
            <p>Funções callbacks, recursividade e princípios de Clean Code.</p>
            <img src="imc-ed.gif" alt="móveis planejados" />
 
        </div>

        <div className="buttons">
             <a href="https://calculadora-deimc.netlify.app/" target="_blank" rel="noreferrer"> 
                <button><p>Deploy</p></button> </a>
            <a href="https://github.com/leandrodemello/calculadora-de-imc" target="_blank" rel="noreferrer"> 
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
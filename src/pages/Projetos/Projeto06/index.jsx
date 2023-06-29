import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiArrowLeft} from 'react-icons/fi';

export function Projeto6() {
  
  return (
    <Container>
     <div className="page">

        <div className="intro">
          <h1><span>F</span>OCUS <span>T</span>IMER</h1>
            <p>Um timer no estilo pomodoro | JavaScript e DOM</p>
            <img src="pomodoro.gif" alt="móveis planejados" />

        </div>

        <div className="buttons">
             <a href="https://timerpomodoro2023.netlify.app/" target="_blank" rel="noreferrer"> 
                <button><p>Deploy</p></button> </a>
            <a href="https://github.com/leandrodemello/timer-pomodoro" target="_blank" rel="noreferrer"> 
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
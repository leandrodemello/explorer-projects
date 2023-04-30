import { Container } from './styles';

import { Link } from 'react-router-dom';

export function Home() {
  
  return (
    <Container>
      <div className="page">
         <div className="cal-bec">
            <h1><span>L</span>EANDRO MELLO</h1>
            <p>Um lugar para guardar todos os meus <br></br>desafios do Explorer, da <br></br> <a href="https://www.rocketseat.com.br/explorer" target="_blank">Rocketseat.</a></p>
          </div>

        <div className="last-proj">
         <ul>
          <Link to="moveis-planejados"> <li><span>PROJETO 01 - </span> <p>MOVÉIS PLANEJADOS</p></li></Link> 
          <Link to="treine-me"><li><span>PROJETO 02 - </span> <p>TREINE.ME</p> </li></Link>
          <Link to="rocket-sect"><li><span>PROJETO 03 - </span> <p>ROCKET.SECT</p></li></Link>
          <Link to="formularios"><li><span>PROJETO 04 - </span> <p>FORMULÁRIOS</p></li></Link>
          <Link to="space-cream-m"><li><span>PROJETO 05 - </span> <p>SPACE CREAM</p></li></Link>
          <Link to="timer-pomodoro"><li><span>PROJETO 06 - </span> <p>TIMER POMODORO</p></li></Link>
          <Link to="calcular-imc"><li><span>PROJETO 07 - </span> <p>CALCULADORA DE IMC</p></li></Link>
          <Link to="spa-universe"><li><span>PROJETO 08 - </span> <p>SPA UNIVERSE</p></li></Link>
          <Link to="jogo-da-adivinhacao"><li><span>PROJETO 09 - </span> <p>JOGO DA ADIVINHAÇÃO</p></li></Link>
          <Link to="rocket-notes"><li><span>PROJETO 10 - </span> <p>ROCKETNOTES</p></li></Link>
          </ul>
        </div>

        <footer>
          <p>FEITO POR <a href="https://www.linkedin.com/in/leandro-mello-47a24823b/" target="_blank">LEANDRO MELLO</a></p>
        </footer>
        
     </div>

    </Container>
  )
}

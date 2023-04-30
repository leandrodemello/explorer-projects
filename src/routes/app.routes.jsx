import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Projeto1 } from "../pages/Projetos/Projeto01";
import { Projeto2 } from "../pages/Projetos/Projeto02";
import { Projeto3 } from "../pages/Projetos/Projeto03";
import { Projeto4 } from "../pages/Projetos/Projeto04";
import { Projeto5 } from "../pages/Projetos/Projeto05";
import { Projeto6 } from "../pages/Projetos/Projeto06";
import { Projeto7 } from "../pages/Projetos/Projeto07";
import { Projeto8 } from "../pages/Projetos/Projeto08";
import { Projeto9 } from "../pages/Projetos/Projeto09";
import { Projeto10 } from "../pages/Projetos/Projeto10";

export function AppRoutes(){
   return(
      <Routes>
         <Route path="/" element={ <Home />} />
         <Route path="moveis-planejados" element={ <Projeto1 />} />
         <Route path="treine-me" element={ <Projeto2 />} />
         <Route path="rocket-sect" element={ <Projeto3 />} />
         <Route path="formularios" element={ <Projeto4 />} />
         <Route path="space-cream-m" element={ <Projeto5 />} />
         <Route path="timer-pomodoro" element={ <Projeto6 />} />
         <Route path="calcular-imc" element={ <Projeto7 />} />
         <Route path="spa-universe" element={ <Projeto8 />} />
         <Route path="jogo-da-adivinhacao" element={ <Projeto9 />} />
         <Route path="rocket-notes" element={ <Projeto10 />} />
      </Routes>
   )
}
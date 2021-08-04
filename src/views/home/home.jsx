import React,{useState} from 'react';
import './home.css';
import Header from '../../components/header/header'
import CadStudent from '../../components/cad-student/cad-student'
import AnaliticEstudent from '../../components/analitic-student/analitic-student'
import Footer from '../../components/footer/footer'
import ListEstudents from '../../components/list-student/list-student'
export default function Home()
{
    const [estudante,setEstudante]=useState({"nome":"","media":""});

    const [estudanteAnalisado,setEstudanteAnalisado]=useState({"nome":"","media":""});
  
     function EnviarDadoEstudante(nome,media)
    {
        setEstudante({"nome":nome,"media":media})
        
    }

    function CarregarEstudanteNaLista()
    {
       setEstudanteAnalisado({"nome":estudante.nome,"media":estudante.media})
    }
     return (
       <> 
           <div className="content">
            <div className="content-item"><Header/></div>
            <div className="content-item"><CadStudent Estudante={EnviarDadoEstudante}/></div>
            <div className="content-item"><AnaliticEstudent media={estudante.media} Estudante={CarregarEstudanteNaLista}/></div>
           <div className="content-item"><ListEstudents nome={estudante.nome}><li>{estudanteAnalisado.nome}  - M{estudanteAnalisado.media}  - {estudanteAnalisado.media>=9.8? "Aprovado" : "Recurso"}</li> </ListEstudents></div>
            <div className="content-item"><Footer/></div>
           </div>
       </>
     )
}
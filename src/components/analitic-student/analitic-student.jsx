import React from 'react';
export default function AnaliticEstudent(props)
{
    
  let mensagemNaTela="";

   function EnviarEstudanteNaLista(condicao)
      {
              
              props.Estudante();
      }

     return (
       <>
          

           {props.media!==''?
           
              <div>
              <p>Média: {props.media} </p>
              <p>Estado: {props.media>=9.9?mensagemNaTela="Aprovado": props.media>=7.5?mensagemNaTela="Recurso":mensagemNaTela="Reprovado"}</p>

              {mensagemNaTela!=="Reprovado"?

                          <button onClick={()=>{EnviarEstudanteNaLista(mensagemNaTela)}}> Enviar Estudante {mensagemNaTela}</button>
                : "Este Estudante não tem solução, a não ser repetir o ano lectivo"
                }
              
              </div>

                
                
              : 
                ""
           }
          
          
           
          <h3>_____________________________________________________________________________________________</h3>
       </>
     )
     
}
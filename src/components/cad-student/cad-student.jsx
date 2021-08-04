import React,{useState} from 'react';
export default function CadStudent (props)
{
    const [form,setForm]=useState({"nome":"","nota1":"","nota2":"","nota3":""});
    const [estudanteEnviado,setEstudante]=useState(false);
    const ManipulacaoDosCamposFormulario=(el)=>{
      if(el.target.getAttribute('name')==="fnome")
      {
        setForm({"nome":el.target.value,"nota1":form.nota1,"nota2":form.nota2,"nota3":form.nota3})
      }else  if(el.target.getAttribute('name')==="fnota1")
      {
        setForm({"nome":form.nome,"nota1":el.target.value,"nota2":form.nota2,"nota3":form.nota3})
      } else  if(el.target.getAttribute('name')==="fnota2")
      {
        setForm({"nome":form.nome,"nota1":form.nota1,"nota2":el.target.value,"nota3":form.nota3})
      }else if(el.target.getAttribute('name')==="fnota3")
      {
        setForm({"nome":form.nome,"nota1":form.nota1,"nota2":form.nota2,"nota3":el.target.value})
      }
    }

     function RetornarMediaEstudante()
     {
        if(form.nota1!=='' && form.nota2!=='' && form.nota3!=='') 
        {
          return ((parseInt(form.nota1)+parseInt(form.nota2)+parseInt(form.nota3))/3);
        }
        return false;
       
     }
     let nomeButton="Calcular Média";

     function EnviarDadosAoComponentpai(el)
     {
        let media=RetornarMediaEstudante()
        if(media!==false)
        {
          
          setEstudante(true);
          media=media.toString();
          props.Estudante(form.nome,media.substring(0,4))
        }
        else setEstudante(false);
     }
     
      
    return (
      <>
         <input type="text" name="fnome" placeholder="Nome do Estudante" onChange={(el)=>{ManipulacaoDosCamposFormulario(el)}} />
         <input type="number" name="fnota1" placeholder="Primeira Nota" onChange={(el)=>{ManipulacaoDosCamposFormulario(el)}}  />
         <input type="number" name="fnota2"   placeholder="Segunda Nota" onChange={(el)=>{ManipulacaoDosCamposFormulario(el)}} />
         <input type="number" name="fnota3"   placeholder="Terceira Nota" onChange={(el)=>{ManipulacaoDosCamposFormulario(el)}} />
         <button onClick={(el)=>{EnviarDadosAoComponentpai(el)}}>{nomeButton}</button>
         <p>{estudanteEnviado===false? "É necessário as três notas...":""}</p>
      </>
    )

    
}
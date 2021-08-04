import React from 'react';
import './list.css';
export default function ListEstudents(props)
{
   
     return (
       <>
           <ul>
                           <li>Estudante Analisado</li>
                <p>_____________________________________________</p>
                   {props.children}
           </ul>
       </>
     )
}
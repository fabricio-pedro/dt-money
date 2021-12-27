import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./stytles";

export function TransationsTable(){
   useEffect(()=>{
   api.get('/transations')
   .then(data=>console.log(data));

   },[]);
    return (
      <Container>
       <table>
           <thead>
               <tr>
                  <th>Titulo</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th> 
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>Desenvolvimento de site</td>
                   <td>R$ 10.000</td>
                   <td>web desenvolvimento</td>
                   <td>26/12/2021</td>
               </tr>
               <tr>
                   <td>Desenvolvimento de site</td>
                   <td>R$ 10.000</td>
                   <td>web desenvolvimento</td>
                   <td>26/12/2021</td>
               </tr>
               <tr>
                   <td>Desenvolvimento de site</td>
                   <td>R$ 10.000</td>
                   <td>web desenvolvimento</td>
                   <td>26/12/2021</td>
               </tr>
           </tbody>
       </table>
      </Container>
    );
}
import { createGlobalStyle } from "styled-components"

export const GlobalStyle=createGlobalStyle`
 
 :root{
     --background:#F0F2F5;
     --red:#E62E4D;
     --green:#33CC95;
     --blue:#5429CC;
     --text-title:#363F5F;
     --blue-light:#6933FF;
     --shape:#ffffff;
     --text-body:#969CB2
 }

 *{
   margin:0;
   padding:0;
   box-sizing: border-box;
 }
 html{
  @media(max-width:1080px){
      font-size:93.75%;
  }
  @media(max-width:720px){
      font-size:87.5%;
  }


 }
 body{
  background:var(--background);
  -webkit-font-smoothing:antialiased;


 }
 body,input,textarea,button{
     font-family:'Poppins', sans-serif;
 }
 h1,h2,h3,h4,h5,h6,strong{
     font-weight: 600;
 }

 button{
     cursor:pointer;
 }
 [disabled]{
     opacity: 0.6;
     cursor:not-allowed;
 }

`

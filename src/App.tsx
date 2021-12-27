import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global";
import {createServer} from 'miragejs'

createServer({
  routes(){
    this.namespace="api";
    this.get("/transations",()=>{
      return [
        {
          id:1,
          title:"transation example",
          amount: 10.4,
          type:"deposit",
          category: "food",
          createAt:new Date()

        }
      ];
    })
  }
});

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
       <GlobalStyle/>
    </>
  );
}



// test1 props로 데이터 공유

// function MyContextTest(){
//     const insaArray=["Hello React", "Goodbye React"];
//     return <div><InsaList insas={insaArray} /></div>
// }

// function InsaList(p){
//     return <div><InsaItem insas={p.insas}/></div>
// }

// function InsaItem(p){
//     return <div><h1>{p.insas[0]}</h1> <h5>{p.insas[1]}</h5></div>
// }

// test2 context로 데이터 공유 - 사용
import { createContext, useContext, useState } from "react";

const InsaContext = createContext();

function MyContextTest(){
    // const insaArray=["Hello React", "Goodbye React"];
   const [insaArray, setInsas] =  useState(["Hello React", "Goodbye React"]);

   const changeHandler0 = function(ev){
    let newArray = [... insaArray];
    newArray[0] = ev.target.value;
    setInsas(newArray);
   }

   const changeHandler1 = function(ev){
    let newArray = [... insaArray];
    newArray[1] = ev.target.value;
    setInsas(newArray);
   }

    return <div>
        <InsaContext.Provider value={insaArray} >
          <InsaList />
        </InsaContext.Provider>
        <input type="text" onChange={changeHandler0} value={insaArray[0]}/>
        <input type="text" onChange={changeHandler1} value={insaArray[1]}/>

        </div>
}

function InsaList(){
    return <div><InsaItem/></div>
}

function InsaItem(){
    const insas = useContext(InsaContext);
    return <div><h1>{insas[0]}</h1> <h5>{insas[1]}</h5></div>
}

export {MyContextTest}
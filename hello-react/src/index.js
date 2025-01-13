import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { MyReact, MyReact2 } from './MyReact';
//import Hello1, {Hello2, Hello3,Hello4} from './start';
//import Expression from './expression';
import Greeting, { Greeting2 } from './condition_render';
import Fortest from './for_render';
import Calc1 from './props_calc';
import {StyleProps,Calc2} from './props_calc'
import { State_User1,State_User2 } from './state_class_function';
import Expression from './expression copy';
import SignUp from './form copy';
import { MyReactDom1, MyReactDom2 } from './reactDom';
import Book from './Book';
import { ChildTest, ParentTest } from './stateParentChild';
import { MyContextTest } from './myContext';
import MyButton from './myStyledComponent';
// import NumberList from './NumberList';
import NumberList from './NumberList copy';
import BoardList from './BoardList';
import ServerConnection_boot from './ServerConnection_boot';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <MyReact />
    <MyReact2 />
    <Hello1 />
    <hr />
    <Hello2 />
    <hr />
    <Hello3 />
    <hr />
    <Hello4 /> */}
    {/* <hr />
    <Greeting />
    <hr />
    <Greeting2 />
    <hr />
    <Fortest /> */}
    {/* <Calc1 num1="100" num2={200}/>
    <Calc1 num1={10} num2={20}/>
    <Calc1 num1={1} num2={2}/>
    <Calc2 num1={100} num2={200}/>
    <Calc2 num1={10} num2={20}/>
    <Calc2 num1={1} num2={2}/> */}
    {/* <StyleProps color="red" backgroundColor="green" width="300px"/> */}
    {/* <State_User1/>
    <State_User2/> */}
    {/* <Expression/> */}
    {/* <SignUp />
   */}

    {/* <MyReactDom1 title="MyReactDom1"/>
    <MyReactDom2 title="MyReactDom2"/> */}
    {/* <SignUp /> */}

    {/* <Book t="소플의 처음 만난 리액트" body="리액트 기초를 설명하는 책입니다" author="이인제
" price="20000" >안녕</Book>
<Book t="html 입문" body="html, css, java script, jquery 등 frent end 기술을 설명합니다. " 
author="윤인성" price="30000"/>
<Book t="모던 자바스크립트" body="일본서를 번역한 자바 스크립트 기술 관련 책입니다." 
author="서재원" price="35000"/> */}
  {/* <ParentTest /> */}
  {/* <MyContextTest/> */}
  {/* <MyButton color="green" backgroundColor="silver">버튼1</MyButton>
  <MyButton color="pink" backgroundColor="black">버튼2</MyButton>
  <MyButton color="navy" backgroundColor="lightgreen">버튼3</MyButton>
  <MyButton>버튼4</MyButton> */}

  {/* <NumberList /> */}
  {/* <BoardList pagetitle="나의 리액트 게시판" seq="번호" title="제목" writer="작성자" /> */}
  
  <ServerConnection_boot></ServerConnection_boot>
  </React.StrictMode>


);

reportWebVitals();
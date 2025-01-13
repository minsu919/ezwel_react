import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NumberList from './NumberList copy';
import {Main, NoMatch, OneNumber} from './Main';
import BoardList from './BoardList';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>

    <Link to="/NumberList copy">NumberList 컴포넌트로 이동합니다</Link><br/>
    <Link to="/number/100">OneNumber 컴포넌트로 이동합니다</Link><br/>
    <Link to="/">Main 컴포넌트로 이동합니다</Link><br/>
    <Link to="/BoardList">BoardList 컴포넌트로 이동합니다</Link><br/>

    <Link to="/a">노매치로 이동합니다</Link><br/>

    <Routes>
    <Route path="/NumberList copy" element={<NumberList />}></Route>
    <Route path="/BoardList" element={<BoardList />}></Route>

    <Route path="/" element={<Main />}></Route>
    <Route path="/number/:num1" element={ <OneNumber /> }></Route> 
    <Route path="*" element={<NoMatch />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
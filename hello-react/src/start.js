// import React from "react";
// // 함수 선언식으로 정의하는 리액트 컴포넌트

// function Hello1(){
//     let msg = `나의 리액트 컴포넌트 생성`;
//     let msg3 = `(함수선언식)`;

//     return <div><h1>{msg}</h1><h3>{msg3}</h3></div>; // jquery 문법에서 '$'만 뺀다
// }

// // 익명함수(리액트 컴포넌트 내용 불변)
// const Hello2 = function (){
//     let msg = `나의 리액트 컴포넌트 생성`;
//     let msg3 = `(익명의 함수)`;

//     return <div><h1>{msg}</h1><h3>{msg3}</h3></div>; // jquery 문법에서 '$'만 뺀다
// }

// const Hello3 = () => <div><h1>나의 리액트 컴포넌트 생성</h1><h3>(화살표 함수)</h3></div>; // jquery 문법에서 '$'만 뺀다
// // 클래스 표현

// class Hello4 extends React.Component{
//     render(){ //React.Component render() - 상속 뭔가 구현되었을지라도 --- Hello4
//         return <div><h1>나의 리액트 컴포넌트 생성</h1><h3>(클래스 구조)</h3></div>;
//     }
// }

// function Hello5 (){
//     return <div>
//         <h1>
//             나의 리액트 컴포넌트 생성
//         </h1>
//         <h3>
//             (클래스 구조)
//         </h3>
//     </div>;
// }
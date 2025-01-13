import React from "react";

function Greeting(){
    let insa1 = "오늘도 즐거운 하루 되세요";
    let insa2 = "안녕하세요 리액트입니다";
    let insa3 = "오늘 날씨 어때요?";
    // 랜덤하게 인사 출력
    // 자바스크립트 내장함수
    let random = parseInt(3 * Math.random());
    let result ;
    // if (random == 0){result = insa1;}
    // else if (random == 1){result = insa2;}
    // else {result = insa3;}

    return <h1>{random} : {random == 0? insa1 : random == 1? insa2 : insa3}</h1>;
}
 class Greeting2 extends React.Component{
    constructor(){
        // this 활용
        super();
        this.insa1 = "오늘도 즐거운 하루 되세요";
        this.insa2 = "안녕하세요 리액트입니다";;
        this.insa3 = "오늘 날씨 어때요?";
        this.random = parseInt(3 * Math.random());;
    }

    render(){
        return <h1>{this.random} : {this.random == 0? this.insa1 : this.random == 1? this.insa2 : this.insa3}</h1>;
    }
 }
export {Greeting as default, Greeting2}
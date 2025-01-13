import React, { useState } from "react";

class State_User1 extends React.Component{
    constructor(){
        super();
        //1-브라우저 출력 이전
        //변수 초기화. 조작
        this.state = {id:"id의 초기값", name:"name의 초기값"}
        this.dept = "dept의 초기값"; // render 포함 클래스 영역 모두 사용가능. 수정x
    }
    
    render(){

        let Handlerfunction = () => {

            // 현재 자신의 객체 (익명함수-button this)
            // 현재 자신의 객체 (화살표함수-State_User1 this)
            this.setState({id:"id의 수정값", name:"name의 수정값", dept:"dept의 수정값"})
        }


     //2-브라우저 출력
        return <div>
            <h3>id출력 : {this.state.id} </h3>
            <h3>name출력 : {this.state.name} </h3>
            <h3>dept출력 : {this.dept} </h3>

            <button onClick={Handlerfunction}>변경</button>
            </div>
    } // render ed
}

function State_User2 (){

    // this.props
    // this.state
    // this.setState() 함수형 컴포넌트에는 없다

    //함수형 useState() 리액트내장라이브러리 사용
    // let func_state =  useState("초기값");
    // let id = func_state[0];
    // let setId = func_state[1];
    // return <div><h2>useState타입{func_state.constructor.name} : state변수초기값={id}</h2></div>

//    return <div>{func_state.constructor.name}</div>
    let [obj, setObj1] = useState({id: "초기값", count: 100});

    let Handlerfunction = () => {
        setObj1({...obj, count:1000}); //... 복사 연산자
        
        //setObj({id: "변경값", count:1000}); 
    }
    return (
    <div>
        <h2>state변수값={obj.id}</h2>
        <h2>count변수값={obj.count}</h2>
        <button onClick={Handlerfunction}>변경</button>
    </div>
    );
}

export {State_User1,State_User2};
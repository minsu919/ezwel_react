import React from "react";

class Calc2 extends React.Component {
    render(){
        let props = this.props;
        props.num1 = 1000;
        let add = parseInt(props.num1) + parseInt(props.num2);
        let sub = props.num1 - props.num2;
        let mul = props.num1 * props.num2;
        let div = parseInt(props.num1 / props.num2);

    return (
        <div>
            <h3>{props.num1}+{props.num2}={add}</h3>
            <h3>{props.num1}-{props.num2}={sub}</h3>
            <h3>{props.num1}*{props.num2}={mul}</h3>
            <h3>{props.num1}/{props.num2}={div}</h3>
        </div>
    );
    }
}

function Calc1(props){
    let add = parseInt(props.num1) + parseInt(props.num2);
    let sub = props.num1 - props.num2;
    let mul = props.num1 * props.num2;
    let div = parseInt(props.num1 / props.num2);

    return (
        <div>
        <h3>{props.num1}+{props.num2}={add}</h3>
        <h3>{props.num1}-{props.num2}={sub}</h3>
        <h3>{props.num1}*{props.num2}={mul}</h3>
        <h3>{props.num1}/{props.num2}={div}</h3>
        </div>
    )
}

function StyleProps(p){
    // index.js <StyleProps color="red" backgroundColor="green" width="300px">
    // 전달받은 요소들로 h3 스타일 지정
    return <h3 style = {{color :p.color , backgroundColor : p.backgroundColor, width :p.width}}>StyleProps 컴포넌트 실행중</h3>;
}
export {Calc1 as default, StyleProps, Calc2};
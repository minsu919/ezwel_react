import React from "react";

class ParentTest extends React.Component {
    constructor(){
        super();
        this.state = {key:"부모 state key 초기값", count:0};
        this.click = 0;
    }
    // 함수 정의 컴포넌트 x
    changeState = ev => {
        this.setState({key: ev.target.value + ++this.click}) // 여기의 this = button
    }
    render(){
        // 조작구현
        return <div>
          <h3>{this.state.key}</h3>

          <button onClick={this.changeState} value="버튼 클릭 횟수 =">버튼클릭(부모)</button>
          <ChildTest key={this.state.key} changeState={this.changeState}/>
          {/*props -부모의 state변경 가능 메소드 전달, 부모의 state 변수*/}
        </div>
    }
}


class ChildTest extends React.Component {
    constructor(){
        super();
        this.state = {key2:"부모 state key 초기값", count:0};
        this.click2 = 0;
    }
    // 함수 정의 컴포넌트 x
    changeState2 = ev => {
        this.setState({key2: ev.target.value + ++this.click2}) // 여기의 this = button
    }

    render(){
        // 조작구현
        return <div>
          <hr/>
          <h3>부모로부터 전달받은 props 변수 = {this.props.key}</h3>
          <button onClick={this.props.changeState} value="버튼 클릭 횟수 =">버튼클릭(부모props(state)변경)</button>

          <h3>자식 state 변수 = {this.state.key2}</h3>
          <button onClick={this.changeState2} value="버튼 클릭 횟수 =">버튼클릭(자식)</button>
        </div>
    }
}
export {ParentTest, ChildTest}
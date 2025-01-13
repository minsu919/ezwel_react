function MyReactDom1(p){

    return (
    <div>
      <h1>나의 돔구조 : {p.title}</h1>
      <MyButton buttonTitle="이미지버튼" />
      <Time />
    </div>
    );
    
}

function MyReactDom2(p){

    return (
        <div>
          <h1>나의 돔구조 : {p.title}</h1>
          <Time />
        </div>
        );
}

function MyButton(param){ //추출하여 1개의 리액트 컴포넌트 정의. 재사용 용이 
    return <button><p>버튼을 표현하는 React_dom 입니다. {param.buttonTitle}</p>
      <img src="http://localhost:4000/logo192.png" ></img></button>;
}

function Time(){

    return <div><h1>시간를 표현합니다</h1><h2>현재시간: {new Date().toLocaleTimeString()} </h2></div>

}

export {MyReactDom1,MyReactDom2}
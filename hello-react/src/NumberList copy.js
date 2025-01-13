import { useState } from "react";
import styled from "styled-components";
import { StyledButton1 } from "./myStyledComponent";

const StyledButton = styled.button`
//   margin: 5px;
//   padding: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const StyledTextarea = styled.input`
//   width: 100%;
//   height: auto; // 높이를 자동으로 조정
//   min-height: 40px; // 최소 높이 설정
//   margin-bottom: 10px;
//   padding: 5px;
//   border: 3px solid #ccc;
//   border-radius: 5px;
//   overflow: hidden; // 내용이 넘칠 경우 숨김
// `;

function NumberList(){

    // 배열 변수 선언 [] state

    //1. 배열의 내용 출력 - <ul><li></li></ul>
    //2. 값 1개 입력 text타입 input
    //3. button 3개 - 추가, 수정, 삭제 Styled 형태 사용

    //값 입력하고 추가 버튼 클릭시 배열 마지막 요소 추가
    //값 입력하고 수정 버튼 클릭시 배열 마지막 요소 수정
    //삭제 버튼 클릭시 배열 마지막 요소 삭제
    // 버튼 클릭하여 해당 작업 수행결과 화면에 즉각 반영 

  let numarray = [1,2,3,4,5];


  const [num,setNum] = useState();
  const [state_array,setArray]  = useState (numarray);

  let numarray_map = state_array.map(function(item, index){
    return <li>{item}</li>;
  });

  const changeinput = function(ev){
    setNum(ev.target.value);
  }
  
  const add = function(){

    let new_array = [...state_array];
    new_array.push(num);
    setArray(new_array);
  }

  const modify = function(){

    let new_array = [...state_array];
    new_array[new_array.length-1] = num;
    setArray(new_array);
  }

  const del = function(){

    let new_array = [...state_array];
    new_array.pop();
    setArray(new_array);
  }

  return <div>
    <ul>{numarray_map}</ul>

    값 입력 : <input type="text" onChange={changeinput} value={num}></input>
    <StyledButton1 color="navy" background="silver" onClick={add}>추가</StyledButton1>
    <StyledButton1 color="red" background="skyblue" onClick={modify}>수정</StyledButton1>
    <StyledButton1 color="blue" background="pink" onClick={del}>삭제</StyledButton1>

  </div>
}

export default NumberList;

//데이터 조회 (데이터를 전체 / 일부/ 검색 조건), 추가,수정,삭제 웹프로젝트 기본 - CREATE/READ/UPDATE/DELETE
import { useState } from "react";

function SignUp(){

    //const [form, setForm] = useState({userName : "이름입력" , gender : "성인여자", memo : ""})
    
    // const changeForm = (field, value) => {
    //     setForm(prevForm => ({
    //         ...prevForm,
    //         [field]: value
    //     }));
    // };


    const [userName, setUserName] =  useState("이름입력");
    const changeName = function(ev){
        setUserName(ev.target.value);
    }

    const [gender, setGender] =  useState("성인여자");
    const changeGender = function(ev){
        setGender(ev.target.value);
    }
    const [memo, setMemo] =  useState("ㅇ");
    const changeMemo = function(ev){
        setMemo(ev.target.value);
    }

    const handlerSubmit = function(ev){
        if (!userName || !gender || !memo) ev.preventDefault();
        setUserName("");
        setGender("");
        setMemo("");
        //이름, 성별, 기타 선택사항 출력이 공백
    }
    return (
      <div>
        <hr/>
        <form onSubmit={handlerSubmit} action="http://localhost:8080/a.jsp">
            <label for="name">이름 : </label><input type="text" name="username" id="name" value={userName} onChange={changeName}></input>
            성별 : <select value={gender} onChange={changeGender}>
                <option>성인남자</option>
                <option>성인여자</option>
                <option>미성년남자</option>
                <option>미성년여자</option>
            </select>
            <label for="memo">기타 : </label><textarea value={memo} onChange={changeMemo}></textarea>
            <button type="submit">회원가입</button>
        </form>
        <h3>{userName} : {gender}</h3>
        <h3>{memo}</h3>

        <div> 회원가입 버튼 클릭마다 가입 회원의 이름만 출력 </div>
      </div>);
}

export default SignUp
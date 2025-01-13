import { useState } from "react";

function SignUp() {
    const [form, setForm] = useState({
        userName: "이름입력",
        gender: "성인여자",
        memo: ""
    });

    const changeForm = (field, value) => {
        setForm(prevForm => ({
            ...prevForm,
            [field]: value
        }));
    };

    const handlerSubmit = (ev) => {
        ev.preventDefault();
        
        const { userName, gender, memo } = form;
        if (!userName || !gender || !memo) {
            alert("모든 필드를 입력해 주세요!");
            return;
        }

        // 여기서 form 제출 로직 추가
        console.log(`가입 회원: ${userName}, 성별: ${gender}, 기타: ${memo}`);
        
        // 입력 필드 초기화
        setForm({ userName: "", gender: "성인여자", memo: "" });
    };

    return (
        <div>
            <hr />
            <form onSubmit={handlerSubmit}>
                <label htmlFor="name">이름 : </label>
                <input
                    type="text"
                    name="username"
                    id="name"
                    value={form.userName}
                    onChange={(ev) => changeForm("userName", ev.target.value)}
                />
                성별 :
                <select
                    value={form.gender}
                    onChange={(ev) => changeForm("gender", ev.target.value)}
                >
                    <option>성인남자</option>
                    <option>성인여자</option>
                    <option>미성년남자</option>
                    <option>미성년여자</option>
                </select>
                <label htmlFor="memo">기타 : </label>
                <textarea
                    value={form.memo}
                    onChange={(ev) => changeForm("memo", ev.target.value)}
                />
                <button type="submit">회원가입</button>
            </form>
            <h3>{form.userName} : {form.gender}</h3>
            <h3>{form.memo}</h3>
            <div>회원가입 버튼 클릭마다 가입 회s원의 이름만 출력</div>
        </div>
    );
}

export default SignUp;

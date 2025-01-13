import { useState } from "react";

//
function Expression(){
    const item = "card";
    const price = 12000;
    const product = "커피";
    const amount = 3;
    const [image,setImage] = useState("http://localhost:8080/html/images/coffee.gif")
    const changeImg = function(){
        setImage("http://localhost:8080/html/images/cafelatte.jpg");
    }

    return <div>
        <h1>{item} - {price * 2}를 지불하셨습니다</h1>
        <h2>{product} {amount}잔을 구매하셨습니다</h2>
        <img src={image} alt={product}/>
        <button onClick={changeImg}>이미지변경</button>
    </div> ;
}

export default Expression
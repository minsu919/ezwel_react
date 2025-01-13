//
function Expression(){
    const item = "card";
    const price = 12000;
    const product = "커피";
    const amount = 3;
    const image = "http://localhost:8080/html/images/coffee.gif";
    return <div>
        <h1>{item} - {price * 2}를 지불하셨습니다</h1>
        <h2>{product} {amount}잔을 구매하셨습니다</h2>
        <img src={image} alt={product}/>
    </div> ;
}

export default Expression
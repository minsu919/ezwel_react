function Fortest(){
    // let weekDayArray = ['월','화','수','목','금','토','일'];
    // let map1 = weekDayArray.map(function(data,index){
    //     //alert(index + "번째의 데이터 = " + data + "요일");

    //     return <h3>{index}번째의 데이터 = {data}요일</h3>;
    // }); // 실행결과 모아서 리턴

    // return <div>{map1}</div>;

    // let foreach1 = [];
    // weekDayArray.forEach(function(data, index){
    //     foreach1.push(<h3>{index}번째의 데이터 = {data}요일</h3>);
    // });

    // function array_loop(){
    //     let result = [];
    //     for(let i=0; i< weekDayArray.length; i++){
    //         result.push(<h3>{i}번째의 데이터 = {weekDayArray[i]}요일</h3>); // jsx
    //     } // for end
    //     return result;
    // }
    // return <div>{array_loop()}</div>;
    let num_array = [34,67,56,77,13,17,68,99,100,6,7];
    let test = num_array.map(function(data, index){
        return <h3>{data} - {data % 2 == 0? "짝수":"홀수"}이다.</h3>;
    });
    return <div>{test}</div>;

}
export default Fortest;
function Book(p){
    return (
      <div>
        <h1>{p.children}</h1>
        <HeaderPart title={p.t}/>
        <BodyPart body={p.body}/>
        <FooterPart author={p.author} price={p.price}/>
      </div>
    );
}

function HeaderPart(props){
    let headerStyle =  {backgroundColor:"red", color:"white", fontSize:"32px"}
    return (
    <div><h1 style={headerStyle}>{props.title}</h1></div>
    );
}

function BodyPart(props){
    return (
    <div><h3 style={{border:"blue solid 2px ", textAlign:"left", height:"40px"}}>{props.body}</h3></div>
    );
}

function FooterPart(props){
    return (<div>
        <h4 style={{border:"green solid 2px ", fontSize: "15px",alignItems:"center" }}>저자 {props.author}  가격 {props.price}</h4>
        
    </div>);
}

export default Book
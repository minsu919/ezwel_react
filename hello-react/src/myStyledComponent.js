
// 스타일드, 컨텍스트
import styled from "styled-components";


export const StyledButton1 = styled.button`
    color : ${p => p.color || 'black'};
    
    background : ${p => p.background || 'white'};
    border : 1px solid red;

`;

let StyledButton2 = styled(StyledButton1)`
    width : 100px;
    height : 100px;
`;
const StyledImage = styled.img`
    border : 3px solid red;
    background : silver;
    width : 100px;
    height : 100px;
    padding : 20px;
    border-radius : 10px;

`;

function MyButton(p){ //{p.children,p.color,p.background}
    return <div>
        <button>그냥{p.children}</button>
        <StyledButton1 color={p.color} background={p.backgroundColor}>스타일드{p.children}</StyledButton1>
        <StyledImage src="http://localhost:4000/logo192.png"/>
        <StyledButton2 color={p.color} background={p.backgroundColor}>스타일드2{p.children}</StyledButton2>
        
    </div>;
}

export default MyButton
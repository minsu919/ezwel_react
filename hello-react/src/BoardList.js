import { useState } from "react";

function BoardList(props){
    // boardArray 수정하더라도 반영 x : state
    const boardArray = [
        {seq:1, title:"제목1",writer:"작성자1"},
        {seq:2, title:"제목2",writer:"작성자2"},
        {seq:3, title:"제목3",writer:"작성자3"},
        {seq:4, title:"제목4",writer:"작성자4"},
        {seq:5, title:"제목5",writer:"작성자5"},
    ];

    const [board , setBoard] = useState(boardArray);

    const addBoard = oneboard => {
        let newboard = [...board];
        newboard.push(oneboard);
        setBoard(newboard);
    };

    const delBoard = (seq) => {
        let newboard =[...board];
        for(let i=0; i<board.length; i++){
            if(board[i].seq == seq){ newboard.splice(i, 1);}
        }
        setBoard(newboard);
    };

    const modBoard = (updateboard) => {
        // let newboard = [...board];
        // for(let i=0;i<board.length;i++){
        //     if(newboard[i].seq == updateboard.seq){
        //         newboard[i] = updateboard;
        //     }
        // }

        let newboard = board.map(function(data){
           return data.seq == updateboard.seq? updateboard : data;
        })
        setBoard(newboard);
    };

    return (<div style={{width:"600px", margin:"auto"}}>
        
        <h1>{props.pagetitle}</h1> 
        <table border="3">
        <BoardHeading seq={props.seq} title={props.title} writer={props.writer}/>
        <Board board={board} delBoard={delBoard} modBoard={modBoard}/>
        </table>
        <BoardForm  board={board} addBoard={addBoard} />
        //boardArray 출력


    </div>)
}

function BoardHeading(props){
    return <thead><tr><th>{props.seq}</th><th>{props.title}</th><th>{props.writer}</th><th>추가동작(수정/삭제)</th></tr></thead> ;
}

function Board(props){
    const [update, setUpdate] = useState({
        isUpdateClick : false,
        updateSeq : 0,
        updateTitle : "",
        updateWriter: "",
    });
    const delBoard_child = (event) => { props.delBoard(event.target.id);}  // 삭제버튼 클릭시 id값 전달이 props delBoard(게시물번호)

    const modBoard_child = (event) => {props.modBoard(event.target.id);}


    const changeTitle = (e) => setUpdate({...update, updateTitle : e.target.value});
    const changeWriter = (e) => setUpdate({...update, updateWriter : e.target.value});

    const updateBoard_child = (e) => { 

        setUpdate({isUpdateClick : true, updateSeq:e.target.id, updateTitle:'', updateWriter:''});
    }

    const updateDone_child = (e) => { 

        props.modBoard({seq:e.target.id, title:update.updateTitle, writer:update.updateWriter});
        setUpdate({...update, isUpdateClick : false});
    }
    let result = props.board.map(function(data){
        
        return <tr>
            <td>{data.seq}</td>
            <td>{data.title}</td>
            <td>{data.writer}</td>
                {update.isUpdateClick && (data.seq == update.updateSeq)?
            <td>
                <input type="text" value={update.updateTitle} onChange={changeTitle}></input>
                <input type="text" value={update.updateWriter} onChange={changeWriter}></input>
                <button onClick={updateDone_child} id={data.seq}>수정완료</button>
            </td>
            :
            <td>
                <button onClick={updateBoard_child} id={data.seq}>수정</button>
                <button onClick={delBoard_child} id={data.seq}>삭제</button>
            </td>
            }
        </tr>
    })
    // board에 전달받은 배열 tr, td 출력
    return <tbody>{result}</tbody>;
}

function BoardForm(props){
    // 폼-제목,제목입력input,작성자,작성자입력input,게시물추가버튼
    const [title, setTitle] = useState("초기제목");
    const [writer, setWriter] = useState("초기작성자");

    const changeTitle = e => setTitle(e.target.value);
    const changeWriter = e => setWriter(e.target.value);
    const addBoard_child = function(){
        props.addBoard({seq: props.board[props.board.length - 1].seq + 1, title:title, writer:writer});
        setTitle("");
        setWriter("");
    }
    return (<div>
        <hr/>
        <fieldset>
            게시물제목:<input type="text" value={title} onChange={changeTitle}></input>
            게시물작성자:<input type="text" value={writer} onChange={changeWriter}></input>
            <button onClick={addBoard_child}>게시물추가</button>
        </fieldset>
        
    </div>);
}

export default BoardList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./table/board.js"


const TestBoardPage = () =>{
  const [BoardData, SetBoard] = useState();

  useEffect(() => {
    const url = "http://localhost:8080/api/test";
    axios({
      method: 'get',
      url: url
    }).then(function (response) {
        console.log("성공");
        console.log(response.data); 
        SetBoard(response.data);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  }, []);

  return(
    <div>
        {BoardData ? (<Board data = {BoardData}> </Board>): (<div></div>)}
    </div>
  )
  
  
}

export default TestBoardPage;

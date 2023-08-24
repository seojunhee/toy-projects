import React from "react";
import "./testBoardPage.css"

const board = (data) =>{



    return (
    <div className="testBoardPage">
      <h1>게시판 만들기(연습용)</h1>
      <table className="board">
        <thead className='board-head'></thead>
        <tbody>
        <tr className='board-body'>
          <td className='board-body-child'>index</td>
          <td className='board-body-child'>userId</td>
          <td className='board-body-child'>userName</td>
          <td className='board-body-child'>userPw</td>
        </tr>
        {data.data.map((num, index) => <tr className='board-body' key = {index}>
          <td className='board-body-child'>{data.data[index].idx}</td>
          <td className='board-body-child'>{data.data[index].userId}</td>
          <td className='board-body-child'>{data.data[index].userName}</td>
          <td className='board-body-child'>{data.data[index].userPW}</td>
        </tr>)}
        </tbody>
      </table>
    </div>
  )
    
}

export default board;
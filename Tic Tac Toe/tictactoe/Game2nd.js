import React from 'react';
import { useState } from 'react';
export default function Game2nd() {

    const Square = (props) => {
        return (
            <button onClick={props.onclick} className='squares'>
                {props.value}
               
            </button>

        )
    }

    function calculateWinner(squares){
        const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]];

        for (let line of lines){
            const[a,b,c] = line;
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
                return squares[a];
        }
        return null
    }

    const Board = () => {

        const initialSquare = Array(9).fill(null)
        const [squares, setSquares] = useState(initialSquare);
        const [xisNext, setxisNext] = useState(true);
        const handleclickevent = (i) => {
            const sqauresCopy = [...squares];

            const winnerdeclared = Boolean(calculateWinner(sqauresCopy))
             const squaresfilled = sqauresCopy[i];
             if(winnerdeclared || squaresfilled){
                return;
             }

            sqauresCopy[i] = xisNext ? "X" : "O";
            setSquares(sqauresCopy)
            setxisNext(!xisNext)
        }
        const winner = calculateWinner(squares)

        const status = winner ? `Winner ${winner}` : `Next Player : ${xisNext ? "X" : "O"}`;
       
        const rendersquare = (i) => {
            return (
                <div>
                    <Square
                        value2nd = {i}
                        value={squares[i]}
                        onclick={() => handleclickevent(i)} />
                </div>

            )
        }


        return (
            <div className='board'>
                Board
                <div>{status}</div>
                <div className='boardrow'>
                    {rendersquare(0)}{rendersquare(1)}{rendersquare(2)}
                </div>
                <div className='boardrow'>
                    {rendersquare(3)}{rendersquare(4)}{rendersquare(5)}
                </div>
                <div className='boardrow'>
                    {rendersquare(6)}{rendersquare(7)}{rendersquare(8)}
                </div>


            </div>

        )
    }



    return (
        <div className='TicTacToe'>
            Game
            <Board />
        </div>


    )
}
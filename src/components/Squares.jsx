// import React from 'react'
import { useState } from 'react'

function Squares({ value, handleClick }) {
    return (
        <>
            <button className='h-8 w-8 border border-black text-center' onClick={handleClick} >{value}</button>
        </>
    )
}

function Board() {
    const [squareValues, setSquareValue] = useState(Array(9).fill(null))
    const [isX, setX] = useState(true)
    const [winner, setwinner] = useState(null);
    // const [counter, setcounter] = useState(0)



    const onSquareClick = (i) => {

        //if value exists, returns; to stop the over-written
        if(squareValues[i]){
            return;
        }

        const newSquare = squareValues.slice()
        if(isX){
             newSquare[i] = "X"
            //  setcounter(counter+1)
        }else{
            newSquare[i]='O'
            // setcounter(counter+1)
        }
        setSquareValue(newSquare)
        setX(!isX)

        const winner=winnerCheck(newSquare)

        if(winner){
            setwinner(winner);
        }
    }

    const winnerCheck=(squareValues)=>{
        const winnerPatterns=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
            for(let i=0;i<winnerPatterns.length;i++){
               let [a,b,c]=winnerPatterns[i]
               if(squareValues[a] && squareValues[a]===squareValues[b] && squareValues[a]===squareValues[c]){
                        return squareValues[a]
               }
            
            }
            return null;
    }
    return (
        <>
            <div className='flex'>
                <Squares value={squareValues[0]} handleClick={() => onSquareClick(0)} />
                <Squares value={squareValues[1]} handleClick={() => onSquareClick(1)} />
                <Squares value={squareValues[2]} handleClick={() => onSquareClick(2)} />
            </div>
            <div className='flex'>
                <Squares value={squareValues[3]} handleClick={() => onSquareClick(3)} />
                <Squares value={squareValues[4]} handleClick={() => onSquareClick(4)} />
                <Squares value={squareValues[5]} handleClick={() => onSquareClick(5)} />
            </div>
            <div className='flex'>
                <Squares value={squareValues[6]} handleClick={() => onSquareClick(6)} />
                <Squares value={squareValues[7]} handleClick={() => onSquareClick(7)} />
                <Squares value={squareValues[8]} handleClick={() => onSquareClick(8)} />
            </div>
           {winner?<p>winner is {winner}</p>:null}
        </>
    )
}
export default Board

import React from 'react'
import { Cell } from './Cell';
import {useState ,useEffect} from 'react';
import "../css/board.css";
import { WinningMessage } from './WinningMessage';



export const Board = () => {

    const [counter,setCounter]=useState(0);

    const [Table, setTable] = useState(["","","","","","","","",""]);

    const [playerX,setPlayerX]=useState({

        countWin:0,
        symbol:"X"
    });

    const [playerO,setPlayerO]=useState({
        countWin:0,
        symbol:"O"
    });

  
    function restartGame(){

        let restartTable=["","","","","","","","",""];
        setTable(restartTable);
        setCounter(0);

    }

    function chekeWhoIsTheWinner(symbol){

        if(symbol===playerX.symbol){
            playerX.countWin++;
            restartGame();
        }else{
            playerO.countWin++;
            restartGame();
        }
    
        localStorage.setItem("playerO",JSON.stringify(playerO));
        localStorage.setItem("playerX",JSON.stringify(playerX));


    }


    function chekeIfExistWining(){

        if(Table[0]===Table[1]&&Table[0]===Table[2]&&Table[0]!=""&&Table[1]!=""&&Table[2]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[0]);
            return;
        }
        if(Table[3]===Table[4]&&Table[3]===Table[5]&&Table[3]!=""&&Table[4]!=""&&Table[5]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[3]);
            return;
        }
        if(Table[6]===Table[7]&&Table[6]===Table[8]&&Table[6]!=""&&Table[7]!=""&&Table[8]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[6]);
            return;
        }
        if(Table[0]===Table[3]&&Table[0]===Table[6]&&Table[0]!=""&&Table[3]!=""&&Table[6]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[0]);
            return;
        }
        if(Table[1]===Table[4]&&Table[1]===Table[7]&&Table[1]!=""&&Table[4]!=""&&Table[7]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[1]);
            return;
        }
        if(Table[2]===Table[5]&&Table[2]===Table[8]&&Table[2]!=""&&Table[8]!=""&&Table[2]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[2]);
            return;
        }
        if(Table[0]===Table[4]&&Table[8]===Table[4]&&Table[0]!=""&&Table[4]!=""&&Table[8]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[4]);
            return;
        }
        if(Table[2]===Table[4]&&Table[6]===Table[2]&&Table[2]!=""&&Table[6]!=""&&Table[4]!=""){
            console.log("win");
            chekeWhoIsTheWinner(Table[0]);
            return;
        }

    }

     function getDataFromLocalStorage(){
     
        if(localStorage.getItem("playerO")){
         setPlayerO(JSON.parse(localStorage.getItem("playerO")));
         setPlayerX(JSON.parse(localStorage.getItem("playerX")));
        }

     }


    useEffect(()=>{

        chekeIfExistWining();

    },[Table])

    useEffect(()=>{

        getDataFromLocalStorage();

    },[])


  return (

     <div className='container-board'>

        <div>TIC TAC TOE</div>
   
     {
       Table.map((item,index)=>{return <Cell 
                                        id={index} currentstate={item}
                                         Table={Table} setTable={setTable}
                                         counter={counter} setCounter={setCounter}
                                          /> })
    
     } 

     <button className='buttonRestart' onClick={()=>restartGame()}>Restart</button>

     <WinningMessage  playerO={playerO}  playerX={playerX} />

    </div>
  )
}

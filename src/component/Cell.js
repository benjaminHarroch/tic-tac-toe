import React from 'react'
import {useState ,useEffect} from 'react';

import "../css/cell.css";

export const Cell = ({currentstate,Table,setTable,id,counter,setCounter}) => {



    function changecurrentState(){

        if(Table[id]!=""){
            return;
        }

        let newTable=[...Table];

        if(counter%2===0){
            newTable[id]="X";
            setTable(newTable);
            
        }else{
            newTable[id]="O";
            setTable(newTable);
        }
        
        setCounter(prev=>prev+1);

        
    }


  return (

    <div id={id} className="container-Cell" onClick={()=>changecurrentState()}>
        <div>{currentstate}</div>
    </div>
  )
}

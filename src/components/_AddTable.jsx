import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function AddTable(){

    const [tableID, tableName, tableStatus, setTable] = useState('')
    
    function handleSubmit(e){
        //e.preventDefault()
        if(tableName === '' || tableID === '' || tableStatus === ''){
            return
        }
        const tablesCollectionRef = collection(db, 'mesas');
        addDoc(tablesCollectionRef, {tableID, tableName, tableStatus, assistantStatus: 'false'})
        .then(response => {
            console.log("ID do inserido: " + response.id);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return(
        <div>
            <h4>Adicionar mesa</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tableName">Nome da Mesa</label><br/>
                <input id="tableName" type="text" value={tableName}></input>
                <br/>
                <label htmlFor="tableID">ID da Mesa</label><br/>
                <input id="tableID" type="number"></input>
                <br/>
                <label htmlFor="tableStatus">Status da Mesa</label><br/>
                <input id="tableStatus" type="text"></input>
                {/*onChange={ e => setTable(e.target.value)} */}
                <br/><br/>
                <button type="Submit">Adicionar mesa</button>
            </form>
        </div>
    )
}
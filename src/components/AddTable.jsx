import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function AddTable(){

    const [tableName, setName] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        if(tableName === ''){
            return
        }
        const tablesCollectionRef = collection(db, 'mesas');
        addDoc(tablesCollectionRef, {tableName, assistantStatus: 'false'})
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
                <label htmlFor="name">Nome da Mesa</label>
                <br/>
                <input id="name" type="text" value={tableName} onChange={ e => setName(e.target.value)}></input>
                <br/><br/>
                <button type="Submit">Adicionar mesa</button>
            </form>
        </div>
    )
}
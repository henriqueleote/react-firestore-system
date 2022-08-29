import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function AddTable(){

    //const [tableName, setName] = useState('')
    const [tableID, setID] = useState('')

    
    function handleSubmit(e){
        e.preventDefault()
        if(/*tableName === '' ||*/ tableID === ''){
            alert("Preencha todos os campos");
        }else{
            const tablesCollectionRef = collection(db, 'mesas');
            addDoc(tablesCollectionRef, {/*tableName,*/ tableID, assistantStatus: 'false', tableStatus: 'fechada'})
            .then(response => {
                console.log("ID do inserido: " + response.id);
            })
            .catch(error => {
                console.log(error.message);
            })
        }
        
    }

    return(
        <div>
            <h4>Adicionar mesa</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tableID">ID da Mesa&nbsp;</label>
                <input id="tableID" type="number" value={tableID} onChange={ e => setID(e.target.value)}></input>
                <br/><br/>
                <button type="Submit" className="btn btn-success">Adicionar mesa</button>
            </form>
        </div>
    )
}
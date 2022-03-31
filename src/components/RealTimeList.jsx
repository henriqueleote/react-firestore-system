import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from '../lib/init-firebase'

export default function RealTimeList() {

    const [tables, setTables] = useState([]);
    //const tablesCollectionRef = collection(db, 'mesas'); //todos
    const q = query(collection(db, "mesas"), orderBy('tableID')); //com filtros

    useEffect(() => {

        //para alterar para o tablesCollectionRef basta substituir o "q"
        const unsubscribe = onSnapshot(q, snapshot => {
            setTables(snapshot.docs.map(doc => ({
                id: doc.id, data: doc.data()
            })))
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className='row'>
            {
            tables.map(table => (
                <div className='col-sm-3 card-margin'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title' key={table.id}>Mesa {table.data.tableID}</h5>
                            <p className='card-text' key={table.id}>{table.data.assistantStatus}</p>
                            <p className='card-text' key={table.id}>{table.data.tableStatus}</p>
                            <button type="Submit" class="status-btn btn-red"></button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, get, snapshotEqual } from "firebase/firestore";
import { db } from '../lib/init-firebase'

export default function RealTimeList() {

    const [tables, setTables] = useState([]);
    const [products, setProducts] = useState([]);
    const tablesCollectionRef = collection(db, 'mesas'); //todos
    const q = query(tablesCollectionRef, orderBy('tableID')); //com filtros
    const productsCollectionRef = collection(db, 'produtos'); //todos

    var array = [];

    class Table {
        constructor(tableID/*, tableStatus, assistantStatus, products = []*/) {
            this.tableID = tableID;
            //this.tableStatus = tableStatus;
            //this.assistantStatus = assistantStatus;
            //this.products = products;
        }
    }

    function teste() {

    }

    useEffect(() => {

        //para alterar para o tablesCollectionRef basta substituir o "q"
        const getTableData = onSnapshot(q, snapshot => {
            setTables(snapshot.docs.map(doc => ({
                id: doc.id, data: doc.data(), products: doc.data().produtos
            })))
        })
        
        /*const teste = onSnapshot(q, snapshot => {
            //console.log(snapshot.docs)
            snapshot.docs.map(doc => {
                //isto function para texto, não para referencias de documentos
                console.log(doc.data().produtos);
            })
        })*/


        /*var array = [];
        const unsub = onSnapshot(doc(db, "mesas", "H1OiVC83DnlK2Z0xyEct"), (doc) => {
            array.push(doc.data().produtos[0].value);
        });

        console.log(array);*/


        //nao sei se é preciso isto
        return () => {
            //getTableData();
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
                                <p className='card-text'>{table.data.assistantStatus}</p>
                                <p className='card-text'>{table.data.tableStatus}</p>
                                <p className='card-text'>oi {table.data.produtos}</p>
                                <button type="Submit" class="status-btn btn-red"></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
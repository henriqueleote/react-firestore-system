import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../lib/init-firebase'

export default function ProductsList() {

    const [products, setProducts] = useState([]);
    const tablesCollectionRef = collection(db, 'produtos'); //todos
    const q = query(tablesCollectionRef, orderBy('productID')); //com filtros

    useEffect(() => {

        //para alterar para o tablesCollectionRef basta substituir o "q"
        const unsubscribe = onSnapshot(q, snapshot => {
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id, data: doc.data()
            })))
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className='row'>
            <h4>Produtos</h4>
            {
            products.map(product => (
                <li key={product.id}>{product.data.productCategory} &gt; {product.data.productName} &gt; {product.data.productPrice}€</li>
            ))
            }
        </div>
    )
}
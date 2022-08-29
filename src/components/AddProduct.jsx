import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function AddProduct(){

    //const [tableName, setName] = useState('')
    const [productID, setID] = useState('')
    const [productName, setName] = useState('')
    const [productCategory, setCategory] = useState('')
    const [productPrice, setPrice] = useState('')


    
    function handleSubmit(e){
        e.preventDefault()
        if(productName === '' || productID === '' || productCategory === '' || productPrice === ''){
            alert("Preencha todos os campos");
        }else{
            const tablesCollectionRef = collection(db, 'produtos');
            addDoc(tablesCollectionRef, {productName, productID, productCategory, productPrice})
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
            <h4>Adicionar produto</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productID">ID do Produto&nbsp;</label>
                <input id="productID" type="number" value={productID} onChange={ e => setID(e.target.value)}></input>
                <br/><br/>
                <label htmlFor="productName">Nome do Produto&nbsp;</label>
                <input id="productName" type="text" value={productName} onChange={ e => setName(e.target.value)}></input>
                <br/><br/>
                <label htmlFor="productCategory">Categoria do Produto&nbsp;</label>
                <input id="productCategory" type="text" value={productCategory} onChange={ e => setCategory(e.target.value)}></input>
                <br/><br/>
                <label htmlFor="productPrice">Preço do Produto&nbsp;</label>
                <input id="productPrice" type="number" value={productPrice} onChange={ e => setPrice(e.target.value)}></input>
                <br/><br/>
                <button type="Submit" className="btn btn-success">Adicionar produto</button>
            </form>
        </div>
    )
}
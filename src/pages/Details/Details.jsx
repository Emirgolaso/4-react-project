import './details.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



const Details = ({buyFunc}) => {
    const [data,setData]=useState({});
    const params = useParams();
    useEffect(()=>{
axios(`https://fakestoreapi.com/products/${params.id}`)
.then(({data})=>setData(data))
    },[])
    return (
        <section>
            

        </section>
    );
}

export default Details;

import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url){
    const[data,setData]=useState([]);
    const[load,setLoad]=useState(true);
    const[error,setError]=useState(false);

    async function fetchData(){
        try {
            const response=await axios.get(url);
            setData(response.data);
            setLoad(false);
        } catch (error) {
            setLoad(false);
            setError(true);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return {data,load,error};

}
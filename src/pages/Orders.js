import React, {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import getOrders from '../service/orderService';


const Ordenes = () =>{

    const [orders,setOrders] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getOrders()
        .then(orders=>{
          setOrders(orders)
          setLoading(false)
      })
    }, []);
    
    return(
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Productos
        </Typography>
    )
}

export default Ordenes;
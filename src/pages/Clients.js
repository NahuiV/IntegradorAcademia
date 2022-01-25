import React, {useState,useEffect} from 'react';
import CartClient from '../components/Clients/CartClient';
import getClients from '../service/clientsService';
import Container from '@mui/material/Container';

const row = [1,"Nahuel","Villa","Particular","41062761","NOSE"]


const Clients = () => {
    const [clientsData,setClients] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      getClients()
        .then(clients =>{   
          setClients(createData(clients))
          setLoading(false)
          console.log(clients)
        })
    }, []);


    function createData(id,nombre,apellido,razonSocial,DNI,tipoDeCliente) {
        return { id,nombre,apellido,razonSocial,DNI,tipoDeCliente};
    }

    return(
        <Container maxWidth="sm">
            {clientsData.map(cliente=>(<CartClient data={cliente}/>))}
        </Container>
    )
}

export default Clients;
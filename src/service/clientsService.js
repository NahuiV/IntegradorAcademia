const ENDPOINT = 'http://localhost:8080'

const getClients = () =>{
    return(
        fetch(`${ENDPOINT}/clientes`,{
            method: 'POST',
            header:{
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(res=>{
            if(!res.ok) throw new Error('Response is not ok')
            return res.json()
        })
    )
}

export default getClients;
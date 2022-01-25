const ENDPOINT = 'http://127.0.0.1:8080/productos/findAll'

const getProducts = () => {
    return(
        fetch(`${ENDPOINT}/productos`,{
            method: 'GET',
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        })
        .then( res=>{
            if(!res.ok) throw new Error("Response is not ok")
            return res.json()
        })
        .then()
    )
}

export default getProducts;
import React, {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import getProducts from '../service/productService';

const Product = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      getProducts()
        .then(products =>{
          setProducts(createData(products))
          setLoading(false)
          console.log(products)
        })
    }, []);

    function createData(id, precio,stock, proveedor, categoria) {
      setLoading(loading)
      console.log('hola')
      return { id, precio, stock, proveedor, categoria };
    }
      
    return(
      <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Productos
      </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Proveedor</TableCell>
              <TableCell>Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.nombre}</TableCell>
                <TableCell align="right">{`$${product.precio}`}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.proveedor}</TableCell>
                <TableCell>{product.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    )
}

export default Product;
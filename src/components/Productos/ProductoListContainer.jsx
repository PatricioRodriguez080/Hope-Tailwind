import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../../services/productosService'
import SkeletonProductos from '../Skeletons/SkeletonProductos'
import ProductoList from './ProductoList'

const ProductoListContainer = () => {
    const { categoriaSelecionada } = useParams()
    const [productosAMostrar, setProductosAMostrar] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const productos = await getProductos(categoriaSelecionada)
                setProductosAMostrar(productos)
                setLoading(false)
            } catch (error) {
                console.log("Error al traer productos")
            }
        }

        fetchdata()
    }, [categoriaSelecionada])

    return (
        <div className='bg-marron-100 lg:px-28 pb-10'>
            {loading ? <SkeletonProductos /> : <ProductoList productos={productosAMostrar} categoriaSelecionada={categoriaSelecionada} />}
        </div>
    )
}

export default ProductoListContainer
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>()
  // router
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  return (
    <section>
      <h1>Página producto: {product?.name} </h1>
    </section>
  )
}

export default ProductPage

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {

  const [productList, setProductList] = useState<TProduct>([])

  useEffect(()=>{
   fetch('/api/avo').then(res=>res.json()).then(json=>setProductList(json.data))
  },[])

  const renderAvos=productList?.map(product=> <div className="">{product.name}</div> )

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {renderAvos}
    </div>
  )
}

export default HomePage

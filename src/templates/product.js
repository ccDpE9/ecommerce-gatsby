import React from "react"

import Layout from "../components/layout"
import ProductForm from "../components/ProductForm"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <Layout>
      <h1>{product.title}</h1>
      <ProductForm product={product} />
    </Layout>
  )
}

export default ProductTemplate

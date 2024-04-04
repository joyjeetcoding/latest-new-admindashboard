import EditProduct from '@/components/EditProduct';
import React from 'react'

async function getProductById(id) {
  try {
    const res = await fetch(`https://admindocx.vercel.app/api/products/${id}`, {
      method: "GET",
      cache: "no-store",
    })

    if(!res.ok) {
      console.log("Failed to fetch Product");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

async function EditformonProducts({params}) {

  const {id} = params;

  const {singleProduct} = await getProductById(id);
  const {deviceName, month, price, sales} = singleProduct;

  return (
    <>
      <EditProduct id={id} deviceName={deviceName} month={month} price={price} sales={sales} />
    </>
  )
}

export default EditformonProducts
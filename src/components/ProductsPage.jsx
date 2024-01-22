import React from 'react'
import Search from './Search'
import AddNewBtnProducts from './FormControls/addNEwProducts'

function ProductsPage({placeholder}) {
  return (
    <div>
      <div className="font-fontInput flex justify-between px-10 ">
        <div className="w-full relative">
          {/* Search bar */}
          <Search placeholder={"Search Products"} />
          <AddNewBtnProducts />
        </div>
        
      </div>
    </div>
  )
}

export default ProductsPage
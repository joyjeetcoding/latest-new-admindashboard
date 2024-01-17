import React from 'react'
import Search from './Search'

function ProductsPage({placeholder}) {
  return (
    <div>
      <div className="font-fontInput flex justify-between px-10 ">
        <div className="w-full">
          {/* Search bar */}
          <Search placeholder={"Search Products"} />
        </div>
        
      </div>
    </div>
  )
}

export default ProductsPage
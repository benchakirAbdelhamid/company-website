import React from 'react'
import img1 from './../imgs/imgContainer/manage-inventory-graphic.svg'
import img2 from './../imgs/imgContainer/manage-orders.svg'
import img3 from './../imgs/imgContainer/product-catalogue.svg'
import img4 from './../imgs/imgContainer/website-themes.svg'

import imgs1 from './../imgs/inventory.svg'
import imgs2 from './../imgs/manage-orders2.svg'
import imgs3 from './../imgs/product-cataloging.svg'
import imgs4 from './../imgs/responsive-design.svg'

// import './../script.js'

const OurFeatures = () => {
  return (
    <div className="py-16">

      <section class=" relative mx-auto isolate overflow-hidden bg-white px-6 py-8 ">
        <div className=" w-full">
          <blockquote class="text-center  ">
            <h2
              style={{ fontSize: "30px" }}
              className="font-semibold text-gray-800 mb-2"
            >
              Our Features
            </h2>
            <p className="text-gray-600  leading-7">
              Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis suscipit <br /> laboriosam nisi commodi consequatur.
            </p>
          </blockquote>
        </div>
      </section>



      <div class="container">
      <div class="selectItem">
        <div class="select active">
          <img src={imgs1} alt="responsive" />
          <div class="selectInfo">
            <h3>30+ Free Responsive Themes</h3>
            <p>
              Choose any free beautiful and responsive themes crafted by our
              ecommerce engineers.
            </p>
          </div>
        </div>

        <div class="select">
          <img src={imgs2} alt="responsive" />
          <div class="selectInfo">
            <h3>Product Cataloging</h3>
            <p>Upload products or bulk import with variants and inventory.</p>
          </div>
        </div>

        <div class="select">
          <img src={imgs3} alt="responsive" />
          <div class="selectInfo">
            <h3>Manage Orders</h3>
            <p>
              Manage confirmed orders, generate shipping waybill and tax
              invoice.
            </p>
          </div>
        </div>

        <div class="select">
          <img src={imgs4} alt="responsive" />
          <div class="selectInfo">
            <h3>Manage Inventory</h3>
            <p>Manage and track inventory of products with their variants.  </p>
          </div>
        </div>
      </div>

      <div class="selectedImg">
        <img src={img1} alt="img" />

        <img src={img2} alt="img" />

        <img src={img3} alt="img" />

        <img src={img4} alt="img" />
      </div>
    </div>

    </div>
  )
}

export default OurFeatures
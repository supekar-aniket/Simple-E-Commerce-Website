import Category from "./Category";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

function App() {

  let [products,setProducts] = useState([]);

  return (
    <>
      <div>
        <div className="max-auto">
          <h1 className="text-center text-[40px] p-[20px] mb-[20px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[25%_auto] gap-[15px]">
            <div>
              <Category setProducts={setProducts}/>
            </div>

            <div>
              <div className="grid grid-cols-4 gap-[15px] p-[10px]">
                <Product products={products} setProducts={setProducts}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



import { use, useState } from "react";
import type { ProductType } from "./types/types";
import Available from "./Available";
import SelectedCart from "./SelectedCart";

export interface ProductsProps {
    productPromise: Promise<ProductType[]>
}

const Products = ({ productPromise }: ProductsProps) => {

    const products = use(productPromise)
    const [buttonType,setButtonType] = useState("available")
    const handleSelectedButton = (type : "available" | "selected") => {
        setButtonType(type)
    } 

    const [selected,setSelected] = useState<ProductType[]>([])
    return(
        <>
            <div className="my-20">
               <div className="container flex flex-col items-center justify-center">
                  <h2 className="text-5xl mb-6">Premium Degital Tools</h2>
                  <div className="flex">
                      <button 
                      className={`py-2 px-6  rounded-full font-bold ${buttonType === "available" ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
                      onClick={() => handleSelectedButton("available")}
                      >Products</button>
                      <button 
                      className={`font-bold py-2 px-6 rounded-full ${buttonType === "selected" ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
                      onClick={() => handleSelectedButton("selected")}
                      >{selected.length === 0 ? "Cart" : `Cart(${selected.length})`}</button>
                  </div>
               </div>
            </div>
            
            {
                buttonType === "available"
              ?  <div className="grid grid-cols-3 gap-3 container mx-auto">
                   {
                     products.map((product:ProductType,index:number) => <Available  product = {product} key={index} selected={selected} setSelected ={setSelected}></Available>)
                  }
                </div>
                : <SelectedCart selected = {selected} setSelected = {setSelected} ></SelectedCart>
            }       
        </>
    )
}

export default Products;
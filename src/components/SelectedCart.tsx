import type { Dispatch, SetStateAction } from "react";
import type { ProductType } from "./types/types";
import SelectedProductCart from "./SelectedProductCart";

export interface SelectedCartProps {
    selected: ProductType[]
    setSelected: Dispatch<SetStateAction<ProductType[]>>
}

const SelectedCart = ({ selected,setSelected }: SelectedCartProps) => {

    console.log(selected);
    
    return (
        <>
            {
               selected.length === 0
               ? <div className="flex flex-col gap-4 justify-center items-center mb-20">
                    <h1 className="text-3xl text-black font-bold">No Selected Product</h1>
                    <p className="font-bold text-xl text-gray-400">Go to Products tab to select product</p>
               </div> 
               : <SelectedProductCart selected={selected} setSelected={setSelected}></SelectedProductCart>
            }
            
        </>
    )
}

export default SelectedCart;
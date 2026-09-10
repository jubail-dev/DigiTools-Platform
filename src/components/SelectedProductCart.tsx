import { FaRegTrashAlt } from "react-icons/fa";
import type { ProductType } from "./types/types";
import type { Dispatch, SetStateAction } from "react";

export interface SelectedProductCartProps {
    selected: ProductType[]
    setSelected: Dispatch<SetStateAction<ProductType[]>>
}

const SelectedProductCart = ({ selected,setSelected }: SelectedProductCartProps) => {

    const totalPrice = selected.reduce((acc,value) => acc + value.price.amount,0)

    const handleRemoveButton = (product:ProductType) =>{
        const restProducts = selected.filter(selectedProduct => selectedProduct.id !== product.id)
        setSelected(restProducts)
        
    }
    const handleDelleteAllButton = () => {
        setSelected([])
    }
    
    return (
        <>
            <div className="w-screen container mx-auto py-10">

            
            <div className="w-full flex flex-col gap-4">

                {
                    selected.map((product, index) => {

                        return (
                            <div
                                key={index}
                                className="w-full flex items-center justify-between border border-gray-200 rounded-xl p-4"
                            >

                                
                                <div className="flex items-center gap-5">

                                    <img
                                        className="w-7 h-7  rounded-xl"
                                        src={product.icon}
                                        alt={product.title}
                                    />

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {product.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm">
                                            {product.price.amount}
                                        </p>
                                    </div>

                                </div>


                               
                                <div>
                                    <FaRegTrashAlt
                                        className="text-red-500 text-lg cursor-pointer"
                                        onClick={() => handleRemoveButton(product)}
                                    />
                                </div>

                            </div>
                        )
                    })
                }

            </div>

            <div className="flex justify-between my-5">
                <p className="text-gray-400 font-bold text-xl">Total</p>
                <p className="text-2xl text-black font-bold">{`$${totalPrice}`}</p>
            </div>

            <button className="bg-blue-500 py-3 rounded-full text-center text-white font-bold text-xl w-screen container mx-auto" onClick={() => handleDelleteAllButton()}>Delete All
            </button>

        </div>
        </>
    )
}

export default SelectedProductCart;
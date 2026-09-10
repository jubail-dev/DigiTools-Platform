import { useState, type Dispatch, type SetStateAction } from "react";
import type { ProductType } from "./types/types";

export interface ProductCartProps {
    product: ProductType
    selected: ProductType[]
    setSelected: Dispatch<SetStateAction<ProductType[]>>
}

const ProductCart = ({ product,selected,setSelected }: ProductCartProps) => {

      const { badge, badgeColor, icon, title, description, price, features } = product;

      const [isSelected,setIsSelected] = useState<boolean>(false)
      const handleSelectPlayer = () => {
        setIsSelected(!isSelected)
        setSelected([...selected,product])
      }

    
    return (
        <div className="relative flex flex-col justify-between max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div>
        {/* Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
             <img src={icon} alt="" />
          </div>
          {badge && (
            <span
              className="rounded-full px-3 text-white py-1 text-xs font-semibold"
              style={{ backgroundColor: badgeColor || "green" }}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        {/* Price */}
        <div className="my-6 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-gray-900">
            {price.currency}{price.amount}
          </span>
          <span className="text-sm font-medium text-gray-500">
            /{price.period}
          </span>
        </div>

        {/* Features List */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-3">
            Features
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button 
        className={`w-full rounded-xl bg-blue-600 py-2.5 px-4 text-center text-sm font-semibold text-white transition ${isSelected ? "bg-gray-300 text-black" : "bg-green-500 text-white"}`}
        onClick={() => handleSelectPlayer()}
        disabled ={isSelected}
        >
          {isSelected? "In Cart" : "Buy Now"}
        </button>
      </div>
    </div>
    )
}

export default ProductCart;
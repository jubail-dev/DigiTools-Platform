import type { Dispatch, SetStateAction } from "react";
import ProductCart from "./ProductCart";
import type { ProductType } from "./types/types";

export interface AvailableProps {
  product: ProductType;
  selected: ProductType[];
  setSelected: Dispatch<SetStateAction<ProductType[]>>
}

const Available = ({product,selected,setSelected}: AvailableProps) => {


  return (
    <>
      <ProductCart product={product} selected = {selected} setSelected = {setSelected}></ProductCart>
    </>
  );
};

export default Available;
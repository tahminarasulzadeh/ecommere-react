 
 // ADDING PRODUCT TO CART
 
 export const addCart = (product) => {
  return {
      type: "ADDPRODUCT",
      payload: product
  }
 }

 // DELETING PRODUCT TO PRODUCT
  
 export const delCart = (product) => {
    return {
        type: "DELPRODUCT",
        payload: product
    }
   }
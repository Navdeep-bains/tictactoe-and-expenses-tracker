export const transactionAdd = (singleTrans) => { 
    return { 
        type:"ADD_TRANSACTION",
        payload:singleTrans
    } 
  }



  export const removeItem = (id) => {
    return{
        type:"REMOVE_ITEM",
        id:id
    }
  }
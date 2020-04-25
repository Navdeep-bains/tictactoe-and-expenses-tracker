const initialState = {
  transactions: [
    // {id:1,text:"Flower",ammount:200},
    // {id:2,text:"Book",ammount:20}
  ],
};

const AddTransReducer = (state = initialState, action) => {
  //alert(action.payload);
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.concat(action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        transactions: state.transactions.filter((elem, i) => i !== action.id),
      };

    default:
      return state;
  }
};
export default AddTransReducer;

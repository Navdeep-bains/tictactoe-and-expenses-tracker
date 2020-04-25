import React, { Component } from 'react'
import { connect } from "react-redux";

class IncomeExpensis extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    const  amount = this.props.totalAmmount.map( (transaction) => parseInt(transaction.ammount) );
    const  income = amount.filter( (item) => item >0 ).reduce( (acc,item) => parseInt(acc += item),0);
    const  expenses = amount.filter( (item) => item < 0).reduce( (acc,item) => parseInt(acc+=item * -1),0 );
    return (
      <React.Fragment>
      <div className="inc-exp-container">
        <div>
          <h4 className="text-center">Income</h4>
    <p id="money-plus" className="money plus text-center">${income}</p>
        </div>
        <div>
          <h4 className="text-center">Expense</h4>
    <p id="money-minus" className="money minus text-center">${expenses}</p>
        </div>
      </div>
        </React.Fragment>
    )
  }
}
const mapStateToPrps = (state) => {
//console.log("income",state.transactions)  
return{
  totalAmmount:state.transactions
}
}
export default connect (mapStateToPrps)(IncomeExpensis);
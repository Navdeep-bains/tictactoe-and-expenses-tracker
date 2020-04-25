import React ,{Component}from 'react'
import { connect } from "react-redux";

class Balance extends Component{
    constructor(props){
        super(props); 
        this.state={
        }
        //console.log("statebalance",this.state)
        
      }
      render(){
        var ammount = this.props.balanceArr.map( (transaction) => parseInt(transaction.ammount) );
        var total = ammount.reduce( (acc,item) => parseInt((acc+=item)),0)
        //console.log("total",total)
        //console.log("allamount",ammount)
          return(
            <React.Fragment>
            <div className="text-center container">
            <h4>Your Balance</h4>
            <h1 id = "balance">${total}.  </h1>
            </div>
        </React.Fragment>
          )
      }
    }

    const mapStateToProps = (state) => {
        //console.log("balance",state.transactions)

        return{
            balanceArr:state.transactions
        }
    }
export default connect(mapStateToProps)(Balance)
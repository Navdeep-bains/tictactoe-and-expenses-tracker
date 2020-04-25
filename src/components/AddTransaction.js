import React, { Component } from 'react'
import { connect } from "react-redux";
import { transactionAdd } from "../actions/AddTransAction";
import { removeItem } from '../actions/AddTransAction';
class AddTransaction extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'',
      ammount:""
      //transarray:this.props.transarr
    }
  }
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
//deleteitem
deleteItem = (id) => {
  this.props.removeThisItem(id)
}
  //submit
  handleSubmit = (e) => {
    //console.log("j",e);
    e.preventDefault();
    //console.log("onSubmit",this.state)
    let singleTrans={
      text:this.state.text,
      ammount:this.state.ammount
    }
    this.props.formSubmit(singleTrans);
    this.setState({
      text:'',
      ammount:''
    })
  }
  render() {
    return (
      <React.Fragment>
        <p>{this.state.name}</p>
      <h3 className="text-center">Add new transaction</h3>
      
            <table className="table text-center">
              <tbody>
              <tr>
                <td className="mr-5">Text</td>
                <td className="mr-5">Ammount</td>
                <td>Action</td>
              </tr>
                {
                  this.props.transarr.map( (elem,id) => {
                    return(
                      <tr key={id}>
                    <td>{elem.text}</td>
                    <td>{elem.ammount}</td>
                    <td><button onClick={() => {this.deleteItem(id)}} className="btn btn-danger">Delete</button></td>
                    </tr>  
                    )
                  }
                  )
                  }
                  </tbody>
            </table>
      
      <form onSubmit={this.handleSubmit} className="text-center">
        <label htmlFor="text">text</label>
        <input
          type="text" name="text"
          placeholder="enter text..."
          value={this.state.text}
          onChange={this.handleInput}
        /><br />

        <label htmlFor="ammount">
          Amount <br />
        </label>
        <input
          type="number" name = "ammount"
          placeholder="enter ammount...."
          value={this.state.ammount}
          onChange={this.handleInput}
        /><br /><br />
        (negative - expense, positive - income)
        <button className="btn btn-primary" type="submit">Add transaction</button>
      </form>
    </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  //console.log("comp",state)
  return{
    transarr:state.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    formSubmit:(singleTrans) => {
      dispatch(transactionAdd(singleTrans))
    },
    removeThisItem:(id) => {
      dispatch(removeItem(id))
    }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(AddTransaction);

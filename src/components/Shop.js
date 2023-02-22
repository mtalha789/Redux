import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import * as actionCreators from '../states/action-creators/index';
import { bindActionCreators } from 'redux';

function Shop() {
  const dipatch=useDispatch();
  const balance=useSelector(state=>state.amount)
  const {withdrawmoney,depositmoney}=bindActionCreators(actionCreators,dipatch);
  // (()=>{depositmoney(100)})()  
  

  return (
    <div className='container'>
        <h2>Your Balance ={balance} </h2>
        <div className="d-flex">
      <button className="btn btn-primary mx-1" onClick={()=>{console.log('withdraw'); withdrawmoney(110)}}>-</button>
      <h3>Add to Cart</h3>
      <button className="btn btn-primary mx-1" onClick={()=>{depositmoney(110)}}>+</button>
      </div>
    </div>
  )
}

export default Shop

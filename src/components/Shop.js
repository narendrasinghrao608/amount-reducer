import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'
import { useSelector } from 'react-redux';
function Shop() {
  const dispatch=useDispatch();
  const {withdrawmoney,depositmoney}=bindActionCreators(actionCreators,dispatch)
  const balance=useSelector(state=>state.amount)
  return (
    <div >
        <h1>Deposit/Withdraw Money</h1>
      {/* <button className="btn-primary btn mx-2" onClick={()=>{dispatch(actionCreators.withdrawmoney(100))}}>- </button>add the item to card */}
      <button className="btn-primary btn mx-2" onClick={()=>{withdrawmoney(100)}}>- </button>Balance {balance}
      <button className="btn-primary btn mx-2" onClick={()=>{depositmoney(100)}}>+</button>
    </div>
  )
}

export default Shop

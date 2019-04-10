import React from 'react'
import { removeExpense } from '../actions/expenses'
import { connect } from 'react-redux'

//description, amount, createdAt

const ExpenseListItem = ({dispatch, id, description, amount, createdAt }, props) => (
  <div>
    <h2>{ description }</h2>
    <p>Amount:  { amount }</p>
    <p>createdAt: { createdAt } </p>
    <button onClick = { () => {
      dispatch(removeExpense({ id }))
    }} > Remove </button>
  </div>
)

export default connect()(ExpenseListItem)

import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/getVisibleExpenses'


const ExpensesList = (props) => (
    <div>
      <h1>my expensses are here </h1>
      { props.expenses.length }
      { props.expenses.map((expense) => <ExpenseListItem { ... expense } key = { expense.id } />) }
    </div>
)
const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesList)

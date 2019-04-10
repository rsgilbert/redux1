import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/getVisibleExpenses'


const store = configureStore()

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log("new store is ", visibleExpenses)
})

store.dispatch(addExpense({ description: "Bad boy", amount: 444000, createdAt: 44 }))
store.dispatch(addExpense({ description: "potatoes", amount: 2000}))
store.dispatch(addExpense({ description: "pot", amount: 4000, createdAt: 200}))


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

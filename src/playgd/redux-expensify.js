import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
  ) => ({
    type: 'ADD_EXPENSE'
    ,expense: {
      id: uuid()
      ,description
      ,note
      ,amount
      ,createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE'
  ,id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE'
  ,id
  ,updates
})
// SET_TEXT
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER'
  ,text
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE'
  ,startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE'
  ,endDate
})
// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id } = {}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return { ...expense, ...action.updates }
        } else return expense
      })
    default:
      return state
  }
}
// Filters Reducer
const filtersReducerDefaultState = {
  text: ''
  ,sortBy: 'date'
  ,startDate: undefined
  ,endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }
    default:
      return state
  }
}
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = isNaN(startDate) || expense.createdAt >= startDate
    const endDateMatch = isNaN(endDate) || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if(sortBy === 'date'){ // most recent first
      return a.createdAt > b.createdAt ? -1 : 1 // -1 means a should come first
    }else if(sortBy === 'amount') { // greater amount first
      return a.amount > b.amount ? -1 : 1 // +1 means b should come first
    }
  })
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer
    ,filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log("new store is ", visibleExpenses)
})

store.dispatch(addExpense( { description: "rentein", amount: 2000, createdAt: 1990}))
store.dispatch(addExpense( { description: "buying mik", amount: 1200, createdAt: 2010}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }) )
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5.00 }))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
store.dispatch(setTextFilter('mi'))
// store.dispatch(setTextFilter())
store.dispatch(setStartDate(-11155))
store.dispatch(setEndDate(11111))

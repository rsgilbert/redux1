import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expensesReducer'
import filtersReducer from '../reducers/filtersReducer'


const configureStore = () => {
  // Store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer
      ,filters: filtersReducer
    })
  )
  return store
}

export default configureStore

import { createStore } from 'redux'

// ActionGenerators are functions that return action objects
const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT'
  ,incrementBy
})
const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT'
  ,decrementBy
})
const resetCount = () => ({
  type: 'RESET'
})
const setCount = ({ countValue }) => ({
  type: 'SET'
  ,countValue
})

// Reducers
  // Reducers are pure functions = output is only determined by input
  // never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.countValue
      }
    default: return state
  }
}

const store = createStore(countReducer)
const unsubscribe = store.subscribe(() => {
    console.log("Here is change: " , store.getState())
})

store.dispatch(incrementCount({ incrementBy: 23 }))
store.dispatch(decrementCount({ decrementBy: 10}))
store.dispatch(resetCount())
store.dispatch(setCount({ countValue: 32 }))
unsubscribe()

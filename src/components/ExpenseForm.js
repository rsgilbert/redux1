import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
  state = {
    description: ""
    ,note: ""
    ,amount: ""
    ,createdAt: moment()
    ,calendarFocused: false
  }
  onDescriptionChange = (e) => { // NOTE: MUST be an arrow function
    const description = e.target.value
    this.setState(() => ({
      description
    }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({
      note
    }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if(amount.match(/^\d*(\.\d{0,2})?$/)){ // NOTE: regular expressions
      this.setState(() => ({
        amount
      }))
    }
  }
  onDateChange = (createdAt) => {
    this.setState(() => ({
      createdAt
    }))
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }))
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Descripton"
            autoFocus
            value={ this.state.description }
            onChange = { this.onDescriptionChange }
          />
          <input
            type="text"
            placeholder="Amount"
            value={ this.state.amount }
            onChange = { this.onAmountChange }
          />
          {/* <SingleDatePicker
            date={ this.state.createdAt }
            onDateChange = { this.onDateChange }
            focused = { this.state.calendarFocused }
            onFocusChange = { this.onFocusChange }
          /> */}
          <textarea
            placeholder="Add a note (optional)"
            value = { this.state.note }
            onChange = { this.onNoteChange }
            >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

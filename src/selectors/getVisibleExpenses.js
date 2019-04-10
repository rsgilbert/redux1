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

export default getVisibleExpenses

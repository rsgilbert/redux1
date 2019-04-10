import React from 'react'
import ExpensesList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpensesList/>
    </div>
)
export default ExpenseDashboardPage

import { HomeLoanApproval } from './loanApprovals/HomeLoanApproval'
import { PersonalLoanApproval } from './loanApprovals/PersonalLoanApproval'
import { CarLoanApproval } from './loanApprovals/CarLoanApproval'
import { LoanApplication } from './types'

const application: LoanApplication = {
  name: 'Jane Smith',
  loanAmount: 25000,
  loanPurpose: 'Personal expenses',
  creditScore: 620,
  financialStatus: {
    income: 45000,
    assets: 15000,
    netWorth: 8000
  }
}

const homeLoan = new HomeLoanApproval(application)
homeLoan.process()
console.log()

const personalLoan = new PersonalLoanApproval(application)
personalLoan.process()
console.log()

const carLoan = new CarLoanApproval(application)
carLoan.process()

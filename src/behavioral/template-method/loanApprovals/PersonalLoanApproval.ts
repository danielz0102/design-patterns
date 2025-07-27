import { LoanApproval } from './LoanApproval'

export class PersonalLoanApproval extends LoanApproval {
  protected checkCreditHistory(): void {
    console.log('Checking credit history for personal loan...')

    const { creditScore } = this.application

    if (creditScore >= 650) {
      this.score += 25
    } else if (creditScore >= 550) {
      this.score += 10
    } else {
      this.score -= 15
    }
  }

  protected checkFinancialStatus(): void {
    console.log('Checking financial status for personal loan...')

    const { income } = this.application.financialStatus

    if (income >= 40000) {
      this.score += 30
    } else if (income >= 25000) {
      this.score += 15
    } else {
      this.score -= 10
    }
  }

  protected decide(): void {
    console.log('Making decision for personal loan...')

    if (this.score >= 35) {
      this.approved = true
      this.interestRate = 8.5
    } else {
      this.approved = false
    }
  }
}

import { LoanApproval } from './LoanApproval'

export class HomeLoanApproval extends LoanApproval {
  protected checkCreditHistory(): void {
    console.log('Checking credit history for home loan...')

    const { creditScore } = this.application

    if (creditScore >= 700) {
      this.score += 30
    } else if (creditScore >= 600) {
      this.score += 15
    } else {
      this.score -= 10
    }
  }

  protected checkFinancialStatus(): void {
    console.log('Checking financial status for home loan...')

    const { income, netWorth } = this.application.financialStatus

    if (income >= 80000 && netWorth > 50000) {
      this.score += 40
    } else if (income >= 50000) {
      this.score += 20
    } else {
      this.score -= 20
    }
  }

  protected decide(): void {
    console.log('Making decision for home loan...')

    if (this.score >= 50) {
      this.approved = true
      this.interestRate = 3.5
    } else {
      this.approved = false
    }
  }
}

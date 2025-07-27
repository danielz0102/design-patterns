import { LoanApplication } from '../types'

export abstract class LoanApproval {
  protected interestRate: number = 0
  protected approved: boolean = false
  protected score: number = 0

  constructor(protected application: LoanApplication) {}

  process(): void {
    this.checkCreditHistory()
    this.checkFinancialStatus()
    this.decide()
    this.notify()
  }

  protected abstract checkCreditHistory(): void
  protected abstract checkFinancialStatus(): void
  protected abstract decide(): void

  notify(): void {
    const rejectedMessage = 'Your loan application has been rejected.'
    const approvedMessage = `Your loan application has been approved with an interest rate of ${this.interestRate}%`

    console.log(this.approved ? approvedMessage : rejectedMessage)
  }
}

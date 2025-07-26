import { LoanApproval } from "./LoanApproval";

export class CarLoanApproval extends LoanApproval {
  protected checkCreditHistory(): void {
    console.log("Checking credit history for car loan...");

    const { creditScore } = this.application;

    if (creditScore >= 680) {
      this.score += 28;
    } else if (creditScore >= 580) {
      this.score += 12;
    } else {
      this.score -= 12;
    }
  }

  protected checkFinancialStatus(): void {
    console.log("Checking financial status for car loan...");

    const { income, assets } = this.application.financialStatus;

    if (income >= 60000 && assets > 20000) {
      this.score += 35;
    } else if (income >= 35000) {
      this.score += 18;
    } else {
      this.score -= 15;
    }
  }

  protected decide(): void {
    console.log("Making decision for car loan...");

    if (this.score >= 40) {
      this.approved = true;
      this.interestRate = 5.2;
    } else {
      this.approved = false;
    }
  }
}

export type LoanApplication = {
  name: string;
  loanAmount: number;
  loanPurpose: string;
  creditScore: number;
  financialStatus: {
    income: number;
    assets: number;
    netWorth: number;
  };
};

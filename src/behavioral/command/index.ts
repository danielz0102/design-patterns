import { Button } from "./invokers/Button";
import { Transaction } from "./Transaction";
import { BankAccount } from "./BankAccount";

const myAccount = new BankAccount("Daniel", 1000);
const alice = new BankAccount("Alice", 500);

const aliceTransaction = new Transaction(myAccount, alice, 200);

const transferButton = new Button(() => {
  aliceTransaction.execute();
});
const undoButton = new Button(() => {
  aliceTransaction.undo();
});

console.log(`Initial balance: ${myAccount.getBalance()}`);
console.log(`Alice's initial balance: ${alice.getBalance()}`);

transferButton.click();

console.log(`Balance after transfer: ${myAccount.getBalance()}`);
console.log(`Alice's balance after transfer: ${alice.getBalance()}`);

undoButton.click();

console.log(`Balance after undo: ${myAccount.getBalance()}`);
console.log(`Alice's balance after undo: ${alice.getBalance()}`);

export function getWithdrawAction(amount) {
  return {
    type: "WITHDRAW",
    amount: amount
  };
}

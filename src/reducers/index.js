export default (state, action) => {
  console.log(state);
  if (action.type === "WITHDRAW") {
    const total = state.totalAmount - action.amount;
    return { ...state, totalAmount: total };
  }
  return state;
};

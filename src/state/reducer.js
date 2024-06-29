export const initialState = {
  amount: 0,
  term: 0,
  interest: 0,
  type: '',

  monthlyPayment: '',
  totalPayment: '',
  submitted: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SUBMIT_DATA':
      const {amount, term, interest, type} = action.payload;
      return {
        ...state,
        amount: +amount,
        term: +term,
        interest: +interest,
        type: type,
        submitted: true,
      };
    case 'CALCULATE':
      const {monthlyPayment, totalRepayment} = action.payload;
      return {
        ...state,
        monthlyPayment: monthlyPayment,
        totalPayment: totalRepayment,
      };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

export const calculateRepayments = data => {
  const principal = parseFloat(+data.amount);
  const annualInterestRate = parseFloat(+data.interest) / 100;
  const termInYears = parseFloat(+data.term);
  const monthlyInterestRate = annualInterestRate / 12;
  const numberOfPayments = termInYears * 12;
  let monthlyPayment, totalRepayment;

  if (data.type === 'repayment') {
    monthlyPayment =
      (+principal * +monthlyInterestRate * +Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    totalRepayment = monthlyPayment * numberOfPayments;
  } else if (data.type === 'interest') {
    monthlyPayment = principal * monthlyInterestRate;
    totalRepayment = monthlyPayment * numberOfPayments + principal;
  }

  console.log(monthlyPayment);
  console.log(totalRepayment);

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalRepayment: totalRepayment.toFixed(2),
  };
};

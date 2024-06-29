import React from 'react';

export default function Calculations({monthlyPayment, totalPayment}) {
  return (
    <div className="calculations__container">
      <div className="texts">
        <h3 className="info__title">Your Results</h3>
        <p className="info__paragraph">
          Your results are shown below based on the information you provided. To adjust the results,
          edit the form and click “calculate repayments” again.
        </p>
      </div>

      <div className="card">
        <div className="top">
          <p className="info__paragraph">Your monthly repayments</p>
          <p className="monthly__amount">£{monthlyPayment}</p>
        </div>
        <div className="bottom">
          <p className="info__paragraph">Total you'll repay over the term</p>
          <p className="total__amount">£{totalPayment}</p>
        </div>
      </div>
    </div>
  );
}

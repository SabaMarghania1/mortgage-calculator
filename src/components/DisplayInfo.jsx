import React from 'react';

export default function DisplayInfo() {
  return (
    <div className="informations">
      <img src="/public/illustration-empty.svg" alt="" />
      <div className="texts">
        <h3 className="info__title">Results shown here</h3>
        <p className="info__paragraph">
          Complete the form and click “calculate repayments” to see what your monthly repayments
          would be.
        </p>
      </div>
    </div>
  );
}

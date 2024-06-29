import React, {useReducer} from 'react';
import {initialState, reducer} from './state/reducer';
import {useForm} from 'react-hook-form';

import Main from './components/containerComponents/Main';
import Information from './components/containerComponents/Information';
import Header from './components/Header';
import IconContainer from './components/containerComponents/IconContainer';
import InputContainer from './components/InputContainer';
import Label from './components/Label';
import CustomForm from './components/containerComponents/CustomForm';
import DisplayContainer from './components/containerComponents/DisplayContainer';
import DisplayInfo from './components/DisplayInfo';
import Calculations from './components/Calculations';

import {calculateRepayments} from './utils';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const onSubmit = data => {
    const {amount, term, interest, type} = data;

    const results = calculateRepayments(data);
    dispatch({
      type: 'SUBMIT_DATA',
      payload: {amount: Number(amount), term: +term, interest: +interest, type: type},
    });
    dispatch({
      type: 'CALCULATE',
      payload: results,
    });
  };

  return (
    <Main>
      <Information>
        <Header dispatch={dispatch} reset={reset} />

        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Label text="Mortgage Amount" which="amount" />
            <input
              type="text"
              className={`input-big padding-left ${errors.amount ? 'error-border' : ''}`}
              id="amount"
              {...register('amount', {
                required: 'Mortgage amount is required',
                pattern: {
                  value: /^[0-9]*\.?[0-9]*$/,
                  message: 'Invalid amount format',
                },
              })}
            />
            <IconContainer
              icon="£"
              extraStyles={
                !errors.amount ? {left: '0.5px', bottom: '1px'} : {left: '0.5px', bottom: '34px'}
              }
              error={errors.amount}
              classname="error-container"
            />
            {errors.amount && <span className="error">{errors.amount.message}</span>}
          </InputContainer>

          <div className="flex-input-containers">
            <InputContainer>
              <Label text="Mortgage Term" which="term" />
              <input
                type="text"
                className={`input-big padding-right ${errors.term ? 'error-border' : ''}`}
                id="term"
                {...register('term', {
                  required: 'Mortgage term is required',
                  pattern: {
                    value: /^[0-9]*\.?[0-9]*$/,
                    message: 'Invalid term format',
                  },
                })}
              />
              <IconContainer
                icon="years"
                extraStyles={
                  !errors.term ? {right: '0.5px', bottom: '1px'} : {right: '0.5px', bottom: '34px'}
                }
                error={errors.term}
                classname="error-container"
              />
              {errors.term && <span className="error">{errors.term.message}</span>}
            </InputContainer>

            <InputContainer>
              <Label text="Interest Rate" which="interest" />
              <input
                type="text"
                className={`input-big padding-right ${errors.interest ? 'error-border' : ''}`}
                id="interest"
                {...register('interest', {
                  required: 'Interest rate is required',
                  pattern: {
                    value: /^[0-9]*\.?[0-9]*$/,
                    message: 'Invalid interest rate format',
                  },
                })}
              />
              <IconContainer
                icon="%"
                extraStyles={
                  !errors.interest
                    ? {right: '0.5px', bottom: '1px'}
                    : {right: '0.5px', bottom: '34px'}
                }
                error={errors.interest}
                classname="error-container"
              />
              {errors.interest && <span className="error">{errors.interest.message}</span>}
            </InputContainer>
          </div>

          {console.log(state.type)}
          <InputContainer>
            <Label text="Mortgage Type" which="type" />
            <div className="inputs-container-flex">
              <label
                className={`container ${state.type === 'repayment' ? 'active-container' : ''}`}
              >
                Repayment
                <input type="radio" value="repayment" {...register('type')} />
                <span className="checkmark"></span>
              </label>

              <label className={`container ${state.type === 'interest' ? 'active-container' : ''}`}>
                Interest Only
                <input
                  type="radio"
                  value="interest"
                  {...register('type', {
                    required: 'Mortgage type is required',
                  })}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            {errors.type && <span className="error">{errors.type.message}</span>}
          </InputContainer>

          <button type="submit" className="calculate">
            <img src="public/icon-calculator.svg" alt="calculate" />
            Calculate Repayments
          </button>
        </CustomForm>
      </Information>
      <DisplayContainer>
        {!state.submitted && <DisplayInfo />}
        {state.submitted && (
          <Calculations monthlyPayment={state.monthlyPayment} totalPayment={state.totalPayment} />
        )}
      </DisplayContainer>
    </Main>
  );
}

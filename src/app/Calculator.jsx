import React, { useState } from 'react';
import "./Calculator.scss";

function Calculator() {
	const [stack, setStack] = useState([]);
	const [data, setData] = useState([]);


	const addToStack = stackElement => {
		setStack([...stack, Number(parseFloat(stackElement).toFixed(2))]);
	}

	const handleClick = value => {
		const tempData = [...data];
		if (tempData.pop() !== '.' || value !== '.') {
			// add the digit clicked to the data table
			setData([...data, value]);
		}
	}

	// ENTER
	const handleSubmit = event => {
		// prevent page reload
		event.preventDefault();
		if (data.length < 1) return;

		// empty data
		setData([]);

		// get digits from data,
		// join them into a single string
		// and turn them into a number
		// add the obtained number to the stack
		addToStack(Number(data.join('')));
	}

	// +
	const add = () => {
		if (stack.length > 1) {
			const tempStack = stack;
			addToStack(tempStack.pop() + tempStack.pop());
		}
	}

	// -
	const substract = () => {
		if (stack.length > 1) {
			const tempStack = stack;
			const lastStack = tempStack.pop();
			addToStack(tempStack.pop() - lastStack);
		}
	}

	// *
	const multiply = () => {
		if (stack.length > 1) {
			const tempStack = stack;
			addToStack(tempStack.pop() * tempStack.pop());
		}
	}

	// ÷
	const divide = () => {
		if (stack.length > 1) {
			const tempStack = stack;
			const lastStack = tempStack.pop();
			addToStack(tempStack.pop() / lastStack);
		}
	}

	// CLEAR last digit input from data
	const clear = () => {
		setStack([]);
		setData([]);
	}

	const deleteDigit = () => {
		if (data.length > 0) {
			const tempData = data;
			tempData.pop();
			setData([...tempData]);
		}
	}


	return (
		<div role="calculator" className="calculator">
			<div className="screen">
				<span role="STACK" className="stack">
					{stack.join(" ")}
				</span>
				<span role="DATA">
					{data.length ? data.join("") : 0}
				</span>
			</div>

			<div className="buttons">
				<div className="column">
					<ul className="action-buttons">
						<li role="CE" onClick={() => setData([])}> CE </li>
						<li role="C" onClick={clear}> C </li>
						<li role="DEL" onClick={deleteDigit}> DEL </li>
					</ul>
					<ul className="input-buttons">
						<li role="BUTTON_7" onClick={() => handleClick(7)}> 7 </li>
						<li role="BUTTON_8" onClick={() => handleClick(8)}> 8 </li>
						<li role="BUTTON_9" onClick={() => handleClick(9)}> 9 </li>
						<li role="BUTTON_4" onClick={() => handleClick(4)}> 4 </li>
						<li role="BUTTON_5" onClick={() => handleClick(5)}> 5 </li>
						<li role="BUTTON_6" onClick={() => handleClick(6)}> 6 </li>
						<li role="BUTTON_1" onClick={() => handleClick(1)}> 1 </li>
						<li role="BUTTON_2" onClick={() => handleClick(2)}> 2 </li>
						<li role="BUTTON_3" onClick={() => handleClick(3)}> 3 </li>
						<li role="BUTTON_." onClick={() => handleClick('.')}> . </li>
						<li role="BUTTON_0" onClick={() => handleClick(0)}> 0 </li>

						<li className="hide"></li>
					</ul>
				</div>
				<div className="column">
					<ul className="operator-buttons">
						<li role="ADD" onClick={add}> + </li>
						<li role="SUB" onClick={substract}> - </li>
						<li role="MUL" onClick={multiply}> * </li>
						<li role="DIV" onClick={divide}> ÷ </li>
						<li role="ENTER" className="enter" onClick={handleSubmit}> &#8617; </li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Calculator;

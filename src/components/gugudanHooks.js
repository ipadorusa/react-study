import React from "react";

const Gugudan2 = () => {
	const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
	const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
	const [value, setValue] = React.useState("");
	const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

	const onChangeInput = (e) => {
		setValue(e.target.value);
	};
	const onSubmitForm = (e) => {
		e.preventDefault();
		if (parseInt(value) === first * second) {
			setResult("정답" + value);
			setFirst(Math.ceil(Math.random() * 9));
			setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
		} else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
		}
	};

	return (
		<React.Fragment>
			<p>
				{first}곱하기{second}는?
			</p>
			<form onSubmit={onSubmitForm}>
				<input type="text" ref={inputRef} value={value} onChange={onChangeInput} />
				<button type="submit">제출</button>
			</form>
			<p>{result}</p>
		</React.Fragment>
	);
};

export default Gugudan2;

import React, { useState } from 'react';

export default function Input({ value, setValue, readOnly }) {
  const [isFocused, setIsFocused] = useState(false);
  const onHandleChange = (e) => {
    setValue(e.target.value);
  };
  const onChangeFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div style={style.item}>
      <input
        type="text"
        value={value}
        onChange={onHandleChange}
        onFocus={onChangeFocus}
        onBlur={onChangeFocus}
        placeholder={isFocused ? '' : 'Add Todo'}
        style={readOnly ? style.inputReadOnly : style.input}
        readOnly={readOnly}
      />
    </div>
  );
}

const style = {
  item: {
    width: '100%',
    boxSizing: 'border-box',
  },
  input: {
    width: '100%',
    color: '#555',
    border: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    caretColor: '#bbb',
  },
  inputReadOnly: {
    width: '100%',
    fontSize: '15px',
    color: '#555',
    border: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    caretColor: '#bbb',
  },
  inputEditing: {
    width: '100%',
    marginTop: '3px',
    color: '#ababab',
    border: 'none',
    borderBottom: '1px solid #dcdcdc',
    boxSizing: 'border-box',
    outline: 'none',
    caretColor: '#bbb',
  },
};

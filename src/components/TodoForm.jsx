import React, { useState } from 'react'

export default function TodoInput({ styles }) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onHandleChange = (e) => {
    setValue(e.target.value)
  }
  const onChangeFocus = () => {
    setIsFocused(!isFocused)
  }

  return (
    <div className={styles.item_tf}>
      <input type="input" value={value} onChange={onHandleChange} onFocus={onChangeFocus} onBlur={onChangeFocus} placeholder={isFocused ? '' : 'Add Todo'} className={styles.input} />
    </div>
  )
}

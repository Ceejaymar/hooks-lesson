import { useState } from 'react';

function useInputHook(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const reset = () => {
    setValue('');
  }

  return [value, handleChange, reset];
}

export default useInputHook;

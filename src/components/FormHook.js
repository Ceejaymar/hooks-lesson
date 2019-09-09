import React from 'react';
import inputHook from '../hooks/useInputHook';

const FormHook = () => {
  const [name, updateName, resetName ] = inputHook('');
  const [email, updateEmail ] = inputHook('');
  const [password, updatePassword ] = inputHook('');

  return (
    <div>
      <h3>name: {name}</h3>
      <input type="text" value={name} onChange={updateName} />
      <button onClick={resetName}>resetName</button>
      <h3>email: {email}</h3>
      <input type="text" value={email} onChange={updateEmail} />
      <h3>password: {password}</h3>
      <input type="text" value={password} onChange={updatePassword} />
    </div>
  )
}

export default FormHook;

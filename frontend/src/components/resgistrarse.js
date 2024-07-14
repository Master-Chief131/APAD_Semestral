import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await Auth.signUp({ username, password, attributes: { email } });
      alert('Registro exitoso, verifica tu email');
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Register;

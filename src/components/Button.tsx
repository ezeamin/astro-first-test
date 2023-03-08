import { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('Hola manola');

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hola actualizado')}>Click me</button>
    </div>
  );
};

export default Button;

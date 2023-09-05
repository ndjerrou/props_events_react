import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = ({ onHandleName }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onHandleName(name);
  };

  return (
    <nav className='navbar'>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button disabled={name.length < 5}>Valider</button>
      </form>
    </nav>
  );
};

// on ne souhaite plus utiliser l'API document !

// document.querySelector('p').addEventListener('submit', e => {
//   document.querySelector('input').value;
//   e.target.elements;
// });

export default Navbar;

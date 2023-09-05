import { useState } from 'react';
import Main from './ui/Main';
import Navbar from './ui/Navbar';

const App = () => {
  const [receivedName, setReceivedName] = useState('');
  const onHandleName = name => {
    setReceivedName(name);
  };

  return (
    <>
      <Navbar onHandleName={onHandleName} />
      <Main name={receivedName} />
    </>
  );
};

export default App;

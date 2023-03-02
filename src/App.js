import './App.css';
import React from 'react';
import Header from './components/Header'
import Form from './components/Form'


function App() {
  // const [result,func]= React.useState('hello');
  // console.log(result, func);
  return (
    <>
      <Header/>
      <div style={{display:'flex'}}>
          <Form/>
          {/* <h1 style={{marginRight:'auto'}}></h1> */}
      </div>
    </>
  

  );
}

export default App;

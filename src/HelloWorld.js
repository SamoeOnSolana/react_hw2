import React from 'react';

const HelloWorld = () => {
  return (
    <div style={{border: '1px solid blue', padding: '20px', margin: '10px'}}>
      <h2>Завдання 2</h2>
      
      <div>
        <h3>JSX синтаксис:</h3>
        <div style={{border: '1px solid green', padding: '10px', margin: '10px'}}>
          <h1>Hello, World!</h1>
          <p>Це написано за допомогою JSX</p>
        </div>
      </div>
      
      <div>
        <h3>createElement альтернатива:</h3>
        <div style={{border: '1px solid orange', padding: '10px', margin: '10px'}}>
          {React.createElement('h1', null, 'Hello, World!')}
          {React.createElement('p', null, 'Це написано за допомогою createElement')}
        </div>
      </div>
      
      <div>
        <h3>Функціональний компонент:</h3>
        <HelloMessage name="Світ" />
      </div>
    </div>
  );
};

const HelloMessage = ({ name }) => {
  return (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
      <h2>Привіт, {name}!</h2>
      <p>Це функціональний компонент</p>
    </div>
  );
};

export default HelloWorld;

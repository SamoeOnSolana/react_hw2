import React, { Component } from 'react';

class HelloWorldClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!',
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div style={{border: '1px solid green', padding: '20px', margin: '10px'}}>
        <h2>завдання 3</h2>
        
        <div style={{border: '1px solid purple', padding: '15px', margin: '10px'}}>
          <h3>Hello World - Класовий компонент</h3>
          
          <div style={{
            border: '1px solid blue',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: 'lightgreen',
            textAlign: 'center'
          }}>
            <h1 style={{color: 'darkgreen', fontSize: '2.5rem'}}>
              {this.state.message}
            </h1>
            <p style={{fontSize: '1.2rem', color: 'darkblue'}}>
              Це класовий компонент з state
            </p>
            
            <div style={{marginTop: '20px'}}>
              <p><strong>Лічильник кліків:</strong> {this.state.count}</p>
              <button 
                onClick={this.handleClick}
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'lightblue',
                  border: '1px solid blue',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Натисни мене!
              </button>
            </div>
          </div>
          
          <div style={{marginTop: '20px', padding: '15px', backgroundColor: 'lightgray', borderRadius: '5px'}}>
            <h4>Що використано:</h4>
            <ul style={{textAlign: 'left'}}>
              <li>Класовий компонент (extends Component)</li>
              <li>Constructor та super(props)</li>
              <li>State для зберігання даних</li>
              <li>Метод render()</li>
              <li>Обробник подій з arrow function</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HelloWorldClass;

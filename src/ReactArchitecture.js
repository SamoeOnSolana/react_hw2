import React from 'react';

const ReactArchitecture = () => {
  return (
    <div style={{border: '1px solid red', padding: '20px', margin: '10px'}}>
      <h2>завдання 1</h2>
      
      <div style={{border: '1px solid blue', padding: '15px', margin: '10px'}}>
        <h3>Архітектура React-додатка</h3>
        
        <div style={{border: '1px solid green', padding: '15px', margin: '10px'}}>
          <h4>Основні компоненти архітектури:</h4>
          <ul style={{textAlign: 'left'}}>
            <li><strong>Компоненти</strong> - базові блоки UI</li>
            <li><strong>Props</strong> - передача даних між компонентами</li>
            <li><strong>State</strong> - внутрішній стан компонента</li>
            <li><strong>Virtual DOM</strong> - оптимізація оновлень</li>
            <li><strong>JSX</strong> - синтаксис для створення елементів</li>
          </ul>
        </div>
        
        <div style={{border: '1px solid orange', padding: '15px', margin: '10px'}}>
          <h4>Плюси React:</h4>
          <ul style={{textAlign: 'left'}}>
            <li>Швидкість розробки</li>
            <li>Перевикористання компонентів</li>
            <li>Велика спільнота</li>
            <li>Хороша документація</li>
            <li>Virtual DOM для продуктивності</li>
          </ul>
        </div>
        
        <div style={{border: '1px solid purple', padding: '15px', margin: '10px'}}>
          <h4>Мінуси React:</h4>
          <ul style={{textAlign: 'left'}}>
            <li>Крива навчання для новачків</li>
            <li>Потрібні додаткові бібліотеки</li>
            <li>SEO проблеми (потрібен SSR)</li>
            <li>Швидкі зміни в екосистемі</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReactArchitecture;

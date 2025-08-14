import React from 'react';

const StudentInfo = () => {
  const student = {
    name: 'Шалаєв Олександр',
    phone: '+380993962167',
    email: 'alexandrrr735@gmail.com',
    age: 17,
    course: 1,
    specialty: 'Комп\'ютерні науки'
  };

  return (
    <div style={{border: '1px solid green', padding: '20px', margin: '10px'}}>
      <h2>Завдання 4:</h2>
      
      <div style={{border: '1px solid blue', padding: '15px', margin: '10px'}}>
        <h3>Особиста інформація:</h3>
        <p><strong>ПІБ:</strong> {student.name}</p>
        <p><strong>Телефон:</strong> {student.phone}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Вік:</strong> {student.age} років</p>
        <p><strong>Курс:</strong> {student.course}</p>
        <p><strong>Спеціальність:</strong> {student.specialty}</p>
      </div>
      
      <div style={{border: '1px solid orange', padding: '15px', margin: '10px'}}>
        <h3>Контактна інформація:</h3>
        <ContactCard 
          name={student.name}
          phone={student.phone}
          email={student.email}
        />
      </div>
    </div>
  );
};

const ContactCard = ({ name, phone, email }) => {
  return (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
      <h4>Контактна картка:</h4>
      <p>👤 {name}</p>
      <p>📞 {phone}</p>
      <p>📧 {email}</p>
    </div>
  );
};

export default StudentInfo;

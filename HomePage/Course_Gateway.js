import React from 'react';
import './Course_Gateway.css'
// Import the 'mysql' package
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'mel.db.elephantsql.com',
  user: 'ekmhudum',
  password: 'Fvveu6OjIUjEjlKVOjbqat3pukqdRj4I',
  database: 'ekmhudum',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  
  // Perform database operations here
  
  // Example: Select data from a table
  connection.query('SELECT * FROM your_table_name', (queryErr, results, fields) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      return;
    }
    
    // Process the query results
    alert('Query results:', results);
    
    // Close the database connection when done with operations
    connection.end();
  });
});

// Handle connection errors
connection.on('error', (err) => {
  console.error('Database connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection was closed. Reconnecting...');
    connection.connect();
  } else {
    throw err;
  }
});

const Gateway = () => {
  return (
    <div className='courses'>
      {courses.map((course) => (
        <div key={course.id} className='courseContainer'>
          <div className='imgContainer'>
            <img src={course.imageURL} alt={`Image for ${course.name}`} className='defaultImage' />
          </div>
          <div className='textContainer'>
            <h4 className="head">{course.name}</h4>
            <p className='desc'>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gateway;

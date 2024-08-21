const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const students = lines.slice(1).filter((line) => line).map((line) => {
          const student = line.split(',');
          return {
            firstname: student[0],
            lastname: student[1],
            age: student[2],
            field: student[3],
          };
        });

        const totalStudents = students.length;
        const csStudents = students.filter((student) => student.field === 'CS');
        const sweStudents = students.filter((student) => student.field === 'SWE');

        let result = `Number of students: ${totalStudents}\n`;
        result += `Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student.firstname).join(', ')}\n`;
        result += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student.firstname).join(', ')}`;

        resolve(result);
      }
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
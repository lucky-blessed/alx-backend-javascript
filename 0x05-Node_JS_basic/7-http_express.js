const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const countStudents = (dbPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = {};
      
      lines.forEach((line, index) => {
        const fields = line.split(',');
        if (fields.length < 2) return;
        const field = fields[3].trim();
        const name = fields[0].trim();

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(name);
      });

      resolve(students);
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbPath = path.join(__dirname, 'database.csv');
  try {
    const students = await countStudents(dbPath);
    const totalStudents = Object.values(students).flat().length;
    
    let response = `This is the list of our students\nNumber of students: ${totalStudents}\n`;
    for (const [field, names] of Object.entries(students)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
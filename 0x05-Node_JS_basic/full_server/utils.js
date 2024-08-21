import fs from 'fs';
import path from 'path';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const students = lines.slice(1).filter((line) => line).map((line) => {
        const student = line.split(',');
        return {
          firstname: student[0],
          field: student[3],
        };
      });

      const result = students.reduce((acc, student) => {
        if (!acc[student.field]) {
          acc[student.field] = [];
        }
        acc[student.field].push(student.firstname);
        return acc;
      }, {});

      resolve(result);
    });
  });
};
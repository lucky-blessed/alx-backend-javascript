const fs = require('fs');
const { listeners } = require('process');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n');
        if (lines.length === 0 || lines[0].split(',').length < 4) {
            throw new Error('Cannot load the database');
        }

        const students = lines.slice(1).filter(line => line.trim() !== '');
        console.log(`Number of students: ${students.length}`);

        const fields = {};

        students.forEach(student => {
            const [firstname, lastname, age, field] = student.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
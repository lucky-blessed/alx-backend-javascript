const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.trim().split('\n').filter(line => line);

        const headers = lines.shift();

        if (lines.length === 0) {
            console.log('Number of students: 0');
            return;
        }

        const students = {};
        let totalStudents = 0;

        for (const line of lines) {
            const [firstname, lastname, age, field] = line.split(',');

            if (!students[field]) {
                students[field] = [];
            }

            students[field].push(firstname);
            totalStudents++;
        }

        console.log(`Number of students: ${totalStudents}`);

        for (const field in students) {
            const fieldStudents = students[field];
            console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
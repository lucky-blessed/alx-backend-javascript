const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');

        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        const fieldCounts = {};
        
        lines.forEach((line, index) => {
            if (index === 0) return;

            const fields = line.split(',');

            const field = fields[3];
            const name = fields[0];

            if (!fieldCounts[field]) {
                fieldCounts[field] = {
                    count: 0,
                    names: []
                };
            }

            fieldCounts[field].count += 1;
            fieldCounts[field].names.push(name);
        });

        const totalStudents = lines.length - 1;
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, data] of Object.entries(fieldCounts)) {
            console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
        }
    } catch (err) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
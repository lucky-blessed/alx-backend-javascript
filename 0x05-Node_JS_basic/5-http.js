const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

function countStudents(database) {
    return new Promise((resolve, reject) => {
        fs.readFile(database, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            const students = lines.slice(1).filter(line => line.trim() !== '');

            const fields = {};
            let totalStudents = 0;

            students.forEach((student) => {
                const details = student.split(',');
                const field = details[3];
                const firstName = details[0];
                totalStudents += 1;

                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstName);
            });

            let output = `Number of students: ${totalStudents}\n`;
            for (const [field, names] of Object.entries(fields)) {
                output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            }

            resolve(output.trim());
        });
    });
}

const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (parsedUrl.pathname === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');

        const database = process.argv[2];

        countStudents(database)
            .then((output) => {
                res.end(output);
            })
            .catch((err) => {
                res.end(err.message);
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 1245;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
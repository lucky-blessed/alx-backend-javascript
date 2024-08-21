import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];
    try {
      const data = await readDatabase(filePath);
      const sortedFields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let response = 'This is the list of our students\n';
      sortedFields.forEach(field => {
        const studentsList = data[field].join(', ');
        response += `Number of students in ${field}: ${data[field].length}. List: ${studentsList}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const filePath = process.argv[2];
    try {
      const data = await readDatabase(filePath);
      const studentsList = data[major] ? data[major].join(', ') : '';
      res.status(200).send(`List: ${studentsList}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
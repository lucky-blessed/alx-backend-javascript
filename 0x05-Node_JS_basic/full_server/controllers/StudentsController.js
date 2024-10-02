// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      const totalStudents = Object.values(students).flat().length;

      let response = `This is the list of our students\n`;
      Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase('./database.csv');

      if (!students[major]) {
        return res.status(500).send('Cannot load the database');
      }

      const response = `List: ${students[major].join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
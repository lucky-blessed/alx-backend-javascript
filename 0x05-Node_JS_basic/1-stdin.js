process.stdin.setEncoding('utf8');

console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.trim()}`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log("This important software is now closing");
});

process.stdin.on('error', (err) => {
  console.error('An error occured:', err.message);
});

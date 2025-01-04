/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcryptjs');

const adminsData = [
  {
    fullName: 'Dennis Nangendo',
    password: bcrypt.hashSync('Mahdi!', 10),
    email: 'nangendodennis@gmail.com',
    role: 'ADMIN',
  },
  {
    fullName: 'Nangendo Dennis',
    password: bcrypt.hashSync('Mahdi!', 10),
    email: 'nangendodennis@gmail.com',
    role: 'ADMIN',
  },
];

export { adminsData };

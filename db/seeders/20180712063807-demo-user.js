'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    const now = new Date();
    return queryInterface.bulkInsert('users', [{
      userName: 'azuma',
      email: 'azuma@example.com',
      password: 'password',
      createdAt: now,
      updatedAt: now,
    }, {
      userName: 'moriizumi',
      email: 'moriizumi@example.com',
      password: 'password',
      createdAt: now,
      updatedAt: now,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('users', null, {});
  },
};

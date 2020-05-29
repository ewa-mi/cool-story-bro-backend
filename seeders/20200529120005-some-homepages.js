"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "test@test.com" },
    });

    const user2 = await User.findOne({
      where: { email: "dummy@dummy.com" },
    });
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "The best page",
          description: "Hard life",
          backgroundColor: "#f5bc76",
          color: "#6b6359",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
        {
          title: "Flying cat",
          description: "I'm talking about stuff",
          backgroundColor: "#b9fad8",
          color: "#1e2120",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};

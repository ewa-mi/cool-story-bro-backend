"use strict";

const Homepage = require("../models").homepage;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const homepage1 = await Homepage.findOne({
      where: { title: "The best page" },
    });
    const homepage2 = await Homepage.findOne({
      where: { title: "Flying cat" },
    });

    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Long life of data bases",
          content: "When I was a child...",
          imageUrl:
            "https://insights.dice.com/wp-content/uploads/2018/08/shutterstock_1060094186.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: homepage1.id,
        },
        {
          name: "Like a nightmare",
          content: "I was lost in the dark...",
          imageUrl:
            "https://insights.dice.com/wp-content/uploads/2018/08/shutterstock_1060094186.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: homepage2.id,
        },
        {
          name: "Redux - never gone",
          content: "My life changed within 2 minutes...",
          imageUrl:
            "https://insights.dice.com/wp-content/uploads/2018/08/shutterstock_1060094186.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: homepage2.id,
        },
        {
          name: "Time for PHP",
          content: "A few months ago as you remember...",
          imageUrl:
            "https://insights.dice.com/wp-content/uploads/2018/08/shutterstock_1060094186.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: homepage1.id,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};

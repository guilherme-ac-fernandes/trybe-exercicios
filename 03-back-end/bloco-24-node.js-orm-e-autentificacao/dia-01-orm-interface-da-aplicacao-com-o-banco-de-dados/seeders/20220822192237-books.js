'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface
    .bulkInsert('Books', [
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        pageQuantity: 223,
        // createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        pageQuantity: 251,
      },
      {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        pageQuantity: 317,
      },
      {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        pageQuantity: 636,
      },
      {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        pageQuantity: 766,
      },
      {
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        pageQuantity: 607,
      },
      {
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        pageQuantity: 607,
      },
      {
        title: "Harry Potter and the Cursed Child",
        author: "J.K. Rowling, Jack Thorne, John Tiffany",
        pageQuantity: 336,
      },
      {
        title: "Forever, Interrupted",
        author: "Taylor Jenkins Reid",
        pageQuantity: 352,
      },
      {
        title: "After I Do",
        author: "Taylor Jenkins Reid",
        pageQuantity: 352,
      },
      {
        title: "Maybe in Another Life",
        author: "Taylor Jenkins Reid",
        pageQuantity: 342,
      },
      {
        title: "One True Loves",
        author: "Taylor Jenkins Reid",
        pageQuantity: 352,
      },
      {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        pageQuantity: 400,
      },
      {
        title: "Daisy Jones & The Six",
        author: "Taylor Jenkins Reid",
        pageQuantity: 355,
      },
      {
        title: "Malibu Rising",
        author: "Taylor Jenkins Reid",
        pageQuantity: 369,
      },
      {
        title: "Carry Soto is Back",
        author: "Taylor Jenkins Reid",
        pageQuantity: 500,
      },
    ], {}),

  down: async (queryInterface, _Sequelize) => queryInterface
    .bulkDelete('Books', null, {}),
};

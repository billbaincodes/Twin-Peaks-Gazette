
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character"; ALTER SEQUENCE post_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {
          id: 1,
          name: 'Leland Palmer',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/c/cd/LelandPalmer.jpg/revision/latest/scale-to-width-down/350?cb=20160816065237"
        },
        {
          id: 2,
          name: 'Laura Palmer',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/e/ef/Laura_Palmer%2C_the_Queen_Of_Hearts.jpg/revision/latest/scale-to-width-down/350?cb=20170615044123"
        },        {
          id: 3,
          name: 'Margaret Lanterman',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/6/68/Logladyreplacement.jpg/revision/latest/scale-to-width-down/350?cb=20160906170235"
        }
      ]);
    });
};

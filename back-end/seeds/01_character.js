
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character"; ALTER SEQUENCE post_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {
          id: 1,
          name: 'Leland Palmer',
          handle : '@Not_bob',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/c/cd/LelandPalmer.jpg/revision/latest/scale-to-width-down/350?cb=20160816065237"
        },
        {
          id: 2,
          name: 'Laura Palmer',
          handle: '@MySecretDiary',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/e/ef/Laura_Palmer%2C_the_Queen_Of_Hearts.jpg/revision/latest/scale-to-width-down/350?cb=20170615044123"
        },        {
          id: 3,
          name: 'Margaret Lanterman',
          handle: '@LogLady',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/6/68/Logladyreplacement.jpg/revision/latest/scale-to-width-down/350?cb=20160906170235"
        },
        {
          id: 4,
          name: 'Dale Cooper',
          handle: '@DamnFineCoffee',
          avatarURL: "https://vignette.wikia.nocookie.net/p__/images/3/3a/Cooper_005.jpg/revision/latest?cb=20170928134456&path-prefix=protagonist"
        }
      ]);
    });
};

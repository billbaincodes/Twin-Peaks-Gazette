
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
          name: 'Audrey Horne',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/9/98/AudreyNew.jpg/revision/latest/scale-to-width-down/350?cb=20161026025355"
        },        {
          id: 3,
          name: 'Margaret Lanterman',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/6/68/Logladyreplacement.jpg/revision/latest/scale-to-width-down/350?cb=20160906170235"
        }
      ]);
    });
};

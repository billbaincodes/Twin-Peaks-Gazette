exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "post"; ALTER SEQUENCE post_id_seq RESTART WITH 4;')
    .then(function() {
      // Inserts seed entries
      return knex("post").insert([
        {
          id: 1,
          title: "weird peeps",
          body: "anyone else seeing weird people around",
          imageURL: "https://m.media-amazon.com/images/M/MV5BNWU0ZWNiYmUtYjhhZC00Y2E4LTg1MWUtZmZmMGNhMTM2M2YzXkEyXkFqcGdeQXVyMjYyODQ0OTQ@._V1_.jpg",
          character_id: 3
        },
        {
          id: 2,
          title: "pay attention to me",
          body: "im audrey horne and i need more attention on me than stupid laura",
          imageURL: "https://m.media-amazon.com/images/M/MV5BMTM5Mzg1MjUyOV5BMl5BanBnXkFtZTgwMTU1Mjg0MDE@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
          character_id: 2
        },
        {
          id: 3,
          title: "ivy consumption",
          body: "does eat oats and and oats and little lambs eat ivy",
          imageURL: "https://m.media-amazon.com/images/M/MV5BMTA3MTE3OTQ0OTBeQTJeQWpwZ15BbWU4MDAzMjQ5NDAx._V1_SY1000_CR0,0,1481,1000_AL_.jpg",
          character_id: 1
        }
      ])
    })
}

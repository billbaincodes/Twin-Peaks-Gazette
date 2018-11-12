exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "post"; ALTER SEQUENCE post_id_seq RESTART WITH 4;')
    .then(function() {
      // Inserts seed entries
      return knex("post").insert([
        {
          id: 1,
          title: "Hey, what’s up, doc?",
          body: "Its Laura, in case you haven’t guessed. It’s Thursday the twenty-third and I’m so bored. Actually, I’m in kind of a weird mood. God, James is sweet, but he’s so dumb, and right now I can only take so much of sweet.",
          imageURL: "https://m.media-amazon.com/images/M/MV5BMTM5Mzg1MjUyOV5BMl5BanBnXkFtZTgwMTU1Mjg0MDE@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
          character_id: 2
        },
        {
          id: 2,
          title: "Inner Guilt",
          body: "Mairzy doats and dozy doats and liddle lamzy divey. A kiddley divey too, wouldn't you?",
          imageURL: "https://m.media-amazon.com/images/M/MV5BMTA3MTE3OTQ0OTBeQTJeQWpwZ15BbWU4MDAzMjQ5NDAx._V1_SY1000_CR0,0,1481,1000_AL_.jpg",
          character_id: 1
        },
        {
          id: 3,
          title: "Welcome to Twin Peaks",
          body: "My name is Margaret Lanterman. I live in Twin Peaks. I am known as the Log Lady. There is a story behind that. There are many stories in Twin Peaks — some of them are sad, some funny. Some of them are stories of madness, of violence.",
          imageURL: "https://m.media-amazon.com/images/M/MV5BNWU0ZWNiYmUtYjhhZC00Y2E4LTg1MWUtZmZmMGNhMTM2M2YzXkEyXkFqcGdeQXVyMjYyODQ0OTQ@._V1_.jpg",
          character_id: 3
        }
      ])
    })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "post"; ALTER SEQUENCE post_id_seq RESTART WITH 1;')
    .then(function() {
      // Inserts seed entries
      return knex("post").insert([
        {
          title: "weird peeps",
          body: "anyone else seeing weird people around",
          imageURL: "https://picsum.photos/200"
        },
        {
          title: "pay attention to me",
          body: "im audrey horne and i need more attention on me than stupid laura",
          imageURL: "https://picsum.photos/200"
        },
        {
          title: "ivy consumption",
          body: "does eat oats and and oats and little lambs eat ivy",
          imageURL: "https://picsum.photos/200"
        }
      ])
    })
}

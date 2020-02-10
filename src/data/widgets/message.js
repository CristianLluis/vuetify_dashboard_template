import { users } from "@/data/dummyData";

export default [
  {
    avatar: users[1].avatar,
    title: "Movie this weekend?",
    subtitle: `<span class='text--primary'>${
      users[1].name
    }</span> &mdash; Have seen the Avenger End Game?`
  },
  { divider: true, inset: true },
  {
    avatar: users[2].avatar,
    title:
      'Visit Hill Station <span class="grey--text text--lighten-1">4</span>',
    subtitle: `<span class='text--primary'>to ${users[0].firstname}, ${
      users[1].firstname
    }, ${
      users[3].firstname
    }</span> &mdash; Wish I could come, but I'm out of town this weekend.`
  },
  { divider: true, inset: true },
  {
    avatar: users[3].avatar,
    title: "I am in NY city",
    subtitle: `<span class='text--primary'>${
      users[3].name
    }</span> &mdash; Do you have New York recommendations? Have you ever been?`
  },
  { divider: true, inset: true },
  {
    avatar: users[4].avatar,
    title: "Party at my place",
    subtitle: `<span class='text--primary'>${
      users[4].name
    }</span> &mdash; How about the dance party at my place?`
  }
];

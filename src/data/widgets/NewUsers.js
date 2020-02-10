import { users } from "@/data/dummyData";

export default [
  {
    avatar: users[1].avatar,
    name: users[1].name,
    designation: "Sales Manager"
  },
  { divider: true, inset: true },
  {
    avatar: users[2].avatar,
    name: users[2].name,
    designation: "Project Manager"
  },
  { divider: true, inset: true },
  {
    avatar: users[3].avatar,
    name: users[3].name,
    designation: "Principle Engineer"
  },
  { divider: true, inset: true },
  {
    avatar: users[4].avatar,
    name: users[4].name,
    designation: "Tech Lead"
  }
];

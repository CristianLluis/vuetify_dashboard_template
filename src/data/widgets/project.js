import { users } from "@/data/dummyData";
const Projects = [
  {
    username: users[1].firstname,
    avatar: users[1].avatar,
    name: "Sketch File Template",
    deadline: "3 days later",
    progress: 85,
    color: "pink",
    members: [users[2], users[3], users[4]], // Max 3 users and show (+3) users
    membesCount: 3
  },
  {
    username: users[5].firstname,
    avatar: users[5].avatar,
    name: "Layout Design",
    deadline: "1 weeks later",
    progress: 72,
    color: "success",
    members: [users[2], users[3], users[1]],
    membesCount: 4
  },
  {
    username: users[4].firstname,
    avatar: users[4].avatar,
    name: "GraphQL API",
    deadline: "1 Month later",
    progress: 50,
    color: "info",
    members: [users[2], users[3]],
    membesCount: 2
  },
  {
    username: users[3].firstname,
    avatar: users[3].avatar,
    name: "Lambda Testing",
    deadline: "2 Month later",
    progress: 30,
    color: "teal",
    members: [users[2], users[4], users[5]],
    membesCount: 10
  },
  {
    username: users[2].firstname,
    avatar: users[2].avatar,
    name: "Project Deploy",
    deadline: "half year later",
    progress: 15,
    color: "grey",
    members: [users[2]],
    membesCount: 1
  }
];

const getProject = limit => {
  return limit ? Projects.slice(0, limit) : Projects;
};

export { Projects, getProject };

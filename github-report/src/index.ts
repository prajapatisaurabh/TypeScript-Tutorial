import { sortBy, take } from "lodash";
import { GuthubApiService } from "./GithubApiService";
import { Repo } from "./Repo";
import { User } from "./User";

if (process.argv.length < 3) {
  console.log("Please pass the username");
} else {
  let username = process.argv[2];
  let svc = new GuthubApiService();
  svc.getUserInfo(username, (user: User) => {
    svc.getRepo(username, (repos: Repo[]) => {
      let sortedRepo = sortBy(repos, [(repo: Repo) => repo.size * -1]);
      let filterdRepo = take(sortedRepo, 5);
      user.repos = filterdRepo;
      console.log(user);
    });
  });
}

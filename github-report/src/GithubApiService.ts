import request from "request";
import { User } from "./User";
import { Repo } from "./Repo";

export class GuthubApiService {
  options: any = {
    headers: {
      "User-Agent": "request",
    },
    json: true,
  };

  getUserInfo(username: string, cb: (user: User) => any) {
    request.get(
      "https://api.github.com/users/" + username,
      this.options,
      (error: any, response: any, body: any) => {
        let user1 = new User(body);
        cb(user1);
      }
    );
  }

  getRepo(username: string, cb: (repoArray: Repo[]) => any) {
    request.get(
      "https://api.github.com/users/" + username + "/repos",
      this.options,
      (error: any, response: any, body: any) => {
        let repoArraya = body.map((repo: any) => new Repo(repo));
        cb(repoArraya);
      }
    );
  }
}

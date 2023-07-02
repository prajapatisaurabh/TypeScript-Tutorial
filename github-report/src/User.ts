import { Repo } from "./Repo";

export class User {
  login: string;
  fullname: string;
  repoCount: number;
  follwerCount: number;
  repos?: Repo[];

  constructor(userResponse: any) {
    this.login = userResponse.login;
    this.fullname = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.follwerCount = userResponse.followers;
  }
}

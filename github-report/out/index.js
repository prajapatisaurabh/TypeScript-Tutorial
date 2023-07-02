"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const GithubApiService_1 = require("./GithubApiService");
console.log(process.argv);
if (process.argv.length < 3) {
    console.log("Please pass the username");
}
else {
    let username = process.argv[2];
    let svc = new GithubApiService_1.GuthubApiService();
    svc.getUserInfo(username, (user) => {
        svc.getRepo(username, (repos) => {
            let sortedRepo = (0, lodash_1.sortBy)(repos, [(repo) => repo.size * -1]);
            let filterdRepo = (0, lodash_1.take)(sortedRepo, 5);
            user.repos = filterdRepo;
            console.log(user);
        });
    });
}

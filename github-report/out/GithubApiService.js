"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuthubApiService = void 0;
const request_1 = __importDefault(require("request"));
const User_1 = require("./User");
const Repo_1 = require("./Repo");
class GuthubApiService {
    constructor() {
        this.options = {
            headers: {
                "User-Agent": "request",
            },
            json: true,
        };
    }
    getUserInfo(username, cb) {
        request_1.default.get("https://api.github.com/users/" + username, this.options, (error, response, body) => {
            let user1 = new User_1.User(body);
            cb(user1);
        });
    }
    getRepo(username, cb) {
        request_1.default.get("https://api.github.com/users/" + username + "/repos", this.options, (error, response, body) => {
            let repoArraya = body.map((repo) => new Repo_1.Repo(repo));
            cb(repoArraya);
        });
    }
}
exports.GuthubApiService = GuthubApiService;

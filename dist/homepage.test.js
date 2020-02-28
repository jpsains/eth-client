"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app = '../dist';
describe("homepage", () => {
    it("Welcomes the user", (done) => {
        http_1.request(app).getHeader("/");
        expect(200);
        expect(/hello fine user/);
    });
});

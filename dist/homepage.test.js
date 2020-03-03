"use strict";
const request = require('supertest');
const app = '../dist';
// describe("homepage", () => {
//     it("Welcomes the user", async (done) =>{
//         await request(app).get("/")
//         expect(200)
//         expect(/hello fine user/)
//     } )
// })
describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true);
    });
});

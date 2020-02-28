import jest from 'jest'
import { request } from 'http'
const app = '../dist'

describe("homepage", () => {
    it("Welcomes the user", (done) =>{
        request(app).getHeader("/")
        expect(200)
        expect(/hello fine user/)
    } )
})
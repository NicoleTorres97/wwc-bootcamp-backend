//here runs supertest package

const request = require('supertest')

const app = require('../src/index')

describe("Calling /post with GET", () => {
    test("It should respond with 200 status code", async () => {
        const response = await request(app).get("/post").send();
        expect(response.status).toBe(200);
    })

    test("It should respond with an array", async () => {
        const response = await request(app).get("/post").send();
        expect(response.status).toBeInstanceOf(Array);
    })
})



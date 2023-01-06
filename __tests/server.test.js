const request = require("supertest");
const app = require("../app");
require("../routes")(app);

describe('Application healthCheck endpoint', () => {
    it('Should return an Up Status JSON', async() => {
        await request(app)
            .get('/')
            .expect(200)
            .then(res => {
                expect(res.body[0])
                    .toHaveProperty('Message')
                expect(JSON.stringify(res.body).toString())
                    .toContain('Roomee Members')
                expect(JSON.stringify(res.headers).toString())
                    .toContain('application/json')
            })
    })
})

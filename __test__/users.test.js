const request = require('supertest');
const app = require('../api');
const { nanoid }  =require('nanoid');

let testServer
beforeAll(() => {
    testServer = app.listen(4000)
});

afterAll((done) => {
    testServer.close(done)
});

describe('GET /api/users', () => {
    it('should return all users', async () => {
        const response = await request(app).get("/api/users")

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
        expect(response.body.body).not.toBeNull();
        expect(Array.isArray(response.body.body)).toBe(true);
        expect(response.body.body.length).toBe(2);
    });    
});

describe('GET /api/users', () => {
    it('should GET a user', async() => {    
        const response = await request(app).get("/api/users/1")
        expect(response.error).toBe(false)
        expect(response.status).toBe(200);
        expect(response.body.body).not.toBeNull();
        expect(response.body.body.id).toBe("1");        
    });
});


describe('POST /api/users', () => {
    it('should POST a new user', async() => {    
        const userId = nanoid()
        let user = {
            id: userId,
            name:"nuevo usuario",
            username:"nuevo_usuario"
        }
        const response = await request(app).post("/api/users/").send(user)
        expect(response.error).toBeFalsy();
        expect(response.status).toBe(200);
        expect(response.body.body).not.toBeNull();
        expect(response.body.body.id).toBe(user.id);        
    });
})

const request = require('supertest');
const app = require('./index');

describe('Node.js App', () => {
    it('should return a welcome message on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(201);
        expect(response.text).toBe('Hello, AWS CodePipeline!');
    });

    it('should return health status on GET /health', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: 'UP' });
    });
});

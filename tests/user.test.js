const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function(){
    it('responds with json', function(done){
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    })
});

describe('Test : cannot get one user', function(){
    it('responds with json', function(done){
        request(app)
        .get('/api/users/0')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    })
});

describe('Test : get one user', function(){
    it('responds with json', function(done){
        request(app)
        .get('/api/users/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
});
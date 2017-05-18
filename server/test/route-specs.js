`use strict`

process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const { knex } = require('../db/database')
const localAuth = require('../auth/local');
chai.use(chaiHttp)

describe('auth : local', () => {
  describe('encodeToken()', () => {
  it('should return a token', (done) => {
    const results = localAuth.encodeToken({id: 1});
    should.exist(results);
    results.should.be.a('string');
    done();
  });
});
  describe('decodeToken()', () => {
  it('should return a payload', (done) => {
    const token = localAuth.encodeToken({id: 1});
    should.exist(token);
    token.should.be.a('string');
    localAuth.decodeToken(token, (err, res) => {
      should.not.exist(err);
      res.sub.should.eql(1);
      done();
    });
  });
});
});

// test for getting the api root
  describe('get root route', ()=>{
    it('should have all routes',() =>{
      return chai.request(server)
        .get('/api/v1/')
        .then((res) => {
          res.should.have.status(200)
          res.should.be.json
          res.should.be.a.object
         })
    })
  });
describe('routes : auth', () => {

  beforeEach(() => {
  return knex.migrate.rollback()
  .then(() => { return knex.migrate.latest(); })
  .then(() => { return knex.seed.run(); });
});

  // afterEach(() => {
  //   return knex.migrate.rollback();
  // });
  describe('POST /patient/new', () => {
  it('should register a new user', (done) => {
    chai.request(server)
    .post('/api/v1/patient/new')
    .send({
      email: 'micheal@gmail.com',
      password: 'priya',
      confirmation: 'priya'
    })
    .end((err, res) => {
      should.not.exist(err);
      res.redirects.length.should.eql(0);
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      res.body.should.include.keys('status', 'token');
      res.body.status.should.eql('success');
      done();
    });
  });
});
  describe('POST /patient/check', () => {
  it('should login a user', (done) => {
    chai.request(server)
    .post('/api/v1/patient/check')
    .send({
      email: 'michael@gmail.com',
      password: 'priya'
    })
    .end((err, res) => {
      should.not.exist(err);
      res.redirects.length.should.eql(0);
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      res.body.should.include.keys('status', 'token');
      res.body.status.should.eql('success');
      should.exist(res.body.token);
      done();
    });
  });
  it('should not login an unregistered user', (done) => {
  chai.request(server)
  .post('/api/v1/patient/check')
  .send({
    email: 'priya@gmail.com',
    password: 'johnson123'
  })
  .end((err, res) => {
    should.exist(err);
    res.status.should.eql(500);
    res.type.should.eql('application/json');
    res.body.status.should.eql('error');
    done();
  });
});
});

});

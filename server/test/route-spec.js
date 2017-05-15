process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http')
const server = require('../app')
const { knex } = require('../db/database')
const localAuth = require('../auth/local');
chai.use(chaiHttp)


describe('auth : local', () => {
  describe('encodeToken()', () => {
  it('should return a token', (done) => {
    const results = localAuth.encodeToken({id: 2});
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
//test for routes
describe('patient_portal routes', ()=>{
  // does a rollback on test db and then migration and seed before each test run so we know what is in db
     beforeEach(() => {
      return knex.migrate.rollback()
      .then(() => { return knex.migrate.latest(); })
      .then(() => { return knex.seed.run(); });
    })
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


 describe('POST /patient/check', () => {
  it('should login a user', (done) => {
    chai.request(server)
    .post('/patient/check')
    .send({
      email: 'jeremy',
      password: 'johnson123'
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
    it('should not login an unregistered user', (done) => {
  chai.request(server)
  .post('/patient/check')
  .send({
    username: 'michael',
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
 describe('GET /patient/check', () => {
  it('should return a success', (done) => {
    chai.request(server)
    .post('/patient/check')
    .send({
      username: 'jeremy',
      password: 'johnson123'
    })
    .end((error, response) => {
      should.not.exist(error);
      chai.request(server)
      .get('/patient')
      .set('authorization', 'Bearer ' + response.body.token)
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        done();
      });
    });
  });
  it('should throw an error if a user is not logged in', (done) => {
    chai.request(server)
    .get('/auth/user')
    .end((err, res) => {
      should.exist(err);
      res.status.should.eql(400);
      res.type.should.eql('application/json');
      res.body.status.should.eql('Please log in');
      done();
    });
  });
});

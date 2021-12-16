process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'http://localhost:3001';

var agent = chai.request.agent(url)



describe('Authenticate a user: ',()=>{
    it('should receive an OK and a cookie with the authentication token', (done) => {
    agent
    .get('/authentication')
      .auth('user', 'password')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    return agent.get('/user')
          .then(function (res) {
            expect(res).to.have.status(200);
            console.log(res.body)
            done();
          });
    done();
    });
    });
   });
   

   describe('delete the user with id 1: ',()=>{
    it('should delete the user with id 1', (done) => {
    chai.request(url)
    .get('/user/1')
    .end( function(err,res){
    console.log(res.body)
    expect(res.body).to.have.lengthOf(2);
    expect(res).to.have.status(200);
    chai.request(url)
    .del('/user/1')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
    });
});
   
     
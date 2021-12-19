process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'http://localhost:3001';

var agent = chai.request.agent(url)



describe('Authenticate a user who already exists: ',()=>{
    it('Authenticate a user who already exists', (done) => {
    agent
    .post('/user/login')
    .send({password:'richito',email:'emaillll@emaaaaail.com'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});
   
describe('Register a user : ',()=>{
    it('should insert an user ', (done) => {
    chai.request(url)
    .post('/user/register')
    .send({username:"rafaaeeeel",password:"rafaaaaapassword",email:"rafaaaaeeel@emaaail.com"})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});
   

describe('delete the user with id 1: ',()=>{
    it('should delete the user with id 1', (done) => {
    chai.request(url)
    .del('/user/61bb7849cf85101ac16a8a18')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});


describe('get the user with id 61bce768656b45e15d623f19: ',()=>{
    it('should get the user with id 61bce768656b45e15d623f19', (done) => {
    chai.request(url)
    .get('/user/61bce768656b45e15d623f19')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});    
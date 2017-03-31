let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect();

let hostName = 'http://vm344a.se.rit.edu:80';
let apiFile = '/htdocs/SWEN-344-API/API/API.php';
let baseGetUrl = apiFile.concat('?team=book_store');

chai.use(chaiHttp);

describe('GET toggle book with isbn = 4 and previous state of book true', () =>{
	it('it should return an empty json object', (done)=>{
		let query = baseGetUrl.concat('&function=toggleBook&isbn=4&available=1');
			chai.request(hostName)
			.get(query)
				.end((err, res) => {
			res.body.should.be.a('Object');
			res.body.should.be.empty;
					done();
				});
	});
});

describe('GET toggle book with isbn = 4 and previous state of book false', () =>{
	it('it should return an empty json object', (done)=>{
		let query = baseGetUrl.concat('&function=toggleBook&isbn=4&available=0');
			chai.request(hostName)
			.get(query)
				.end((err, res) => {
			res.body.should.be.a('Object');
			res.body.should.be.empty;
					done();
				});
	});
});

describe('/GET order book isbn = 4 and amount = 1', () =>{
	it('it should return a number to indicate new amount', (done)=>{
		let query = baseGetUrl.concat('&function=orderBook&isbn=4&amount=1');
			chai.request(hostName)
			.get(query)
				.end((err, res) => {			
			res.body.should.be.a('string');
			res.body.should.be.least(1);
					done();
				});
	});
});

describe('/GET order book isbn = 4 and amount = 15', () =>{
	it('it should return a number to indicate new amount', (done)=>{
		let query = baseGetUrl.concat('&function=orderBook&isbn=4&amount=15');
			chai.request(hostName)
			.get(query)
				.end((err, res) => {			
			res.body.should.be.a('string');
			res.body.should.be.least(15);
					done();
				});
	});
});

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect();

let hostName = 'http://vm344a.se.rit.edu:80';
let apiFile = '/htdocs/SWEN-344-API/API/API.php';
let baseGetUrl = apiFile.concat('?team=book_store');

chai.use(chaiHttp);

describe('findOrCreateAuthor using POST, author DNE', () => {
	it('it should return a 201 status code', (done) => {
	let getFunction = '&function=findOrCreateAuthor';
	//let f_name = '&first_name=Joseph';
	//let l_name = '&last_name=testName';
	
	let params = [getFunction].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
	chai.request(hostName)
            .post(url)
			.set('content-type', 'application/x-www-form-urlencoded')
			.type('form')
            .send('first_name=Joseph')
			.send('last_name=testName')
            .end((err, res) => {
                res.body.should.be.a('Number');
				res.should.have.status(201);
				Object.keys(res.body).should.not.be.eql(0);
              done();
			});
	});
});

describe('findOrCreateAuthor using POST & invalid parameter', () => {
	it('it should return a 400 status code', (done) => {
	let getFunction = '&function=findOrCreateAuthor';
	let f_name = '&first__Name=Joseph';
	let l_name = '&last__Name=testName';
	
	let params = [getFunction,f_name,l_name].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				//res.body.should.be.empty;
				res.should.have.status(400);
					done();
			});
	});
});

describe('findOrCreateAuthor using POST, author Exists', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=findOrCreateAuthor';
	
	let params = [getFunction].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
	chai.request(hostName)
		.post(url)
		.set('content-type', 'application/x-www-form-urlencoded')
		.type('form')
		.send('first_name=Joseph')
		.send('last_name=testLastName')
			.end((err, res) => {
				res.body.should.be.a('Number');
				res.should.have.status(201);
				Object.keys(res.body).should.not.be.eql(0);
					done();
			});
	});
});

describe('updateBook using POST', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=updateBook';
	
	let params = [getFunction].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
	chai.request(hostName)
		.post(url)
		.set('content-type', 'application/x-www-form-urlencoded')
		.type('form')
		.send('isbn=4')
		.send('title=testNewTitle')
		.send('price=344')
		.send('thumbnail_url=www.bing.com')
		.send('available=1')
		.send('count=56')
		.end((err, res) => {
				res.should.have.status(200);
					done();
			});
	});
});

describe('updateBook using POST sending no parameters', () => {
	it('it should return a 400 status code', (done) => {
	let getFunction = '&function=updateBook';
	let isbn = '&isbn=4';
	let title = '&title=testNewTitle';
	let wrong_price = '&book_price=344';
	let thumbnail_url = '&thumbnail_url=www.bing.com';
	let available = '&available=1';
	let count = '&count=56';
	
	let params = [getFunction].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.should.have.status(400);
					done();
			});
	});
});
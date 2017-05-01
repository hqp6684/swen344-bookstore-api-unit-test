let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect();

let hostName = 'http://vm344a.se.rit.edu:80';
let apiFile = '/htdocs/SWEN-344-API/API/API.php';
let baseGetUrl = apiFile.concat('?team=book_store');

chai.use(chaiHttp);

/*
 * Searches books by a specific
 * isbn
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let isbn = '&isbn=4';
	
	let params = [getFunction,isbn].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				// Object.keys(res.body).should.not.be.eql(0);
					done();
			});
	});
});

/*
 * Searches books to find those that are
 * available
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let available = '&available=1';
	
	let params = [getFunction,available].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				// Object.keys(res.body).should.not.be.eql(0);
					done();
			});
	});
});

/*
 * Searches books by a specific
 * title
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let title = '&title=*********title that exists********************';
	
	let params = [getFunction,title].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				// Object.keys(res.body).should.not.be.eql(0);
					done();
			});
	});
});

/*
 * Searches books by a specific
 * thumbnail_url
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let thumbnail_url = '&thumbnail_url=*********thumbnail_url_that_exists********************';
	
	let params = [getFunction,thumbnail_url].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				// Object.keys(res.body).should.not.be.eql(0);
					done();
			});
	});
});
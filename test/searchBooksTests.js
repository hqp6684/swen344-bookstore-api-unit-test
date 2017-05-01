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
 * Preconditions: 
 * 		A book with the isbn = 4 exists.
 * 
 * Postconditions:
 * 		The responce should include an Array with a single Book object with
 * 		an isbn = 4.
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let search_attribute = '&search_attribute=isbn';
	let search_string = '&search_string=4';
	
	let params = [getFunction,search_attribute, search_string].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				//there should be something in the body
				Object.keys(res.body).should.not.be.eql(0);
				res.body.should.be.a('array');
				//TODO:
				//make sure the length of the array = 1
					done();
			});
	});
});

/*
 * Searches books to find those that are
 * available.
 * 
 * Preconditions: 
 * 		One or more books with available = 1 exist.
 * 
 * Postconditions:
 * 		- The responce should include all of the books
 * 		that are available as an Array.
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let search_attribute = '&search_attribute=available';
	let search_string = '&search_string=1';
	
	let params = [getFunction,search_attribute, search_string].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				Object.keys(res.body).should.not.be.eql(0);
				res.body.should.be.a('array');
				//TODO:
				//check the length and make sure it matches how 
				//many books are actually available in dummy data.
					done();
			});
	});
});

/*
 * Searches books by a specific
 * title
 * 
 * Preconditions: 
 * 		At least one book exists with this title.
 * 
 * Postconditions:
 * 		The responce includes all books with the title matching
 * 		the title searched for.
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let search_attribute = '&search_attribute=title';
	let search_string = '&search_string=*********title that exists********************';

	let params = [getFunction,search_attribute, search_string].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				Object.keys(res.body).should.not.be.eql(0);
				res.body.should.be.a('array');
				//TODO:
				//Test to make sure the length of the array = number of books with this title
					done();
			});
	});
});

/*
 * Searches books by a specific
 * thumbnail_url
 * 
 * Preconditions: 
 * 		At least one book exists with this thumbnail_url.
 * 
 * Postconditions:
 * 		The responce includes all books with the thumbnail_url matching
 * 		the thumbnail_url searched for.
 * 
 * 
 */
describe('searchBooks using GET', () => {
	it('it should return a 200 status code', (done) => {
	let getFunction = '&function=searchBooks';
	let search_attribute = '&search_attribute=thumbnail_url';
	let search_string = '&search_string=*********thumbnail_url that exists********************';

	let params = [getFunction,search_attribute, search_string].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);
	
		chai.request(hostName)
		.post(url)
			.end((err, res) => {
				res.body.should.be.a('Object');
				res.should.have.status(200);
				Object.keys(res.body).should.not.be.eql(0);
				res.body.should.be.a('array');
				//TODO:
				//Test to make sure the length of the array = number of books with this thumbnail_url
					done();
			});
	});
});
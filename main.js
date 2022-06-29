var myURL = new URL('http://page.sisubeny.top/index.html?key=a')
console.log(myURL.search);
var searchParams = new URLSearchParams(myURL.search);
console.log(searchParams.get('key'));

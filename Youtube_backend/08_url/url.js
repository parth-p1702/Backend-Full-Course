// URL(uniform resource locator):
// example: https://www.example.com/path/to/resource/?query=parameter
// in this example, https(hypertext transfer protocol secure) is the protocol,
// www.example.com is the domain name.
// /path/to/resource is the path to the resource on the server.
// ?query=parameter is the query string, which contains additional parameters for the request.

// This is example of url in nodejs code:-

import http from 'http';

http.get('https://www.example.com/path/to/resource/?query=parameter', (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
}).on('error', (e) => {
  console.log(`ERROR: ${e.message}`);
});


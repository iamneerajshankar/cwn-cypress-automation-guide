Basic Auth
-----------------------------------------------------------------------------------------------------------------------
Basic auth is probably the simplest model of Authentication for APIs. To authenticate using basic auth, you should 
send a set of usernames & password to the API.

Understanding Request in Cypress
-----------------------------------------------------------------------------------------------------------------------
cy.request is a command used to make HTTP requests directly from your test code

Here's a basic overview of how cy.request works:
-----------------------------------------------------------
// Example usage of cy.request
cy.request({
  method: 'POST', // HTTP method (GET, POST, etc.)
  url: '/api/endpoint', // URL to send the request to
  headers: {
    'Content-Type': 'application/json', // Set headers if needed
    // Add other headers as necessary
  },
  body: {
    key1: 'value1',
    key2: 'value2',
    // Add other request body parameters
  },
}).then((response) => {
  // Handle the response
  expect(response.status).to.eq(200); // Check the HTTP status code
  // Add other assertions based on the response
});


Diving into the headers
-----------------------------------------------------------------------------------------------------------------------
HTTP headers provide additional information about the request or response.

1. Content-Type:
-----------------------------------------------------------
Specifies the media type of the resource. Common values include "application/json", "application/xml", "text/html", etc.

example --> Content-Type: application/json

2. Authorization
-----------------------------------------------------------
Provides credentials for authenticating the client with the server.
example --> Authorization: Basic base64encoded(username:password)

3. Accept
-----------------------------------------------------------
Informs the server about the types of media that the client can process.
Example --> Accept: application/json

4. User-Agent:
-----------------------------------------------------------
Identifies the user agent (browser or other client) making the request.

Example --> User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36


5. Referer
-----------------------------------------------------------
Specifies the address of the previous web page from which a link to the currently requested page was followed

Example --> Referer: https://www.example.com/previous-page

6. Cookie
-----------------------------------------------------------
Contains stored HTTP cookies.
Example --> Cookie: sessionid=abc123; user=JohnDoe

7. Cache-Control:
-----------------------------------------------------------
Directives for caching mechanisms in both requests and responses.
Example --> Cache-Control: no-cache, no-store, must-revalidate

8. Origin:
----------------------------------------------------------
Indicates where a fetch originates from.
Example --> Origin: https://www.example.com

9. Content-Length:
-----------------------------------------------------------
The length of the request or response body in octets (8-bit bytes).
Example --> Content-Length: 1024

10. X-Requested-With:
-----------------------------------------------------------
Identifies Ajax requests. Commonly used with JavaScript frameworks.
Example --> X-Requested-With: XMLHttpRequest

11. Custom Headers:
------------------------------------------------------------
Example --> X-Api-Key: your_api_key





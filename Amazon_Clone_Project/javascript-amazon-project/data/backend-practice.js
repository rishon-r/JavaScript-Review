const xhr= new XMLHttpRequest(); // This creates a new HTTP message to send to the back-end. Such a message is known as a HTTP request
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev'); // This method initializes a newly-created HTTP request

// Takes two parameters: What kind of message we want to send, Where to send the HTTP message
// We supply a HTTP method type for the first parameter and a URL for the second parameter
// URL stands for Uniform Resource Locator
// Examples of URLS: https://amazon.com, https://youtube.com and https://supersimple.dev
// The second part of a URL e.g youtube.com is known as a DOMAIN NAME
xhr.send(); // This sends the message to the URL we initialized it with
// Upon sending this message and running the code in this file, opening the network tab after clicking inspect will show this request
// Note that xhr.send() is an ASYNCHRONOUS line of CODE
// And that when we send a request via xhr.send() it takes some time for the request to be sent and a response to be received via the internet
// So, the xhr.response is not available right away and will be undefined until a response is sent back
// xhr.send() being an asynchronous line of code, will immediately move on to the next line without waiting for the response
// That is why we use the event listener. 'load' means that the HTTP response has loaded
// We define the event listener before because we want the event listener to be listening before we allow the event to happen

// We can send different messages or different requests to the backend via URL Paths
// A URL Path is the part that comes after the domain name: E.g https://supersimple.dev/hello
// Above, /hello is the URL Path. If there is no explicit URL path, it is most commonly /
// When we send a request to a different URL path, each URL path will give us a different response

// A back-end only supports a set of URL paths
// If we send a request to a URL path that the back-end doesn't support, the back-end will respond with a error message
// Whenever, we get a response from the back-end, the back-end also sends us something known as a STATUS CODE
// A status code tells us whether a particular request succeeded or failed
// A status code starting with 4 or 5 means the response failed, a status code starting with 2 means it succeeded
// A status code starting with 4 means it is a problem on the user's side, i.e  they requested a path that they shouldn't have for example
// A status code starting with 5 means that the response failed due to a problem with the back-end
// Status codes can also be viewed in Inspect > Network > Select request name > Headers

// How do we know which URL paths are supported?
// There is no way to know all of them especially due to the fact that a lot of them are hidden due to security reasons
// However, some back-ends do provide you with a documentation page that allows you to access certain things

// The list of all url paths that are supported by a backend is known as a BACKEND API
// API stands for APPLICATION PROGRAMMING INTERFACE
// An interface means 'How we interact with something'
// The backend API is the list of all ways that we can interact with a backend

// The backend can respond with different types of data, not just TEXT
// One of the types of data is TEXT
// When we go Inspect > Network > Select request name > Headers and scroll down to Response Headers,
// It will have the Content-Type Header which tells us what kind of data the response contained
// Another type of data that the backend can respond with is JSON
// This allows us to send JavaScript objects across the internet to the backend
// When we recive JSON data from the backend, we can use JSON.parse() in order to convert it into a JS object
// Another type of data that the backend can respond with is HTML
// Finally, another type of data the backend can respond with is an Image

// When we type a URL in the browser, it actually sends a GET request to that URL
// Based on the type of response, the browser may actually be able to represent it in a different way
// E.g HTML responses are displayed as webpages
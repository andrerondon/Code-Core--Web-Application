// To be able to make cross-origin requests, what we mean by is making HTTP/AJAX
// requests we need to allow accepting requests from different origins

// cross-origin requests come into the scene in the following cases
// 1. When trying to make a request from a different domain to our API example making a request from facebook.com
//  to google.com completely different domains
// 2. When we try to make a request from the same domain but, different ports for exmple making a request
//  from localhost:8080 to localhost:3000
// 3. When we try to make a request using a different protocol for example making a request
//  from https://localhost:3000 to http://localhost:3000
// 4. When we try to make a request from a sub domain to a domain for example making a request
//  from http://developers.google.com to http://google.com

const baseUrl = "http://localhost:3000/api/v1";

// Create a helper module that has all question related requests
const Question = {
  all() {
    return fetch(`${baseUrl}/questions`, {
      credentials: "include",
    }).then((res) => res.json());
  },

  one(id) {
    return fetch(`${baseUrl}/questions/${id}`, {
      credentials: "include",
    }).then((res) => res.json());
  },

  create(params) {
    // params is an object that represents a question
    // { title: 'question title', body: 'question body' }
    return fetch(`${baseUrl}/questions`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  update(id, params) {
    return fetch(`${baseUrl}/questions/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  },
};

// This is a helper module with methods associated with creating (and maybe later, destroying)
// a user session
const Session = {
  create(params) {
    // params: { email: 'email@domain.ext', password: 'strong password' }
    return fetch(`${baseUrl}/session`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};

Session.create({
  email: "js@winterfell.gov",
  password: "supersecret",
});

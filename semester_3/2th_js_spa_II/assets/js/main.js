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

  destroy(id) {
    return fetch(`${baseUrl}/questions/${id}`, {
      credentials: "include",
      method: "DELETE",
    }).then((res) => res.json());
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

/*
{
    id: 11,
    title: "Transmitting the transmitter won't do anything, we need to index the neural xml microchip!",
    body: "Chuck Norris' addition operator doesn't commute; it teleports to where he needs it to be.",
    hello_world: "hello world from serializer",
    like_count: 5,
    author: {
        id: 8,
        first_name: "Rodger",
        last_name: "Hermann",
        email: "christina.kuhlman@koch.co",
        password_digest: "$2a$12$GA5ScDd8T0d8hmVyIlywkOnGlPeIt5W0CPSCOgSOvJgm5ep0xAwBK",
        created_at: "2020-05-06T16:32:48.217Z",
        updated_at: "2020-05-06T16:32:48.217Z",
        is_admin: false
    },
}
*/

// Listing all the questions on the page
// 1. Add an event listener to the Questions link in navbar
// 2. Handle Navigation
// 3. Fetch all questions when user clicks on Question link
// 4. Render the questions page with fetched questions

// Getting a single question with id
// 1. Add an event listener to questions container to grab the clicked question
// 2. Get the id of the clicked question and send a get request to get the question
// 3. Navigate to question show and render the fetched question

const renderQuestions = (questions) => {
  const questionsContainer = document.querySelector("ul.question-list");
  const htmlString = questions
    .map((question) => {
      return `
      <div class="item">
        <a class="header question-link" data-id="${question.id} href="">
            <span>${question.id} - </span>
            ${question.title}
        </a>
      </div>
      `;
    })
    .join("");

  questionsContainer.innerHTML = htmlString;
};

const refreshQuestions = () => {
  Question.all().then((questions) => renderQuestions(questions));
};

const handleNavigation = (id, clickedLink) => {
  if (id === "question-index") {
    refreshQuestions();
  }

  // activeate the target page and deactiveate all the others
  document.querySelectorAll(".page").forEach((node) => {
    node.classList.remove("active");
  });

  document.querySelector(`.page#${id}`).classList.add("active");

  // activeate the clicked link and deactiveate the others
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.classList.remove("active");
  });

  if (clickedLink) {
    clickedLink.classList.add("active");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Getting all questions event listener
  document.querySelector(".navbar").addEventListener("click", (event) => {
    event.preventDefault();
    const clickedLink = event.target.closest("[data-target]");
    if (clickedLink) {
      const id = clickedLink.getAttribute("data-target");
      // Handle Navigation
      handleNavigation(id, clickedLink);
    }
  });

  // Get a signle question
  const questionsContainer = document.querySelector("ul.question-list");
  questionsContainer.addEventListener("click", (event) => {
    const questionLink = event.target.closest("a.question-link");
    if (questionLink) {
      event.preventDefault();
      const id = questionLink.dataset.id;
    }
  });
});

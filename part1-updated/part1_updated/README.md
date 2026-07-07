<<<<<<< HEAD
# Notes Application
## Description

This project is a simple web-based Notes Application developed using HTML, CSS, JavaScript, Node.js, and Express. The application allows users to create new notes by typing text into an input field and clicking the **Save** button.

The application demonstrates how a web browser communicates with a server using the HTTP protocol. When a user submits a new note, the browser sends an HTTP POST request to the server. The server processes the request and returns an appropriate response. If a database is connected, the note is stored permanently and can be retrieved whenever the page is reloaded.

## Features

- Create a new note.
- Send data to the server using HTTP POST.
- Display notes on the webpage.
- Demonstrates client-server communication.
- Can be extended with a MySQL database for permanent storage.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- HTTP Protocol

## Project Structure

```text
project-folder/
│
├── public/
│   ├── style.css
│   └── script.js
│
├── views/
│   └── index.html
│
├── server.js
├── package.json
└── README.md
```

## Activity Diagram
The activity diagram illustrates the workflow followed when a user creates a new note by typing text into the input field and clicking the **Save** button.

![Activity Diagram](images/activity-diagram.png)

---

## Sequence Diagram
The sequence diagram illustrates the interaction between the User, Browser, Server, and Database during the process of creating and saving a new note.

![Sequence Diagram](images/sequence-diagram.png)
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> d219f45 (first updated)

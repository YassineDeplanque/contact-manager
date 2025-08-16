# Contact Manager

A simple, reactive contact manager application built with React for the front-end and Node.js + Express for the back-end. Easily add, edit, and delete contacts through an intuitive interface.

---

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

---

## Technologies

**Front-end**
- React
- Axios
- Native CSS

**Back-end**
- Node.js
- Express (REST API)

**Development Tools**
- npm
- React Hooks (`useState`, `useEffect`)
- Git (version control)

---

## Features

- Add new contact (First Name, Last Name, Email)
- Edit existing contacts
- Delete contacts
- Display contacts in a responsive, clean list
- Error and loading state handling
- Simple, modern UI

---

## Project Architecture

**Front-end**
- `AddContact.js`: Form for creating new contacts
- `ContactList.js`: Displays all contacts, supports editing and deleting
- Native CSS: Provides a clean, modern look
- Uses Axios for communication with the back-end

**Back-end**
- Node.js + Express REST API (`http://localhost:3000/contacts`)
  - `GET /contacts` : Fetch all contacts
  - `POST /contacts` : Add a new contact
  - `PUT /contacts/:id` : Update a contact
  - `DELETE /contacts/:id` : Delete a contact

---

## Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   ```

2. **Install dependencies**

   - Front-end:
     ```bash
     cd frontend
     npm install
     ```

   - Back-end:
     ```bash
     cd ../backend
     npm install
     ```

3. **Start the back-end server**
   ```bash
   cd backend
   node server.js
   ```

4. **Start the front-end**
   ```bash
   cd frontend
   npm start
   ```

---

## Usage

- Open [http://localhost:3001](http://localhost:3001) (or the port provided by React).
- Add contacts using the form.
- The contact list updates instantly below the form.
- Edit or delete contacts directly from the list.

---

## Testing

- Verify that you can add contacts and see them in the list.
- Edit a contact and confirm the list updates in real time.
- Delete a contact and ensure it is removed from the list.
- Check error handling by stopping the server and observing the UI.
- _Note: Currently, tests are manual. Automated tests can be added using Jest and React Testing Library._

---

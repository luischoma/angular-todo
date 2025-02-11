# 📝 Mike Todo

**Mike Todo** is a simple task management application _todolist style_, built with **Angular 10** and **Angular Material**. It features a **dark/light mode**, task filtering, and persistence using **local storage**. The project was developed as a quick challenge, prioritizing **functionality and design**, while also demonstrating **best practices in RxJS, services, modularization and scalability**.

## Live Demo/CI

Check out the live version here: [Mike Todo](https://mike-todo.netlify.app/).
Every commit starting with `deploy:` are pushed to `production` branch which Netlify is listening to.

---

## Getting Started

### Installation & Running Locally

1. Clone this repository:

   ```sh
   git clone https://github.com/luischoma/angular-todo.git
   cd angular-todo
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   ng serve --port=4000
   ```

4. Open your browser and visit: **`http://localhost:4000/`**

---

## Building for Production

To build a production-ready version, run:

```sh
ng build --configuration=production
```

This will generate an optimized build inside the `dist/` folder.

---

## Running Tests

Unit tests:

```sh
ng test
```

---

## Features

- **Add new tasks** ➝ Opens a dialog to input task
- **Mark tasks as completed** ➝ Toggle completion status
- **Filter tasks** ➝ Show all, completed, or incomplete tasks
- **Delete tasks** ➝ Remove a task permanently
- **Dark/Light mode** ➝ Persistent theme toggle
- **Local Storage support** ➝ Tasks remain after a page refresh
- **Responsive UI** ➝ Works well on mobile and desktop

---

## Final considerations

The project was intentionally developed with a focused scope, given the timeframe. Further suggested increments

<details>
  <summary>Click to expand</summary>

- **Pagination and localStorage** - Add pagination for better task management when dealing with large lists; At the same time, localStorage serves as an example, however I'd not rely on it;
- **Theme Standardization** - Improve consistency in Material Theme customization and create a well-structured theming system;
- **More Tests** - Increase test coverage, particularly for UI interactions and edge cases;
- **GitHub Actions for CI/CD** - Automate builds and deployments to Netlify for a seamless development workflow;

Happy to elaborate! :)

</details>

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

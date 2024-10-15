# Tic Tac Toe game 

![Preview](https://i.ibb.co/NK0Z65p/Screenshot-2024-10-15-at-10-24-16.png)

- This game implements the tic tac toe functionality relying on the API `https://tictactoe.aboutdream.io/swagger/#/`

### Demo

- demo is [here](https://aboutdream.netlify.app/login)

### How to run this app

- git clone the project 
- cd into cloned project
- run `npm install`
- run `npm run dev`

### Technologies

- React
- React Query
- axios
- react-hook-form
- react-toastify
- tailwind
- vite
- eslint
- prettier
- husky

### Technical decisions

###### Interceptors

I used Axios interceptors for requests because they allow me to centralize logic that needs to be applied before a request is sent. For example, I can attach tokens for authentication, handle errors globally, and modify requests or responses without having to duplicate code across different parts of my app. This makes my code cleaner and more maintainable, especially when I need to add things like error logging or request retries.

###### Named exports

I chose named exports because they offer better clarity and flexibility when importing multiple items from a module. With named exports, I can export multiple functions, constants, or components from a single file and selectively import only the ones I need in another file. This helps in avoiding unnecessary imports, keeps the codebase organized, and makes it easier to refactor or add more exports in the future without affecting existing imports. Additionally, named exports can help with auto-completion and give me a clear idea of what’s available in a module.

###### Tailwind

I chose Tailwind because it allows me to write utility-first CSS directly in my HTML, speeding up the process of styling. Its approach encourages reusable, responsive design without needing to write custom CSS for each component, helping me maintain consistency and efficiency across the project.

###### React hook form

I chose React Hook Form because it simplifies form management by providing easy validation, error handling, and form state management. It is highly performant since it reduces re-renders and efficiently handles large forms. Additionally, React Hook Form has great integration with TypeScript, making it easier to work with strongly-typed forms.


### Conclusion

This app was made purely for showing off my skills to the company that I applied to. I would never use some techniuqes nor approaches in real life project (polling, single branch, no tests).
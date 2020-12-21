---
title: Quiz moi
slug: quiz-moi
thumbnail: 'https://content.techgig.com/thumb/msid-75320007,width-860,resizemode-4/Python-is-the-most-preferred-programming-language.jpg?216831'
level: 3
summary: Build a quiz application that will allow you to add multiple quizzes from an admin dashboard. You will also have a user view, which will enable you to answer the quizzes that you have created.
---

## Overview

Build a simple quiz app that will allow us to answer different questions. We should have an API that will serve us the questions and possible answers. Split the application into two, an admin and a user interface. In the admin interface, we need a single form to add multiple questions and possible answers. An admin can also see all the questions and all the correct answers. The user will be able to answers all the questions that an admin has added. We don’t need to focus on authentication; this means we will have a single admin and a single user; it’s a demo app, after all. Although we don’t have an authentication process, the user’s maximum score should be saved in local storage and displayed even after a page refresh.

## Requirements

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### Landing page

```Image
1 | Quizzes page | 720 | 300
```

- Implement the landing page UI.
- The page should have two buttons. One button will redirect you to the admin dashboard, where you have to log in to use the application. The second button will redirect you to the public quiz page, where a user can take a quiz.

### Admin login page

```Image
2 | Quizzes page | 720 | 300
```

- Implement the login page for admins.
- Make sure to validate the inputs on the client.
- You can use Google Sign-in or try to implement this feature from scratch.
- Add a button that would show you the password in plain text.

### Admin navigation

```Image
3 | Quizzes page | 650 | 540
```

- The logo will still be there.
- Implement a dropdown menu …

### Admin quizzes page

```Image
4 | Quizzes page | 640 | 550
```

- If there are no quizzes, display a placeholder quiz that would be a call to action.
- Display a “Create Quiz” button that would redirect the user to the quiz creation page.

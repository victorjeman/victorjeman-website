---
title: Pomodoro app
slug: pomodoro
thumbnail: pomodoro6
summary: A basic Pomodoro app based on the provided Figma design.
figma: https://www.figma.com/file/vq7NsQaX2OzbNFyjIyos7j/Public-Lab-%7C-pomodoro?node-id=0%3A1
googledoc: https://docs.google.com/document/d/1u_esdMWahHureYhwErUqi1mxEgZAdBC1roUBh_Qiuvo/edit?usp=sharing
---

## Overview

Implement a basic Pomodoro timer app based on the provided Figma design.
The application should be responsive. The main focus of this application is to test your ability to create a responsive design. Theme functionality will test your ability to organize your CSS rules. Date functionality will test your necessary JS skills. The app is small, but there is space for concern separation. You certainly can have more than one giant component.

- [Figma](https://www.figma.com/file/vq7NsQaX2OzbNFyjIyos7j/Public-Lab-%7C-pomodoro?node-id=0%3A1)
- [Google doc](https://docs.google.com/document/d/1u_esdMWahHureYhwErUqi1mxEgZAdBC1roUBh_Qiuvo/edit?usp=sharing)

## Tips & Tutorials

- <a href="https://www.youtube.com/watch?v=1BfCnjr_Vjg" target="_blank" rel="noreferrer">Video | WebSockets in 100 Seconds & Beyond with Socket.io</a>
- <a href="https://www.youtube.com/watch?v=x7WJEmxNlEs" target="_blank" rel="noreferrer">Video | Simple Countdown Timer with JavaScript - Day 21</a>
- <a href="https://codepen.io/victorjeman/pen/zYozGBN" target="_blank" rel="noreferrer">Codepen | Countdown donut chart with chart.js</a>
- <a href="https://www.chartjs.org" target="_blank" rel="noreferrer">Library | Chart.js, Simple yet flexible JavaScript charting</a>
- <a href="https://blog.logrocket.com/a-guide-to-theming-in-css" target="_blank" rel="noreferrer">Article | A guide to theming in CSS</a>
- <a href="https://www.youtube.com/watch?v=7r4xVDI2vho" target="_blank" rel="noreferrer">Video | Jest Crash Course - Unit Testing in JavaScript</a>

> It’s not everything you need, but it’s a start.

## Requirements

Requirements should help you to structure your work. Maybe you will want to split the work into some smaller tickets in Trello.
Don't let the requirements constrain you but rather let them help you in exploring different ideas.

> Use the acceptance criteria to guide your imagination and not to constrain it.

### General Acceptance Criteria

- Split your application into small **independent components** and use **best practices** based on the framework you are using.

- Theme functionality should use a clean approach. Think about future possibilities that we may have more than two themes.

- Your code should be **clean** and easy to understand. For more on how to review the code, see the last section of this document.

- **Don't** use an excessive number of libraries. You can build this app using Angular, Vue.js, React, or something similar.

- If you feel frisky, do the app without a framework.

- Write **unit tests** for what you can.

> Share your work on GitHub, let the world know what your' building.

### Implement the main mobile UI

```Image
pomodoro|1|main mobile UI
```

**Acceptance Criteria:**

- Follow the design from Figma

- When clicking the **START** button, the chart should slowly move.

- When clicking the **START** button, its text should change to **PAUSE**.

- When clicking the **PAUSE** button, the timer should pause, and the chart should stop moving.

- When clicking on the **RESET** button, reset the timer. When the session ends, the break starts. When the break ends, a new session will begin with the same length. The process continues until we hit **RESET**.

- Session length increment value should be 1 min.

- Break length increment value should be 1 min.

### Implement the main desktop UI

```Image
pomodoro|2|main desktop UI
```

**Acceptance Criteria:**

- Follow the design from Figma.

- Acceptance criteria for functionality are the same as on mobile.

### Implement the theme switcher

```Image
pomodoro|3|main desktop UI
```

**Acceptance Criteria:**

- Follow the design from Figma.

- The switcher should work on mobile and desktop.

- Display the light theme when the “Light” checkbox is selected.

- Display the dark theme when the “Dark” checkbox is selected.

- All the specified elements should change their colors based on the selected theme.

### Implement the about mobile UI

```Image
pomodoro|4|about mobile UI
```

**Acceptance Criteria:**

- Follow the design from Figma.

- When clicking on the ABOUT button, the about page should be displayed.

### Implement the about desktop UI

```Image
pomodoro|5|about desktop UI
```

**Acceptance Criteria:**

- Follow the design from Figma.

- Acceptance criteria for functionality are the same as on mobile.

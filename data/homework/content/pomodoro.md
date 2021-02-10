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

## Tips

## Requirements

### General Acceptance Criteria

- Split your application into small **independent components** and use **best practices** based on the framework you are using.

- Theme functionality should use a clean approach. Think about future possibilities that we may have more than two themes.

- Your code should be **clean** and easy to understand. For more on how to review the code, see the last section of this document.

- **Don’t** use any external libraries. You can build this app using Angular, Vue.js, React, or something similar, but don’t use extra libraries. For example, don’t use a library for the chart, a routing package, or a CSS framework like Bootstrap. Keep it simple! Make it from scratch.

- Write **unit tests** for your components and your javascript code(services).

- Share a GitHub link to the repo.

### Implement the main mobile UI

```Image
pomodoro|1|main mobile UI
```

**Acceptance Criteria:**

- Follow the design from Figma

- When clicking the **START** button, the chart should slowly move.

- When clicking the **START** button, its text should change to **PAUSE**.

- When clicking the **PAUSE** button, the timer should pause, and the chart should stop moving.

- When clicking on the **RESET** button, reset the timer.
  When the session ends, the break starts. When the break ends, a new session will begin with the same length. The process continues until we hit **RESET**.

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

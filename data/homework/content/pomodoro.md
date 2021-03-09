---
title: Pomodoro
slug: pomodoro
thumbnail: pomodoro6
summary: A basic Pomodoro app based on the provided Figma design.
figma: https://www.figma.com/file/vq7NsQaX2OzbNFyjIyos7j/Public-Lab-%7C-pomodoro?node-id=0%3A1
created: 'January 5, 2021'
updated: 'March 1, 2021'
version: '0.6'
---

<section class="c-table-of-content-section">
  <div class="c-table-of-content">
    <h2 class="c-table-of-content__title">Table of content</h2>
    <ul class="c-table-of-content__list">
      <li class="c-table-of-content__item"><a href="#overview">Overview</a></li>
      <li class="c-table-of-content__item"><a href="#tips-tutorials">Tips & Tutorials</a></li>
      <li class="c-table-of-content__item">
        <a href="#requirements">Requirements</a>
          <ul class="c-table-of-content__list">
            <li class="c-table-of-content__item"><a href="#general-acceptance-criteria">Geral Acceptance Criteria</a></li>
            <li class="c-table-of-content__item"><a href="#implement-the-main-mobile-UI">Implement the main mobile UI</a></li>
            <li class="c-table-of-content__item"><a href="#implement-the-main-desktop-UI">Implement the main desktop UI</a></li>
            <li class="c-table-of-content__item"><a href="#implement-the-theme-switcher">Implement the theme switcher</a></li>
            <li class="c-table-of-content__item"><a href="#implement-the-about-mobile-UI">Implement the about mobile UI</a></li>
            <li class="c-table-of-content__item"><a href="#implement-the-about-desktop-UI">Implement the about desktop UI</a></li>
            <li class="c-table-of-content__item"><a href="#convert-it-to-a-PWA">Convert it to a PWA(progressive web app)</a></li>
            <li class="c-table-of-content__item"><a href="#make-things-happen-in-real-time">Make things happen in real-time</a></li>
          </ul>   
      </li>
      <li class="c-table-of-content__item"><a href="#help-me-to-help-you">Help me to help you!</a></li>
    </ul> 
  </div>
<section>

<h2 id="overview">Overview</h2>

Implement a basic Pomodoro timer app based on the provided Figma design.
The application should be responsive. The main focus of this application is to test your ability to create a responsive design. Theme functionality will test your ability to organize your CSS rules. Date functionality will test your javascript knowledge. The app is small, but there is space for concern separation. You certainly can have more than one giant component.

Use this [figma design](https://www.figma.com/file/vq7NsQaX2OzbNFyjIyos7j/Public-Lab-%7C-pomodoro?node-id=0%3A1) to implement a pixel-perfect website. You can see there the detailed information about the design(fonts, dimensions, colors, etc.)

<h2 id="tips-tutorials">Tips & Tutorials</h2>

- <a href="https://www.youtube.com/watch?v=1BfCnjr_Vjg" target="_blank" rel="noreferrer">Video | WebSockets in 100 Seconds & Beyond with Socket.io</a>
- <a href="https://www.youtube.com/watch?v=x7WJEmxNlEs" target="_blank" rel="noreferrer">Video | Simple Countdown Timer with JavaScript - Day 21</a>
- <a href="https://codepen.io/victorjeman/pen/zYozGBN" target="_blank" rel="noreferrer">Codepen | Countdown donut chart with chart.js</a>
- <a href="https://www.chartjs.org" target="_blank" rel="noreferrer">Library | Chart.js, Simple yet flexible JavaScript charting</a>
- <a href="https://blog.logrocket.com/a-guide-to-theming-in-css" target="_blank" rel="noreferrer">Article | A guide to theming in CSS</a>
- <a href="https://www.youtube.com/watch?v=7r4xVDI2vho" target="_blank" rel="noreferrer">Video | Jest Crash Course - Unit Testing in JavaScript</a>

> It’s not everything you need, but it’s a start.

<h2 id="requirements">Requirements</h2>

Requirements should help you to structure your work. Maybe you will want to split the work into some smaller tickets in Trello.
Don't let the requirements constrain you but rather let them help you in exploring different ideas.

> Use the acceptance criteria to guide your imagination and not to constrain it.

<h3 id="general-acceptance-criteria">General Acceptance Criteria</h3>

- Split your application into small **independent components** and use **best practices** based on the framework you are using.

- Theme functionality should use a clean approach. Think about future possibilities that we may have more than two themes.

- Your code should be **clean** and easy to understand. For more on how to review the code, see the last section of this document.

- You can build this app using Angular, Vue.js, React, or something similar.

- If you feel frisky, do the app without a framework.

- Write **unit tests** for what you can.

> Share your work on GitHub, let the world know what your' building.

<h3 id="implement-the-main-mobile-UI">Implement the main mobile UI</h3>

```Image
pomodoro|1|main mobile UI
```

**Acceptance Criteria**

- Follow the design from Figma

- When clicking the **START** button, the chart should slowly move.

- When clicking the **START** button, its text should change to **PAUSE**.

- When clicking the **PAUSE** button, the timer should pause, and the chart should stop moving.

- When clicking on the **RESET** button, reset the timer. When the session ends, the break starts. When the break ends, a new session will begin with the same length. The process continues until we hit **RESET**.

- Session length increment value should be 1 minute.

- Break length increment value should be 1 minute.

<h3 id="implement-the-main-desktop-UI">Implement the main desktop UI</h3>

```Image
pomodoro|2|main desktop UI
```

**Acceptance Criteria**

- Follow the design from Figma.

- Acceptance criteria for functionality are the same as on mobile.

<h3 id="implement-the-theme-switcher">Implement the theme switcher</h3>

```Image
pomodoro|3|main desktop UI
```

**Acceptance Criteria**

- Follow the design from Figma.

- The switcher should work on mobile and desktop.

- Display the light theme when the **Light** checkbox is selected.

- Display the dark theme when the **Dark** checkbox is selected.

- All the specified elements should change their colors based on the selected theme.

<h3 id="implement-the-about-mobile-UI">Implement the about mobile UI</h3>

```Image
pomodoro|4|about mobile UI
```

**Acceptance Criteria**

- Follow the design from Figma.

- When clicking on the **ABOUT** button, the about page should be displayed.

- When going to the about page change the browser's URL.

<h3 id="implement-the-about-desktop-UI">Implement the about desktop UI</h3>

```Image
pomodoro|5|about desktop UI
```

**Acceptance Criteria**

- Follow the design from Figma.

- Acceptance criteria for functionality are the same as on mobile.

<h3 id="convert-it-to-a-PWA">Convert it to a PWA(progressive web app)</h3>

Make the minimal changes required to transform this application into a PWA(Progressive Web App).
We should be able to install it on a device.

<h3 id="make-things-happen-in-real-time">Make things happen in real-time</h3>

Let's make things interesting!
You should be able to open the app in two different tabs of a browser. When in one tab you will change the theme(light/dark), the app from the second tab should do the same thing without human interaction.

**HINT:** Websockets could do the trick.

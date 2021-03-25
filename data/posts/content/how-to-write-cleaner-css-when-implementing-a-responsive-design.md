---
slug: how-to-write-cleaner-css-when-implementing-a-responsive-design
title: How to write cleaner CSS when implementing a responsive design
thumbnail: postThumb5
hero: postHero5
publishedTime: '2021-03-23T00:00:00+01:00'
modifiedTime: ''
updated:
index: 5
---

<section class="c-table-of-content-section">
<div class="c-table-of-content">
  <h2 class="c-table-of-content__title">Table of content</h2>
  <ul class="c-table-of-content__list">
    <li class="c-table-of-content__item"><a href="#section-1">Introduction</a></li>
    <li class="c-table-of-content__item"><a href="#section-2">Approach 1 | Implement the desktop design first and mobile later</a></li>
    <li class="c-table-of-content__item"><a href="#section-3">Approach 2 | Implement the mobile design first and desktop later</a></li>
    <li class="c-table-of-content__item"><a href="#section-4">Solution | Merge both attempts in one great approach</a></li>
    <li class="c-table-of-content__item"><a href="#section-5">Lasts thoughts</a></li>
  </ul>
</div>
<section>

**TL; DR;**</br>
Write cleaner CSS and avoid seeing it crossed out by encapsulating it in different media queries when implementing a responsive design.

<h2 id="section-1">Introduction</h2>

Are you a front-end developer, and does the following scenario sounds familiar?

You start a project, and the universe was kind to you; there is a design. The design is only for desktop, though. There wasn’t enough time or money to create the mobile one.

Let’s say you need to implement the following design.

```Image
blog5_|5|
```

From my experience, there are two approaches that most of us are taking. Let's explore them.

<h2 id="section-2">Approach 1 | Implement the desktop design first and mobile later</h2>

Because we have a desktop design, why not start with it and then worry later about the mobile. I’ve done that; I still do when I’m prototyping something. My brain wants me to go with the desktop design; it has more staff and looks fancier, so why not.

Let’s say we style the container for our items the following way.

```css
/* 1. desktop */
.c-container {
  max-width: 1150px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
```

We think the items should stay on top of each other on mobile, so we override the display property. We also add more padding; why not.

```css
/* 2. mobile */
@media screen and (max-width: 749px) {
  .c-container {
    display: block;
    padding: 2rem;
  }
}
```

Does this image ring any bells?

```Image
blog5_|1|
```

We used seven properties to implement desktop and mobile while two CSS declarations are being overridden; it seems like wasted potential.

Sure there must be a better way.

<h2 id="section-3">Approach 2 | Implement the mobile design first and desktop later</h2>

You know your stuff. You know that it will be so much harder to implement the mobile design after the desktop version. Trying to cram all those fat elements in that small viewport is not a fun experience.
You convince your team that you should start from small to big; that’s good news.

You may do something like this.

```css
/* 1. mobile */
.c-container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 1rem;
}
```

```css
/* 2. desktop */
@media screen and (min-width: 750px) {
  .c-container {
    display: flex;
    justify-content: space-between;
  }
}
```

This approach is slightly better than the first one because you have to add only some additional rules without overriding the old ones when you start small to big. Still, you’ll have to override some of them at some point.

What if you have another element that has different styling on desktop than on mobile, and we can't just add new properties, and need to override the old ones again.

```css
/* 1. mobile */
.c-thumbnail__title {
  font-weight: 500;

  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
```

```css
/* 2. desktop */
@media screen and (min-width: 750px) {
  .c-thumbnail__title {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
}
```

```Image
blog5_|2|
```

We have the same issue as with the first attempt.

What if I would tell you that there is a better way.

<h2 id="section-4">Merge both approaches in one great solution</h2>

Write cleaner CSS and avoid seeing it crossed out by encapsulating it in different media queries when implementing a responsive design.

```css
/* 1. general */
.c-container {
  max-width: 1150px;
  margin: 0 auto;
}

.c-thumbnail__title {
  font-weight: 500;
}

/* 2. mobile */
@media screen and (max-width: 749px) {
  .container {
    padding: 1rem;
  }

  .c-thumbnail__title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
}

/* 3. desktop */
@media screen and (min-width: 750px) {
  .c-container {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .c-thumbnail__title {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
}
```

Hooray, no more struck-through CSS properties! 🙄

```Image
blog5_|3|
```

```Image
blog5_|4|
```

Talk is cheap, so I’ve created a <a href="https://codesandbox.io/s/spring-moon-gfpmt?file=/index.html" target="_blank" rel="noreferrer">CodeSandbox</a> and <a href="https://github.com/victorjeman/clean-responsive-css-example" target="_blank" rel="noreferrer">GitHub</a> project where you have the complete example with different CSS files exploring all three approaches.

Check them out.

**P.S.** There is a small mistake in the **clean-responsive.css** file, an overriding CSS declaration. See if you can spot it.

<h2 id="section-5">Lasts thoughts</h2>

Of course, there are times when we have to override something to which we don’t have direct access.
Maybe we added a fancy UI kit that is doing 50% of what we need, and the rest needs to be adjusted.
Maybe you are in a rush, and the project manager just wants you to fix the styling for that freaking button.
What you gonna do, there is no point in ”wasting a day” 🤯 .

Still, we should strive to make our CSS as straightforward as possible when we have a chance. One way is to encapsulate your CSS blocks in particular media queries when implementing a responsive design. This approach won’t solve all your problems, but it will make it easier to debug a big project’s style.

I’ve been using this approach for personal projects for a long time. It’s easier for me to keep things clean in small personal projects; can't say the same about all the projects that I've done 😀.

Two years ago, I read <a href="https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/" target="_blank" rel="noreferrer">this article</a>, which made me more confident that this approach is worth using.

See also this <a href="https://developer.chrome.com/docs/devtools/css/overrides/" target="_blank" rel="noreferrer">short tutorial</a> from Chrome Developers if you want to learn more about overriding CSS declarations.

**Have a great day!**

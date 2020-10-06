---
slug: style-guide-101
title: 'A CSS Guideline Tutorial : BEM with Sass'
---

## Introduction

Yes, it was exhausting having a kindergartener and fourth grader doing impromptu distance learning while I was barely keeping up with work. And it was frustrating to be stuck home nonstop, scrambling to get in grocery delivery orders before slots filled up, and tracking down toilet paper. But I was still doing well because I thrive in high-stress emergency situations. It’s exhilarating for my ADHD brain. As just one example, when my husband and I were stranded in Peru during an 8.0-magnitude earthquake that killed thousands, we walked around with a first aid kit helping who we could and tracking down water and food. Then I went out with my camera to document the devastation as a photojournalist and interview Peruvians in my broken Spanish for my hometown paper.

BEM = Block Element Modifier, is a methodology that helps you to achieve reusable components and code sharing in the front-end. BEM is a simple(not at first sight) naming convention to make our front end code easier to work with and easier to scale.

- BLOCK: Standalone entity that is meaningful on its own.
- ELEMENT: Parts of a block that don't have standalone meaning. They are semantically tied to its block.
- MODIFIER: Flag on blocks or elements. Use them to change the appearance or behaviour.

## BEM with Sass - Study of case

BEM with Sass - Study of case
As an example let's consider creating a menu.

First let's see the Bootstrap v3 simplified menu example.

```HTML
<!-- HTML -->
<ul class="nav navbar-nav">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
</ul>
```

```js
import { Container } from '@components/common/Container/Container';

import style from './PostContent.style';
import CodeTheme from './CodeTheme.style';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, language) {
    const hljs = require('highlight.js');
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
});
```

```css
.navbar-nav {
  /* ... */
}
.navbar-nav > li {
  /* ... */
}
.navbar-nav > li > a {
  /* ... */
}
```

Using BEM we could do something like this:

```html
<ul class="c-menu c-menu--horizontal">
  <li class="c-menu__item c-menu__item--first">
    <a href="#" class="c-menu__link">Link 1</a>
  </li>
  <li class="c-menu__item">
    <a href="#" class="c-menu__link">Link 2</a>
  </li>
  <li class="c-menu__item c-menu__item--last">
    <a href="#" class="c-menu__link">Link 3</a>
  </li>
</ul>
```

```CSS
.c-menu { /* ... */ }
.c-menu__item { /* ... */ }
.c-menu__item--first { /* ... */ }
.c-menu__item--last { /* ... */ }
.c-menu__link { /* ... */ }

/* horizontal modifier */
.menu--horizontal { /* ... */ }
.c-menu--horizontal .menu__item{ /* ... */ }
```

I used a little more classes than it was needed just to show some modifiers. Regarding our BEM notation, we have a block called `.menu`, the block modifier `.menu--horizontal`, the block elements `.menu__item` and `.menu__link`, then we have the element modifiers `.menu__item--first` and `.menu__item--last`. In our example a tag is an "grandchild" but we gave it the name .c-menu**link , not .c-menu**item\_\_link . We are not trying to represent the DOM tree when using BEM, so no matter how many levels deep a descendent is nested the double-underscore pattern should appear only once in his selector name.

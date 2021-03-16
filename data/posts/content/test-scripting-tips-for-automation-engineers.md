---
slug: test-scripting-tips-for-automation-engineers
title: Test scripting tips for Automation Engineers
thumbnail: postThumb4
hero: postHero4
published: March 15, 2021
updated:
---

<h2 id="i-want-to-feel-special-and-so-do-you">Introduction</h2>

```Image
article_4_|1|Introduction
```

Have you ever asked yourself if your code is good enough? Do you follow some rules to make sure your code is not looking like the morse code? I'm constantly asking myself that while doing automation tests. I’m always trying my best to leave the code in a better shape than I found it.

Why do I think this is important to have a clean code and, more importantly, what it means to have a clean code? A well-written test is not only easy to understand and practical but also gives the impression that it was written by a professional, and I think we all want to get there, to receive this endorsement :)

To help you improve your code, your tests, I gathered a few tips to help you achieve perfection in your scripting. Maybe perfection is too much, but these tips will help you to step up your coding game.

In this blog, “TDD the RITE way,” author Eric Elliot defines an acronym that I found attractive and easy to remember when writing tests.

RITE stands for some points to keep in mind while writing a test:

- **R**eadable
- **I**solated or Integrated
- **T**horough
- **E**xplicit

Let’s go through each of these rules and see the benefit of applying them to our tests.

<h2 id="i-want-to-feel-special-and-so-do-you">Readability</h2>

```Image
article_4_|1|Introduction
```

It says that a test should be easily readable. Imagine that you work in a team of 4 people. Each person is using his way of coding, which sounds lovely already. One day a change in functionality has been made, and you need to update the tests covering that functionality. The colleague who wrote the initial tests had no idea about this rule, and to make things worse, he is on vacation.

It might take you days just to understand what he is doing there and why. When a test is easy to read and understand, it saves you a lot of time and effort when updating it. Under the rose, it has happened to me with my own, old tests :))

See two code examples below, one is following the readability rule, and one is not.

No rule applied:

```js
function checkString() {
  e = 'That’s what I do: I drink and I know things.';
  if (e.indexOf('know') > -1) {
    s = 'p';
  } else {
    s = 'f';
  }
  return s;
}

console.log(checkString());
```

Rule applied:

```js
function checkString() {
  const phrase = 'That’s what I do: I drink and I know things.';
  let status = '';

  if (phrase.includes('know')) {
    status = 'passed';
  } else {
    status = 'failed';
  }
  return status;
}

console.log(checkString());
```

Yes, maybe the examples are dumb and seem unreal, but I’ve seen it; I’ve seen the first version soo many times in one form or another.

Can you feel the difference? It is much easier to understand what is going on inside the checkString() function in the second example. Now imagine that you have hundreds of code lines; what do you think will be easier to read?

> Define your variables and functions in a way that is closer to human language.

<h2 id="i-want-to-feel-special-and-so-do-you">Isolated</h2>

```Image
article_4_|1|Introduction
```

It is essential to keep the tests isolated because this way, there will be fewer chances of inaccurate results.

What do you mean isolated?

You don’t want to get some false positives results caused by the impact of another previously executed test. Imagine that you have two tests that are executed sequentially. The first test asserts that it is possible to change the name for the “Next page” button, and the second checks if by clicking that button, you are redirected to the next page. Now, you’ll get the first test passing and the second test failing because, after the execution of the first one, the name of the button will no longer be “Next page” and you’ll get a false-positive result that will say that there is no “Next page” button found.

Keep the tests separated when possible, and use some entry data so the tests will be independent of each other.

<h2 id="i-want-to-feel-special-and-so-do-you">Thorough</h2>

```Image
article_4_|1|Introduction
```

To be confident that a feature is working as expected is not enough to have a simple test. In this case, you’ll have a superficial result. I’m not trying to say that you should spend twice more time on writing a test than developing the feature, but your test should cover the happy paths along with the riskiest ones.

Say you have implemented a login form with two inputs, username, and password. You write a test that sends two strings, one for username and one for the password. Of course, you’ll get a successful result; both values are correct from the beginning. But what will happen if the user will try to login having only the username or the password?
Can I use numbers for my username? Can I use empty spaces? How long should the password be? You don’t know for sure. That’s why your test should be thorough enough to cover the riskiest scenarios along with the happy paths.

> Don’t be lazy, test it well, test it thoroughly!

<h2 id="i-want-to-feel-special-and-so-do-you">Explicit</h2>

```Image
article_4_|1|Introduction
```

In the beginning, I had problems understanding this principle. I kept reading articles doing research, and eventually, it settled down. It goes something like this; tests should contain all the information/data it uses without any shared variables that might have an unknown result.

> Your tests should contain all the needed information without any shared variables that might cause an unexpected result.

<h2 id="i-want-to-feel-special-and-so-do-you">Maintainable</h2>

```Image
article_4_|1|Introduction
```

You don’t want to get in a situation where you’ll have to update an already written test, which also contains a lot of interdependent logic. To make your tests maintainable, make them simple, as dumb as possible. Don’t overengineer! Sophisticated tests may look kind of fancy initially, but they will bring you only grief in the long run. Keep it simple, keep dumb.

> Kee it simple, keep it dumb.

<h2 id="i-want-to-feel-special-and-so-do-you">Clean</h2>

```Image
article_4_|1|Introduction
```

Writing clean code is a generic rule in programming. Everyone understands it; everyone gets the value it brings, still is very hard to follow it successfully. We are all different, so we interpret the cleanness differently.

Don’t leave any commented code or irrelevant comments. Avoid having logs. You may say that console logs help you in debugging, but try to spend more time writing the test in a way that will invalidate the usage of logs.

The correct usage of assertions will help you understand the cause of the failure and leave your tests clean. You won’t have any problems with a small project, but once your test base grows, it will be annoying dealing with a lot of output noise.

> Clean after yourself; someone else will see your code.

<h2 id="i-want-to-feel-special-and-so-do-you">Last thoughts</h2>

```Image
article_4_|1|Introduction
```

By following some common-sense rules, you will make your life easier, and maybe others will follow. We care about our work because we do it with love, and sometimes it’s hard not to take things personally. Show that you care by being open to criticism and feedback. That’s a beautiful way to grow and improve.

Don’t get hung up on technicalities. The best rules are the ones that make the whole team happy. If you have guides that create more problems than solutions, dump them and search for alternatives. We are writing code on these incredible machines, but we are working and interacting with human beings at the end of the day. Keep those interactions efficient and friendly no matter what guides you are using.

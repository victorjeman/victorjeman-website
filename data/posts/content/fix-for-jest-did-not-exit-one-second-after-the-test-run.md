---
slug: fix-for-jest-did-not-exit-one-second-after-the-test-run
title: How to fix Jest did not exit one second after the test run
thumbnail: postThumb7
hero: postHero7
publishedTime: '2021-04-02T00:00:00+01:00'
modifiedTime: ''
category: 'tips'
index: 7
---

**TL; DR;**</br>
Jest did not exit one second after the test run? Nothing seems to work and you are not sure what process is still running? Use <a href="https://jestjs.io/docs/configuration#globalteardown-string" target="_blank" rel="noreferrer">globalTeardown</a> in combination with <a href="https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program" target="_blank" rel="noreferrer">process.exit(0)</a>.

<h2 id="section-1">The Problem</h2>

```Image
blog7_|1|Code
```

Recently a colleague of mine had this problem when his jest tests were running but at the end this message was showing up.

**Jest did not exit one second after the test run has completed**. There is a tip for running the command with `“--detectOpenHandles”` to troubleshoot this issue.

The problem is that some asynchronous operations weren’t stopped before the tests finished. It could be that you are testing something that is starting some services in the background that needs to be killed at the end."

```js
beforeAll(async () => {
  // Who knows what this is starting behind the scene.
  await someService.start();
});
```

```js
afterAll(async () => {
  // It may not know how to kill everything it started.
  await someService.stop();
});
```

When you know what is running in the background, it’s good; you have a chance, but **what should you do when you don’t know how to stop the services?**

<img class="c-giphy" src="https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif" />

<h2 id="section-2">Solution</h2>

**Step 1**

```js
// in jest.config.js
module.exports = {
  ...
  globalTeardown: '<rootDir>/src/tests/teardown.js',
  ...
};
```

**Step 2**

```js
// in teardown.js
module.exports = async () => {
  console.log('yeah bwoi!');
  process.exit(0);
};
```

**Step 3**

Rerun the test.

```Image
blog7_|2|Code
```

<img class="c-giphy" src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />

**Have a great day!**

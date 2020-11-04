---
title: Web Scraper
level: 3
slug: hello
---

**ASSIST Software**

1 Tipografiei Street | 720043, Suceava, Romania

**Overview **

Build a Web Scraper which could tell us how many testimonials the **[ASSIST](https://assist-software.net)** website has and sort them by countries. Your web scraper should have a basic but clean and efficient UI that would display nicely all the required information.

## **Assignment **

1. Implement a web scraper using **node.js**.
2. Make use of any **npm** library in order to build a more robust app.
3. Don’t use a dedicated web scraper library.
4. Use the scraper to **extract the HTML** from [https://assist-software.net/testimonials](https://assist-software.net/testimonials).
5. From the **first testimonials** page, extract all testimonials.
6. Sort testimonials by** country**.
7. If an **author** belongs to multiple countries, display him/her under each country.
8. Show the **number** of testimonials for each country.
9. For each testimonial show the **picture** and the **name** of the **author**.
10. Implement a good UI that presents the information in a **clean** and **efficient** way.
11. Upload your solution to **[Github](https://github.com/)**.
12. **EXTRA POINTS: **Split the functionality into multiple files.
13. **EXTRA POINTS: **Sort the testimonials from **all pages**(4 pages), not only the first page.
14. **EXTRA POINTS:** Write unit tests for your functionality.

## **Tips**

1. You can see here a basic UI example for this assignment \
   **NOTE:** **Don’t use this UI, create a more compact one.**

![alt_text](images/image1.png 'image_tooltip')

2. You may need a basic node server to serve the above dashboard once you sorted the information.
3. Learn more about [web scraping](https://en.wikipedia.org/wiki/Web_scraping).

## **How can I review my code**

Take a look at this** Code Review Checklist** before you hand your application for review

**General rules**

- The code works
- The code is easy to understand
- Follows coding conventions
- Names are simple and if possible short
- Names are spelled correctly
- There are no usages of “magic numbers”
- All variables are in the smallest scope possible
- There is no commented out code
- No code can be replaced with library functions
- Required logs are present
- Frivolous logs are absent
- Debugging code is absent
- Code is not repeated or duplicated
- No complex/long boolean expressions
- No empty blocks of code
- Catch clauses are fine-grained and catch specific exceptions
- Loops have a set length and correct termination conditions
- Blocks of code inside loops are as small as possible
- Design patterns if used are correctly applied
- Make use of the latest ECMAScript specifications
- The functionality is split into multiple files that are easy to test
- The unit tests are present if there is a benefit from them

**Homework specific rules**

- The UI is using the space efficiently
- No dedicated web scraper library was used
- Testimonials are sorted by country
- The amount of testimonials is displayed for each country
- Testimonials from all pages were used to finish the homework

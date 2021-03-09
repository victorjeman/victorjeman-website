---
title: Booking App
slug: booking-app
thumbnail: booking0
summary: Learn how to build a booking app. You will build both the admin interface and the public user journey.
figma: https://www.figma.com/file/vq7NsQaX2OzbNFyjIyos7j/Public-Lab-%7C-pomodoro?node-id=0%3A1
created: 'March 5, 2021'
updated: 'March 1, 2021'
version: '0.6'
---

<section class="c-table-of-content-section">
 <div class="c-table-of-content">
   <h2 class="c-table-of-content__title">Table of content</h2>
   <ul class="c-table-of-content__list">
     <li class="c-table-of-content__item"><a href="#overview">Overview</a></li>
     <li class="c-table-of-content__item"><a href="#tips-tutorials">Tips & Tutorials</a></li>
     <li class="c-table-of-content__item"><a href="#requirements">Requirements</a></li>
     <li class="c-table-of-content__item"><a href="#admin-registration">1. ADMIN | Registration</a></li>
     <li class="c-table-of-content__item"><a href="#admin-login">2. ADMIN | Login</a></li>
     <li class="c-table-of-content__item"><a href="#admin-recover-password">3. ADMIN | Recover Password</a></li>
     <li class="c-table-of-content__item"><a href="#admin-add-company">4. Admin | Add Company</a></li>
     <li class="c-table-of-content__item"><a href="#admin-view-companies">5. ADMIN | View Companies</a></li>
     <li class="c-table-of-content__item"><a href="#admin-edit-company">6. Admin | Edit Company</a></li>
     <li class="c-table-of-content__item"><a href="#admin-add-service">7. Admin | Add Service</a></li>
     <li class="c-table-of-content__item"><a href="#admin-view-services">8. ADMIN | View Services</a></li>
     <li class="c-table-of-content__item"><a href="#admin-edit-service">9. Admin | Edit Service</a></li>
     <li class="c-table-of-content__item"><a href="#admin-view-bookings">10. ADMIN | View Bookings</a></li>
     <li class="c-table-of-content__item"><a href="#public-view-companies">11. PUBLIC | View Companies</a></li>
     <li class="c-table-of-content__item"><a href="#public-view-services">12. PUBLIC | View Services</a></li>
     <li class="c-table-of-content__item"><a href="#public-client-details">13. PUPLIC | Client Details</a></li>
     <li class="c-table-of-content__item"><a href="#public-calendar">14. PUPLIC | Calendar</a></li>
     <li class="c-table-of-content__item"><a href="#public-confirmation">15. PUPLIC | Confirmation</a></li>
     <li class="c-table-of-content__item"><a href="#help-me-to-help-you">Help me to help you!</a></li>
   </ul>
 </div>
<section>
 
 
<h2 id="overview">Overview</h2>
 
Booking App will provide the possibility of booking services for different companies.
 
To access the Booking App, a user needs to log in using a username and a password. There is an option to register by providing the following info: first name, last name, email, and password. After registration, send a confirmation email. If the user forgets the password, he can reset it. The user will receive an email with a reset password link. In case someone tries to reset a password with an unregistered email address, a message will suggest creating an account.
 
There are 3 group roles:
- Super Admin (you)
 
- Admin(people that have one or more companies and will add services for that company)
 
- User (people that will make bookings)
 
An admin can add multiple companies if he’s lucky to have more than one company. Admin can create various services for each company. Each company has a profile that has the following fields: name, description, and logo.  An admin can edit all those fields.
 
A company can have multiple services. Each service has the following fields: name, description, duration, spaces, price, and availability.
 
An admin can view all of the bookings for a specific service and company.
 
A public user is only able to view or book services, with no option to edit them. A general user doesn’t need an account. After completing a booking, the user will receive an email with all the required information.
 
**Example**
As an Admin, I can add multiple companies.
As an Admin, I can add multiple services to each company.
As a Public User, I can book for the price, the duration, and the availability of a specific service.
 
 
For example, if I have a Barber's shop(company), I can add the following services:
Haircut,
- price: 20 RON
- duration: 60 minutes
- available: Monday to Friday between 09:00-18:00 each day
 
Beard Trim,
- price: 10 RON
- duration: 30 minutes
- available: Monday to Thursday between 09:00-17:00 each day.
 
Once I have set up the **services** and all the **required details**, I would have a public page where people could **book** these services and receive an **email confirmation**.
 
 
<h2 id="requirements">Requirements</h2>
 
Requirements should help you to structure your work. Maybe you will want to split the work into some smaller tickets in Trello.
Don't let the requirements constrain you, but rather let them help you in exploring different ideas.
 
> Use the acceptance criteria to guide your imagination and not to constrain it.
 
<h3 id="admin-registration">1. ADMIN | Registration</h3>

```Image
booking|1|ADMIN Registration
```

**User Stories**

As a new Admin, I can create an account using my email and a password to see the booking dashboard.

As an Admin, I can log in to the booking dashboard using google or Facebook auth.

As an Admin, I will receive an email after registration so that I could confirm my email.

**Acceptance Criteria**

- Create an HTML form that has the following inputs:

  - first name
  - last name
  - email
  - password
  - “create account” button
  - Login with google
  - Login with Facebook
  - “I agree” checkbox

- When the form is submitted, redirect the user to the login page.

- All form fields should be required.

- Validate the email input.

- The password input should have a small button that should show the password as plain text when clicked.

- When the form is invalid, display an error.

- When the form is invalid, each invalid input should be outlined and should have a specific error message.

- If the user didn’t check the "I agree with terms" checkbox, don’t submit the form and show a message to the user.

<h3 id="admin-login">2. ADMIN | Login</h3>
 
```Image
booking|2|ADMIN Login
```

**User Stories**
As an Admin, I can log in to my company dashboard to see my profile.

As an Admin, I can recover the password using my email.

**Acceptance Criteria**

- Create an HTML form that has the following elements:

  - email
  - password
  - login button

- Add “Forgot password?” and “Register” links below the login button.

- Check if the specified email address exists in the database.

- Display an error message to inform the user that the email or password is incorrect when needed.

- Display a message to suggest the registration process if the user doesn’t exist in the database.

<h3 id="admin-recover-password">3. ADMIN | Recover Password</h3>
 
```Image
booking|3|ADMIN Recover Password
```

**User Stories**

- As an Admin, I can access the Reset Password page.

- As an Admin, I can reset the account password if I forgot it.

- As an Admin, I can receive an email containing a link to reset the password. The link will redirect the Admin to the Reset Password page.

**Acceptance Criteria**

- Create an HTML form that has the following elements:

  - email field
  - password field
  - send button

- When the form is submitted, update the relevant information in the database.

- If the user changed the password successfully, we should redirect him to the Login Page.

- We should send an email to the user(Admin). The email should contain the link to Reset Password Page.

- Validate the password against the following policy.
- The new password must contain one or more: uppercase and lowercase letters, numerical digits, special characters, and length should have at least 12 symbols.

- For a successful password, reset the new password and confirm password fields values should match.

- Both fields should be required.

- The password input should have a small button that should show the password as plain text when clicked.

- When we have errors, we should display a generic message at the top of the form.

- When we have errors, each input that doesn't have the right information should be outlined and have an error message.

- Validate the email input field.

<h3 id="admin-add-company">4. ADMIN | Add Company</h3>
 
```Image
booking|4|ADMIN Add Company
```

**User Stories**

As an Admin, I can add my companies to the dashboard.

**Acceptance Criteria**

- Create an HTML form that has the following company elements:

  - logo
  - name
  - description
  - save button

- Name and description should be required fields.

- When we have errors, each input that doesn't have the right information should be outlined and have an error message.

<h3 id="admin-view-companies">5. ADMIN | View Companies</h3>
 
```Image
booking|5|ADMIN View Companies
```

**User Stories**

As an Admin, I can see the list of companies that I added.

**Acceptance Criteria**

- Display all the companies in the table

- Each company should display the following information:
- logo
- name
- description
- select button

- Each company will have a view button

- When clicking on the view button, redirect the user to the company page.

- Each company should have a delete button that will delete a company.

- Each company should have an edit button that will redirect to the edit page.

- Ask for confirmation before completely deleting a company.

<h3 id="admin-edit-company">6. ADMIN | Edit Company</h3>
 
```Image
booking|4|ADMIN Edit Company
```

**User Stories**

As an Admin, I can edit a company.

**Acceptance Criteria**

- Create a dedicated page for each company where the Admin can edit all the fields.

- We should be able to edit the following fields:
- logo
- name
- description

<h3 id="admin-add-service">7. ADMIN | Add Service</h3>
 
```Image
booking|7|ADMIN Add Service
```

**User Stories**

As an Admin, I can access the Add Service page to view, add or edit a service.

As an Admin, I can access the Add Service page to configure a service availability, duration, and price.

**Acceptance Criteria**

- The service form should have the following elements:
- name
- description
- duration
- spaces
- price
- availability
- add button

- All form fields should be required.

- Spaces field should accept only numbers.

- Name and description should be required.

- Add an edit button that will allow us to edit all the fields.

- Set up availability: days and hours - users cannot book outside of availability set.

- Set up duration: a service can last a minimum of 20 minutes or 8 hours maximum.

- Set up spaces - how many bookings are available - for example, if I have three people working at the Barber's shop, I can only do three haircuts in 1 hour.

<h3 id="admin-view-services">8. ADMIN | View Services</h3>

```Image
booking|8|ADMIN View Services
```

**User Stories**

As an Admin, I can access the services page.

As an Admin, I can view all the services for a specific company.

**Acceptance Criteria**

- Display all services for a specific company.

- Each service has an edit button.

- Each service has a delete button.

- Ask for confirmation when the Admin tries to delete a service.

- Add a button that would give us the ability to add a new service.

- Each service should have the following information:
  - name
  - description
  - availability
  - spaces
  - duration
  - price

<h3 id="admin-edit-service">9. ADMIN | Edit Service</h3>

```Image
booking|9|ADMIN Edit Service
```

**User Stories**

As an Admin, I can edit or delete a specific service.

**Acceptance Criteria**

- Create a dedicated page for each service where the Admin can edit all the fields.

- All the fields should be required.

- We can edit the following fields
- name
- description
- availability
- spaces
- duration
- price

<h3 id="admin-view-bookings">10. ADMIN | View Bookings</h3>

```Image
booking|10|ADMIN View Bookings
```

**User Stories**

As an Admin, I can access all the bookings made for one of my companies and see relevant information about a specific booking.

**Acceptance Criteria**

- Create a table to display the following client info:
- name
- email
- phone number
- booking date
- the client selected

- We should be able to sort the table entries by service.

- We should be able to sort the table entries by booking date.

- We should be able to group the rows by date. There should be a button that would group(not sort) the bookings by date.

<h3 id="public-view-companies">11. PUBLIC | View Companies</h3>

```Image
booking|11|PUBLIC View Companies
```

**User Stories**

As a Public User, I can see all the companies that admins have added.

As a Public User, I can select a specific company, and I should see the available services.
**Acceptance Criteria**

- Display all the companies
- Each company should display the following information:
- logo
- name
- description
- select button

- Add a button that will permit us to select a specific company.

<h3 id="public-view-services">12. PUBLIC | View Services</h3>

```Image
booking|12|PUBLIC View Services
```

**User Stories**

As a Public User, I can access the view services page without an edit/delete button.

As a Public User, I can view all the services for a specific company.

As a Public User, I can book a service for a specific company.

As a Public User, I can’t edit or remove a specific service.

**Acceptance Criteria**

- Display all the services for a specific company.

- Each service should have the following information:
- name
- description
- availability
- spaces
- duration
- price

- Add a button that would give us the ability to book a service.

- Display a back button that will display the previous page.

<h3 id="public-client-details">13. PUBLIC | Client Details</h3>
 
```Image
booking|13|PUBLIC Client Details
```

**User Stories**

As a Public User, I can add my personal information needed for a booking.

**Acceptance Criteria**

- Create an HTML form that has the following client elements:
- name field
- phone number field
- email field
- next button

- Display a back button that will display the previous page.

<h3 id="public-calendar">14. PUBLIC | Calendar</h3>

```Image
booking|14|PUBLIC Calendar
```

**User Stories**

As a Public User, I can select a specific slot from the available list.

**Acceptance Criteria**

- Create a custom calendar that will allow a public user to select a slot(time interval) based on how the admin has defined those slots.

- While a user tries to select a slot that has been already booked by someone else, update their calendar in real-time.

- If the user still manages to click on a slot already taken, validate that slot against the database and display an appropriate message that the slot is no longer available.

- Display a finish button that will finalize the booking.

- Display a back button that will display the previous page.

<h3 id="public-confirmation">15. PUBLIC | Confirmation</h3>

```Image
booking|15|PUBLIC Confirmation
```

**User Stories**
As a Public User, I can receive a confirmation email once the booking has been completed.

**Acceptance Criteria**

- Send a confirmation email to the user that his booking is saved in DB.

- Email body example; feel free to adjust it.

_Hi [user name],
Appointment confirmed with [company name] on Wednesday, December 27, 2020, at 5:30 pm.
Please find the details below.
Add some extra details about booking here._

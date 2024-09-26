# web-app-developer


Web-App Developer Assignment - Responsive Web Page
This project is a multi-page web application designed using HTML, CSS, and JavaScript. The application contains a landing page and multiple subpages, including authentication (Sign In and Register) pages. The primary focus is to create a responsive, user-friendly design that functions well across devices.

Project Structure

WEB-APP-DEVELOPER/
│
├── assets/
│   └── Image.png       
│   └── Avatar.png      
│
├── authentication/
│   ├── register.html   
│   ├── signin.html     
│   ├── signin.css      
│   ├── register.css   
│
├── page1.html          
├── page2.html          
├── page3.html          
├── page4.html    
|__ page5.html       
│
├── style.css         
├── style1.css           
├── style2.css           
├── style3.css           
├── style4.css    
|__ style5.css       
│
├── index.html          
│
├── script.js           
└── README.md          


Pages Overview
index.html
This is the main entry point of the web application. It contains a navigation bar with links to Products, Solutions, Community, Resources. The authentication buttons (Sign In and Register) are also present in the header. This page uses the style.css file for its styling.

page1.html
Displays a grid of responsive cards with images. This page uses the page1.css file for its styling.

page2.html
Contains a quotes section, where each card displays a quote with an avatar, title, and description. This page uses the page2.css file for its styling.

page3.html
Features a card layout, where each card has an image, title, and body text. This page uses the page3.css file for its styling.

page4.html
Serves as the footer section for the web application, containing the footer content. This page uses the page4.css file for its styling.

authentication/register.html
Registration page with form validation for username, email, and password fields. The form is styled using register.css and includes validation logic via script.js.

authentication/signin.html
Sign In page with email and password validation. The form is styled using signin.css and also includes validation logic via script.js.

Styling
Each page has its own dedicated CSS file to ensure modular and maintainable code:

style.css: For the main page (index.html)
page1.css: For the first subpage (page1.html)
page2.css: For the second subpage (page2.html)
page3.css: For the third subpage (page3.html)
page4.css: For the footer (page4.html)
signin.css: For the Sign In page (signin.html)
register.css: For the Register page (register.html)
Script Overview
The script.js file handles form validation for the Sign In and Register pages:

validateRegisterForm: Ensures the username is not empty, the email is valid, and the password meets the minimum length requirement (8 characters). It also checks that the password and confirm password fields match.
validateSignInForm: Checks for a valid email format and ensures the password is at least 8 characters long.


Footer Information
The footer of the website is represented by page4.html. It is embedded into the main index page using an iframe, ensuring that the footer is consistent and easy to manage across the entire application.

Technology Stack
HTML: Structuring the content across all the pages.
CSS: Styling the pages to ensure responsiveness and aesthetics.
JavaScript: Implementing form validation logic.
This README should give you a clear understanding of how the project is organized, the technologies used, and how to run it.







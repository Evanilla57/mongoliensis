# NoSQL Challenge: Social Network API

## Description

As I continue my studies as a coding student, I've recently used several of the technologies that social networking platforms use in their full-stack applications. Since the foundation of these applications is data, it’s important that I understand how to build and structure the API first. 

My challenge was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. To accomplish this, I used Express.js for routing, a MongoDB database, and the Mongoose ODM. 

## Tasks 

### User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

### Accaptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Usage

Install dependencies: npm i
Seed data: npm run seed
Run application: npm start
Open in Insomnia

## Links
GitHub Repo Page: https://github.com/mongoliensis
Video Walkthrough: 

## Credits

- Mini-Project video demonstration created by Joshua Taylor
- Lessons and Activities provided by Coding Boot Camp at UCR Extension
- Starter code imported from Mini-Project 18, provided by Coding Boot Camp at UCR Extension
- Collaboration with fellow coding student, Robert Ambriz
-Mongoose Schema Types: https://mongoosejs.com/docs/schematypes.html
- Mongoose Validation: https://mongoosejs.com/docs/validation.html
- How to Use findOneAndUpdate() in Mongoose: https://mongoosejs.com/docs/tutorials/findoneandupdate.html

## License

MIT License

Copyright (c) [2023] [Evan Griggs]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
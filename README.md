# Social Network API

## Description
This application allows users to posts their thoughts with unique user name. In addition, they can post reactions towards others' thoughts.


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`


**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought 

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Review

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
https://www.youtube.com/watch?v=jBQRKKTVMQo&list=PL3yX2vsPqDQZDA6wOofjriTJiI37n_6ZP&ab_channel=YanqingLouLinks 

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
https://github.com/yanqinglou/SOCIAL-NETWORKING-ONWEB

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

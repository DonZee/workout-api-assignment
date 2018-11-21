## Workout API

The goal for this assignment is to create a CRUD Api to allow users to track previous workout sessions.

This repo already contains all the necessary files/modules needed to build the api. Just make sure you run `npm install` before you get the ball rolling.
## Part 1 - DB
This API will need one table containing information about an individual workout. The table will need the following columns
```
id
date
name ( ex "chest day" )
description ( ex "did 3x10 chest press ect")
rating ( 1-10 how was the workout )
created_at
updated_at
```
In order to complete this portion, you'll need to create a knex migration file & seed file to structure and fill the table with information. If you need a refresher, you can find our curriculum on migrations & seeds [here](https://learn-2.galvanize.com/cohorts/310/blocks/45/content_files/knex/07-why-migrations.md) .

## Part 2 - API
Using the template in this repository build a full RESTful CRUD api for the workouts resource. If you're a bit fuzzy on what RESTful apis are then [here](https://learn-2.galvanize.com/cohorts/310/blocks/45/content_files/express-basics/09-restful-apis.md) is our curriculum on the topic.

Our curriculum doesn't have any examples of a full CRUD api using our MVC template. However, I have one built around a transactions resource. It has some auth stuff in it as well but you can focus on the transactions portion as it has full crud. You can find that repository [here](https://github.com/troyamelotte/transaction-app-tests)

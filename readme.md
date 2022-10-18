# Kolo

## Project Description

**What Kolo is:** Kolo is my attempt at building the best possible software I can at the moment. After a little over a year of working across programming languages—Python, JavaScript, and Typescript and a single time C#. Frameworks— Django, Flask, FastAPI, Express, ReactJS, VueJS, AngularJS, NestJS. Technologies—Heroku, Git/GitHub, Docker. Database infrastructures— SQLite, MySQL, Postgres, MongoDB. Programming paradigms and principles—Design Patterns, Architectural Patterns, Industry Best Practices, Rest APIs, HTTP, WebSockets, Microservices etc. Kolo is a culmination of all I have learnt. Although, for this iteration, I opted for a monolith rather than a microservice architecture, I think it appropriate. Later in the future, I will implement the entire software with microservices.

Kolo is an implementation of [Nigeria’s Open Banking API](https://openbanking.ng/) . In implementation, I had to consider generating Account Numbers and Nuban serial codes [as specified by the CBN](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjoy9iEo-r6AhXCQfEDHc4KC9MQFnoECBAQAQ&url=https%3A%2F%2Fwww.cbn.gov.ng%2Fout%2F2010%2Fcirculars%2Fbspd%2Fnuban%2520proposal%2520-%252020091010%2520_final%2520upload_.pdf&usg=AOvVaw2KHkBvocruLK_rI_sX56u3). Thanks to *this repository*, I was able to implement without too much of a hassle. Using Typescript and ExpressJs as the language and primary framework respectively, I implemented clean architecture as I understood it at the time of development,  *making sure logic depended on data and adapters on logic.* Unit and integration tests were written in jest and <> respectively and the current test coverage is in the shields above. Authentication was implemented with JWT and OAuth2.

**What <> is not:** As far as I know, Kolo is not production ready as there would be considerations to be made for more extensive tests, and its ability to scale. Integration of third party apis for authentication, identity verification, payments etc need to be reconsidered.

## 🚂 Tech Stack

- TypeScript
- ExpressJS
- MongoDB/Mongoose
- PostgreSQL/Prisma
- Docker
- GraphQL
- REST

## 📦Features

- 

## 🗨️ Jargon

| Jargon | Meaning |
| --- | --- |
|  |  |
|  |  |

## 💡Feature Ideas

- Salaries, and salaries transfer (Something that uses celery for scheduled payments)

## 🗺️ Architectural Consideration

I implemented clean architecture as I understood it at the time of development,  *making sure logic depended on data and adapters on logic.* Unit and integration tests were written in jest and <> respectively and the current test coverage is in the shields above. Authentication was implemented with JWT and OAuth2.

## 🍨 Resources

- Link to CBN’s PDF
- Link to NUBAN repos
- Link to example of proper auth routes
- Learning Angular

## 🎭 Live Link
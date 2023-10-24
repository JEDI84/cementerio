# cementerio

// add github link

# Express | 


# TEAM | 

- Tierra Santa has been developed by:

:capricorn: Raul Villarraso: https://github.com/RaulVillarraso, :aries: Adrián Angulo Dieppa: https://github.com/adrianaadd :gemini: Yeray Armas: https://github.com/JEDI84


## PROJECT SETUP
npm Install

## Introduction

Tierra Santa comes out of the need of having a better organization within the graveyards. A database where we can organize the decesed, graveyard "map", graves either common or private, rent or bought, employees and external professionals. It has been developt to cover administration porpuses, and so the options for the external users are in the IceBox


<details>
<summary>:round_pushpin: Common Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /commons                  | YES   | Professional | Get all common graves        | -                          | [{ common }]                         |
| GET    | /commons/:id              | YES   | Professional | Get one common grave         | common_id                  | { common }                           |
| PUT    | /commons/:id              | YES   | Admin        | Update common grave          | common_id                  | "Common updated"                     |
| POST   | /commons                  | YES   | Admin        | Create common grave          | req.body                   | "Common created"                     |
| DELETE | /commons/:id              | YES   | Admin        | Remove one common grave      | common_id                  | "Common deleted"                     |

</details>



<details>
<summary>:latin_cross: Deceased Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /deceased                 | YES   | Professional | Get all deceased             | -                          | [{ deceased }]                       |
| GET    | /deceased/:id             | YES   | Professional | Get one deceased             | deceased_id                | { deceased }                         |
| GET    | /deceased/name            | YES   | Professional | Get one deceased by name     | deceased_name              | { deceased }                         |
| GET    | /deceased/count           | YES   | Professional | Get total deceased           | deceased_count             | { deceased }                         |
| GET    | /deceased/Grave/Galery/Graveyard/:id | YES | Professional | Get one deceased with grave details if in grave  | deceased_id                          |
| PUT    | /deceased/:id             | YES   | Admin        | Update deceased              | deceased_id                | "Deceased updated"                   |
| POST   | /deceased                 | YES   | Admin        | Create deceased              | req.body                   | "Deceased created"                   |
| DELETE | /deceased/:id             | YES   | Admin        | Remove one deceased          | deceased_id                | "Deceased deleted"                   |

</details>


<details>
<summary>:arrow_up: Gallery Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /galleries                | YES   | Professional | Get all galleries            | -                          | [{ galleries }]                      |
| GET    | /gallery/:id              | YES   | Professional | Get one gallery              | gallery_id                 | { gallery }                          |
| PUT    | /gallery/:id              | YES   | Admin        | Update gallery               | gallery_id                 | "Gallery updated"                    |
| POST   | /gallery                  | YES   | Admin        | Create gallery               | req.body                   | "Gallery created"                    |
| DELETE | /gallery/:id              | YES   | Admin        | Remove one gallery           | gallery_id                 | "Gallery deleted"                    |

</details>


<details>
<summary>:headstone: Grave Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /graves                   | YES   | Professional | Get all graves               | -                          | [{ graves }]                         |
| GET    | /grave/:id                | YES   | Professional | Get one grave                | grave_id                   | { grave }                            |
| PUT    | /grave/:id                | YES   | Admin        | Update grave                 | grave_id                   | "Grave updated"                      |
| POST   | /grave                    | YES   | Admin        | Create grave                 | req.body                   | "Grave created"                      |
| DELETE | /grave/:id                | YES   | Admin        | Remove one grave             | grave_id                   | "Grave deleted"                      |

</details>


<details>
<summary>:classical_building: Graveyard Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /graveyards               | YES   | Professional | Get all graveyards           | -                          | [{ graveyards }]                     |
| GET    | /graveyard/:id            | YES   | Professional | Get one graveyard            | graveyard_id               | { graveyard }                        |
| PUT    | /graveyard/:id            | YES   | Admin        | Update graveyard             | graveyard_id               | "Graveyard updated"                  |
| POST   | /graveyard                | YES   | Admin        | Create graveyard             | req.body                   | "Graveyard created"                  |
| DELETE | /graveyard/:id            | YES   | Admin        | Remove one graveyard         | graveyard_id               | "Graveyard deleted"                  |

</details>


<details>
<summary>:love_hotel: Mausoleum Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /mausoleums               | YES   | Professional | Get all mausoleums           | -                          | [{ mausoleums }]                     |
| GET    | /mausoleum/:id            | YES   | Professional | Get one mausoleum            | mausoleum_id               | { mausoleum }                        |
| GET    | /mausoleum/:id/deceased   | YES   | Admin        | Get all deceased in mausoleum| mausoleum_id               | { mausoleum_deceased }               |
| PUT    | /mausoleum/:id            | YES   | Admin        | Update mausoleum             | mausoleum_id               | "Mausoleum updated"                  |
| POST   | /mausoleum                | YES   | Admin        | Create mausoleum             | req.body                   | "Mausoleum created"                  |
| DELETE | /mausoleum/:id            | YES   | Admin        | Remove one mausoleum         | mausoleum_id               | "Mausoleum deleted"                  |

</details>


<details>
<summary> :man: :woman: Personal Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /personal                 | YES   | Professional | Get all personal             | -                          | [{ personal }]                       |
| GET    | /personal/:id             | YES   | Professional | Get one personal             | personal_id                | { personal }                         |
| PUT    | /personal/:id             | YES   | Admin        | Update personal              | personal_id                | "Personal updated"                   |
| POST   | /personal                 | YES   | Admin        | Create personal              | req.body                   | "Personal created"                   |
| DELETE | /personal/:id             | YES   | Admin        | Remove one personal          | personal_id                | "Personal deleted"                   | 

</details>


<details>
<summary> :lab_coat: Tanatopractor Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /tanatopractors           | YES   | Professional | Get all tanatopractor        | -                          | [{ tanatopractors }]                 |
| GET    | /tanatopractor/:id        | YES   | Professional | Get one tanatopractor        | tanatopractor_id           | { tanatopractor }                    |
| GET    | /tanatopractor/:id/deceased | YES   | Professional | Get assigned deceased      | tanatopractor_id           | { tanatopractor_deceased }           |
| PUT    | /tanatopractor/:id        | YES   | Admin        | Update tanatopractor         | tanatopractor_id           | "Tanatopractor updated"              |
| POST   | /tanatopractor            | YES   | Admin        | Create tanatopractor         | req.body                   | "Tanatopractor created"              |
| DELETE | /tanatopractor/:id        | YES   | Admin        | Remove one tanatopractor     |tanatopractor_id            | "Tanatopractor deleted"              | 

</details>





![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)

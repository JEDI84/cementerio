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
| PUT    | /deceased/:id             | YES   | Admin        | Update deceased              | deceased_id                | "Deceased updated"                   |
| POST   | /deceased                 | YES   | Admin        | Create deceased              | req.body                   | "Deceased created"                   |
| DELETE | /deceased/:id             | YES   | Admin        | Remove one deceased          | deceased_id                | "Deceased deleted"                   |

</details>


<details>
<summary>:arrow_up: Galery Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /galeries                 | YES   | Professional | Get all galeries             | -                          | [{ galeries }]                       |
| GET    | /galery/:id               | YES   | Professional | Get one galery               | galery_id                  | { galery }                           |
| PUT    | /galery/:id               | YES   | Admin        | Update galery                | galery_id                  | "Galery updated"                     |
| POST   | /galery                   | YES   | Admin        | Create galery                | req.body                   | "Galery created"                     |
| DELETE | /galery/:id               | YES   | Admin        | Remove one galery            | galery_id                  | "Galery deleted"                     |

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
<summary> :man: :woman: Staff Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /staff                    | YES   | Professional | Get all staff                | -                          | [{ staff }]                          |
| GET    | /staff/:id                | YES   | Professional | Get one staff                | staff_id                   | { staff }                            |
| PUT    | /staff/:id                | YES   | Admin        | Update staff                 | staff_id                   | "Staff updated"                      |
| POST   | /staff                    | YES   | Admin        | Create staff                 | req.body                   | "Staff created"                      |
| DELETE | /staff/:id                | YES   | Admin        | Remove one staff             | staff_id                   | "Staff deleted"                      | 

</details>


<details>
<summary> :lab_coat: Tanatopractor Endpoints</summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /tanatopractors           | YES   | Professional | Get all personal             | -                          | [{ tanatopractors }]                       |
| GET    | /tanatopractor/:id        | YES   | Professional | Get one personal             | personal_id                | { tanatopractor }                         |
| GET    | /tanatopractor/:id/deceased  | YES   | Professional | Get assigned deceased     | tanatopractor_id           | { tanatopractor_deceased }           |
| PUT    | /tanatopractor/:id        | YES   | Admin        | Update personal              | personal_id                | "Tanatopractor updated"              |
| POST   | /tanatopractor            | YES   | Admin        | Create personal              | req.body                   | "Tanatopractor created"              |
| DELETE | /tanatopractor/:id        | YES   | Admin        | Remove one personal          | personal_id                | "Tanatopractor deleted"              | 

</details>





![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)

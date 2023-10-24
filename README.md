# cementerio

// add github link

# Express | 


# TEAM | 

- Tierra Santa has been developed by:

:baseball: Raul Villarraso: https://github.com/RaulVillarraso, :basketball: Adrián Angulo Dieppa: https://github.com/adrianaadd :gemini: Yeray Armas: https://github.com/JEDI84


## PROJECT SETUP
npm Install

## Introduction

Tierra Santa comes out of the need of having a better organization within the graveyards. A database where we can organize the decesed, graveyard "map", graves either common or private, rent or bought, employees and external professionals. It has been developt to cover administration porpuses, and so the options for the external users are in the IceBox


<details>
<summary>:round_pushpin: Common Endpoints</summary>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /commons                  | YES   | Professional | Get all common graves        | -                          | [{ common }]                         |
| GET    | /commons/:id              | YES   | Professional | Get one common grave         | common_id                  | { common }                           |
| PUT    | /commons/:id              | YES   | Admin        | Update common grave          | common_id                  | "Common updated"                     |
| POST   | /commons                  | YES   | Admin        | Create common grave          | req.body                   | "Common created"                     |
| DELETE | /commons/:id              | YES   | Admin        | Remove one common grave      | common_id                  | "Common deleted"                     |

</summary>
</details>



<details>
<summary>:latin_cross: Difunto Endpoints</summary>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /deceased                 | YES   | Professional | Get all deceased             | -                          | [{ deceased }]                       |
| GET    | /deceased/:id             | YES   | Professional | Get one deceased             | deceased_id                | { deceased }                         |
| PUT    | /deceased/:id             | YES   | Admin        | Update deceased              | deceased_id                | "Deceased updated"                   |
| POST   | /deceased                 | YES   | Admin        | Create deceased              | req.body                   | "Deceased created"                   |
| DELETE | /deceased/:id             | YES   | Admin        | Remove one deceased          | deceased_id                | "Deceased deleted"                   |

</summary>
</details>


<details>
<summary>:arrow_up: Galery Endpoints</summary>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /galeries                 | YES   | Professional | Get all galeries             | -                          | [{ galeries }]                       |
| GET    | /galery/:id               | YES   | Professional | Get one galery               | galery_id                  | { galery }                           |
| PUT    | /galery/:id               | YES   | Admin        | Update galery                | galery_id                  | "Galery updated"                     |
| POST   | /galery                   | YES   | Admin        | Create galery                | req.body                   | "Galery created"                     |
| DELETE | /galery/:id               | YES   | Admin        | Remove one galery            | galery_id                  | "Galery deleted"                     |

</summary>
</details>


<details>
<summary>:headstone: Grave Endpoints</summary>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /graves                   | YES   | Professional | Get all graves               | -                          | [{ graves }]                         |
| GET    | /grave/:id                | YES   | Professional | Get one grave                | grave_id                   | { grave }                            |
| PUT    | /grave/:id                | YES   | Admin        | Update grave                 | grave_id                   | "Grave updated"                      |
| POST   | /grave                    | YES   | Admin        | Create grave                 | req.body                   | "Grave created"                      |
| DELETE | /grave/:id                | YES   | Admin        | Remove one grave             | grave_id                   | "Grave deleted"                      |

</summary>
</details>


<details>
<summary>:classical_building: Graveyard Endpoints</summary>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /graveyards               | YES   | Professional | Get all graveyards           | -                          | [{ graveyards }]                     |
| GET    | /graveyard/:id            | YES   | Professional | Get one graveyard            | graveyard_id               | { graveyard }                        |
| PUT    | /graveyard/:id            | YES   | Admin        | Update graveyard             | graveyard_id               | "Graveyard updated"                  |
| POST   | /graveyard                | YES   | Admin        | Create graveyard             | req.body                   | "Graveyard created"                  |
| DELETE | /graveyard/:id            | YES   | Admin        | Remove one graveyard         | graveyard_id               | "Graveyard deleted"                  |

</summary>
</details>






<details>

<summary>👩‍🎤Section B</summary>
<details>
<summary>🐶Inner Section</summary>
  Done!
</details>
</details>




![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)

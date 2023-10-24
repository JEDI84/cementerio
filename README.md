# cementerio

// add github link

# Express | 


# TEAM | 

- Tierra Santa has been developed by:

:baseball: Raul Villarraso: https://github.com/RaulVillarraso, :basketball: Adrián Angulo Dieppa: https://github.com/adrianaadd :football: Yeray Armas: https://github.com/JEDI84


## PROJECT SETUP
npm Install

## Introduction

Tierra Santa comes out of the need of having a better organization within the graveyards. A database where we can organize the decesed, graveyard "map", graves either common or private, rent or bought, employees and external professionals. It has been developt to cover administration porpuses, and so the options for the external users are in the IceBox




<details>
<summary>:round_pushpin: Common Endpoints</summary>
<details>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /commons                  | YES   | Professional | Get all common graves        | -                          | [{ common }]                         |
| GET    | /commons/:id              | YES   | Professional | Get one common grave         | common_id                  | { common }                           |
| PUT    | /commons/:id              | YES   | Admin        | Update common grave          | common_id                  | "Common updated"                     |
| POST   | /commons                  | YES   | Admin        | Create common grave          | req.body                   | "Common created"                     |
| DELETE | /commons/:id              | YES   | Admin        | Remove one common grave      | common_id                  | "Common deleted"                     |

</summary>
  Done!
</details>
</details>



<details>
<summary>:heavy_plus_sign: Difunto Endpoints</summary>
<details>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /difunto                  | YES   | Professional | Get all difuntos             | -                          | [{ difunto }]                        |
| GET    | /difunto/:id              | YES   | Professional | Get one difunto              | difunto_id                 | { difunto }                          |
| PUT    | /difunto/:id              | YES   | Admin        | Update difunto               | difunto_id                 | "Difunto updated"                    |
| POST   | /difunto                  | YES   | Admin        | Create difunto               | req.body                   | "Difunto created"                    |
| DELETE | /difunto/:id              | YES   | Admin        | Remove one difunto           | difunto_id                 | "Difunto deleted"                    |

</summary>
  Done!
</details>
</details>



<details>
<summary>  &#x2016  Galery Endpoints</summary>
<details>
<summary>

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /galery                   | YES   | Professional | Get all galeries             | -                          | [{ galery }]                         |
| GET    | /galery/:id               | YES   | Professional | Get one galery               | galery_id                  | { galery }                           |
| PUT    | /galery/:id               | YES   | Admin        | Update galery                | galery_id                  | "Galery updated"                     |
| POST   | /galery                   | YES   | Admin        | Create galery                | req.body                   | "Galery created"                     |
| DELETE | /galery/:id               | YES   | Admin        | Remove one galery            | galery_id                  | "Galery deleted"                     |

</summary>
  Done!
</details>
</details>



<details>

<summary>👩‍🎤Section B</summary>
<details>
<summary>🐶Inner Section</summary>
  Done!
</details>
</details>




![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)

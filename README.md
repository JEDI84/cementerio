# cementerio

// add github link

# Express | 


# TEAM | 

- Tierra Santa has been developed by:

Raul Villarraso: https://github.com/RaulVillarraso, Adrián Angulo Dieppa: https://github.com/adrianaadd Yeray Armas: https://github.com/JEDI84


## PROJECT SETUP
npm Install

## Introduction

Tierra Santa comes out of the need of having a better organization within the graveyards. A database where we can organize the decesed, graveyard "map", graves either common or private, rent or bought, employees and external professionals. It has been developt to cover administration porpuses, and so the options for the external users are in the IceBox


<details>

<summary>🚀### Common Endpoints</summary>
<details>
<summary>





| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /commons                  | YES   | Professional | Get all common graves        | -                          | [{ common }]                         |
| GET    | /commons/:id              | YES   | Professional | Get one common grave         | common_id                  | { common }                           |
| PUT    | /commons/:id              | YES   | Professional | Update common grave          | common_id                  | "Common updated"                     |
| POST   | /commons                  | YES   | Professional | Create common grave          | req.body                   | "Common created"                     |
| DELETE | /commons/:id              | YES   | Admin        | Remove one common grave      | common_id                  | "Common deleted"                     |


</summary>
  Done!
</details>
</details>



### Difunto Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE         | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ------------ | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /difunto                  | YES   | Professional | Get all difuntos             | -                          | [{ difunto }]                        |
| GET    | /difunto/:id              | YES   | Professional | Get one difunto              | difunto_id                 | { difunto }                          |
| PUT    | /difunto/:id              | YES   | Professional | Update difunto               | difunto_id                 | "Difunto updated"                    |
| POST   | /difunto                  | YES   | Admin        | Create difunto               | req.body                   | "Difunto created"                    |
| DELETE | /difunto/:id              | YES   | Admin        | Remove one difunto           | difunto_id                 | "Difunto deleted"                    |

<details>

<summary>🚀Travelling Section</summary>
<details>
<summary>🫂Inner Section</summary>
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

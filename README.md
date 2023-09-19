# Digexmp1-a1

## Curtin University - Academic Integrity Warning

> "Curtin recognises that students who are unfamiliar with the conventions of academic writing can sometimes unintentionally plagiarise or collude on assessments. This may happen if you inadequately acknowledge resources or collaborate with other students when an assessment should be done individually. An academic integrity warning is used to assign you an educative action in these situations so you can learn from your mistakes. More serious academic breaches such as cheating are managed as misconduct."
For more information, visit [Academic Integrity at Curtin](https://www.curtin.edu.au/students/essentials/rights/academic-integrity/)

# API Documentation

## Auth Route
### <span style="color:yellow;">POST</span> sign in
```http request
/auth/signin
```

#### Request Headers
| Key          | Value            |
|--------------|------------------|
| Content-type | application/json |

#### Body
```json
{
    "email": "email",
    "password": "password"
}
```

### <span style="color:green;">GET</span> validate
```http request
/auth/validate
```
#### Request Headers
| Key           | Value        |
|---------------|--------------|
| Authorization | Bearer token |

## User Route
### <span style="color:green;">GET</span> all users
```http request
/user
```

### <span style="color:green;">GET</span> user by id
```http request
/user/:id
```
#### Path variables
| Key | Value |
|-----|-------|
| id  | id    |

### <span style="color:yellow;">POST</span> create user
```http request
/user
```
#### Request Headers
| Key          | Value            |
|--------------|------------------|
| Content-type | application/json |

#### Body
```json
{
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email",
  "password": "password",
  "bio": "bio <optional>",
  "accessLevel": 0
}
```

### <span style="color:blue;">PUT</span> update user
```http request
/user/:id
```

#### Request Headers
| Key          | Value            |
|--------------|------------------|
| Content-type | application/json |

#### Path variables
| Key | Value |
|-----|-------|
| id  | id    |

#### Body
```json
{
  "property1": "updated property 1",
  "property2": "updated property 2"
}
```

### <span style="color:red;">DELETE</span> user by id
```http request
/user/:id
```
#### Path variables
| Key | Value |
|-----|-------|
| id  | id    |

### References 

“How to Check Req.body Empty or Not in Node ,Express?” n.d. Stack Overflow. Accessed September 19, 2023. https://stackoverflow.com/questions/42921727/how-to-check-req-body-empty-or-not-in-node-express.
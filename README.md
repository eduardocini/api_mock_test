# api_mock_test

---
  ### Resources
  * http://localhost:3000/employer
  * http://localhost:3000/company


  ### Home
  * http://localhost:3000
 
  ---
  ### Routes
  ```
  GET    /:resource/:id
  POST   /:resource/:id
  PUT    /:resource/:id
  PATCH  /:resource/:id
  ```
  
  ### Customizing Routes
  ```
  /v1/company/:id -> /company/:id
  /v1/company/ -> /company/
  /v1/company?_page=:pg&_limit=:lt -> /company?_page=:pg&_limit=:lt
  /v1/employer/:id -> /employer/:id
  /v1/employer/ -> /employer/
  ```

  ### Custom routes
  ```
  GET    /v1/:resource/:id
  POST   /v1/:resource/:id
  PUT    /v1/:resource/:id
  PATCH  /v1/:resource/:id
  ```
# reimagined-octo-spork
  A simpe Todo App using Node and MongoDB
 
 
## Routings
- Login Route : POST request : [/api/todo/auth](/api/todo/auth)
- Logout Route : GET request : [/api/todo/auth/logout](/api/todo/auth/logout]
    - The user needs to be authenticated to access endpoint
- Create a user : POST : [/api/todo/auth/create-user](/api/todo/auth/create-user)
     ###### input name attribute
    - firstName : string, required
    - lastName  : string, required
    - telephone : string, required, max-length : 11
    - email     : string, email, required
    - gender : string, required, options : [male,female,others]
    - password  : string, required
  
  ### Authenticated Routes
  - Get list : GET request : [/api/todo/user/](/api/todo/user/)
  - Post a task : POST request : [/api/todo/user/](/api/todo/user/)
      ###### input name attribute
      - title : string, required
      - task : string, required
      - valid : date *the validity of the task*
  - check a task as finished : PUT : [/api/todo/user/](/api/todo/user/)
      - A form input of id and checkbox of true or false
  - Delete a task : DELETE : [/api/todo/user/](/api/todo/user/)
      - The enpoint receieves the id of the task to be deleted

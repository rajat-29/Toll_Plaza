# Toll_Management_System

Toll Management System to manage toll plaza and vehicle passes using bootstrap,Nodejs,MongoDb!!

## How To Run?

To run this website run this command on command prompt on root folder.

```
npm start or node app.js
```

It will run under the url http://127.0.0.1:3000/

## Login Details

Email and Password for Website:<br>

Admin :<br>
Email :admin@cq.com<br>
Password: admincq<br>

User:<br>
Email : bro@gmail.com<br>
Password: admincq<br>

Email :ajay@cq.com<br>
Password: admincq<br>

## Features
<ul>
  <li>Dynamic Data by mongoose database</li>
  <li>Different Views for Admin and Staff</li> 
  <li>Manage Whole Toll Plaza</li>
  <li>Manage Reports and Passes</li>
  <li>Month wise Sales Report</li>
  <li>Responsive Layout</li>
  <li>Mobile Friendly</li>
  <li>Open Source</li>
</ul>

## How to Use ?
<ol type="number">
<li>Use mongorestore command to add database to your Local Machine.</li>
<li>Run Mongo Server</li>
<li>Run Server File app.js</li>
<li>Run local host on port number 3000</li>
</ol>

## Pre-requisites

- Node JS (Tested on v12.14.0)
- Mongoose
- Pre-requisites or Dependencies(Below)

## Extra Dependencies :

<ul>
  <li>Mongoose</li>
  <li>Express</li>
  <li>Express-Session</li>
  <li>PATH</li>
  <li>EJS</li>
  <li>EJS Mate</li>
  <li>Bcrypt Module</li>
  <li>HTTP</li>
</ul>

- Express

```
npm install express
```

- EJS

```
npm install ejs
```

- Express-Session

```
npm install express-session
```

- Mongoose

```
npm install mongoose
```

- Dotenv

```
npm install dotenv
```

- Bcrypt

```
npm install bcrypt  / npm i bcrypt
```


## Schema

<h4><b>User Schema</b></h4>

| Name         | Type   | Required | Unique | Encrpyted |
| ------------ | ------ | -------- | ------ | --------- |
| Name         | String | Yes      | No     | No        |
| Email        | String | Yes      | Yes    | No        |
| Password     | String | Yes      | No     | Yes       |
| Address      | String | No       | No     | No        |
| City         | String | Yes      | No     | No        |
| Gender       | String | Yes      | No     | No        |
| Role         | String | Yes      | No     | No        |
| Phone        | String | No       | No     | No        |

<h4><b>Category Schema</b></h4>

| Name          | Type   |
| ------------- | ------ |
| Name          | String |
| Status        | String |
| CreateBy      | String |

<h4><b>Pass Schema</b></h4>

| Name          | Type   |
| ------------- | ------ |
| Category      | String |
| Registration  | String |
| IssueDate     | Date   |
| Name          | String |
| Age           | String |
| Address       | String |
| Phone         | String |
| Balance       | Number |

<h4><b>Receipt Schema</b></h4>

| Name          | Type   |
| ------------- | ------ |
| Category      | String |
| vehicleNumber | String |
| entryDate     | String |
| entryTime     | String |
| receiptdate   | Date   |
| trip          | String |
| cost          | Number |



## Directory

```bash
|___ Root
|   |
|   |--- Controller
|   |    |--- Admin.js
|   |    |--- Login.js
|   |    |--- Staff.js
|   |
|   |--- Dump (Mongoose Dump) (Dump)
|   |
|   |--- Middlewares
|   |    |--- auth.js
|   |
|   |--- Models
|   |    |--- CategorySchema.js
|   |    |--- PassSchema.js
|   |    |--- ReceiptSchema.js
|   |    |--- UserSchema.js
|   |
|   |--- Public
|   |    |--- css (Static)
|   |    |--- images (Staic)
|   |    |--- js (Static)
|   |
|   |--- Routes
|   |    |--- Handlers
|   |    |    |--- Admin.ejs
|   |    |    |--- Login.ejs
|   |    |    |--- Staff.ejs
|   |    |--- index.js
|   |
|   |--- Server.js
|   |
|   |--- Services
|   |    |--- Admin.js
|   |    |--- Login.js
|   |    |--- Staff.js
|   |
|   |--- Views
|   |    |--- layout
|   |    |    |--- layout.ejs
|   |    | 
|   |    |--- partials
|   |    |    |--- footbar.ejs
|   |    |    |--- header.ejs
|   |    |    |--- navbar.ejs
|   |    | 
|   |    |--- add_pass.ejs
|   |    |--- add_staff.ejs
|   |    |--- addReceipt.ejs
|   |    |--- changePassword.ejs
|   |    |--- dashboard.ejs
|   |    |--- login.ejs
|   |    |--- manage_pass.ejs
|   |    |--- manage_staff.ejs
|   |    |--- manageReceipt.ejs
|   |    |--- passCount.ejs
|   |    |--- passSales.ejs
|   |    |--- passUser.ejs
|   |    |--- receiptCount.ejs
|   |    |--- receiptSales.ejs
```

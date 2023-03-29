/* const a = new Date()
console.log(a.getFullYear())
 */

/* const b =  {
  year : 2023,
  month : 3,
  day : 29
}

console.log(b.year + '년도')
? 우리가 찾아서 바꾸지 않는 이상 바뀌지 않는다 리터럴 직접 세긴다 */

/*  function c (a, b, c) {

    this.year = a ;
    this.month = b;
    this.day = c;
}

const test = c (2023, 3, 29).year;

console.log(test) */
// * 년월일로 그룹으로 묶이는  
/* 
const fs = require('fs')

function user(id, password, email) {
 this.id = id,
 this.password = password,
 this.email = email
}

const d = new user ('k','12', 'kk@gmail.com')
const e = new user ('d', '12','dd@gmail.com')
const f = new user ('j', '12','jj@gmail.com')

console.log(d,e,f)

let names = ['k', 'd', 'j']
let passwords = ['12','12','12']
let email = ['kk@gmail.com','dd@gmail.com','jj@gmail.com']

let members = [];
for (let i = 0; i < 3; i++) {
 members.push(new users(names[i], passwords[i], email[i]))
}

fs.writeFileSync("members.JSON", JSON.stringify(members, null, 2), 'utf-8') */
//? JSON 파일을 생성 시킨다 
/* 
console.log(members)

const fs = require ('fs')

function user (id, password, email) {
  this.id = id,
  this.password = password,
  this.email = email
}


const a = new user ('k','22', 'kkk@gmail.com')
const b = new user ('b','22', 'bb@gmail.com')
const c = new user ('c', '22', 'cc@gmail.com')

console.log(a, b, c)

let name = ['a', 'b', 'c']
let password = ['22', '22', '22']
let emails = ['kk@gmail.com', ]
 */

import fs from 'fs';

function user(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;
}

const d = new user('aaa1234', '1234', 'aaa@aaa.com');
const e = new user('bbb1234', '1234', 'bbb@bbb.com');
const f = new user('ccc1234', '1234', 'ccc@ccc.com');

let names = ['aaa1234', 'bbb1234', 'ccc1234'];
let passwords = ['1234', '1234', '1234'];
let emails = ['aaa@aaa.com', 'bbb@bbb.com', 'ccc@ccc.com'];
let members = [];

for(let i = 0; i < 3; i++) {
  members.push(new user(names[i], passwords[i], emails[i]));
}

fs.writeFileSync('members.JSON', JSON.stringify(members, null, 0), 'utf-8');

console.log(members);
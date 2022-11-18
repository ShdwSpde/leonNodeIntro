/*

JS is singe threaded and synchronous. It will perform one function at a time then move on after executing

Using webAPIs that are built into the browser we can manipulate this behavior

i.e. setTimeout and setInterval which come from our browser

Most environments include them

*/
function houseOne(){
  console.log('Paper delivered to house one')
}

function houseTwo(){
  setTimeout(() => console.log('Paper delivered to house two'),3000)
}

function houseThree(){
  console.log('Paper delivered to house three')
}

houseOne()
houseTwo()
houseThree()



/*

What if we wanted to wait until being paid to move onto the next house?

We could use a callback. A callback is a function that is passed into another function as an argument

i.e. addEventListener('click',houseOne)

houseOne is callback here. Making addEventListener a higher order function as it takes in another function as an argument

*/


function deliverOne(){
  console.log('Paper delivered to house one')
}

function deliverTwo(callback){
  setTimeout(() => 
  {
    console.log('Paper delivered to house two')
    callback()
  }, 3000)
}

function deliverThree(){
  console.log('Paper delivered to house three')
}

deliverOne()
deliverTwo(deliverThree)

// we can nest callbacks but then we get into "callback hell" so now we use promises to avoid the 'pyramid of doom'

// Promises are objects that represent the eventual completion or failure of an async operation and its value. Remember that weird fetch() syntax?

// Promises can have three states: pending,fulfilled, and rejected


const promise = new Promise((resolve,reject) => {
  const error = false
  if(!error){
    resolve('Promise has been fulfilled')
  }else{
    reject('Error: Promise has failed')
  } 
})
console.log(promise)
promise
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Promise is a built-in class constructor

// .then is a promise method that runs after the promise resolves

// .catch is a promise method that runs if the promise is rejected

function firstDrop(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Paper delivered to house 1')
    }, 7000)
  })
}

function secondDrop(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Paper delivered to house 2')
    }, 2000)
  })
}

function thirdDrop(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Paper delivered to house 3')
    }, 2000)
  })
}

firstDrop()
  .then(data => console.log(data))
  .then(secondDrop)
  .then(data => console.log(data))
  .then(thirdDrop)
  .then(data => console.log(data))
  .catch(err => console.log(err))


// these promise chains have sincce been replaced with async-await
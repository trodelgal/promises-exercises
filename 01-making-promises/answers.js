
/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  // const myPromise= new Promise((resolve, reject)=>{
  //    })
  /* IMPLEMENT ME! */
 return Promise.resolve(3) 
}

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  // const myPromise= new Promise((resolve, reject)=>{ 
  // })
  /* IMPLEMENT ME! */
 return Promise.reject('Boo!')
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    itShouldResolve
    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  })
  .than()
  .catch()
}

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  return new Promise((resolve,reject)=>{
  })
  .than(value)
  .than(delayInMs)
  /* Return a promise that resolves with the value after delayInMs */
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
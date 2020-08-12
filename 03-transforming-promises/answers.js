/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
  promise
  .then(res => transformer(res))
  .then(res2 => resolve(res2))
  .catch(err => reject(err))
  .catch(err => reject(err))
  })
};


/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return new Promise((resolve, reject) => numberPromise
    .then(res=>{
      if(typeof(res)=="number"){
        resolve(res*res)
      }else if(!Number.isInteger(res)){
        let num = parseInt(res);
        if(Number.isInteger(num)) resolve(num**2);
        else throw(`Cannot convert 'abc' to a number!`)
      }
    }).catch(err=>reject(err))
    )
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
  .catch(err=>0)
  .catch(err=>reject(err))
}


/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return new Promise((resolve,reject)=>{
    promise
    .then(res=>{
      reject(res)
  })
    .catch(err=>{
      resolve(err)
    })
 

  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
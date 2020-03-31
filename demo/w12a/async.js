console.log("Starting Timeout!")
<<<<<<< HEAD
setTimeout(asyncFunction, 1000)
=======
// setTimeout(asyncFunction, 1000)
>>>>>>> 85308e767b6d679b23adec243374a9d10fde4199

function asyncFunction() {
  console.log("1 second passed, calling promise")
  function asyncFunction2() {
    console.log("3 more seconds passed")
    function asyncFunction3() {
      console.log("3 seconds. Whew, such a long wait.")
    }
    setTimeout(asyncFunction3, 3000)
  }
  setTimeout(asyncFunction2, 3000)
}


// promisedOne().then(() => {console.log("After!")})
function promisedOne() {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    //setTimeout(asyncFunction, 1000)
=======
>>>>>>> 85308e767b6d679b23adec243374a9d10fde4199
    function asyncFunction() {
      console.log("1 second passed!")
      resolve(100)
    }
    setTimeout(asyncFunction, 1000)
  })
}

<<<<<<< HEAD
/*promisedOne()
  .then(
    (value)=>{console.log("Resolved with" + value)}
  )
*/

  async function iNSync() {
    let value = await promisedOne()
    console.log("I'm done!!" = value)
    value = await promisedOne()
    console.log("I'm done!!" = value)
    value = await promisedOne()
    console.log("I'm done!!" = value)
  }
\
  iNSync()
=======
promisedOne()
  .then(
    (value)=>{console.log("Resolved with " + value)})

async function iNSync() {
  let value = await promisedOne()
  console.log("I'm done!!" + value)
  value = await promisedOne()
  console.log("I'm done!!" + value)
  value = await promisedOne()
  console.log("I'm done!!" + value)
}
iNSync()
>>>>>>> 85308e767b6d679b23adec243374a9d10fde4199

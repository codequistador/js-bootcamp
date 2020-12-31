// Callback technique
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('Number must be provided')
    }
  }, 2000)
}

// callback hell!
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
})

// Same thing with promise API (resolve or reject only get called once)
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('gimme a number')
    }, 2000)
  })

// same as callback hell... no chaining
getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`${data} from promise`)
      },
      (err) => {
        console.log(err)
      }
    )
  },
  (err) => {
    console.log(err)
  }
)

getDataPromise(10)
  .then((data) => {
    // promise chaining (chain of thens)
    return getDataPromise(data)
  })
  .then((data) => {
    return 'this is some test data'
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(`I caught for you this err: ${err}`)
  })

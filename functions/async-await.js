const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('gimme a number')
    }, 2000)
  })

// async functions always return a promise
const processData = async () => {
  let data = await getDataPromise(2)
  data = await getDataPromise(data)
  data = await getDataPromise(data)
  return data
}

processData()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

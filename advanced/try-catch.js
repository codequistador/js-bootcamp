const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * 0.25
  } else {
    throw Error('The function expected a number.')
  }
}

// this won't crash the whole program
try {
  const result = getTip(10)
  console.log(result)
} catch (error) {
  console.log('catch block is running')
}

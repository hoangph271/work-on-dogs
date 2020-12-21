const { getADog, downloadPic } = require('./get-a-dog')
const PICS_FOLDER = 'dog-pics'

// TODO: #0 - Hove your mouse over getADog to read its documentation
// The value dog in line 11, 12 represents a dog
// Try typing `dog.` and see the property suggestions
getADog((err, dog) => {
  if (err) {
    console.error(err)
  } else {
    console.info(`ID: ${dog.id}`)
    console.info(`URL: ${dog.url}`)
  }
})

// TODO: #1 - Get a dog from API
// Print out its, ID - URL
// print out the width, height of its image

// TODO: #2 - Try downloading the dog's image into `dog-pics` folder
// Any dog from getADog has a `url` property, try using that
// (there is a constant named PICS_FOLDER above)
// Hint: read about function 'join' of module 'path'

// TODO: #3 - Same task, using promises

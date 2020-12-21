const fs = require('fs').promises
const axios = require('axios').default
const API_URL = 'https://api.thedogapi.com/v1/images/search'

/**
 * @typedef {Object} Dog
 * @property {String} id
 * @property {String} url
 * @property {Number} width
 * @property {Number} height
 */

/**
 * @callback getADocCallback
 * @param {Error} error
 * @param {Dog} dog - the {@link Dog} from internet
 */

/**
 * Get a Dog from the Dog API  
 * This function has a more than 50% chance of failure
 * This function invoke getADog when it finishs getting a dog,
 * or when an error occurs
 * @param {getADocCallback} onFinish
 */
function getADog(onFinish) {
  if (Math.random() < 0.5) {
    onFinish(new Error(`Failed gettin' a dog...!`))
    return
  }

  return axios.get(API_URL)
    .then(res => {
      /** @type {Dog} */
      const dog = res.data[0]
      onFinish(null, dog)
    })
    .catch(() => onFinish(new Error(`Failed gettin' a dog...!`)))
}

/**
 * @callback downloadPicCallback
 * @param {Error} error
 */

/**
 * Download a file from fileUrl to the local path filePath
 * onFinish is invoked when downloading finished
 * @param {String} filePath
 * @param {String} fileUrl
 * @param {downloadPicCallback} onFinish
 */
async function downloadPic (filePath, fileUrl, onFinish) {
  const buffer = (await axios.get(fileUrl, { responseType: 'arraybuffer' })).data

  await fs.writeFile(filePath, buffer)
    .then(() => onFinish(null))
    .catch((err) => onFinish(err))
}

module.exports = {
  getADog,
  downloadPic,
}

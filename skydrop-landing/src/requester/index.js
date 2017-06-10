import Promise from 'bluebird'
import jquery from 'jquery'

const url = 'http://localhost:3000/api/'

export default {
  save: (endpoint, data) => {
    const saveUrl = url + endpoint
    return new Promise((resolve, reject) => {
      jquery.ajax({
        type: 'POST',
        url: saveUrl,
        data: data,
        success: (savedObject) => {
          resolve(savedObject)
        },
        error: (err) => {
          reject(err)
        },
        dataType: 'json'
      })
    })
  }
}

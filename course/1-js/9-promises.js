const url = ''

fecth(url)
  .then(function(res) {
    return res.json()
  })
  .then(function(json) {
    return ({
      importantData: json.importantData,
    })
  })
  .then(function(data) {
    console.log(data)
  })
  .cathc(function(err) {
  })

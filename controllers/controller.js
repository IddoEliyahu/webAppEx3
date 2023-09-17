const dbModel = require('../models/model')
const requestController = {}

requestController.getAll = (req, res) => {
  const results = dbModel.get()
  res.render('index.ejs', { results })
}

requestController.getOne = (req, res) => {
  const id = req.params.id;
  const results = dbModel.get(parseInt(id))
  res.render('index.ejs', { results })
}

requestController.post = (req, res) => {
  /*
  gotta figure out why body is empty/where data is brought through. Should be through the body.
   */
  try {
    const data = req.body.data;
    console.log(req.body)
    dbModel.post(data);
    const results = dbModel.get()
    res.render('index.ejs', { results })
  } catch (e) {
    console.log(JSON.stringify(body))
    throw 'yeet'
  }
}

requestController.put = (req, res) => {

}

requestController.delete = (req, res) => {

}

module.exports = requestController
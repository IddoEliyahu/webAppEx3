const dbModel = require("../models/model");
const requestController = {};

requestController.getAll = (req, res) => {
  const results = dbModel.getAll();
  res.render("index.ejs", { results });
};

requestController.getOne = (req, res) => {
  const id = req.body.id;
  console.log(id);
  const results = dbModel.get(parseInt(id));
  res.render("index.ejs", { results });
};

requestController.post = (req, res) => {
  /*
  gotta figure out why body is empty/where data is brought through. Should be through the body.
   */
  try {
    const data = req.body.data;
    dbModel.post(data);

    requestController.getAll(req, res);
  } catch (e) {
    console.error(e);
    res.status(403).send("סעמק");
  }
};

requestController.put = (req, res) => {
  const id = req.body.id;
  const data = req.body.data;
  dbModel.put(id, data);

  requestController.getAll(req, res);
};

requestController.delete = (req, res) => {
  try {
    dbModel.delete(req.body.id);

    requestController.getAll(req, res);
  } catch (e) {
    console.error(e);
    if (e.error === dbModel.nonValidKey) {
      res.status(400).json(e.error);
    } else {
      res.status(500).json(e);
    }
  }
};

module.exports = requestController;

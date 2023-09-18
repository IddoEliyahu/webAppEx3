const dbModel = require("../models/model");
const requestController = {};

requestController.render = (req,res) => {
  const results = dbModel.getAll()
  res.status(200).render('index.ejs', {results})
}

requestController.getAll = (req, res) => {
  res.status(200).send(dbModel.getAll());
};

requestController.getOne = (req, res) => {
  const id = req.body.id;
  res.status(200).send(dbModel.getOne(id))
};

requestController.post = (req, res) => {
  try {
    const data = req.body.data;
    dbModel.post(data);
    res.status(200).send(dbModel.getAll());
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

requestController.put = (req, res) => {
  try {
    const id = req.body.id;
    const data = req.body.data;
    dbModel.put(id, data);
    res.status(200).send(dbModel.getAll());
  } catch (e) {
    if (e === dbModel.nonValidKey) res.status(400).json({ error: e });
    else res.status(500).json({ error: e });
  }
};

requestController.delete = (req, res) => {
  try {
    dbModel.delete(req.body.id);

    res.status(200).send(dbModel.getAll());
  } catch (e) {
    console.error(e);
    if (e=== dbModel.nonValidKey) {
      res.status(400).json(e.error);
    } else {
      res.status(500).json(e);
    }
  }
};

module.exports = requestController;

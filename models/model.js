const db = {
  1: "Iddo Eliyahu",
  2: "Pizza",
  3: {
    instrument1: "Drums",
    instrument2: "Nerves",
  },
  4: "What's up Hemi & Co.",
};

let count = Object.keys(db).length;

const dbModel = {};

const nonValidKey = "Key does not exist in the database" 
const validateId = (id) => {
  if (!db.hasOwnProperty(id))
    throw nonValidKey;
};

dbModel.nonValidKey = nonValidKey

dbModel.getOne = (id) => {
  validateId(id);
  return db[id];
};

dbModel.getAll = () => {
  console.log(db)
  return JSON.parse(JSON.stringify(db));
};

dbModel.post = (data) => {
  db[++count] = data;
};

dbModel.delete = (id) => {
  validateId(id);
  delete db[id];
};

dbModel.put = (id, data) => {
  validateId(id);
  db[id] = data;
};

module.exports = dbModel;

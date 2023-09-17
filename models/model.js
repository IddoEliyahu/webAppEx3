const db = [
  { id: 1, name: 'Iddo Eliyahu' },
  { id: 2, food: 'Pizza' },
  { id: 3, instrument: 'Drums' }
];
const dbModel = {};
let count = 3

dbModel.get = (id = '') => {
  console.log('got to get in model')
  if (id === '') return db.map(x => x) // return a copy of the array so it won't be accessed outside of here
  try {
    return db.filter(data => data['id'] === id)[0]
  } catch (e) {
    if (id < 0 || id > count) { throw 'ID out of bound' }
    else if (typeof id == Number) { throw 'Object has been deleted' }
    else { throw e }
  }
}

dbModel.post = (data) => {
  db.push({ id: ++count, ...data })
}

dbModel.delete = (id) => {
  const temp = [];
  const length = db.length;
  for (let i = 0; i < length; i++) {
    const obj = db.pop()
    if (obj.id !== id) {
      temp.push(obj)
    }
  }
  temp.forEach(obj => {
    db.push(obj)
  })
}

dbModel.put = (id, data) => {
  try {
    const object = db.filter(obj => obj.id === id)[0]
    Object.keys(object).forEach(property => {
      if (property !== 'id') delete object[property]
    })
    Object.keys(data).forEach(property => {
      if (property !== 'id') object[property] = data[property]
    })
  } catch (e) {
    console.log(e)
    return e;
  }
}

module.exports = dbModel;
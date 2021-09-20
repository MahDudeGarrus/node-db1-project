const db = require("../../data/db-config.js")

const getAll = () => {
  //selects all from accounts table
  return db("accounts")
}

const getById = id => {
  // select all from accounts table with a row with specific id
  return db("accounts").where('id', id).first()
}

const create = async account => {
  // add new item to accounts table
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // updates field(s) in existing item in accounts table
  return db("accounts")
}

const deleteById = id => {
  //deleted item in accounts table with matching id to query
  return db("accounts").where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

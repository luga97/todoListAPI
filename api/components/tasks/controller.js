const TASKS = 'tasks'
const { nanoid } = require('nanoid')
const store = require('../../../store/dummy')

module.exports = function(){
  function list(){
    return store.list(TASKS)
  }

  function get(id){
    return store.get(TASKS, id)
  }

  async function upsert(body){
    const task = {
      title: body.title,
      description: body.description
    }
    if(body.id){
      task.id = body.id
    } else {
      task.id = nanoid()
    }
    return store.upsert(TASKS, task)
  }

  return {
    list,
    get,
    upsert
  }
}
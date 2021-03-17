const db = {
  'tasks':[
      {id: '1',title: 'Limpiar los platos', description: 'descripcion de la tarea'},
      {id: '2',title: 'Ir por las compras', description: 'leche, huevo,tomate'}
  ]
}

async function list(table){
  return db[table] || [];
}

async function get(table, id){
  let collection = await list(table)
  return collection.filter(item => item.id === id)[0] || null;
}

async function upsert(table, data){
  fetched = db[table]
  
  if(!fetched){
      fetched = []
  }
  
  aux = false
  for (let i = 0; i < fetched.length; i++) {
    if(fetched[i].id == data.id){
      fetched.splice(i,1)
      aux = true
    }   
  }
  
  fetched.push(data)

  return data
}

module.exports = {
  list,
  get,
  upsert
}
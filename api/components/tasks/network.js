const express = require('express')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.put('/', upsert)

async function list(req, res){
  try{
    const tasks = await Controller.list()
    response.success(req, res, tasks, 200)
  } catch(err){
    response.error(req, res, err.message, 500)
  }
}

async function get(req, res){
  try{
    const task = await Controller.get(req.params.id)
    response.success(req, res, task, 200)
  } catch(err){
    response.error(req, res, err.message, 500)
  } 
}

async function upsert(req, res){
  try{
    const task = await Controller.upsert(req.body)
    response.success(req, res, task, 200)
  }catch(err){
    response.error(req, res, err.message, 500)
  }
}
module.exports = router
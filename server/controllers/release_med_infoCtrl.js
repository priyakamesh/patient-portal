
'use strict';

const { bookshelf } = require('../db/database');
const Release = require('../models/release_med_info')

module.exports.getReleaseperson = ({params: {id}}, res, next) =>{
  Release.getReleaseperson(id)
  .then((release) =>{
    res.status(200).json(release)
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.addReleasePerson = ({params:{id}, body}, res, next) =>{
  Release.getReleaseperson(id)
  .then(() =>{
    Release.forge(body)
    .save()
    .then(() =>{
      res.status(200).json({"msg": "Added Succesfully"})
    })
    .catch((err) =>{
      next(err)
    })
  })
  .catch((err) =>{
    next(err)
  })

}
module.exports.deleteReleasePerson= ({params:{id}}, res, next) =>{
  Release.where({id:id})
  .destroy()
  .then(() =>{
    res.status(200).json({"msg": "deleted"})
  })
  .catch((err) => next(err))
}

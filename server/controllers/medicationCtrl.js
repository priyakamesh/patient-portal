
'use strict';

const { bookshelf } = require('../db/database');
const Medication = require('../models/medication')

module.exports.getAllMedications = ({params:{id}},res,next)=>{
  Medication.getAllMedications(id)
  .then((medications) =>{
    res.status(200).json({medications})
  })
  .catch((err) =>{
    next(err)
  })
}

module.exports.getAllCurrentMedication = ({params:{id}}, res, next) =>{
  Medication.getAllMedications(id)
  .then(() => {
    Medication.getAllCurrentMedications(id)
    .then((current_medications) =>{
    res.status(200).json({current_medications})
  })
  .catch((err) =>{
    next(err)
  })
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.getAllDisMedication = ({params:{id}}, res, next) =>{
  Medication.getAllMedications(id)
  .then(() => {
    Medication.getAllDisMedications(id)
    .then((dis_medications) =>{
    res.status(200).json({dis_medications})
  })
  .catch((err) =>{
    next(err)
  })
  })
  .catch((err) =>{
    next(err)
  })
}

module.exports.addCurrentMedication = ({params:{id},body},res,next) =>{
 Medication.forge(body)
  .save()
  .then(() => res.status(200).json({"msg": "Current medication Added Successfully"}))
  .catch((err) =>{ next(err)})
}
module.exports.deleteCurrentMedication = ({params:{id,currentmedication_id}},res,next) =>{
  Medication.deleteCurrentMedication(id,currentmedication_id)
  .then(() =>{
    res.status(200).json({"msg": "deleted Successfully"})
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.addDisMedication = ({params:{id},body},res,next) =>{
 Medication.forge(body)
  .save()
  .then(() => res.status(200).json({"msg": "Discontinued medication Added Successfully"}))
  .catch((err) =>{ next(err)})
}
module.exports.deleteDisMedication = ({params:{id,dismedication_id}},res,next) =>{
  console.log("id,dismedication_id",id,dismedication_id);
  Medication.deleteDisMedication(id,dismedication_id)
  .then(() =>{
    res.status(200).json({"msg": "deleted Successfully"})
  })
  .catch((err) =>{
    next(err)
  })
}


exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('patients', (t) =>{
      t.increments()
      t.string('email').notNullable().unique()
      t.string('password')
      t.string('firstname')
      t.string('lastname')
      t.string('dob')
      t.string('ethnicity')
      t.string('address')
      t.string('phonenumber')
    })

    .createTable('doctors',(t) =>{
      t.increments()
      t.string('fullname')
      t.string('speciality')
      t.string('address')
      t.string('phonenumber')
      t.unique(['fullname','speciality','address','phonenumber'])
    })

    .createTable('patient_doctor', (t) =>{
      t.increments()
      t.integer('patient_id').unsigned().references('patients.id')
      t.integer('doctor_id').unsigned().references('doctors.id')
      t.unique(['patient_id', 'doctor_id'])
    })

    .createTable('insurance_type', (t) =>{
      t.increments()
      t.string('name')
      t.string('description')
    })

    .createTable('insurance', (t) =>{
      t.increments()
      t.string('insuranceprovider')
      t.string('groupid')
      t.string('subscriberid')
      t.integer('insurance_type_id').unsigned().references('insurance_type.id')
      t.integer('patient_id').unsigned().references('patients.id')
    })

    .createTable('release_med_info', (t) =>{
      t.increments()
      t.string('fullname')
      t.string('relation')
      t.string('phonenumber')
      t.integer('patient_id').unsigned().references('patients.id')
    })

    .createTable('history_type', (t) =>{
      t.increments()
      t.string('name')
      t.string('description')
    })

    .createTable('history', (t) =>{
      t.increments()
      t.string('name')
      t.string('description')
      t.integer('history_type_id').unsigned().references('history_type.id')
    })

    .createTable('patient_history', (t) =>{
      t.increments()
      t.integer('patient_id').unsigned().references('patients.id')
      t.integer('history_id').unsigned().references('history.id')
      t.unique(['patient_id', 'history_id'])
      t.string("unit")
      t.string("frequency")
    })

    .createTable('allergy_type', (t) =>{
      t.increments()
      t.string('name')
      t.string('description')
    })

    .createTable('allergy' ,(t) => {
      t.increments()
      t.string('name')
      t.string('description')
      t.integer('allergy_type_id').unsigned().references('allergy_type.id')
    })

    .createTable('patient_allergy', (t) =>{
      t.increments()
      t.integer('patient_id').unsigned().references('patients.id')
      t.integer('allergy_id').unsigned().references('allergy.id')
      t.unique(['patient_id', 'allergy_id'])
    })

    .createTable('medication_type', (t) =>{
      t.increments()
      t.string('name')
      t.string('description')
    })

    .createTable('medication', (t) =>{
      t.increments()
      t.string('brandname')
      t.string('drugname')
      t.string('dosage')
      t.string('route')
      t.integer('medication_type_id').unsigned().references('medication_type.id')
      t.integer('patient_id').unsigned().references('patients.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('patient_doctor')
  .dropTableIfExists('doctors')
  .dropTableIfExists('insurance')
  .dropTableIfExists('insurance_type')
  .dropTableIfExists('release_med_info')
  .dropTableIfExists('patient_history')
  .dropTableIfExists('history')
  .dropTableIfExists('history_type')
  .dropTableIfExists('patient_allergy')
  .dropTableIfExists('allergy')
  .dropTableIfExists('allergy_type')
  .dropTableIfExists('medication')
  .dropTableIfExists('medication_type')
  .dropTableIfExists('patients')
};


exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', (t) =>{
      t.increments()
      t.string('email').notNullable().unique()
      t.string('password')
      t.string('first_name')
      t.string('last_name')
      t.string('dob')
      t.string('ethnicity')
      t.string('address')
      t.string('phone_number')
      t.string('primary_insurance_provider')
      t.string('primary_insurance_groupid')
      t.string('primary_insurance_type')
      t.string('secondary_insurance_provider')
      t.string('secondary_insurance_groupid')
      t.string('secondary_insurance_type')
      t.specificType('social_history', knex.raw('text[]'))
      t.specificType('family_history', knex.raw('text[]'))
      t.specificType('allergy', knex.raw('text[]'))
      t.specificType('past_allergy', knex.raw('text[]'))
      t.string("curr_med_brand_name")
      t.string("curr_med_drug_name")
      t.string("curr_med_dosage")
      t.string("curr_med_route")
      t.string("dis_curr_med_brand_name")
      t.string("dis_curr_med_drug_name")
      t.string("dis_curr_med_dosage")
      t.string("dis_curr_med_route")
      t.string("proxy_name")
      t.string("proxy_relation")
      t.string("doctor_name")
      t.string("doctor_address")
      t.string("doctor_phone_number")
      t.string("doctor_speciality")
    })

    .createTable('allergy', (t) => {
      t.increments()
      t.string('name')
    })

    .createTable('familyhistory', (t) =>{
      t.increments()
      t.string('name')
    })

    .createTable('socialhistory', (t) =>{
      t.increments()
      t.string('name')
    })

};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('socialhistory')
    .dropTableIfExists('familyhistory')
    .dropTableIfExists('allergy')
    .dropTableIfExists('users')
};

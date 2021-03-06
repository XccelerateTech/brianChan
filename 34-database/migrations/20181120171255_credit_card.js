
exports.up = function(knex, Promise) {
  return knex.schema.createTable('credit_card',(table)=>{
      table.increments();
      table.bigInteger('number').unique();
      table.date('expire_date');
      table.integer('account_id').unsigned();
      table.foreign('account_id').references('accounts.id');
      table.timestamps(false,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('credit_card');
};

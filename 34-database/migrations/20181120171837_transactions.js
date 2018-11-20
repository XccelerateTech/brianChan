
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions',(table)=>{
    table.increments();
    table.integer('balance');
    table.integer('credit_card_id').unsigned();
    table.foreign('credit_card_id').references('credit_card.id');
    table.bigInteger('credit_card_number').unsigned();
    table.foreign('credit_card_number').references('credit_card.number');
    table.integer('account_id').unsigned();
    table.foreign('account_id').references('accounts.id');
    table.timestamps(false,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transactions')
};

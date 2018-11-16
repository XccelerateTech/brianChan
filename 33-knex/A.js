const fs = require('fs');
const CSVReadableStream = require('csv-reader');

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "fruits",
        user: "postgres",
        password: "postgres"
    }
});
const inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

async function commands() {
    let rows = [];

    inputStream
        .pipe(CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);

        })
        .on('end', async (data) => {

            knex.transaction(async function (trx) {

                for (let row of rows) {
                    let [action, name, quantity] = row;

                    if (action === 'SELL') {

                        let result =
                            await trx.select('quantity')
                                .from('stock')
                                .innerJoin('citrus', 'stock.citrus_id', 'citrus.id')
                                .where('citrus.name', name)

                        if (result[0].quantity < quantity) {
                            throw new Error(`not enough for ${name}!`)
                        }
                    }
                    if (action === 'BUY') {

                        //     let result = await client.query(`
                        // UPDATE stock
                        // SET quantity = quantity + $1
                        // FROM citrus
                        // WHERE stock.citrus_id = citrus.id AND name = $2
                        // `, [quantity, name]);

                        await trx('stock')
                            .whereIn('citrus_id', function () {
                                return this.select('id')
                                    .from('citrus')
                                    .where('name', "=", name)
                            }).increment('quantity', quantity);

                       

                    } else {
                        //     let result = await client.query(`
                        // UPDATE stock
                        // SET quantity = quantity - $1
                        // FROM citrus
                        // WHERE stock.citrus_id = citrus.id AND name = $2
                        // `, [quantity, name]);
                        await trx('stock')
                            .whereIn('citrus_id', function () {
                                return this.select('id')
                                    .from('citrus')
                                    .where('name', "=", name)
                            }).decrement('quantity', quantity);
                    }

                    let knexResult = await knex('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
                    console.log(knexResult);

                    let trxResult = await trx('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
                    console.log(trxResult);
                }

            }
            );
        })
};


commands();
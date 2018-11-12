var pg = require('pg');

var config = {
    user: 'taiming',
    database: 'fruits',
    password: 'woaini25',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

client.query("SELECT * FROM citrus WHERE color = 'orange'",

    async function (err, results) {
        try {
            console.log(results.rows);
        } catch (err) {
            console.log(err);
        }
    })

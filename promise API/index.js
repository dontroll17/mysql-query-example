const { createConnection } = require('mysql2');

const connection = createConnection({
    host: 'localhost',
    user: 'user',
    database: 'test',
    password: 'secret password'
}).promise();

(async() => {
    const sql = "INSERT INTO table_name (id, data) VALUES ?";
    const val = [
        [4, 123],
        [5, 321],
        [6, 123]
    ];
    
    const query = await connection.query(sql, val);
    const data = await connection.query('SELECT * FROM table_name');
    
    console.log(query[0]);
    console.log(data[0]);

    await connection.end();
})();
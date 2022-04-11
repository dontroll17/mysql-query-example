const { createConnection } = require('mysql2');

const connection = createConnection({
    host: 'localhost',
    user: 'user',
    database: 'test',
    password: 'secret password'
}).promise();

(async() => {
    const sql = "INSERT INTO table_name (id, data) VALUES (?, ?)";
    const int = [4, 123];
    
    const query = await connection.query(sql, int);
    const data = await connection.query('SELECT * FROM table_name');
    
    console.log(query[0]);
    console.log(data[0]);

    await connection.end();
})();
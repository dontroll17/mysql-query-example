const { createConnection } = require('mysql2');

const connection = createConnection({
    host: 'localhost',
    user: 'user',
    database: 'test',
    password: 'secret password'
}).promise();

(async() => {
    const sql = "INSERT INTO table_name (id, data) VALUES ?";
    const sqlFil = "UPDATE table_name SET data=? WHERE id=?";
    const sqlDel = "DELETE FROM table_name WHERE data=?";

    const val = [
        [4, 123],
        [5, 321],
        [6, 123]
    ];
    const upData = [1, 123];
    const delData = [123];

    const query = await connection.query(sql, val);
    const data = await connection.query('SELECT * FROM table_name');
    const upQuery = await connection.query(sqlFil, upData);
    const delQuery = await connection.query(sqlDel, delData);

    console.log(query[0]);
    console.log(data[0]);
    console.log(upQuery);
    console.log(delQuery);

    await connection.end();
})();
var sql = require('mssql');

module.exports = function(){
    const sqlConfig = {
        user: 'BD2213010',
        password: 'Filipe1234',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }
    return sql.connect(sqlConfig);
}
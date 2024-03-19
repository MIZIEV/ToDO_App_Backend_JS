const pool = require("../../configuration/databaseConnector.js");



module.exports = {



    getAllTasks: calback => {
        pool.query("SELECT * FROM task", [],
            (error, results, fields) => {
                if (error) {
                    return calback(error);
                }
                return calback(null, results);
            });
    }
    
};
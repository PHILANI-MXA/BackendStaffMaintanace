const db = require('../db');

module.exports.getAllEmployees = async ()=>{
    const [records] = await db.query("SELECT * FROM PersonT")
    return records;
}

module.exports.getPersonID = async (Person_id)=>{
    const [record] = await db.query("SELECT * FROM PersonT WHERE Person_id = ?", [Person_id] )
    return record;
}

module.exports.deleteEmployee = async (obj, Person_id)=>{
    const [{affectedRows}] = await db.query("DELETE FROM PersonT WHERE Person_id = ?", [Person_id] )
    return affectedRows;
}

module.exports.AddOrEditEmployee = async (obj, Person_id = 0) => {
    const [{affectedRows}] = await db.query("CALL AddOrEditEmployee (?, ?, ?, ?)", [Person_id, obj.Firstname, obj.Lastname, obj.Birthday] )
    return affectedRows;
}



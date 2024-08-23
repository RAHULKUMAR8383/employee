const db = require("../db/database");

//showsingleuser
exports.showSinglEemp = (req, res) => {
    let q = `SELECT * FROM empdata  WHERE id=${req.params.id}`;
    
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result[0]);
    })
}

// show all employee

exports.showallEmp = (req, res) => {
    let q = `select emplist.id,emplist.fname,emplist.lname,rolelist.r_id,rolelist.emprole from emplist  inner join rolelist on emplist.id=rolelist.r_id`;
    
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    })
}   

//show single employee
exports.showsingleemplist = (req, res) => {
    let q = `SELECT * FROM emplist  WHERE id=${req.params.id}`;
    
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result[0]);
    })
}
//delete single employee
exports.deleteEmp = (req, res) => {
    let q = `DELETE FROM emplist WHERE id=${req.params.id}`;
    
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json({data: "todo deleted"});
    })
}

// Update single employee
exports.updateEmp = (req, res) => {
    const {fname,lname}  = req.body;
    let q = `UPDATE emplist SET ? WHERE id=${req.params.id} `;
    
    db.query(q, {fname,lname}, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    })
}
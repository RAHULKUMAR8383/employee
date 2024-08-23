const express= require('express');
const { showSinglEemp, showallEmp, showsingleemplist, deleteEmp, updateEmp } = require('../Controllers/empControllers');
const router= express.Router();


router.get('/show/emp/:id',showSinglEemp);
router.get('/show/emplist',showallEmp);
router.get('/showsingle/emplist/:id',showsingleemplist);
router.delete('/deletesingle/emplist/:id',deleteEmp);
router.put('/updatesingle/emplist/:id',updateEmp);

module.exports=router;
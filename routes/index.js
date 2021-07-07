const express=require('express');
const router=express.Router();
const UserData=require("../Controllers/UserController");
const DateData=require("../Controllers/DateController");



router.get('/',(req,res) => {
    //dataobjs.storedata();
    
   res.send("Data Scrape  APP");

});
router.get('/insertUsers',async(req,res) => {
    let check_insertUser=await UserData.UserController.fetchUsersOnline();
    res.json(check_insertUser.data);
   
});
router.get('/UserfindAll',async(req,res) => {
    
     
    let result=await UserData.UserController.fetchUsersDb();
      res.json(result.data);

});

router.get('/insertDate',async(req,res) => {
   console.log("Data Processing Please Wait...");
   //res.send("Data Processing Please Wait...");
    let check_InsertDate=await DateData.DateController.scrapeDateOnline();
    res.json(check_InsertDate.data);
   
});
router.get('/DatefindAll',async(req,res) => {
    let result=await DateData.DateController.fetchDateDb();
    res.json(result.data);
   
});


module.exports=router;
const DateScrape=require('../scrape/DateScrape');
const DateModel=require('../models/DateModel');

exports.DateController= {

    scrapeDateOnline:async()=>{
       
        const Check_Date=await DateScrape.DateScrape_method.getData();
        if(Check_Date.status)
        {
        
          return {
            status:Check_Date.status,
            data:Check_Date.data
          };
        
        }
        else{
          return {
            status:false,
            data:""
          };
        }
    },

    fetchDateDb:async()=>{
        const UsersData=await DateModel.DateMain_method.FindAll();
        if(UsersData.result_query)
        {
        
          return {
            status:true,
            data:UsersData.resultData
          };
        
        }
        else{
          return {
            status:false,
            data:""
          };
        }
      }
}





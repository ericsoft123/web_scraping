const axios = require('axios');
const UserModel=require('../models/UserModel');
const Service=require('../service/userService');


exports.UserService_method={

    getData:async(pageNum)=>{//
        
        try{
            let response = await axios({
                method: 'get',
                url: `${process.env.API_LINK}/users?page=${pageNum}`,
                json: true
            });

            //
            for(var i=0;i<response.data.data.length;i++)
            { 
    
            UserModel.UserMain_method.InserData(response.data.data[i]);
            
          if(response.data.total!=response.data.data[i].id)
          {
        
            Service.UserService_method.getData(pageNum+=1);
            
          }
          else{
          
          }
                     
          
                }
                return {
                    status:true,
                    data:"data inserted"
                  };
              
            //
          
          } catch(err){
              console.error(err);
          }
       
    },
}
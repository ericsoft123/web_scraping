const UserService=require("../service/UserService");
const UserModel=require("../models/UserModel");


exports.UserController = {

  fetchUsersOnline:async()=>{//Fetch Online 
    //this 1 parameters it means it start per page 1 to calcuate all page because there is no full page Api there of list of users
    
    const Check_User=await UserService.UserService_method.getData(1);
   
    return {
      status:Check_User.status,
      data: Check_User.data
    };
  },
  fetchUsersDb:async()=>{
    const UsersData=await UserModel.UserMain_method.FindAll();
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
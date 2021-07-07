const db_connect=require('../Config/db_config');

const con=db_connect.database_config;

exports.UserMain_method={

    InserData:function(responseData){//insert data on booking then after call update_seat method and then update methods call sent email(all on async ways)
    
        var sql = `INSERT INTO userdata (email,first_name,last_name,avatar) VALUES ('${responseData.email}','${responseData.first_name}','${responseData.last_name}','${responseData.avatar}')`;
           return new Promise(function(resolve, reject) {
            var returnValue = "";
            con.query(sql, function(error, rows) {
                if (error) {
                    returnValue = {
                      
                    status:true,
                    };
                } else {
                    returnValue ={
                       
                        status:false,
                    };
                 
                }
                resolve(returnValue)
            });
        });

        
      
      
       
    },
    FindAll:function(){
   
        var sql =`select * from userdata`;
        return new Promise(function(resolve, reject) {
         var returnValue = "";
         con.query(sql, function(error, rows,result) {
             if (error) {
                returnValue={//return true if found
                    result_query:true,
                    resultData:rows
                  


                };
             } else {
                 if(rows && rows.length ){
                    returnValue={//return true if found
                       result_query:true,
                       resultData:rows
                     


                   };
                 }
                 else{
                    returnValue ={//return false if not found
                        result_query:false,
                        
                    };
                    
                 }
                
              
             }
             resolve(returnValue)
         });
     });
        
       
    },
    

}
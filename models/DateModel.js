const db_connect=require('../Config/db_config');

const con=db_connect.database_config;

exports.DateMain_method={

    InserData:function(responseDataCell0,responseDataCell1,responseDataCell2,responseDataCell3,responseDataCell4,responseDataCell5,responseDataCell6,responseDataCell7){//insert data Data 
    
        var sql =  `INSERT INTO datedata (date,commissions_total,sales_net,leads_net,clicks,epc,impressions,cr) VALUES ('${responseDataCell0}','${responseDataCell1}','${responseDataCell2}','${responseDataCell3}','${responseDataCell4}','${responseDataCell5}','${responseDataCell6}','${responseDataCell7}')`;
           return new Promise(function(resolve, reject) {
            var returnValue = "";
            con.query(sql, function(error, rows) {
                if (error) {
                    returnValue = {
                        /*result_query:false,
                        method_name:update_method,*/
                        status:'inserted',
                    };
                } else {
                    returnValue ={
                       /* result_query:result_value,
                        method_name:update_method,*/
                        status:'inserted',
                    };
                 
                }
                resolve(returnValue)
            });
        });

        
      
      
       
    },
    FindAll:function(){
   
        var sql =`select * from datedata`;
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
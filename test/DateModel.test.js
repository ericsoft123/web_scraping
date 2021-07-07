const DateModel=require("../models/DateModel");

test('Test DataModel InserData  and Return inserted on insertData',async() => {
  
    const p=await DateModel.DateMain_method.InserData("col0","col1","col2","col3","col4","col5","col6","col7");
  expect(p.status).toBe("inserted");
});

test('Test DataModel to Find all Date in DB and Return true on FindAll()',async() => {
    
    const p=await DateModel.DateMain_method.FindAll();
  expect(p.result_query).toBe(true);
});



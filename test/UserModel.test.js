const UserModel=require('../models/UserModel');

test('Test InserData and Return true on insertData',async() => {
    responseData={
        email: 'ericTest@gmail.com',
        first_name: 'eric',
        last_name: 'Kayiranga',
        avatar:'avatar.jpg'

    };
    const p=await UserModel.UserMain_method.InserData(responseData);
  expect(p.status).toBe(true);
});

test('Test Find all Users in DB and Return true on FindAll()',async() => {
    
    const p=await UserModel.UserMain_method.FindAll();
  expect(p.result_query).toBe(true);
});



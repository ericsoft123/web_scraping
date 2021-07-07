

const DateModel=require('../models/DateModel');


const puppeteer = require('puppeteer');

exports.DateScrape_method={

    getData:async function(){//online Data
    

   const browser = await puppeteer.launch({ headless: true }); // default is true
   const page = await browser.newPage();
   await page.goto(`${process.env.SCRAPE_LINK}`);
 
   await page.waitForSelector("body > div.content > form.login-form > div:nth-child(2) > input");//Wait this selector to load before going to input type
   await page.type("body > div.content > form.login-form > div:nth-child(2) > input",`${process.env.SCRAPE_EMAIL}`,{delay:100})//Make this input delay 100 on typing
   await page.type("body > div.content > form.login-form > div:nth-child(3) > input",`${process.env.SCRAPE_PASSWORD}`,{delay:100})
   await page.click("body > div.content > form.login-form > div.form-actions > button")//click login btn
   await page.waitForSelector("body > div.page-wrapper > div.page-header.navbar.navbar-fixed-top > div > div.top-menu.hide-on-mobile > ul > li:nth-child(1) > a > span")//wait this selector to load before page to go that that Link
 
   page.waitForNavigation({ waitUntil: 'networkidle0' }),
   await page.goto(`${process.env.SCRAPE_LINK}/list?type=dates&startDate=2020-10-01&endDate=2020-11-30`,{ waitUntil: 'networkidle0' });//after Login navigate to this link
   await page.waitForSelector("body > div.page-wrapper > div.page-container > div.page-content-wrapper > div > div.page-content-body > div > div > div > div.portlet-title > div.caption.font-dark > span")
 
   await page.select('#DataTables_Table_0_length > label > div > select', '-1')
   await page.waitForSelector("#DataTables_Table_0 > tbody > tr:nth-child(6)")

var myFunc =async function(responseDataCell0,responseDataCell1,responseDataCell2,responseDataCell3,responseDataCell4,responseDataCell5,responseDataCell6,responseDataCell7) { 
    await DateModel.DateMain_method.InserData(responseDataCell0,responseDataCell1,responseDataCell2,responseDataCell3,responseDataCell4,responseDataCell5,responseDataCell6,responseDataCell7);
   
 };
await page.exposeFunction("myFunc", myFunc);
const ScrapeData=await page.evaluate(() => {
    var myTab=document.querySelector("#DataTables_Table_0")

    for (i = 2; i <myTab.rows.length; i++) {
 
        myFunc(myTab.rows.item(i).cells[0].textContent,myTab.rows.item(i).cells[1].textContent,myTab.rows.item(i).cells[2].textContent,myTab.rows.item(i).cells[3].textContent,myTab.rows.item(i).cells[4].textContent,myTab.rows.item(i).cells[5].textContent,myTab.rows.item(i).cells[6].textContent,myTab.rows.item(i).cells[7].textContent);




       
    }
 
    
    return true;
       
        
  });
  console.log("data inserted");
 return {
    status:ScrapeData,
    data:"data inserted"
  };

  
       
    }
}
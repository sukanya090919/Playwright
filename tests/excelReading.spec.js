const {test ,expect} = require('@playwright/test')               
const { chromium } = require('playwright');
const XLSX = require('xlsx');
const path = require('path');

test('Read data from Excel file', async ()=> {
  const filePath = path.resolve(__dirname, "C:/My Documents/Playwright_Demo/testdata.xlsx");

  // Read workbook
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const data = XLSX.utils.sheet_to_json(worksheet);
  console.log('Excel Data:', data);

  // Format the output
  console.log("\nState      Capital    Population");
  console.log("--------------------------------");
  data.forEach(row => {
    console.log(`${row.State.padEnd(10)} ${row.Capital.padEnd(12)} ${row.Population}`);
  });
});




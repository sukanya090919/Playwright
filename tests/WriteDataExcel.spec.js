const {test ,expect} = require('@playwright/test')               
const { chromium } = require('playwright');
const XLSX = require('xlsx');
const fs = require('fs');

test('Read data from Excel file', async ()=> {
const data = [
  { State: 'Bihar', Capital: 'Patna' },
  { State: 'Jharkhand', Capital: 'Ranchi' },
  { State: 'Telangana', Capital: 'Hyderabad' }
];

// Convert JSON data to worksheet format
const worksheet = XLSX.utils.json_to_sheet(data);

// Create a new workbook and append the worksheet
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'States');

// Define the output file path
const filePath = "C:/My Documents/Playwright_Demo/output.xlsx";

// Write the workbook to file
XLSX.writeFile(workbook, filePath);

console.log(`Excel file created successfully at: ${filePath}`);
})
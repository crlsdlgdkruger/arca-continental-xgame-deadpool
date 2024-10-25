const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

class ExcelLoader {
    constructor(fileName) {
        this.filePath = fileName;
    }

    loadSheet(sheetIndex = 4) { //0 en el caso de la hoja 1
        const file = fs.readFileSync(this.filePath);
        const workbook = XLSX.read(file, { type: 'buffer' });
        const sheetName = workbook.SheetNames[sheetIndex];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }
}

// router.get('/inventory-status', (req, res) => {
//     const excelFilePath = path.join(__dirname, './../../data/test.xlsx');
//     const loader = new ExcelLoader(excelFilePath);
//     const data = loader.loadSheet();
//     res.json(data);
// });

module.exports = ExcelLoader;
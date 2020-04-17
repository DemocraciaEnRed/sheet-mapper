const express = require('express')
const { GoogleSpreadsheet } = require('google-spreadsheet')
require('dotenv').config()

const app = express()

app.get('/', async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)
    doc.useApiKey(process.env.GOOGLE_API_KEY)
    await doc.loadInfo() // loads document properties and worksheets
    await doc.sheetsByIndex[0].loadHeaderRow()
    const theRows = await doc.sheetsByIndex[0].getRows()
    const stuff = []
    theRows.forEach((row) => {
      const theRow = {}
      doc.sheetsByIndex[0].headerValues.forEach((header) => {
        theRow[header] = row[header]
      })
      stuff.push(theRow)
    })
    res.json({ title: doc.title, headers: doc.sheetsByIndex[0].headerValues, rows: stuff })
  } catch (err) {
    res.status(500).json({
      message: 'Error :('
    })
  }
})

module.exports = {
  path: '/api/sheets/',
  handler: app
}

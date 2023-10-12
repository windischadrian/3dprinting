const axios = require('axios');
const printers = require('./printers.js')

Object.keys(printers).forEach(printer => {
    getKlippyStatus(printer)
})

function getKlippyStatus(printer) {
    printerURL = printers[printer]
    axios.get(printerURL + '/machine/proc_stats')
        .then(res => console.log(res.data))
        .catch(err => console.log('Unable to fetch data for ' + printerURL))
}
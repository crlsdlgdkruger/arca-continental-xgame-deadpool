const { Router } = require('express');
const router = Router();
const webpush = require('../webpush');
const path = require('path');
const ExcelLoader = require('./../public/assets/js/ExcelLoader');
let pushSubscription;

router.post('/subscription', async (req, res) => {
    pushSubscription = req.body;
    console.log("Push subscription");
    res.status(200).json();
})

router.post('/send-notification', async (req, res) => {
    // const {message} = req.body;
    const payload = JSON.stringify({
        title: 'Alerta de Inventario bajo',
        message: 'El inventario se encuentra por debajo del umbral',
    });
    try {
        await webpush.sendNotification(pushSubscription, payload);
    } catch (error) {
        console.error(error);
    }
})

router.get('/inventory-status', (req, res) => {
    console.log('Checking inventory...');
    const excelFilePath = path.join(__dirname, './../../data/BD_ARCACONTINENTAL.xlsx');
    const loader = new ExcelLoader(excelFilePath);
    const data = loader.loadSheet();
    res.status(200).json(data);
});

module.exports = router;


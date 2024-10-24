const { Router } = require('express');
const router = Router();
const webpush = require('../webpush');
let pushSubscription;

router.post('/subscription', async (req, res) => {
    pushSubscription = req.body;
    console.log("Push subscription");
    res.status(200).json();
    const payload = JSON.stringify({
        title: 'Alerta de Inventario bajo',
        message: 'El inventario se encuentra por debajo del umbral',
        // link: '/http://localhost:5500/produccion.html',
    });
    try {
        await webpush.sendNotification(pushSubscription, payload);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;


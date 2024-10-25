const PUBLIC_VAPID_KEY = 'BF6ZRL007x4RJ71mTKudXIsI0-xJPbEEiTdwnAJLl0Hv7XBurI-6-3koWYn9ke2g8WLV50lw6Hr1iGHYB0D-d7g';

const subscription = async () => {

    try {

        //service worker
        console.log("Registering a Service worker");
        const register = await navigator.serviceWorker.register("/worker.js", {
            scope: "/"
        });
        console.log("new Service worker");
        const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
        });
        console.log(subscription);
        await fetch('/subscription', {
            method: "POST",
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("Subscribed!");
    } catch (error) {
        console.error(error);
    }
};

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const checkLowInventory = (data = null) => {
    console.log('Checking inventory...');
    if (data) {
        console.log('Dias restantes de inventario', data[4].__EMPTY);//4 por donde se encuentran los dias restantes de inventario
        if (data[4].__EMPTY < 6) { //Enviamos notificacion si los dias restantes de inventario son menores a 6
            sendNotification();
        }
    }
}

const sendNotification = () => {
    fetch('/send-notification', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

subscription();
setInterval(async () => {
    try {
        const response = await fetch('/inventory-status');
        const data = await response.json();
        checkLowInventory(data)
    } catch (error) {
        console.error(error);
    }
}, 60000);//comprueba cada minuto
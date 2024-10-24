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

subscription();
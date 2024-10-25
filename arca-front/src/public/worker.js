console.log('service worker');

self.addEventListener('push', (event) => {
    try {
        const data = event.data.json();
        console.log(data);
        console.log('Push received.');
        self.registration.showNotification(data.title, {
            body: data.message,
            icon: '/assets/icons/powerbi_icon.png',
            image: '/assets/icons/powerbi_icon.png',
        });
    } catch (error) {
        console.error(error);
    }
});
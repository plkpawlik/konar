if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/konar/sw.js', { scope: '/konar/' })})}
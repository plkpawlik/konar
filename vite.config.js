import { defineConfig } from 'vite'
import { resolve } from 'path';

// plugins
import React from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


// webmanifest
const webmanifest = {
    name: 'Koło Naukowe Robotyków PWR KONAR',
    short_name: 'KONAR',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    orientation: 'portrait',
    display: 'standalone',
    icons: [{
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
    }, {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
    }]
};


// config
export default defineConfig({

    // base url ( production 'konar' due to some CORS isues )
    base: '/',


    // used plugins
    plugins: [

        // react plugin
        React(),

        // PWA config
        VitePWA({
            
            // webmanifest
            webmanifest: webmanifest,
        }),
    ],


    // compiler path options
    resolve: {
        alias: {

            // src components folder
            '@': resolve(__dirname, './src/'),
        },
    },

    // wsl dev server polling
    server: {
        watch: {
            usePolling: true,
        }
    },
});
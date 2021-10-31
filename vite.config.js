import { defineConfig } from 'vite'
import { resolve } from 'path';


// plugins
import React from '@vitejs/plugin-react'
import { VitePWA  } from 'vite-plugin-pwa';


// config
export default defineConfig({

    // base url ( production 'konar' due to some CORS isues )
    base: '/konar/',


    // used plugins
    plugins: [
        React(),
        VitePWA({}),
    ],


    // compiler path options
    resolve: {
        alias: {

            // src components folder
            '@': resolve( __dirname, './src/' ),
        },
    },

    // wsl dev server polling
    server: {
        watch: {
            usePolling: true,
        }
    },
});
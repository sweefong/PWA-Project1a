window.onload =() => {   /*default function pointing to the bracket */
    'use strict';
    
    if ('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js');
    }
    
}
import { Fancybox } from '@fancyapps/ui'
Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
    Images: {
        Panzoom: {
            maxScale: 2,
        },
    },
})
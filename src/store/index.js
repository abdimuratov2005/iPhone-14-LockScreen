import { createStore } from 'vuex'
let options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
}

export default createStore({
    state: () => ({
        dates: new Date(2023, 1, 23).toLocaleString('en-US', options),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        figmaTitle: 'FIGMA',
        figmaLogo: './img/figma-logo.png',
        flashlight: './img/Flashlight.svg',
        swipeToTop: 'swipe up to open',
        camera: './img/Camera.svg',
        Dismiss: 'Dismiss',
        close: './img/Close.svg',
        when: 'now',
        contentTitle: 'Notification Title',
        contentText: 'Notification text would be placed right here. This is where notification text would be placed.',
        rightSide: [
            { id: 1, icon: './img/Mobile Signal.svg' },
            { id: 2, icon: './img/Wifi.svg' },
            { id: 3, icon: './img/Battery.svg' }
        ],
        notch: './img/Notch.svg',
        notificationVisible: false,
    }),
    getters: {},
    mutations: {
        setVisible(state){
            state.notificationVisible = !state.notificationVisible
        }
    },
    actions: {},
})
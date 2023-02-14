<template>
    <div id="notification" class="notification">
        <div class="notification__container">
            <div class="notification__close">
                <img :src="close" alt="Close">
            </div>
            <div class="notification__figma">
                <FigmaLogo />
                <div
                    class="notification__figma-when"
                    :class="{active : notificationVisible}"
                >
                    {{ when }}
                </div>
            </div>
            <div class="notification__content">
                <div class="notification__content-title">
                    {{ contentTitle }}
                </div>
                <div class="notification__content-text">
                    {{ contentText }}
                </div>
            </div>
            <div class="notification__dismiss">
                {{ Dismiss }}
            </div>
        </div>
    </div>
</template>

<script>
    import FigmaLogo from './FigmaLogo.vue';

    export default {
        components:{
            FigmaLogo
        },
        data(){
            return{
                Dismiss: 'Dismiss',
                close: './img/Close.svg',
                when: 'now',
                contentTitle: 'Notification Title',
                contentText: 'Notification text would be placed right here. This is where notification text would be placed.'
            }
        }
    }
</script>
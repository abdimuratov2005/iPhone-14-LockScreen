<template>
    <div id="notification" class="notification">
        <div class="notification__container">
            <div class="notification__close">
                <img :src="close" alt="Close">
            </div>
            <div class="notification__figma">
                <FigmaLogo />
                <div class="notification__figma-when" :class="{ active: notificationVisible }">
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
import { mapState } from 'vuex';
import FigmaLogo from './FigmaLogo.vue';

export default {
    components: {
        FigmaLogo
    },
    computed: {
        ...mapState({
            Dismiss: state => state.Dismiss,
            close: state => state.close,
            when: state => state.when,
            contentTitle: state => state.contentTitle,
            contentText: state => state.contentText,
        })
    }
}
</script>
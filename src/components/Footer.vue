<template>
    <footer id="footer" class="footer">
        <div class="footer__container">
            <img :src="flashlight" alt="Flashlight">
            <div class="swipeToTop" :style="moveToTop">{{ swipeToTop }}
            </div>
            <img :src="camera" alt="Flashlight">
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            flashlight: state => state.flashlight,
            swipeToTop: state => state.swipeToTop,
            camera: state => state.camera,
        })
    }
}
</script>
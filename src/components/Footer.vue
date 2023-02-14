<template>
    <footer id="footer" class="footer">
        <div class="footer__container">
            <img :src="flashlight" alt="Flashlight">
            <div 
                class="swipeToTop" 
                :id="swipeToTop"
                :style="moveToTop"
            >{{ swipeToTop }}
            </div>
            <img :src="camera" alt="Flashlight">
        </div>
    </footer>
</template>

<script>
    export default {
        data(){
            return{
                flashlight: './img/Flashlight.svg',
                swipeToTop: 'swipe up to open',
                camera: './img/Camera.svg',
            }
        },
        methods:{
        
        }
    }
</script>
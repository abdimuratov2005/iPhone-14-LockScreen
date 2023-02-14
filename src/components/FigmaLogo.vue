<template>
    <div class="figma-logo">
        <img :src="figmaLogo" alt="figmaLogo">
        <div class="figma-title">{{ figmaTitle }}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                figmaTitle: 'FIGMA',
                figmaLogo: './img/figma-logo.png',
            }
        }
    }
</script>
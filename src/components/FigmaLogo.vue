<template>
    <div class="figma-logo">
        <img :src="figmaLogo" alt="figmaLogo">
        <div class="figma-title">{{ figmaTitle }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState({
                figmaTitle: state => state.figmaTitle,
                figmaLogo: state => state.figmaLogo,
            })
        }
    }
</script>
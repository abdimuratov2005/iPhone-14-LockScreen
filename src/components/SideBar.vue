<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar__container">
            <Time />
            <div class="sidebar__notch">
                <img :src="notch" alt="Notch">
            </div>
            <nav class="sidebar__nav nav">
                <ul class="nav__list">
                    <li v-for="item in rightSide" :key="item.id" class="nav__item">
                        <img :src="item.icon" alt="icon">
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
import Time from './Time.vue';

    export default {
        components:{
            Time
        },
        computed: {
            ...mapState({
                rightSide: state => state.rightSide,
                notch: state => state.notch,
            })
        }
    }
</script>
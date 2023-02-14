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
    import Time from './Time.vue';

    export default {
        components:{
            Time
        },
        data(){
            return{
                rightSide: [
                    {id: 1, icon: './img/Mobile Signal.svg'},
                    {id: 2, icon: './img/Wifi.svg'},
                    {id: 3, icon: './img/Battery.svg'}
                ],
                notch: './img/Notch.svg'
            }
        },
    }
</script>
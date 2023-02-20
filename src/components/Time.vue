<template>
    <div :ref="minutes" class="sidebar__time">
        {{ hours }}:{{ minutes}}
    </div>
</template>

<script>
    export default {
        data() {
            return{
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
            }
        },
        methods:{
            
        }
    }
</script>
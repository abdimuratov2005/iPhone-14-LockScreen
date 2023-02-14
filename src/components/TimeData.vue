<template>
    <div id="timeData" class="timeData">
        <div class="timeData__container">
            <div class="timeData__lock">
                <img src="@/img/Lock.svg" alt="Lock">
            </div>
            <Time class="time"/>
            <Date />
        </div>
    </div>
</template>

<script>
    import Time from './Time.vue';
    import Date from './Date.vue';
    export default {
        components:{
            Time,
            Date
        },
    }
</script>
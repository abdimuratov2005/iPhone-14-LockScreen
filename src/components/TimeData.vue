<template>
    <div id="timeData" class="timeData">
        <div class="timeData__container">
            <div class="timeData__lock">
                <img src="@/img/Lock.svg" alt="Lock">
            </div>
            <Time class="time" />
            <Date />
        </div>
    </div>
</template>

<script setup>
import Time from './Time.vue';
import Date from './Date.vue';
</script>
<template>
    <div :ref="minutes" class="sidebar__time">
        {{ hours }}:{{ minutes }}
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            hours: state => state.hours,
            minutes: state => state.minutes,
        })
    }
}
</script>
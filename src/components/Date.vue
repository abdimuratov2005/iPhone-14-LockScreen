<template>
    <div class="date">
        {{ dates }}
    </div>
</template>

<script>
    let options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    }
    export default {
        data(){
            return{
                dates: new Date(2023,1,23).toLocaleString('en-US', options),
            }
        }
    }
</script>

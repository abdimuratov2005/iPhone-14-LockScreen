<template>
    <main
        class="lockscreen"
        ondrag="return false" 
        ondragdrop="return false" 
        ondragstart="return false"
    >
        <div class="lockscreen__render">
            <div
                class="lockscreen__container"
                :class="{active : notificationVisible}"
            >
                <SideBar
                    :class="{active : notificationVisible}"
                />
                <TimeData
                    :class="{active : notificationVisible}"
                />
                <Notification
                    :class="{active : notificationVisible}"
                    @click="notificationVisible =! notificationVisible"
                />
                <Footer
                    :class="{active : notificationVisible}"
                />
            </div>
        </div>
    </main>
</template>

<script>
    import SideBar from "@/components/SideBar.vue";
    import TimeData from "@/components/TimeData.vue";
    import Notification from "@/components/Notification.vue";
    import Footer from "@/components/Footer.vue";

    export default {
        components: {
            SideBar,
            TimeData,
            Notification,
            Footer
        },
        data(){
            return{
                notificationVisible: false,
            }
        },
    }
</script>
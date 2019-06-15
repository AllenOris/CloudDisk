<template>
    <div class="index">
        <HeadNav></HeadNav>
<!--        <LeftMenu v-if="Headnav.active()*1==1"></LeftMenu>-->
<!--        <LeftMenu2 v-else></LeftMenu2>-->
        <div class="rightContainer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeadNav from "../components/HeadNav";
    // import LeftMenu from "../components/LeftMenu";
    // import LeftMenu2 from "../components/LeftMenu2";

    export default {
        name: "index",
        components: {
            HeadNav,
            // LeftMenu,
            // LeftMenu2
        },
        created() {
            // console.log(HeadNav);
        }
    };
</script>
<style scoped>
    .index {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .rightContainer {
        position: relative;
        top: 0;
        left: 180px;
        width: calc(100% - 180px);
        height: calc(100% - 71px);
        overflow: auto;
    }
</style>


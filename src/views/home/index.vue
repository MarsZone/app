<template>
    <div>
        <router-view></router-view>
        <tabBar></tabBar>
    </div>
</template>
<script>
import homeView from './homeView'
import tabBar from './components/tabBar'
export default {
    name:'index',
    components:{
        homeView,
        tabBar
    }
}
</script>

<style lang="less" scoped>

</style>
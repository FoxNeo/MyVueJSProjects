<template>
    <div class="container">
        <h1>User information</h1>

        <router-link :to="{ name:'usuarios', params:{id : item} }" 
            v-for="(item,index) of userArray" :key="index">
            <button>{{ item }}</button>
        </router-link>
        <Usuario />
    </div>
</template>
<script>
import User from '@/components/User.vue';
export default {
    components:{
        User
    },
    data(){
        return{
            userArray:['Lola','Rita','Yakko','Dot']
        }
    }    
}
</script>


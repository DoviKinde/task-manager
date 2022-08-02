<template>
<div class="lg:mx-[100px] md:mx-[40px] mx-[20px] "> 
    <div class="text-left text-[6px] sm:text-[12px]">
        <div>
            <div >
                <div class="flex pl-2 sm:pl-4 border bg-[#C61E59] rounded-md mb-[12px] py-[8px] text-white tracking-[3px] sm:tracking-[4px]">
                    <div class="w-[200px]">.nom</div>
                    <div class="w-[200px]">.prenom</div>
                    <div class="w-[300px]">.identifiant</div>
                    <div class="w-[200px]">.rôle</div>
                    <div class="w-[80px]"></div>
                    <div  class="w-[80px]"></div>
                </div>
            </div>
        </div>
        <div>
            <div :key="user.id" v-for="user in userall" class=" rounded-md mb-[10px] flex pl-2 sm:pl-4 shadow-md py-[6px] sm:py-[10px]">              
                <UserUnit @delete-user="$emit('delete-user', user.id)" @update-user="$emit('update-user', user.id)" :user="user"/>
            </div> 
        </div>
    </div>
    </div>
</template>

<script>
import UserUnit from './UserUnit'

export default {
    name: 'UserAll',
    props: {
        userall: Array
    },
    components: {
        UserUnit,
    },
    emits: ['delete-user'],
}
</script>

<style scoped>
</style>
<template>
    <UserHeader/>
    <div class="lg:mx-[100px] md:mx-[40px] mx-[20px]">
      <div class="my-[10px] bg-[#E3EEF4] h-[100px] text-[16px] text-[#135776] flex items-center "><div class="mx-[auto]">Profil</div></div>
    </div>
    <UserProfil/>
</template>

<script>
import UserProfil from '@/components/UserProfil'
import UserHeader from '@/components/UserHeader'

export default {
    name: 'ProFil',
    components: {
        UserProfil,
        UserHeader
    } 
}
</script>


<template>
    <UserHeader/>
    <div class="lg:mx-[100px] md:mx-[40px] mx-[20px]">
        <WorkSpace/>
    </div>
</template>


<script>

import UserHeader from '@/components/UserHeader'
import WorkSpace from '@/components/WorkSpace'




export default {
  name: 'UseR',
  components: {
    UserHeader,
    WorkSpace
  }
}
</script>
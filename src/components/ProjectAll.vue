<template>
    <div class="lg:mx-[100px] md:mx-[40px] mx-[20px]"> 
    <div class="text-left text-[6px] sm:text-[12px]">
        <div>
            <div class="flex pl-2 sm:pl-4 bg-[#C61E59] tracking-[3px] sm:tracking-[4px] rounded-md mb-[12px] py-[8px] text-white ">
                <div class="w-[180px]">.début</div>
                <div class="w-[180px]">.fin</div>
                <div class="w-[350px] sm:w-[350px]">.nom</div>
                <div class="w-[250px]">.responsable</div>
                <div class="w-[250px]">.backup</div>
                <div class="w-[60px] pr-[10px]"></div>
                <div  class="w-[60px]"></div>
            </div>
        </div>
        <div>
            <div :key="project.id" v-for="project in projectall" class="rounded-md mb-[10px] flex pl-2 sm:pl-4 shadow-md py-[6px] sm:py-[10px] pr-2 sm:pr-0" >
                <ProjectUnit @delete-project="$emit('delete-project', project.id)" @update-project="$emit('update-project', project.id)" :project="project" />
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import ProjectUnit from './ProjectUnit'

export default {
    name: 'ProjectAll',
    props: {
        projectall: Array
    },
    components: {
        ProjectUnit
    }
}
</script>
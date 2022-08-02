<template>
<div class="lg:mx-[100px] md:mx-[40px] mx-[20px]"> 
    <div class=" text-left text-[6px] sm:text-[12px]">
        <div>
            <div>
                <div class="flex pl-2 sm:pl-4 bg-[#C61E59] tracking-[2px] sm:tracking-[4px] rounded-md mb-[12px] py-[8px] text-white">
                    <div class="w-[140px] sm:w-[100px]">.date</div>
                    <div class="w-[600px] sm:w-[600px]">.description</div>
                    <div class="w-[100px] sm:w-[100px] pr-[10px]">.statut</div>
                    <div class="w-[150px] sm:w-[150px] pr-[20px]">.responsable</div>
                    <div class="w-[40px] sm:w-[40px]"></div>
                    <div  class="w-[40px] sm:w-[40px]"></div>
                </div>
            </div>
        </div>
        <div>
            <div :key="task.id" v-for="task in taskall" class=" rounded-md mb-[10px] flex pl-2 sm:pl-4 shadow-md py-[6px] sm:py-[10px]">
                <TaskUnit @delete-task="$emit('delete-task', task.id)" @update-task="$emit('update-task', task.id)" :task="task" />
            </div>
        </div>
    </div>
</div>

</template>

<script>
import TaskUnit from './TaskUnit'

export default {
    name: 'TaskAll',
    props: {
        taskall: Array
    },
    components: {
        TaskUnit,
    },
}

</script>
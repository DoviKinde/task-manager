<template >
    
    <td class="w-[100px] pr-[10px] sm:pr-[20px] ">{{ task.date }}</td>
    <td class="w-[600px] pr-[10px] sm:pr-[20px]">{{ task.description }}</td>
    <td :class="[task.encours ? 'encours' : 'notencours', 'encours']" class="w-[100px] pr-[10px] sm:pr-[20px]"></td>
    <td class="w-[150px] pr-[10px] sm:pr-[20px]">{{ task.responsable }}</td>
    <td class="w-[40px] pr-0 sm:pr-[20px]" @click="onUpdate(task.id)"><svg class="h-3 pr-1 sm:h-4 sm:pl-0 cursor-pointer mx-[auto]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></td>
    <td class="w-[40px] pr-[10px] sm:pr-[20px]" @click="onDelete(task.id)"><svg class="h-3 pl-3 sm:h-4 sm:pl-0 cursor-pointer mx-[auto]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></td>

</template>


<script>

export default {
    name: 'TaskUnit',
    props: {
        task: Object,

    },
    methods: {
        onDelete(id){
            this.$emit('delete-task', id)
        },
        onUpdate(id){
            this.$emit('update-task', id)
        },
        display(){
            document.getElementById('popup-modal').style.display = "block" 
        },
        hide(){
            document.getElementById('popup-modal').style.display = "none"
      
        }
    }
}

</script>

<style scoped>


    .taskEnded::after{
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 6px;
        padding-bottom: 6px;
        border: solid gray 0.5px; 
        border-radius: 2px;
        color: gray;
        margin-bottom:20px ;
        content: 'Terminé';
        
    }


    #popup-modal{
        display: none;
    }

    .encours::after{
        content: "En cours";
        color: red;
        padding-right: 10px;
    }

    .notencours::after{
        content: "Terminé";
        color: rgb(44,62,80);
        padding-right: 10px;

    }


</style>






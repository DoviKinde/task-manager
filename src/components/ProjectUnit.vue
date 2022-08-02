<template >

    <div class="w-[180px] pr-[5px]">{{ project.debut }}</div>
    <div class="w-[180px] pr-[5px]">{{ project.fin }}</div>
    <div class="w-[350px] pr-[5px] ">{{ project.nom }}</div>
    <div class="w-[250px] pr-[5px] ">{{ project.responsable }}</div>
    <div class="w-[250px] ">{{ project.backup }}</div>
    <div class="w-[60px]" @click="onUpdate(project.id)"><svg class="h-3 sm:h-4 sm:w-4 cursor-pointer mx-[auto]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></div>
    <div class="w-[60px]" @click="onDelete(project.id)"><svg class="h-3 pl-3 sm:h-4 sm:pl-0 cursor-pointer mx-[auto]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></div>

</template>


<script>

export default {
    name: 'ProjectUnit',
    props: {
        project: Object,

    },
    methods: {
        onDelete(id){
            this.$emit('delete-project', id)
        },
        onUpdate(id){
            this.$emit('update-project', id)
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


    .projectEnded::after{
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
    }

    .notencours::after{
        content: "Terminé";
        color: rgb(44,62,80);
    }


</style>






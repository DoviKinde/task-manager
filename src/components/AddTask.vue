<template>

    <div class="flex mx-auto sm:w-[420px] pt-[5px] w-full justify-end">
        <button @click="toggleAddTask"><svg class="mr-1 sm:mr-0 h-5 w-5 sm:h-8 sm:w-8 text-black pl-[1px]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg></button>
    </div>

    <div class="mb-[40px]">Nouvelle tâche</div>

    <form @submit="onSubmit" class="text-[11px] sm:text-[12px] ">
        <div class="w-[250px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Date</div>
            <input v-model="date" type="date" name="date" class="w-[250px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Responsable</div>
            <input v-model="responsable" type="text" name="responsable" class="w-[250px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] sm:w-[400px] mx-auto mt-[4px] mb-[20px]">
            <div class="text-left mb-[8px]">Statut</div>
            <div class="flex justify-between">
                <div>
                    <input v-model="encours" type="radio" name="encours" value="encours" class="mx-[10px]" required>
                    <label for="encours">En cours</label>
                </div>
                <div>
                    <input type="radio" name="encours" value="notencours" id="notencours" class="mx-[10px]" >
                    <label for="encours">Terminé</label>
                </div>
            </div>
        </div>
        <div class="w-[250px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Description</div>
            <textarea v-model="description" name="description" rows="8" cols="50" class="w-[250px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" required></textarea>
        </div>
        <input type="submit" value="Enregistrer" class="border px-[12px] py-[3px] rounded-sm mb-[20px] bg-blue-600 text-white cursor-pointer hover:bg-blue-500"/>
    </form>
</template>

<script>

export default {
    name: 'AddTask',
    data() {
        return {
            date:'',
            description: '',
            responsable: '',
            encours: false,

        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()
            
            const newTask = {
                id: Math.floor(Math.random() * 100000),
                date: this.date,
                description: this.description,
                responsable: this.responsable,
                encours: this.encours
            }
            
            this.$emit('add-task', newTask),

            this.date = '',
            this.description = '',
            this.responsable = '',
            this.encours = false
        },
        toggleAddTask(){
            this.$emit('toggle-add-task')
        }
    }
}

</script>

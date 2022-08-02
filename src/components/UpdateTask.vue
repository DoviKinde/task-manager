<template>
    <h2>Mettre à jour</h2>
    <form @submit="onSubmit" class="text-[12px] ">
        <div class="w-[400px] mx-auto my-[10px]">
            <div class="text-left">Date</div>
            <input v-model="date" type="date" name="date" class="w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[400px] mx-auto my-[10px]">
            <div class="text-left">Responsable</div>
            <input v-model="responsable" type="text" name="responsable" class="w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[400px] mx-auto mt-[4px] mb-[20px]">
            <div class="text-left mb-[8px]">Statut</div>
            <div class="flex justify-between">
                <div>
                    <input v-model="encours" type="radio" name="encours" value="encours" class="mx-[10px]" required>
                    <label for="encours">En cours</label>
                </div>
                <div>
                    <input type="radio" name="encours" value="notencours" id="notencours" class="mx-[10px]" required>
                    <label for="encours">Terminé</label>
                </div>
            </div>
        </div>
        <div class="w-[400px] mx-auto my-[10px]">
            <div class="text-left">Description</div>
            <textarea v-model="description" name="description" rows="8" cols="50" class="w-[400px] border rounded-sm px-[5px] py-[3px]" required></textarea>
        </div>
        <input type="submit" value="Modifier" class="border px-[12px] py-[3px] rounded-sm mb-[20px] bg-blue-600 text-white cursor-pointer hover:bg-blue-500"/>
        <button class="border ml-[20px] px-[12px] py-[3px] rounded-sm hover:text-red-500 hover:border-red-500" @click="onCancel()">Annuler</button>
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
            this.encours = false,
            document.getElementById('notencours').checked,

            this.$emit('hide-after-update')

        },
        onCancel(){
            this.$emit('cancel-update-task')
        }
    }
}

</script>

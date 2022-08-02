<template>

    <div class="flex mx-auto w-full pt-[5px] justify-end">
        <button @click="toggleAddProject" ><svg class=" h-4 w-4 sm:h-8 sm:w-8 text-black pl-[15px]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
    </div>
    <div class="mb-[40px]">Nouveau projet</div>

    <form @submit="onSubmit" class="text-[11px] sm:text-[12px]">
        <div class="w-[300px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Nom</div>
            <input v-model="nom" type="text" name="nom" class="w-[300px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[300px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Début</div>
            <input v-model="debut" type="date" name="debut" class="w-[300px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[300px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Fin</div>
            <input v-model="fin" type="date" name="fin" class="w-[300px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[300px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Responsable</div>
            <input v-model="responsable" type="text" name="responsable" class="w-[300px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[300px] sm:w-[400px] mx-auto my-[10px]">
            <div class="text-left">Backup</div>
            <input v-model="backup" type="text" name="backup" class="w-[300px] sm:w-[400px] border rounded-sm px-[5px] py-[3px]" />
        </div>
        <input type="submit" value="Enregistrer" class="border px-[12px] py-[3px] rounded-sm mb-[20px] mt-[20px] bg-blue-600 text-white cursor-pointer hover:bg-blue-500 "/>
    </form>
</template>

<script>

export default {
    name: 'AddProject',
    data() {
        return {
            debut:'',
            fin:'',
            nom: '',
            responsable: '',
            backup:'',

        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()
            
            const newProject = {
                id: Math.floor(Math.random() * 100000),
                debut: this.debut,
                fin: this.fin,
                nom: this.nom,
                responsable: this.responsable,
                backup: this.backup
            }
            
            this.$emit('add-project', newProject),

            this.debut = '',
            this.fin = '',
            this.nom = '',
            this.responsable = '',
            this.backup
        },
        toggleAddProject(){
            this.$emit('toggle-add-project')
        }
    }
}

</script>

<template>
    <h2>Mettre à jour </h2>
    <form @submit="onSubmit" class="text-[12px]">
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Nom</div>
            <input v-model="nom" type="text" name="nom" class="w-[250px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Début</div>
            <input v-model="debut" type="date" name="debut" class="w-[250px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Fin</div>
            <input v-model="fin" type="date" name="fin" class="w-[250px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Responsable</div>
            <input v-model="responsable" type="text" name="responsable" class="w-[250px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Backup</div>
            <input v-model="backup" type="text" name="backup" class="w-[250px] border rounded-sm px-[5px] py-[3px]" />
        </div>
        <input type="submit" value="Modifier" class="px-[12px] py-[3px] rounded-sm mb-[20px] mt-[20px] bg-blue-700 text-white cursor-pointer hover:bg-blue-500"/>
        <button class="border ml-[20px] px-[12px] py-[3px] rounded-sm hover:text-red-500 hover:border-red-500" @click="onCancel">Annuler</button>
    </form>
</template>

<script>


export default {
    name: 'AddProject',
    props: {
        project: Object
    },
    data() {
        return {
            debut: '',
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
            this.backup,

            this.$emit('hide-after-update')

        },
        onCancel(){
            this.$emit('cancel-update-project')
        }, 
    }
    
}

</script>

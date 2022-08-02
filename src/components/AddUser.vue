<template>
    
    <button @click="toggleAddUser" class="flex mx-auto w-[280px] pt-[3px] justify-end" ><svg class="h-8 w-8 text-black pl-[15px]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg></button>
    <div class="mb-[40px]">Nouvel utilisateur</div>

    <form @submit="onSubmit" class="text-[12px] text-black">
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Nom</div>
            <input v-model="nom" type="text" name="nom" class="w-[250px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Prénom</div>
            <input v-model="prenom" type="text" name="prenom" class="w-[250px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] mx-auto my-[10px]">
            <div class="text-left">Identifiant</div>
            <input v-model="idConnexion" type="email" name="idConnexion" class="w-[250px] border rounded-sm px-[5px] py-[3px]" required/>
        </div>
        <div class="w-[250px] mx-auto mt-[4px] mb-[20px]" required>
            <div class="text-left mb-[8px]">Rôle</div>
            <div class="flex justify-between">
                <div>
                    <input v-model="admin" type="radio" name="admin" value="admin" class="mx-[10px]" required>
                    <label for="admin">Administrateur</label>
                </div>
                <div>
                    <input type="radio" name="admin" value="notAdmin" class="mx-[10px]" id="notAdmin">
                    <label for="admin">Utilisateur</label>
                </div>
            </div>
        </div>
        <input type="submit" value="Enregistrer" class="border px-[12px] py-[3px] mt-[40px] rounded-sm mb-[20px] bg-blue-600 text-white cursor-pointer hover:bg-blue-500"/>
    </form>
</template>

<script>

export default {
    name: 'AddUser',
    data() {
        return {
            nom:'',
            prenom: '',
            idConnexion: '',
            admin: false,

        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()
            
            const newUser = {
                id: Math.floor(Math.random() * 100000),
                nom: this.nom,
                prenom: this.prenom,
                idConnexion: this.idConnexion,
                admin: this.admin
            }
            
            this.$emit('add-user', newUser),

            this.nom = '',
            this.prenom = '',
            this.idConnexion = '',
            this.admin = false
        },
        toggleAddUser(){
            this.$emit('toggle-add-user')
        }
    }
}

</script>

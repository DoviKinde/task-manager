<template>
    <h2></h2>
    <form @submit="onSubmit" class="text-[12px]">
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
        <div class="w-[250px] mx-auto mt-[4px] mb-[20px]">
            <div class="text-left mb-[8px]">Rôle</div>
            <div class="flex justify-between">
                <div>
                    <input v-model="admin" type="radio" name="admin" value="admin" class="mx-[10px]" required>
                    <label for="admin">Administrateur</label>
                </div>
                <div>
                    <input type="radio" name="admin" value="notAdmin" class="mx-[10px]" required>
                    <label for="admin">Utilisateur</label>
                </div>
            </div>
        </div>
        <input type="submit" value="Modifier" class="border px-[12px] py-[3px] rounded-sm mb-[20px] bg-blue-600 text-white cursor-pointer hover:bg-blue-500"/>
        <button class="border ml-[20px] px-[12px] py-[3px] rounded-sm hover:text-red-500 hover:border-red-500" @click="onCancel()">Annuler</button>
    </form>

</template>

<script>


export default {
    name: 'UpdateUser',
   
    methods: {
        onSubmit(e, user){
            e.preventDefault()
            
            const updatedUser = {
                id: user.id,
                nom: this.nom,
                prenom: this.prenom,
                idConnexion: this.idConnexion,
                admin: this.admin
            }
            
            this.$emit('update-user', updatedUser),

            this.$emit('hide-after-update')

        },
        onCancel(){
            this.$emit('cancel-update-user')
        }
    }
}

</script>

<template>
     
    <img src="../assets/logo.png" alt="" class="h-[100px] mx-auto"/> 

    <div class="font-semibold mt-[20px] mb-[10px]">{{prenom}} {{nom}}</div>
    <div class="text-[14px]">{{ idConnexion }}</div>

    <div class="my-[60px] border rounded-md shadow-md py-[20px] w-[250px] m-auto">
        <h3 class="mb-[40px] text-[14px]">Changer de mot de passe</h3>
        <form class="text-[14px]">
            <div class="mb-[20px]">
                <div class="text-[11px]">Nouveau mot de passe</div>
                <input name="newPassword" type="password" class="border rounded-sm w-[220px] text-[14px] mb-[20px]"/>
                <div class="text-[11px]">Confirmer le nouveau mot de passe</div>
                <input name="confirmNewPassword" type="password" class="border rounded-sm w-[220px] text-[14px]"/>
            </div>
            <button class="border px-[12px] py-[3px] rounded-sm text-[12px] hover:bg-[#41B883] hover:text-white" type="submit">Enregistrer</button>

        </form>
    </div>
    
</template>

<script>



export default{
    name: 'UserProfil',
    props: {
        prenom: String,
        nom: String,
        idConnexion: String
   
    }

}
</script>
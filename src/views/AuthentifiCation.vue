<template>
<div class="flex items-center h-screen">
        <div class="border shadow-md w-[250px] mx-auto pb-[20px] pt-[8px]">
        <h2 class="font-semibold text-[20px]">Connexion</h2>
        <form action="post"  >
                <div class="my-[20px] ">
                        <div class="text-[11px]">Identifiant</div>
                        <input name="mail" type="email" placeholder="prenom.nom@sfp-groupe.com" class="border w-[220px] h-[30px] text-[12px] px-[10px] rounded-sm"/>
                </div>
                <div class="mb-[40px]">
                        <div class="text-[11px]">Mot de Passe</div>
                        <input name="password" type="password" class="border rounded-sm w-[220px] h-[30px] text-[12px] px-[10px]"/>

                        <div class="text-[12px] mt-[10px]"><a href="#">Mot de passe oublié ?</a></div>
                </div>
                <router-link to="/user" class="border px-[20px] py-[3px] rounded-sm text-[14px]">Se connecter</router-link>
                <!-- <button type="submit" class="border px-[20px] py-[3px] rounded-sm text-[14px]">Se connecter</button> -->
                
        </form>
        </div>
</div>
</template>

<script>

export default {
    name: 'AuthentifiCation',
    props: {
        authenTitle: String
    }

}

</script>

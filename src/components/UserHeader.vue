<template>
    <div class="pt-[20px]">
        <div class="flex justify-between text-[6px] sm:text-[14px] lg:mx-[100px] md:mx-[40px] mx-[20px] tracking-[2px] sm:tracking-[3px]">
            <div class="flex justify-between">
                <router-link to="/user" class="mr-1 sm:mr-3 hover:border-b">.workspace</router-link>
                <router-link to="/user/utilisateurs" class="mr-1 sm:mr-3 hover:border-b">.utilisateurs</router-link>
                <router-link to="/user/projets" class="mr-1 sm:mr-3 hover:border-b">.projets</router-link>
                <router-link to="/user/taches" class="mr-1 sm:mr-3 hover:border-b">.tâches</router-link>
            </div>
            <div class=" flex justify-between">
                <div><router-link to="/user/taches" class="hover:border-b pb-2 hover:text-[#C61E59] rounded-sm px-[8px] sm:px-[12px] py-[4px] mr-2 sm:mr-4">Nouvelle tâche</router-link></div>

                <button class="w-[10px] sm:w-[25px] peer"><img src="../assets/logo.png" alt="Profil" class=""></button>
                <div class="justify-end absolute sm:translate-x-[40px] -translate-x-[40px] translate-y-[25px] hidden peer-hover:flex hover:flex">
                    <div class="text-center bg-white text-[6px] tracking-widest sm:text-[10px] leading-[20px] sm:leading-[25px] w-[150px] sm:w-[180px] py-[15px] sm:py-[20px]  border rounded">
                        <div class="flex justify-center pb-[8px]"><img src="../assets/logo.png" class="rounded-full h-[60px]"></div>
                        <div><router-link to="/user/profil">Profil</router-link></div>
                        <div><router-link to="/user/profil">Changer de mot de passe</router-link></div>
                        <div><router-link to="/">Déconnexion</router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'UserHeader',
    props: { 
    },
 
}
</script>

<style scoped>
    a.router-link-exact-active.router-link-active {
    color: #C61E59;
  }
</style>
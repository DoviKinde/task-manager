<template>

    <div v-show="showAddUser" class=" absolute w-full flex justify-center h-full bg-black opacity-70"></div>
    
    <div v-show="showAddUser" class=" fixed w-full flex justify-center h-full">
      <div v-show="showAddUser" class="bg-white rounded-md w-[300px] my-auto">
          <AddUser @add-user="addUser" @toggle-add-user="toggleAddUser"/>
      </div>
    </div>

  

      <UserHeader/>

      <div class="lg:mx-[100px] md:mx-[40px] mx-[20px]"> 
        <div class="my-[10px] h-[150px] text-[16px] sm:text-[20px] text-[#C61E59] tracking-[4px] flex items-center"><div class="mx-[auto]">.utilisateurs</div></div>
        <div class="flex justify-end mb-[5px] sm:mb-[10px]">
          <button id="addUserBtn" @click="toggleAddUser" class="border hover:text-[#C61E59] hover:border-[#C61E59] rounded-sm py-[3px] w-[110px] sm:w-[150px] text-[10px] sm:text-[14px]">{{addUserBtn}}</button>
        </div>
      </div> 

  <div v-show="showUpdateUser">
    <UpdateUser @cancel-update-user="cancelUpdateUser"  @hide-after-update="cancelUpdateUser" :user="user"/>
  </div>

  <UserAll  @delete-user="deleteUser" @update-user="displayUpdateUser" :userall="users"/>

</template>


<script>
import UserAll from '@/components/UserAll'
import UserHeader from '@/components/UserHeader'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'

export default {
  name: 'UtiliSateurs',
  components: {
    UserHeader,
    UserAll,
    AddUser,
    UpdateUser
  },
  data(){
    return {
      users: [],
      showAddUser: false,
      addUserBtn: 'Ajouter un utilisateur',
      showUpdateUser: false

    }
  },
  methods: {
    addUser(user) {
      this.users = [...this.users, user]
    },
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id) 
  
    },
    updateUser(){
     
    },
    toggleAddUser(){
      this.showAddUser = !this.showAddUser
    },
    displayUpdateUser(){
      this.showUpdateUser = true
    },
    cancelUpdateUser(){
      this.showUpdateUser = false
    }
  },
  created(){
    this.users = [
      {
        id:1000,
        nom: 'Nom',
        prenom: 'Prenom',
        idConnexion: 'prenom.nom@sfp-groupe.com',
        passWord:'***',
        admin: true
      },
      {
        id:1001,
        nom: 'Familyname',
        prenom: 'Firstname',
        idConnexion: 'prenom.nom@sfp-groupe.com',
        passWord:'***',
        admin: false
      },
    ]
  }
}
</script>

<style scoped>
  #title{
    font-family: 'Montserrat', sans-serif;  
    -webkit-font-smoothing: antialiased;
    
  }

</style>
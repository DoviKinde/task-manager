<template>

    <div v-show="showAddProject" class=" absolute w-full flex justify-center h-full bg-black opacity-70"></div>
    <div v-show="showAddProject" class=" fixed w-full flex justify-center h-full">
      <div v-show="showAddProject" class="bg-white rounded-md w-[350px]  sm:w-[450px] my-auto">
          <AddProject @add-project="addProject" @toggle-add-project="toggleAddProject"/>
      </div>
    </div>

  <div >
    <UserHeader/>
        
    <div class="lg:mx-[100px] md:mx-[40px] sm:mx-[20px] mx-[20px]">
      <div class="my-[10px] h-[150px] text-[16px] sm:text-[20px] text-[#C61E59] tracking-[4px] flex items-center "><div class="mx-auto">.projets</div></div>
      <div class="flex justify-end mb-[5px] sm:mb-[10px]">
        <button @click="toggleAddProject" class="border hover:text-[#C61E59] hover:border-[#C61E59] rounded-sm py-[3px] w-[110px] sm:w-[150px] text-[10px] sm:text-[14px]">{{addProjectBtn}}</button>
      </div>
    </div>

    <div v-show="showUpdateProject">
      <UpdateProject @cancel-update-project="cancelUpdateProject" @hide-after-update="cancelUpdateProject" :project="project"/>
    </div>
    
    <ProjectAll  @delete-project="deleteProject" @update-project="displayUpdateProject" :projectall="projects"/>
  </div>
</template>


<script>
import ProjectAll from '@/components/ProjectAll'
import UserHeader from '@/components/UserHeader'
import AddProject from '@/components/AddProject'
import UpdateProject from '@/components/UpdateProject'


export default {
  name: 'ProJets',
  components: {
    UserHeader,
    ProjectAll,
    AddProject,
    UpdateProject
  },
  data(){
    return {
      projects: [],
      showAddProject: false,
      addProjectBtn: 'Ajouter un projet',
      showUpdateProject: false

    }
  },
  methods: {
    addProject(project) {
      this.projects = [...this.projects, project]
    },
    deleteProject(id) {
      this.projects = this.projects.filter((project) => project.id !== id) 
  
    },
    updateProject(){
      //fonction pour mettre à jour le projet
    },
    toggleAddProject(){
      this.showAddProject = !this.showAddProject
      if (this.showAddProject){
        this.addProjectBtn = "Masquer le formulaire"
      } else {
        this.addProjectBtn = "Ajouter un projet"

      }
    },
    displayUpdateProject(){
      this.showUpdateProject = true
    },
    cancelUpdateProject(){
      this.showUpdateProject = false
    }
  },
  created(){
    this.projects = [
      {
        id:1,
        debut: '21/07/2022',
        fin: '21/08/2022',
        nom: 'Lorem ipsum is simply dummy text',
        responsable: 'M. Charbel',
        backup: 'M. François'
      },
      {
        id:2,
        debut: '21/07/2022',
        fin: '21/08/2022',
        nom: 'Lorem ipsum is simply dummy text',
        responsable: 'M. Charbel',
        backup: 'M. François'
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

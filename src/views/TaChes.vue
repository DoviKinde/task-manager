  <template>

    <div v-show="showAddTask" class=" absolute w-full flex justify-center h-full bg-black opacity-70"></div>
    <div v-show="showAddTask" class=" fixed w-full flex justify-center h-full">
      <div v-show="showAddTask" class="bg-white rounded-md w-[300px] sm:w-[450px] my-auto">
          <AddTask @add-task="addTask" @toggle-add-task="toggleAddTask"/>
      </div>
    </div>

    <div>
      <UserHeader/>
      <div class="lg:mx-[100px] md:mx-[40px] mx-[20px]">
        <div class="my-[10px] h-[150px] text-[16px] sm:text-[20px] text-[#C61E59] tracking-widest flex items-center "><div class="mx-auto">.tâches</div></div>
        <div class="flex justify-end mb-[5px] sm:mb-[10px]">
          <button @click="toggleAddTask" class="border hover:text-[#C61E59] hover:border-[#C61E59] rounded-sm py-[3px] w-[110px] sm:w-[150px] text-[10px] sm:text-[14px]">{{addTaskBtn}}</button>
        </div>
      </div>
     
      <div v-show="showUpdateTask">
        <UpdateTask @cancel-update-task="cancelUpdateTask" @hide-after-update="cancelUpdateTask" :task="task"/>
      </div>

      <TaskAll  @delete-task="deleteTask" @update-task="displayUpdateTask" :taskall="tasks"/>
  </div>
        
</template>


<script>
import TaskAll from '@/components/TaskAll'
import UserHeader from '@/components/UserHeader'
import AddTask from '@/components/AddTask'
import UpdateTask from '@/components/UpdateTask'

export default {
  name: 'TaChes',
  components: {
    UserHeader,
    TaskAll,
    AddTask,
    UpdateTask
  },
  data(){
    return {
      tasks: [],
      showAddTask: false,
      addTaskBtn: 'Ajouter une tâche',
      showUpdateTask: false

    }
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id) 
  
    },
    updateTask(){
     
    },
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
      if (this.showAddTask){
        this.addTaskBtn = "Masquer le formulaire"
      } else {
        this.addTaskBtn = "Ajouter une tâche"

      }
    },
    displayUpdateTask(){
      this.showUpdateTask = true
    },
    cancelUpdateTask(){
      this.showUpdateTask = false
    }
  },
  
  created(){
    this.tasks = [
      {
        id:1,
        date: '21/07/2022',
        description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
        encours: true,
        responsable: 'M. Charbel'
      },
      {
        id:2,
        date: '21/07/2022',
        description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
        encours: false,
        responsable: 'M. Charbel'
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

<!-- Donc faut mettre un attribut projet aux tâches-->
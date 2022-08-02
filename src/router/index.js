import {createRouter, createWebHistory} from 'vue-router'
import UseR from '../views/UseR.vue'
import AuthentifiCation from '../views/AuthentifiCation.vue'
import UtiliSateurs from '../views/UtiliSateurs'
import ProJets from '../views/ProJets'
import TaChes from '../views/TaChes'
import ProFil from '../views/ProFil'





const routes = [
    {
        path:'/',
        name: 'AuthentifiCation',
        component: AuthentifiCation
    },
    {
        path:'/user',
        name: 'UseR',
        component: UseR
    },
    {
        path:'/user/utilisateurs',
        name: 'Utilisateur',
        component: UtiliSateurs
    },
    {
        path:'/user/projets',
        name: 'ProJets',
        component: ProJets
    },
    {
        path:'/user/taches',
        name: 'TaChes',
        component: TaChes
    },
    {
        path:'/user/profil',
        name: 'ProFil',
        component: ProFil
    }


    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'
// array definir cada de nuestras rutas
// declarar el path y asociarla con un componente
const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  // Crear la ruta parametrizada va hacer dinamica cada vez que seleccione una cancion
  { path: '/track/:id', component: TrackDetail, name: 'track' }
]

export default routes

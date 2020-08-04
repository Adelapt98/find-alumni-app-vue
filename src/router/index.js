import Vue from 'vue'
import Router from 'vue-router'
import ChooseCorrectAlumni from '../pages/ChooseCorrectAlumni'
import FindAlumni from '../pages/FindAlumni'
import FindAlumniByIntAndCountry from '../pages/FindAlumniByIntAndCountry'
import UploadAlumniFile from '../pages/UploadAlumniFile'
import Maps from '../pages/Maps'
// import EditUser from '../pages/EditUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FindAlumni',
      component: FindAlumni
    },
    {
      path: '/find-alumni-int-countery',
      name: 'FindAlumniByIntAndCountry',
      component: FindAlumniByIntAndCountry
    },
    {
      path: '/upload-alumni-file',
      name: 'UploadAlumniFile',
      component: UploadAlumniFile
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    // {
    //   path: '/find',
    //   name: 'FindAlumni',
    //   component: FindAlumni
    // },
    {
      path: '/choose-correct/:list',
      name: 'ChooseCorrectAlumni',
      component: ChooseCorrectAlumni,
      props: true
    }
  ]
})

// export default new Router({
//     routes: [
//       {
//         path: '/',
//         name: 'Home',
//         component: Home
//       },
//       {
//         path: '/find',
//         name: 'FindAlumni',
//         component: FindAlumni
//       },
//       {
//         path: '/edit/:id',
//         name: 'EditUser',
//         component: EditUser
//       }
//     ]
//   })
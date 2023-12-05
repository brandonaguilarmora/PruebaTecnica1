<template>
    <h5> <span class="badge bg-success">Crear Compañia</span></h5>
    <form @submit.prevent="saveUser">
        <div class="form-group">
            <label>Nombre Completo</label>
            <input v-model="user.name" type="text" name="name" class="form-control">
        </div> 
        <div class="form-group">
            <label>Correo Electronico</label>
            <input v-model="user.email" type="text" name="email" class="form-control">
        </div> 
        <div class="form-group">
            <label>Contraseña</label>
            <input v-model="user.password" type="text" name="password" class="form-control">
        </div> 
        <div class="form-group mt-2">
            <button type="submit" class="btn btn-success btn-sm">Crear</button>
        </div> 
        
    </form>
</template>
<script>
import useUsers from "../../composables/users"
import { onMounted } from "vue"
export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {

        const {errors,user, getUser, updateUser} = useUsers()
        onMounted(getUser(props.id))

        const saveUser = async () => {
            await updateUser(props.id)
        }
        return{
            errors,
            user,
            saveUser
        }
    },
}
</script>
<!-- // setup(){
//     const {users, getUsers, onAlterActivo} = useUsers()

//     onMounted(getUsers)

//     const AlterActivo= async(id) =>{
//       if(!window.confirm("Estas seguro?")){
//         return
//       }
//       await onAlterActivo(id);
//       await getUsers();
//     }
//     return{
//         users,
//         AlterActivo,
//     }
// } -->
<template>

    <h5> <span class="badge bg-success">Crear Compañia</span></h5>
    <form @submit.prevent="saveUser">
        <div class="form-group">
            <label>Nombre Completo</label>
            <input v-model="form.name" name="name" class="form-control">
        </div> 
        <div class="form-group">
            <label>Correo Electronico</label>
            <input v-model="form.email" type="text" name="email" class="form-control">
        </div> 
        <div class="form-group">
            <label>Contraseña</label>
            <input v-model="form.password" type="text" name="password" class="form-control">
        </div> 
        <div class="form-group mt-2">
            <button type="submit" class="btn btn-success btn-sm">Crear</button>
        </div> 
        
    </form>
</template>
<script>
import { reactive } from 'vue'
import useUsers from "../../composables/users"

export default {
    setup() {
        const {errors, storeUser} = useUsers()
        const form = reactive({
            'name': '',
            'email':'',
            'password':''

        })

        const saveUser = async ()=>{
            await storeUser({...form})
        }        
        return {
            form,
            saveUser,
        }
    },
}
</script>

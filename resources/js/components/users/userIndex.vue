<template>
  <h5><span class="badge bg-success">Listado de usuarios</span></h5>
  <div class="text-end">
    <router-link :to="{name: 'users.create'}"  class="btn btn-sm btn-primary">Nuevo</router-link>
  </div>
  
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre Completo</th>
        <th scope="col">Correo Electronico</th>
        <th scope="col">contraseña</th>
        <th scope="col">fecha de creación</th>
        <th scope="col">Activo</th>

      </tr>
    </thead>
  <tbody>
    <template v-for="item in users" :key="item.id">
      <tr>
        <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.password }}</td>
          <td>{{ item.created_at }}</td>
          <td>

             <button
              type="button"
              @click="AlterActivo(item.id)"
              :class="{'btn btn-sm btn-primary': !item.activo, 'btn btn-sm btn-danger': item.activo}">
              {{ item.activo ? 'Bloquear' : 'Desbloquear' }}</button>
              <router-link :to="{name: 'users.edit',params:{id:item.id}}" class="btn btn-sm btn-primary">Editar</router-link>

          </td>
          
      </tr>
      
    </template>
  </tbody>
</table>
</template>

<script>

import useUsers from "../../composables/users"
import { onMounted } from "vue"

export default {

    setup(){
        const {users, getUsers, onAlterActivo} = useUsers()

        onMounted(getUsers)

        const AlterActivo= async(id) =>{
          if(!window.confirm("Estas seguro?")){
            return
          }
          await onAlterActivo(id);
          await getUsers();
        }
        return{
            users,
            AlterActivo,
        }
    }

}

</script>
import {ref} from 'vue'
import axios from "axios"
import {useRouter} from 'vue-router'
export default function useUsers(){
    const errors = ref('')
    const users = ref([])
    const router = useRouter()
    const user = ref([])
    const getUsers = async()=>{
        let response= await axios.get('/api/users')
        users.value = response.data.data
    }
    const getUser = async(id)=>{
        let response= await axios.get('/api/users/'+id)
        user.value = response.data.data
    }

    const onAlterActivo = async(id)=>{
        await axios.delete('api/users/'+ id)
    }

    const storeUser = async(data)=>{
        errors.value = '';
        try{
            await axios.post('/api/users',data) 
            await router.push({name: 'users.index'})
        }catch(e){
            if(e.response.status === 422){
                errors.value = e.response.data.errors
            }
        }
    }
    const updateUser = async(id)=>{
        errors.value = '';
        try{
            await axios.put('/api/users/'+id, user.value,{ withCredentials: true })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }); 
            await router.push({name: 'users.index'})
        }catch(e){
            if(e.response.status === 422){
                errors.value = e.response.data.errors
            }
        }
    }

    return{
        errors,
        users,
        user,
        getUsers,
        onAlterActivo,
        storeUser,
        getUser,
        updateUser
    }
}

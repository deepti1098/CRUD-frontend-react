import axios from "axios";

const GET_ALL_USERS_API_URL="http://13.235.114.130:8080/users";
const BASE_USER_API_URL="http://13.235.114.130:8080/user";

class UserService{

    getAllUsers(){
        return axios.get(GET_ALL_USERS_API_URL)
    }

    addUser(user){
        return axios.post(BASE_USER_API_URL,user) //user object contains form data which will sent to rest api
    }

    getUserById(id){
        return axios.get(BASE_USER_API_URL+'/'+id)
    }

    updateUser(id,user){
        return axios.put(BASE_USER_API_URL+'/'+id,user)
    }

    deleteUser(id){
        return axios.delete(BASE_USER_API_URL+'/'+id)
    }
}

export default new UserService();
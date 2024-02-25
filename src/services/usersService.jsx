import api from '../api/axios.js';

class UsersService {

    // получить список всех тренеров
    async getAllUsers() {
        return await api.get('allUsers');
    }

}

export default new UsersService();
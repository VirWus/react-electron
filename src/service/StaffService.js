import axios from 'axios';

export class StaffService {


    getStaffs() {
        return axios.get('https://dummyjson.com/users').then(res => res.data.users
        )
    }


}
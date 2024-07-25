import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // URL base do seu backend
    headers: {
      'Content-Type': 'application/json',
    },
  });
export default axiosInstance

// export class UserService{
//     listAll(){
//         return axiosInstance.get("/listUser/1");
//     }
// }

// export function getUser() {
//     try {
//       const response = axiosInstance.get('/listUser/1');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
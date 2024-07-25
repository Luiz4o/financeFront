import { useEffect, useState } from "react"
import axiosInstance from "../../service/axiosInstance"
import { IUser } from "../../Interfaces/IUser";


const ListaUsuarios = () => {

    const [users, setUsuarios] = useState<IUser[]>([])

    useEffect(() => {
        axiosInstance.get('/findAllUser/1')
            .then(response=>{
                setUsuarios(response.data)
            }) // Exemplo de como lidar com a resposta
             .catch(error=> {
                console.log(error)
            })
    }, []); // Certifique-se de passar um array vazio como segundo argumento para useEffect

    return (
        <div className="homepage">
            <h1>Lista de Usuários</h1>
            <ul>
            {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default ListaUsuarios;

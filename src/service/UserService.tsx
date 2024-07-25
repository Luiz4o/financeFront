// import { useEffect, useState } from "react";
// import axiosInstance from "./axiosInstance";

// const getUser = () => {
//     const [usuarios, setUsuarios] = useState([]);
  
//     useEffect(() => {
//       const fetchUsuarios = async () => {
//         try {
//           const response = await axiosInstance.get('/listarUsuarios');
//           console.log('Dados dos usuários:', response.data);
//           setUsuarios(response.data); // Define o estado com os dados recebidos
//         } catch (error) {
//           console.error('Erro ao buscar usuários:', error);
//         }
//       };
  
//       fetchUsuarios();
//     }, []);

//     return (
//         <div>
//           <h2>Lista de Usuários</h2>
//           <ul>
//             {usuarios.map((usuario) => (
//               <li key={usuario.id}>{usuario.nome}</li>
//             ))}
//           </ul>
//         </div>
//       );
//     };

// export getUser
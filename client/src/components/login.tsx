// import { useState } from "react";
// import { useAuth } from "../context/AuthProvider";
// export default function Login() {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const auth = useAuth();
//   localStorage.setItem("name", "Hola");
//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     // try {
//     //   const response = await fetch("");
//     // } catch (error) {}
//   }

//   if (auth.isAuthenticated) {
//     console.log("Esta logeado");
//   } else {
//     console.log("no esta logeado");
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Usuario</label>
//           <input
//             placeholder="Usuario"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Contraseña</label>
//           <input
//             placeholder="Contraseña"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button>Entrar</button>
//       </form>
//     </>
//   );
// }

'use client'
import { useState } from "react" 
import { useRouter } from "next/navigation"
import axios from "axios";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser();
  }

  const loginUser = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: userName,
        password: userPass
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = response.data;
      
      if (response.status === 200) {
        localStorage.setItem("token", data.accessToken);
        // alert(data.token)
        router.push("/");
        // router.push("/?"+data.accessToken);
        // console.log(data.accessToken)
      } else {
        alert("Erro no login: " + data.message);
      }
    } catch (error) {
      console.error("Erro ao acessar a API: ", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" value={userPass} onChange={(e) => setUserPass(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Login</button>
      </form>
    </div>
  );
}
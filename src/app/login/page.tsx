"use client";

import { useState } from "react";
import axios from "axios";

export default function Login() {
    
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();


        let data = new FormData();
        data.append('email', formData.email);
        data.append('pass', formData.password);

        await axios({
            method: "POST",
            data: data,
            url: "http://localhost:5173/user/login"
        })
        .then(response => console.log(response))

    }

    return (
        <main className="bg-[#e0e0e0] flex-1 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <fieldset className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} value={formData.email} className="p-1 rounded-sm border border-[#242424]" type="email" id="email" name="email"/>
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={handleChange} value={formData.password} className="p-1 rounded-sm border border-[#242424]"  type="password" id="password" name="password"/>
                </fieldset>
                <input className="bg-dark text-white py-2 rounded-sm cursor-pointer" type="submit" value="Iniciar sesión" />
            </form>
        </main>
    )
}
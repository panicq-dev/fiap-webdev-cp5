"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import AgentsList from "../components/AgentsList";

export default function ApiRequest() {
    const [data, setData] = useState([]);

    // Puxar a resposta da API
    useEffect(() => {
        async function carregar() {
            const res = await axios.get(
                "https://valorant-api.com/v1/agents?language=pt-BR"
            );
            setData(res.data.data);
        }

        // Mostrar a resposta da API
        carregar();
    }, []);

    return (
        <div>
            <AgentsList agents={data} />
        </div>
    )
}
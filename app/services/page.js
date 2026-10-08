"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import AgentsList from "../components/AgentsList";
import titleComponent from "../components/TitleComponent"

export default function ApiRequest() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function carregar() {
            const res = await axios.get(
                "https://valorant-api.com/v1/agents?language=pt-BR"
            );
            setData(res.data.data);
        }
        carregar();
    }, []);

    return (
        <div>
            <titleComponent />
            <AgentsList agents={data} />
        </div>
    )
}
import React from 'react';
export default function AgentsList({ agents }) {
    return (
        <div>
            {agents.map((agent) => (
                <div key={agent.uuid}>
                    <h2>{agent.displayName}</h2>
                </div>
            ))}
        </div>
    );
}

import { useState } from "react";

interface ClientFormProps {
  onClientCreated: () => void;
}

function ClientForm({ onClientCreated }: ClientFormProps) {
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [agentId, setAgentId] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        userId,
        agentId,
      }),
    });

    if (!response.ok) {
      alert("Failed to create client");
      return;
    }

    setId("");
    setUserId("");
    setAgentId("");

    onClientCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Client</h2>

      <div>
        <label>Client ID</label>
        <input
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
      </div>

      <div>
        <label>User ID</label>
        <input
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
      </div>

      <div>
        <label>Agent ID</label>
        <input
          value={agentId}
          onChange={(event) => setAgentId(event.target.value)}
        />
      </div>

      <button type="submit">
        Create Client
      </button>
    </form>
  );
}

export default ClientForm;
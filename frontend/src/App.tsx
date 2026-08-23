import React from 'react'
import type { Client } from './types/clients';
import { getClients } from './api/clientApi';
import ClientForm from './components/ClientForm';


function App() {
  const [clients, setClients] = React.useState<Client[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getClients();
      setClients(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading clients...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Clients</h1>
      <ClientForm onClientCreated={fetchData} />

        <hr />


     {
      clients.map((client)=>(
        <div key={client.id}>
          <p>Client:{client.id}</p>
          <p>User: {client.userId}</p>
          <p>Agent: {client.agentId}</p>
        </div>
      ))
     }
    </div>
  );
}

export default App;

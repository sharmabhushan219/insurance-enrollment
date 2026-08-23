import type { Client } from "../types/clients";

export const getClients = async (): Promise<Client[]> => {
  const response = await fetch("http://localhost:3000/clients");

  if (!response.ok) {
    throw new Error("Failed to fetch clients");
  }

  return response.json();
};
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from 'node:dns/promises'
dns.setServers(['1.1.1.1','8.8.8.8'])

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('AdoptNestDB');

export const auth = betterAuth({
     database: mongodbAdapter(db, {
    client
  }),

  emailAndPassword: { 
    enabled: true, 
  }, 
});
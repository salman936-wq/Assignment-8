import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let _auth;

export function getAuth() {
  if (_auth) return _auth;

  const client = new MongoClient(process.env.DB_URI);
  const db = client.db("SkillSphere");

  _auth = betterAuth({
    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
    database: mongodbAdapter(db, {
      client,
    }),
    session: {
      cookieCache: {
        enabled: true,
      },
    },
  });

  return _auth;
}
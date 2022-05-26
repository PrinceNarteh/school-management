import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "@generated/type-graphql";
import { buildSchema } from "type-graphql";
import prisma from "../../src/lib/prisma";

const schema = await buildSchema({
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  context: () => ({ prisma }),
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers";

export const schema = await buildSchema({
  resolvers,
});

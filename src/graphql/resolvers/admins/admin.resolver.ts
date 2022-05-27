import { Query, Resolver } from "type-graphql";

@Resolver()
export class AdminResolver {
    @Query()
    async admins() {
        
    }
}
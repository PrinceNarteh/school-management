import { Query, Resolver } from "type-graphql";
import { Staff } from "../../../entities/Staff.entity";

@Resolver()
export class StaffResolver {
  @Query(() => [Staff])
  async staffs() {
    return await Staff.find();
  }
}

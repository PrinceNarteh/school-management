import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffCreateInput } from "../../../inputs/StaffCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStaffArgs {
  @TypeGraphQL.Field(_type => StaffCreateInput, {
    nullable: false
  })
  data!: StaffCreateInput;
}

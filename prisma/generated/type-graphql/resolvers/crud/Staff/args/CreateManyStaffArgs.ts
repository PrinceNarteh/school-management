import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffCreateManyInput } from "../../../inputs/StaffCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStaffArgs {
  @TypeGraphQL.Field(_type => [StaffCreateManyInput], {
    nullable: false
  })
  data!: StaffCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

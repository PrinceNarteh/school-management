import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationCreateInput } from "../../../inputs/StudentNotificationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationCreateInput, {
    nullable: false
  })
  data!: StudentNotificationCreateInput;
}

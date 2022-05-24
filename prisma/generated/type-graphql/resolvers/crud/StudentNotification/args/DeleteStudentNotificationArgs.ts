import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationWhereUniqueInput } from "../../../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StudentNotificationWhereUniqueInput;
}

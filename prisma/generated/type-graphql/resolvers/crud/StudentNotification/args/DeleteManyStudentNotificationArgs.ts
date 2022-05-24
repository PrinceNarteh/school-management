import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationWhereInput } from "../../../inputs/StudentNotificationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationWhereInput, {
    nullable: true
  })
  where?: StudentNotificationWhereInput | undefined;
}

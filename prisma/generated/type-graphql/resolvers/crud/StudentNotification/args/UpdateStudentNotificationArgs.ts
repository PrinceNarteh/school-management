import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationUpdateInput } from "../../../inputs/StudentNotificationUpdateInput";
import { StudentNotificationWhereUniqueInput } from "../../../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationUpdateInput, {
    nullable: false
  })
  data!: StudentNotificationUpdateInput;

  @TypeGraphQL.Field(_type => StudentNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StudentNotificationWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationCreateInput } from "../../../inputs/StudentNotificationCreateInput";
import { StudentNotificationUpdateInput } from "../../../inputs/StudentNotificationUpdateInput";
import { StudentNotificationWhereUniqueInput } from "../../../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StudentNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentNotificationCreateInput, {
    nullable: false
  })
  create!: StudentNotificationCreateInput;

  @TypeGraphQL.Field(_type => StudentNotificationUpdateInput, {
    nullable: false
  })
  update!: StudentNotificationUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationUpdateManyMutationInput } from "../../../inputs/StudentNotificationUpdateManyMutationInput";
import { StudentNotificationWhereInput } from "../../../inputs/StudentNotificationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentNotificationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StudentNotificationWhereInput, {
    nullable: true
  })
  where?: StudentNotificationWhereInput | undefined;
}

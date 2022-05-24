import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationCreateManyInput } from "../../../inputs/StudentNotificationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStudentNotificationArgs {
  @TypeGraphQL.Field(_type => [StudentNotificationCreateManyInput], {
    nullable: false
  })
  data!: StudentNotificationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

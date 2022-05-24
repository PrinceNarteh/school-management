import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackWhereInput } from "../../../inputs/StudentFeedbackWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereInput, {
    nullable: true
  })
  where?: StudentFeedbackWhereInput | undefined;
}
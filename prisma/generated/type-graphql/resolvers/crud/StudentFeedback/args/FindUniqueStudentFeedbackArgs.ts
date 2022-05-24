import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackWhereUniqueInput } from "../../../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StudentFeedbackWhereUniqueInput;
}

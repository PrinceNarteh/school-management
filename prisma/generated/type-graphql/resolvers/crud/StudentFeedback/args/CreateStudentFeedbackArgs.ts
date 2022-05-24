import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackCreateInput } from "../../../inputs/StudentFeedbackCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackCreateInput, {
    nullable: false
  })
  data!: StudentFeedbackCreateInput;
}

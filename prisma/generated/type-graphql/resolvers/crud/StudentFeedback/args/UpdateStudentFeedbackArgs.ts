import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackUpdateInput } from "../../../inputs/StudentFeedbackUpdateInput";
import { StudentFeedbackWhereUniqueInput } from "../../../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackUpdateInput, {
    nullable: false
  })
  data!: StudentFeedbackUpdateInput;

  @TypeGraphQL.Field(_type => StudentFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StudentFeedbackWhereUniqueInput;
}

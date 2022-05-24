import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackCreateInput } from "../../../inputs/StudentFeedbackCreateInput";
import { StudentFeedbackUpdateInput } from "../../../inputs/StudentFeedbackUpdateInput";
import { StudentFeedbackWhereUniqueInput } from "../../../inputs/StudentFeedbackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereUniqueInput, {
    nullable: false
  })
  where!: StudentFeedbackWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentFeedbackCreateInput, {
    nullable: false
  })
  create!: StudentFeedbackCreateInput;

  @TypeGraphQL.Field(_type => StudentFeedbackUpdateInput, {
    nullable: false
  })
  update!: StudentFeedbackUpdateInput;
}

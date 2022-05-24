import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackUpdateManyMutationInput } from "../../../inputs/StudentFeedbackUpdateManyMutationInput";
import { StudentFeedbackWhereInput } from "../../../inputs/StudentFeedbackWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentFeedbackUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StudentFeedbackWhereInput, {
    nullable: true
  })
  where?: StudentFeedbackWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackCreateManyInput } from "../../../inputs/StudentFeedbackCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => [StudentFeedbackCreateManyInput], {
    nullable: false
  })
  data!: StudentFeedbackCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentFeedbackOrderByWithRelationInput } from "../../../inputs/StudentFeedbackOrderByWithRelationInput";
import { StudentFeedbackWhereInput } from "../../../inputs/StudentFeedbackWhereInput";
import { StudentFeedbackWhereUniqueInput } from "../../../inputs/StudentFeedbackWhereUniqueInput";
import { StudentFeedbackScalarFieldEnum } from "../../../../enums/StudentFeedbackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStudentFeedbackArgs {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereInput, {
    nullable: true
  })
  where?: StudentFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StudentFeedbackOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackWhereUniqueInput, {
    nullable: true
  })
  cursor?: StudentFeedbackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StudentFeedbackScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "studentId" | "message" | "reply" | "createdAt" | "updatedAt"> | undefined;
}

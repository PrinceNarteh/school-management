import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackWhereInput } from "../inputs/StudentFeedbackWhereInput";

@TypeGraphQL.InputType("StudentFeedbackListRelationFilter", {
  isAbstract: true
})
export class StudentFeedbackListRelationFilter {
  @TypeGraphQL.Field(_type => StudentFeedbackWhereInput, {
    nullable: true
  })
  every?: StudentFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackWhereInput, {
    nullable: true
  })
  some?: StudentFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentFeedbackWhereInput, {
    nullable: true
  })
  none?: StudentFeedbackWhereInput | undefined;
}

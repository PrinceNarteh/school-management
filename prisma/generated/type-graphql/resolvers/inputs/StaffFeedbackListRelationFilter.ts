import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackWhereInput } from "../inputs/StaffFeedbackWhereInput";

@TypeGraphQL.InputType("StaffFeedbackListRelationFilter", {
  isAbstract: true
})
export class StaffFeedbackListRelationFilter {
  @TypeGraphQL.Field(_type => StaffFeedbackWhereInput, {
    nullable: true
  })
  every?: StaffFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackWhereInput, {
    nullable: true
  })
  some?: StaffFeedbackWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffFeedbackWhereInput, {
    nullable: true
  })
  none?: StaffFeedbackWhereInput | undefined;
}

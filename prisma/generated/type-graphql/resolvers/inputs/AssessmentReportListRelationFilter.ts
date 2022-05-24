import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportWhereInput } from "../inputs/AssessmentReportWhereInput";

@TypeGraphQL.InputType("AssessmentReportListRelationFilter", {
  isAbstract: true
})
export class AssessmentReportListRelationFilter {
  @TypeGraphQL.Field(_type => AssessmentReportWhereInput, {
    nullable: true
  })
  every?: AssessmentReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportWhereInput, {
    nullable: true
  })
  some?: AssessmentReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportWhereInput, {
    nullable: true
  })
  none?: AssessmentReportWhereInput | undefined;
}

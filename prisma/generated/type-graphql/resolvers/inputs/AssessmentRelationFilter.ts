import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentWhereInput } from "../inputs/AssessmentWhereInput";

@TypeGraphQL.InputType("AssessmentRelationFilter", {
  isAbstract: true
})
export class AssessmentRelationFilter {
  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  is?: AssessmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  isNot?: AssessmentWhereInput | undefined;
}

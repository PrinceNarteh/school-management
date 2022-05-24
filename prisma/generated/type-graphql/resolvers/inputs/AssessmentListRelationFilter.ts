import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentWhereInput } from "../inputs/AssessmentWhereInput";

@TypeGraphQL.InputType("AssessmentListRelationFilter", {
  isAbstract: true
})
export class AssessmentListRelationFilter {
  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  every?: AssessmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  some?: AssessmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  none?: AssessmentWhereInput | undefined;
}

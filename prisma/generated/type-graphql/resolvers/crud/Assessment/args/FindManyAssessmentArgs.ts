import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentOrderByWithRelationInput } from "../../../inputs/AssessmentOrderByWithRelationInput";
import { AssessmentWhereInput } from "../../../inputs/AssessmentWhereInput";
import { AssessmentWhereUniqueInput } from "../../../inputs/AssessmentWhereUniqueInput";
import { AssessmentScalarFieldEnum } from "../../../../enums/AssessmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  where?: AssessmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssessmentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AssessmentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: AssessmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AssessmentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "studentId" | "subjectId" | "date" | "createdAt" | "updatedAt"> | undefined;
}

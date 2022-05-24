import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentOrderByWithRelationInput } from "../../../inputs/AssessmentOrderByWithRelationInput";
import { AssessmentWhereInput } from "../../../inputs/AssessmentWhereInput";
import { AssessmentWhereUniqueInput } from "../../../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAssessmentArgs {
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
}

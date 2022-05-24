import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportOrderByWithRelationInput } from "../../../inputs/AssessmentReportOrderByWithRelationInput";
import { AssessmentReportWhereInput } from "../../../inputs/AssessmentReportWhereInput";
import { AssessmentReportWhereUniqueInput } from "../../../inputs/AssessmentReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportWhereInput, {
    nullable: true
  })
  where?: AssessmentReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssessmentReportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AssessmentReportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportWhereUniqueInput, {
    nullable: true
  })
  cursor?: AssessmentReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

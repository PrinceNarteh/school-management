import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportUpdateManyMutationInput } from "../../../inputs/AssessmentReportUpdateManyMutationInput";
import { AssessmentReportWhereInput } from "../../../inputs/AssessmentReportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssessmentReportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AssessmentReportWhereInput, {
    nullable: true
  })
  where?: AssessmentReportWhereInput | undefined;
}

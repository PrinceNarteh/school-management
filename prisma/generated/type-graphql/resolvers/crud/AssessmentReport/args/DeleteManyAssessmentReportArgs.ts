import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportWhereInput } from "../../../inputs/AssessmentReportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAssessmentReportArgs {
  @TypeGraphQL.Field(_type => AssessmentReportWhereInput, {
    nullable: true
  })
  where?: AssessmentReportWhereInput | undefined;
}

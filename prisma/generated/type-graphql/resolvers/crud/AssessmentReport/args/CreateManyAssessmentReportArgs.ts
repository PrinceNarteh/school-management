import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentReportCreateManyInput } from "../../../inputs/AssessmentReportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAssessmentReportArgs {
  @TypeGraphQL.Field(_type => [AssessmentReportCreateManyInput], {
    nullable: false
  })
  data!: AssessmentReportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

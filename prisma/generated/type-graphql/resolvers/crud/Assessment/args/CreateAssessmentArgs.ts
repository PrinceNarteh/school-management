import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentCreateInput } from "../../../inputs/AssessmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentCreateInput, {
    nullable: false
  })
  data!: AssessmentCreateInput;
}

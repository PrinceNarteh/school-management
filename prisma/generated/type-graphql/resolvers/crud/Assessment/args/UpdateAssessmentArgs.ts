import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentUpdateInput } from "../../../inputs/AssessmentUpdateInput";
import { AssessmentWhereUniqueInput } from "../../../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentUpdateInput, {
    nullable: false
  })
  data!: AssessmentUpdateInput;

  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;
}

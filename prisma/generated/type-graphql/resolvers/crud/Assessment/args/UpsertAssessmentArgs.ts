import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentCreateInput } from "../../../inputs/AssessmentCreateInput";
import { AssessmentUpdateInput } from "../../../inputs/AssessmentUpdateInput";
import { AssessmentWhereUniqueInput } from "../../../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssessmentCreateInput, {
    nullable: false
  })
  create!: AssessmentCreateInput;

  @TypeGraphQL.Field(_type => AssessmentUpdateInput, {
    nullable: false
  })
  update!: AssessmentUpdateInput;
}

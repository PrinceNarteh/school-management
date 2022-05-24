import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentWhereUniqueInput } from "../../../inputs/AssessmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentWhereUniqueInput, {
    nullable: false
  })
  where!: AssessmentWhereUniqueInput;
}

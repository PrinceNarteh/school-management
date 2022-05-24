import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentWhereInput } from "../../../inputs/AssessmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  where?: AssessmentWhereInput | undefined;
}

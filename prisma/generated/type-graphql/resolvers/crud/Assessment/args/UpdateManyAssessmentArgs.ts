import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentUpdateManyMutationInput } from "../../../inputs/AssessmentUpdateManyMutationInput";
import { AssessmentWhereInput } from "../../../inputs/AssessmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAssessmentArgs {
  @TypeGraphQL.Field(_type => AssessmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssessmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AssessmentWhereInput, {
    nullable: true
  })
  where?: AssessmentWhereInput | undefined;
}

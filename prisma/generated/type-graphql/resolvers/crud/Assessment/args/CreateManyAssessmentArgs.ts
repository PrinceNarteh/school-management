import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssessmentCreateManyInput } from "../../../inputs/AssessmentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAssessmentArgs {
  @TypeGraphQL.Field(_type => [AssessmentCreateManyInput], {
    nullable: false
  })
  data!: AssessmentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

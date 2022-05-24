import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateManySubjectInput } from "../inputs/AssessmentCreateManySubjectInput";

@TypeGraphQL.InputType("AssessmentCreateManySubjectInputEnvelope", {
  isAbstract: true
})
export class AssessmentCreateManySubjectInputEnvelope {
  @TypeGraphQL.Field(_type => [AssessmentCreateManySubjectInput], {
    nullable: false
  })
  data!: AssessmentCreateManySubjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

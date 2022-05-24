import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateManyStudentInput } from "../inputs/AssessmentCreateManyStudentInput";

@TypeGraphQL.InputType("AssessmentCreateManyStudentInputEnvelope", {
  isAbstract: true
})
export class AssessmentCreateManyStudentInputEnvelope {
  @TypeGraphQL.Field(_type => [AssessmentCreateManyStudentInput], {
    nullable: false
  })
  data!: AssessmentCreateManyStudentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

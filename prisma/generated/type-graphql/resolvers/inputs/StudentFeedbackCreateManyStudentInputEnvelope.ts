import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentFeedbackCreateManyStudentInput } from "../inputs/StudentFeedbackCreateManyStudentInput";

@TypeGraphQL.InputType("StudentFeedbackCreateManyStudentInputEnvelope", {
  isAbstract: true
})
export class StudentFeedbackCreateManyStudentInputEnvelope {
  @TypeGraphQL.Field(_type => [StudentFeedbackCreateManyStudentInput], {
    nullable: false
  })
  data!: StudentFeedbackCreateManyStudentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

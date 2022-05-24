import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateNestedOneWithoutAssessmentReportInput } from "../inputs/AssessmentCreateNestedOneWithoutAssessmentReportInput";

@TypeGraphQL.InputType("AssessmentReportCreateWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentReportCreateWithoutStudentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => AssessmentCreateNestedOneWithoutAssessmentReportInput, {
    nullable: false
  })
  assessment!: AssessmentCreateNestedOneWithoutAssessmentReportInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateNestedManyWithoutAssessmentInput } from "../inputs/AssessmentReportCreateNestedManyWithoutAssessmentInput";
import { SubjectCreateNestedOneWithoutAssessmentInput } from "../inputs/SubjectCreateNestedOneWithoutAssessmentInput";

@TypeGraphQL.InputType("AssessmentCreateWithoutStudentInput", {
  isAbstract: true
})
export class AssessmentCreateWithoutStudentInput {
  @TypeGraphQL.Field(_type => SubjectCreateNestedOneWithoutAssessmentInput, {
    nullable: false
  })
  subject!: SubjectCreateNestedOneWithoutAssessmentInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AssessmentReportCreateNestedManyWithoutAssessmentInput, {
    nullable: true
  })
  assessmentReport?: AssessmentReportCreateNestedManyWithoutAssessmentInput | undefined;
}

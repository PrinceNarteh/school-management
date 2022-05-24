import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateNestedManyWithoutAssessmentInput } from "../inputs/AssessmentReportCreateNestedManyWithoutAssessmentInput";
import { StudentCreateNestedOneWithoutAssessmentInput } from "../inputs/StudentCreateNestedOneWithoutAssessmentInput";

@TypeGraphQL.InputType("AssessmentCreateWithoutSubjectInput", {
  isAbstract: true
})
export class AssessmentCreateWithoutSubjectInput {
  @TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutAssessmentInput, {
    nullable: false
  })
  student!: StudentCreateNestedOneWithoutAssessmentInput;

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

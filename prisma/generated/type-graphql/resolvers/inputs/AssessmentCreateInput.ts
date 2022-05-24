import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentReportCreateNestedManyWithoutAssessmentInput } from "../inputs/AssessmentReportCreateNestedManyWithoutAssessmentInput";
import { StudentCreateNestedOneWithoutAssessmentInput } from "../inputs/StudentCreateNestedOneWithoutAssessmentInput";
import { SubjectCreateNestedOneWithoutAssessmentInput } from "../inputs/SubjectCreateNestedOneWithoutAssessmentInput";

@TypeGraphQL.InputType("AssessmentCreateInput", {
  isAbstract: true
})
export class AssessmentCreateInput {
  @TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutAssessmentInput, {
    nullable: false
  })
  student!: StudentCreateNestedOneWithoutAssessmentInput;

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

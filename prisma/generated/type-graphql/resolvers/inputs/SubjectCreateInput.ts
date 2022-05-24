import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssessmentCreateNestedManyWithoutSubjectInput } from "../inputs/AssessmentCreateNestedManyWithoutSubjectInput";
import { CourseCreateNestedOneWithoutSubjectsInput } from "../inputs/CourseCreateNestedOneWithoutSubjectsInput";
import { StaffCreateNestedOneWithoutSubjectsInput } from "../inputs/StaffCreateNestedOneWithoutSubjectsInput";

@TypeGraphQL.InputType("SubjectCreateInput", {
  isAbstract: true
})
export class SubjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutSubjectsInput, {
    nullable: false
  })
  course!: CourseCreateNestedOneWithoutSubjectsInput;

  @TypeGraphQL.Field(_type => StaffCreateNestedOneWithoutSubjectsInput, {
    nullable: false
  })
  staff!: StaffCreateNestedOneWithoutSubjectsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AssessmentCreateNestedManyWithoutSubjectInput, {
    nullable: true
  })
  assessment?: AssessmentCreateNestedManyWithoutSubjectInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationUpdateWithoutStudentInput } from "../inputs/StudentNotificationUpdateWithoutStudentInput";
import { StudentNotificationWhereUniqueInput } from "../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StudentNotificationUpdateWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class StudentNotificationUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StudentNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentNotificationUpdateWithoutStudentInput, {
    nullable: false
  })
  data!: StudentNotificationUpdateWithoutStudentInput;
}

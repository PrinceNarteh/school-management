import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationCreateWithoutStudentInput } from "../inputs/StudentNotificationCreateWithoutStudentInput";
import { StudentNotificationUpdateWithoutStudentInput } from "../inputs/StudentNotificationUpdateWithoutStudentInput";
import { StudentNotificationWhereUniqueInput } from "../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StudentNotificationUpsertWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class StudentNotificationUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StudentNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentNotificationUpdateWithoutStudentInput, {
    nullable: false
  })
  update!: StudentNotificationUpdateWithoutStudentInput;

  @TypeGraphQL.Field(_type => StudentNotificationCreateWithoutStudentInput, {
    nullable: false
  })
  create!: StudentNotificationCreateWithoutStudentInput;
}

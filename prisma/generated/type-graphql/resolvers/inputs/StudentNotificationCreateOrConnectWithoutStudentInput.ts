import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationCreateWithoutStudentInput } from "../inputs/StudentNotificationCreateWithoutStudentInput";
import { StudentNotificationWhereUniqueInput } from "../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StudentNotificationCreateOrConnectWithoutStudentInput", {
  isAbstract: true
})
export class StudentNotificationCreateOrConnectWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentNotificationWhereUniqueInput, {
    nullable: false
  })
  where!: StudentNotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentNotificationCreateWithoutStudentInput, {
    nullable: false
  })
  create!: StudentNotificationCreateWithoutStudentInput;
}

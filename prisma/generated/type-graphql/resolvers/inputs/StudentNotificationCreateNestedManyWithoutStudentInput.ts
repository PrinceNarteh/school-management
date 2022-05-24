import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationCreateManyStudentInputEnvelope } from "../inputs/StudentNotificationCreateManyStudentInputEnvelope";
import { StudentNotificationCreateOrConnectWithoutStudentInput } from "../inputs/StudentNotificationCreateOrConnectWithoutStudentInput";
import { StudentNotificationCreateWithoutStudentInput } from "../inputs/StudentNotificationCreateWithoutStudentInput";
import { StudentNotificationWhereUniqueInput } from "../inputs/StudentNotificationWhereUniqueInput";

@TypeGraphQL.InputType("StudentNotificationCreateNestedManyWithoutStudentInput", {
  isAbstract: true
})
export class StudentNotificationCreateNestedManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [StudentNotificationCreateWithoutStudentInput], {
    nullable: true
  })
  create?: StudentNotificationCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: StudentNotificationCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: StudentNotificationCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentNotificationWhereUniqueInput[] | undefined;
}

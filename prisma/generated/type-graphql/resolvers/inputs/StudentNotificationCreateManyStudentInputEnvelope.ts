import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationCreateManyStudentInput } from "../inputs/StudentNotificationCreateManyStudentInput";

@TypeGraphQL.InputType("StudentNotificationCreateManyStudentInputEnvelope", {
  isAbstract: true
})
export class StudentNotificationCreateManyStudentInputEnvelope {
  @TypeGraphQL.Field(_type => [StudentNotificationCreateManyStudentInput], {
    nullable: false
  })
  data!: StudentNotificationCreateManyStudentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

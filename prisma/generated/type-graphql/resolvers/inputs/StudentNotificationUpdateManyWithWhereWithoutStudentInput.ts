import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentNotificationScalarWhereInput } from "../inputs/StudentNotificationScalarWhereInput";
import { StudentNotificationUpdateManyMutationInput } from "../inputs/StudentNotificationUpdateManyMutationInput";

@TypeGraphQL.InputType("StudentNotificationUpdateManyWithWhereWithoutStudentInput", {
  isAbstract: true
})
export class StudentNotificationUpdateManyWithWhereWithoutStudentInput {
  @TypeGraphQL.Field(_type => StudentNotificationScalarWhereInput, {
    nullable: false
  })
  where!: StudentNotificationScalarWhereInput;

  @TypeGraphQL.Field(_type => StudentNotificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentNotificationUpdateManyMutationInput;
}

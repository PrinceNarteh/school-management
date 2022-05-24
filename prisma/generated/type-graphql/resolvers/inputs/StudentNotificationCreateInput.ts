import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateNestedOneWithoutNotificationsInput } from "../inputs/StudentCreateNestedOneWithoutNotificationsInput";

@TypeGraphQL.InputType("StudentNotificationCreateInput", {
  isAbstract: true
})
export class StudentNotificationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutNotificationsInput, {
    nullable: false
  })
  student!: StudentCreateNestedOneWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}

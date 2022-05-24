import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffFeedbackCreateManyStaffInput } from "../inputs/StaffFeedbackCreateManyStaffInput";

@TypeGraphQL.InputType("StaffFeedbackCreateManyStaffInputEnvelope", {
  isAbstract: true
})
export class StaffFeedbackCreateManyStaffInputEnvelope {
  @TypeGraphQL.Field(_type => [StaffFeedbackCreateManyStaffInput], {
    nullable: false
  })
  data!: StaffFeedbackCreateManyStaffInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

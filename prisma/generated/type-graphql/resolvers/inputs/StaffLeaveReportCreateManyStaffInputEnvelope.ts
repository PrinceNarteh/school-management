import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffLeaveReportCreateManyStaffInput } from "../inputs/StaffLeaveReportCreateManyStaffInput";

@TypeGraphQL.InputType("StaffLeaveReportCreateManyStaffInputEnvelope", {
  isAbstract: true
})
export class StaffLeaveReportCreateManyStaffInputEnvelope {
  @TypeGraphQL.Field(_type => [StaffLeaveReportCreateManyStaffInput], {
    nullable: false
  })
  data!: StaffLeaveReportCreateManyStaffInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

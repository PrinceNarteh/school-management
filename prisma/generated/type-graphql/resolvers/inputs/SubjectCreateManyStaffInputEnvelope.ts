import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyStaffInput } from "../inputs/SubjectCreateManyStaffInput";

@TypeGraphQL.InputType("SubjectCreateManyStaffInputEnvelope", {
  isAbstract: true
})
export class SubjectCreateManyStaffInputEnvelope {
  @TypeGraphQL.Field(_type => [SubjectCreateManyStaffInput], {
    nullable: false
  })
  data!: SubjectCreateManyStaffInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyCourseInput } from "../inputs/SubjectCreateManyCourseInput";

@TypeGraphQL.InputType("SubjectCreateManyCourseInputEnvelope", {
  isAbstract: true
})
export class SubjectCreateManyCourseInputEnvelope {
  @TypeGraphQL.Field(_type => [SubjectCreateManyCourseInput], {
    nullable: false
  })
  data!: SubjectCreateManyCourseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyCourseInputEnvelope } from "../inputs/SubjectCreateManyCourseInputEnvelope";
import { SubjectCreateOrConnectWithoutCourseInput } from "../inputs/SubjectCreateOrConnectWithoutCourseInput";
import { SubjectCreateWithoutCourseInput } from "../inputs/SubjectCreateWithoutCourseInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateNestedManyWithoutCourseInput", {
  isAbstract: true
})
export class SubjectCreateNestedManyWithoutCourseInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutCourseInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyCourseInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyCourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput[] | undefined;
}

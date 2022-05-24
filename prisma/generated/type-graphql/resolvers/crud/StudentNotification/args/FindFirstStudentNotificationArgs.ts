import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentNotificationOrderByWithRelationInput } from "../../../inputs/StudentNotificationOrderByWithRelationInput";
import { StudentNotificationWhereInput } from "../../../inputs/StudentNotificationWhereInput";
import { StudentNotificationWhereUniqueInput } from "../../../inputs/StudentNotificationWhereUniqueInput";
import { StudentNotificationScalarFieldEnum } from "../../../../enums/StudentNotificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStudentNotificationArgs {
  @TypeGraphQL.Field(_type => StudentNotificationWhereInput, {
    nullable: true
  })
  where?: StudentNotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StudentNotificationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentNotificationWhereUniqueInput, {
    nullable: true
  })
  cursor?: StudentNotificationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StudentNotificationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "message" | "studentId" | "createdAt" | "updatedAt"> | undefined;
}

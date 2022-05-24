import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAssessmentArgs } from "./args/AggregateAssessmentArgs";
import { Assessment } from "../../../models/Assessment";
import { AggregateAssessment } from "../../outputs/AggregateAssessment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assessment)
export class AggregateAssessmentResolver {
  @TypeGraphQL.Query(_returns => AggregateAssessment, {
    nullable: false
  })
  async aggregateAssessment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssessmentArgs): Promise<AggregateAssessment> {
    return getPrismaFromContext(ctx).assessment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

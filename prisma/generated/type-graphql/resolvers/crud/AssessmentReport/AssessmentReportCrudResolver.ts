import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAssessmentReportArgs } from "./args/AggregateAssessmentReportArgs";
import { CreateAssessmentReportArgs } from "./args/CreateAssessmentReportArgs";
import { CreateManyAssessmentReportArgs } from "./args/CreateManyAssessmentReportArgs";
import { DeleteAssessmentReportArgs } from "./args/DeleteAssessmentReportArgs";
import { DeleteManyAssessmentReportArgs } from "./args/DeleteManyAssessmentReportArgs";
import { FindFirstAssessmentReportArgs } from "./args/FindFirstAssessmentReportArgs";
import { FindManyAssessmentReportArgs } from "./args/FindManyAssessmentReportArgs";
import { FindUniqueAssessmentReportArgs } from "./args/FindUniqueAssessmentReportArgs";
import { GroupByAssessmentReportArgs } from "./args/GroupByAssessmentReportArgs";
import { UpdateAssessmentReportArgs } from "./args/UpdateAssessmentReportArgs";
import { UpdateManyAssessmentReportArgs } from "./args/UpdateManyAssessmentReportArgs";
import { UpsertAssessmentReportArgs } from "./args/UpsertAssessmentReportArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AssessmentReport } from "../../../models/AssessmentReport";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAssessmentReport } from "../../outputs/AggregateAssessmentReport";
import { AssessmentReportGroupBy } from "../../outputs/AssessmentReportGroupBy";

@TypeGraphQL.Resolver(_of => AssessmentReport)
export class AssessmentReportCrudResolver {
  @TypeGraphQL.Query(_returns => AssessmentReport, {
    nullable: true
  })
  async assessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAssessmentReportArgs): Promise<AssessmentReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AssessmentReport, {
    nullable: true
  })
  async findFirstAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAssessmentReportArgs): Promise<AssessmentReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AssessmentReport], {
    nullable: false
  })
  async assessmentReports(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAssessmentReportArgs): Promise<AssessmentReport[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AssessmentReport, {
    nullable: false
  })
  async createAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateAssessmentReportArgs): Promise<AssessmentReport> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAssessmentReportArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AssessmentReport, {
    nullable: true
  })
  async deleteAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteAssessmentReportArgs): Promise<AssessmentReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AssessmentReport, {
    nullable: true
  })
  async updateAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateAssessmentReportArgs): Promise<AssessmentReport | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAssessmentReportArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAssessmentReportArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AssessmentReport, {
    nullable: false
  })
  async upsertAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertAssessmentReportArgs): Promise<AssessmentReport> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateAssessmentReport, {
    nullable: false
  })
  async aggregateAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssessmentReportArgs): Promise<AggregateAssessmentReport> {
    return getPrismaFromContext(ctx).assessmentReport.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [AssessmentReportGroupBy], {
    nullable: false
  })
  async groupByAssessmentReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAssessmentReportArgs): Promise<AssessmentReportGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assessmentReport.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

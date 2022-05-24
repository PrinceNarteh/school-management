import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStaffFeedbackArgs } from "./args/AggregateStaffFeedbackArgs";
import { CreateManyStaffFeedbackArgs } from "./args/CreateManyStaffFeedbackArgs";
import { CreateStaffFeedbackArgs } from "./args/CreateStaffFeedbackArgs";
import { DeleteManyStaffFeedbackArgs } from "./args/DeleteManyStaffFeedbackArgs";
import { DeleteStaffFeedbackArgs } from "./args/DeleteStaffFeedbackArgs";
import { FindFirstStaffFeedbackArgs } from "./args/FindFirstStaffFeedbackArgs";
import { FindManyStaffFeedbackArgs } from "./args/FindManyStaffFeedbackArgs";
import { FindUniqueStaffFeedbackArgs } from "./args/FindUniqueStaffFeedbackArgs";
import { GroupByStaffFeedbackArgs } from "./args/GroupByStaffFeedbackArgs";
import { UpdateManyStaffFeedbackArgs } from "./args/UpdateManyStaffFeedbackArgs";
import { UpdateStaffFeedbackArgs } from "./args/UpdateStaffFeedbackArgs";
import { UpsertStaffFeedbackArgs } from "./args/UpsertStaffFeedbackArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { StaffFeedback } from "../../../models/StaffFeedback";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStaffFeedback } from "../../outputs/AggregateStaffFeedback";
import { StaffFeedbackGroupBy } from "../../outputs/StaffFeedbackGroupBy";

@TypeGraphQL.Resolver(_of => StaffFeedback)
export class StaffFeedbackCrudResolver {
  @TypeGraphQL.Query(_returns => StaffFeedback, {
    nullable: true
  })
  async staffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStaffFeedbackArgs): Promise<StaffFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => StaffFeedback, {
    nullable: true
  })
  async findFirstStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStaffFeedbackArgs): Promise<StaffFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [StaffFeedback], {
    nullable: false
  })
  async staffFeedbacks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStaffFeedbackArgs): Promise<StaffFeedback[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffFeedback, {
    nullable: false
  })
  async createStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateStaffFeedbackArgs): Promise<StaffFeedback> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyStaffFeedbackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffFeedback, {
    nullable: true
  })
  async deleteStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteStaffFeedbackArgs): Promise<StaffFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffFeedback, {
    nullable: true
  })
  async updateStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStaffFeedbackArgs): Promise<StaffFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyStaffFeedbackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyStaffFeedbackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffFeedback, {
    nullable: false
  })
  async upsertStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertStaffFeedbackArgs): Promise<StaffFeedback> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateStaffFeedback, {
    nullable: false
  })
  async aggregateStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStaffFeedbackArgs): Promise<AggregateStaffFeedback> {
    return getPrismaFromContext(ctx).staffFeedback.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [StaffFeedbackGroupBy], {
    nullable: false
  })
  async groupByStaffFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStaffFeedbackArgs): Promise<StaffFeedbackGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffFeedback.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

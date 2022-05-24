import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStaffNotificationArgs } from "./args/AggregateStaffNotificationArgs";
import { CreateManyStaffNotificationArgs } from "./args/CreateManyStaffNotificationArgs";
import { CreateStaffNotificationArgs } from "./args/CreateStaffNotificationArgs";
import { DeleteManyStaffNotificationArgs } from "./args/DeleteManyStaffNotificationArgs";
import { DeleteStaffNotificationArgs } from "./args/DeleteStaffNotificationArgs";
import { FindFirstStaffNotificationArgs } from "./args/FindFirstStaffNotificationArgs";
import { FindManyStaffNotificationArgs } from "./args/FindManyStaffNotificationArgs";
import { FindUniqueStaffNotificationArgs } from "./args/FindUniqueStaffNotificationArgs";
import { GroupByStaffNotificationArgs } from "./args/GroupByStaffNotificationArgs";
import { UpdateManyStaffNotificationArgs } from "./args/UpdateManyStaffNotificationArgs";
import { UpdateStaffNotificationArgs } from "./args/UpdateStaffNotificationArgs";
import { UpsertStaffNotificationArgs } from "./args/UpsertStaffNotificationArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { StaffNotification } from "../../../models/StaffNotification";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStaffNotification } from "../../outputs/AggregateStaffNotification";
import { StaffNotificationGroupBy } from "../../outputs/StaffNotificationGroupBy";

@TypeGraphQL.Resolver(_of => StaffNotification)
export class StaffNotificationCrudResolver {
  @TypeGraphQL.Query(_returns => StaffNotification, {
    nullable: true
  })
  async staffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStaffNotificationArgs): Promise<StaffNotification | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => StaffNotification, {
    nullable: true
  })
  async findFirstStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStaffNotificationArgs): Promise<StaffNotification | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [StaffNotification], {
    nullable: false
  })
  async staffNotifications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStaffNotificationArgs): Promise<StaffNotification[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffNotification, {
    nullable: false
  })
  async createStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateStaffNotificationArgs): Promise<StaffNotification> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyStaffNotificationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffNotification, {
    nullable: true
  })
  async deleteStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteStaffNotificationArgs): Promise<StaffNotification | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffNotification, {
    nullable: true
  })
  async updateStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStaffNotificationArgs): Promise<StaffNotification | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyStaffNotificationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyStaffNotificationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StaffNotification, {
    nullable: false
  })
  async upsertStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertStaffNotificationArgs): Promise<StaffNotification> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateStaffNotification, {
    nullable: false
  })
  async aggregateStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStaffNotificationArgs): Promise<AggregateStaffNotification> {
    return getPrismaFromContext(ctx).staffNotification.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [StaffNotificationGroupBy], {
    nullable: false
  })
  async groupByStaffNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStaffNotificationArgs): Promise<StaffNotificationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).staffNotification.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStudentFeedbackArgs } from "./args/AggregateStudentFeedbackArgs";
import { CreateManyStudentFeedbackArgs } from "./args/CreateManyStudentFeedbackArgs";
import { CreateStudentFeedbackArgs } from "./args/CreateStudentFeedbackArgs";
import { DeleteManyStudentFeedbackArgs } from "./args/DeleteManyStudentFeedbackArgs";
import { DeleteStudentFeedbackArgs } from "./args/DeleteStudentFeedbackArgs";
import { FindFirstStudentFeedbackArgs } from "./args/FindFirstStudentFeedbackArgs";
import { FindManyStudentFeedbackArgs } from "./args/FindManyStudentFeedbackArgs";
import { FindUniqueStudentFeedbackArgs } from "./args/FindUniqueStudentFeedbackArgs";
import { GroupByStudentFeedbackArgs } from "./args/GroupByStudentFeedbackArgs";
import { UpdateManyStudentFeedbackArgs } from "./args/UpdateManyStudentFeedbackArgs";
import { UpdateStudentFeedbackArgs } from "./args/UpdateStudentFeedbackArgs";
import { UpsertStudentFeedbackArgs } from "./args/UpsertStudentFeedbackArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { StudentFeedback } from "../../../models/StudentFeedback";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStudentFeedback } from "../../outputs/AggregateStudentFeedback";
import { StudentFeedbackGroupBy } from "../../outputs/StudentFeedbackGroupBy";

@TypeGraphQL.Resolver(_of => StudentFeedback)
export class StudentFeedbackCrudResolver {
  @TypeGraphQL.Query(_returns => StudentFeedback, {
    nullable: true
  })
  async studentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStudentFeedbackArgs): Promise<StudentFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => StudentFeedback, {
    nullable: true
  })
  async findFirstStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStudentFeedbackArgs): Promise<StudentFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [StudentFeedback], {
    nullable: false
  })
  async studentFeedbacks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStudentFeedbackArgs): Promise<StudentFeedback[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StudentFeedback, {
    nullable: false
  })
  async createStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateStudentFeedbackArgs): Promise<StudentFeedback> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyStudentFeedbackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StudentFeedback, {
    nullable: true
  })
  async deleteStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteStudentFeedbackArgs): Promise<StudentFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StudentFeedback, {
    nullable: true
  })
  async updateStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStudentFeedbackArgs): Promise<StudentFeedback | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyStudentFeedbackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyStudentFeedbackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StudentFeedback, {
    nullable: false
  })
  async upsertStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertStudentFeedbackArgs): Promise<StudentFeedback> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateStudentFeedback, {
    nullable: false
  })
  async aggregateStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStudentFeedbackArgs): Promise<AggregateStudentFeedback> {
    return getPrismaFromContext(ctx).studentFeedback.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [StudentFeedbackGroupBy], {
    nullable: false
  })
  async groupByStudentFeedback(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStudentFeedbackArgs): Promise<StudentFeedbackGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studentFeedback.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

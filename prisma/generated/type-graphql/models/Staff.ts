import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { StaffFeedback } from "../models/StaffFeedback";
import { StaffLeaveReport } from "../models/StaffLeaveReport";
import { StaffNotification } from "../models/StaffNotification";
import { Subject } from "../models/Subject";
import { Gender } from "../enums/Gender";
import { StaffCount } from "../resolvers/outputs/StaffCount";

@TypeGraphQL.ObjectType("Staff", {
  isAbstract: true
})
export class Staff {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middleName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  subjects?: Subject[];

  staffNotification?: StaffNotification[];

  staffLeaveReport?: StaffLeaveReport[];

  staffFeedback?: StaffFeedback[];

  @TypeGraphQL.Field(_type => StaffCount, {
    nullable: true
  })
  _count?: StaffCount | null;
}

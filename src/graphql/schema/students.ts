import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

enum Gender {
  MALE,
  FEMALE,
}

registerEnumType(Gender, {
  name: "Gender",
});

ObjectType();
export class Student {
  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field()
  lastName: string;

  @Field(() => Gender)
  gender: Gender;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

import { Resolver, Query, Arg } from "type-graphql";
import prisma from "../../lib/prisma";
import { Student } from "../schema/students";
import { Gender } from "@prisma/client";

@Resolver(Student)
export class StudentResolver {
  @Query(() => [Student])
  async students(): Promise<Student[]> {
    return [
      {
        firstName: "John",
        middleName: "Smith",
        lastName: "Doe",
        email: "john.doe@email.com",
        gender: Gender.MALE,
        
      },
    ];
  }
}

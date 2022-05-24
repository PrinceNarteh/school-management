import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Admin: crudResolvers.AdminCrudResolver,
  Staff: crudResolvers.StaffCrudResolver,
  StaffFeedback: crudResolvers.StaffFeedbackCrudResolver,
  StaffLeaveReport: crudResolvers.StaffLeaveReportCrudResolver,
  StaffNotification: crudResolvers.StaffNotificationCrudResolver,
  Student: crudResolvers.StudentCrudResolver,
  StudentFeedback: crudResolvers.StudentFeedbackCrudResolver,
  StudentLeaveReport: crudResolvers.StudentLeaveReportCrudResolver,
  StudentNotification: crudResolvers.StudentNotificationCrudResolver,
  Assessment: crudResolvers.AssessmentCrudResolver,
  AssessmentReport: crudResolvers.AssessmentReportCrudResolver,
  Course: crudResolvers.CourseCrudResolver,
  Subject: crudResolvers.SubjectCrudResolver
};
const actionResolversMap = {
  Admin: {
    admin: actionResolvers.FindUniqueAdminResolver,
    findFirstAdmin: actionResolvers.FindFirstAdminResolver,
    admins: actionResolvers.FindManyAdminResolver,
    createAdmin: actionResolvers.CreateAdminResolver,
    createManyAdmin: actionResolvers.CreateManyAdminResolver,
    deleteAdmin: actionResolvers.DeleteAdminResolver,
    updateAdmin: actionResolvers.UpdateAdminResolver,
    deleteManyAdmin: actionResolvers.DeleteManyAdminResolver,
    updateManyAdmin: actionResolvers.UpdateManyAdminResolver,
    upsertAdmin: actionResolvers.UpsertAdminResolver,
    aggregateAdmin: actionResolvers.AggregateAdminResolver,
    groupByAdmin: actionResolvers.GroupByAdminResolver
  },
  Staff: {
    findUniqueStaff: actionResolvers.FindUniqueStaffResolver,
    findFirstStaff: actionResolvers.FindFirstStaffResolver,
    findManyStaff: actionResolvers.FindManyStaffResolver,
    createStaff: actionResolvers.CreateStaffResolver,
    createManyStaff: actionResolvers.CreateManyStaffResolver,
    deleteStaff: actionResolvers.DeleteStaffResolver,
    updateStaff: actionResolvers.UpdateStaffResolver,
    deleteManyStaff: actionResolvers.DeleteManyStaffResolver,
    updateManyStaff: actionResolvers.UpdateManyStaffResolver,
    upsertStaff: actionResolvers.UpsertStaffResolver,
    aggregateStaff: actionResolvers.AggregateStaffResolver,
    groupByStaff: actionResolvers.GroupByStaffResolver
  },
  StaffFeedback: {
    staffFeedback: actionResolvers.FindUniqueStaffFeedbackResolver,
    findFirstStaffFeedback: actionResolvers.FindFirstStaffFeedbackResolver,
    staffFeedbacks: actionResolvers.FindManyStaffFeedbackResolver,
    createStaffFeedback: actionResolvers.CreateStaffFeedbackResolver,
    createManyStaffFeedback: actionResolvers.CreateManyStaffFeedbackResolver,
    deleteStaffFeedback: actionResolvers.DeleteStaffFeedbackResolver,
    updateStaffFeedback: actionResolvers.UpdateStaffFeedbackResolver,
    deleteManyStaffFeedback: actionResolvers.DeleteManyStaffFeedbackResolver,
    updateManyStaffFeedback: actionResolvers.UpdateManyStaffFeedbackResolver,
    upsertStaffFeedback: actionResolvers.UpsertStaffFeedbackResolver,
    aggregateStaffFeedback: actionResolvers.AggregateStaffFeedbackResolver,
    groupByStaffFeedback: actionResolvers.GroupByStaffFeedbackResolver
  },
  StaffLeaveReport: {
    staffLeaveReport: actionResolvers.FindUniqueStaffLeaveReportResolver,
    findFirstStaffLeaveReport: actionResolvers.FindFirstStaffLeaveReportResolver,
    staffLeaveReports: actionResolvers.FindManyStaffLeaveReportResolver,
    createStaffLeaveReport: actionResolvers.CreateStaffLeaveReportResolver,
    createManyStaffLeaveReport: actionResolvers.CreateManyStaffLeaveReportResolver,
    deleteStaffLeaveReport: actionResolvers.DeleteStaffLeaveReportResolver,
    updateStaffLeaveReport: actionResolvers.UpdateStaffLeaveReportResolver,
    deleteManyStaffLeaveReport: actionResolvers.DeleteManyStaffLeaveReportResolver,
    updateManyStaffLeaveReport: actionResolvers.UpdateManyStaffLeaveReportResolver,
    upsertStaffLeaveReport: actionResolvers.UpsertStaffLeaveReportResolver,
    aggregateStaffLeaveReport: actionResolvers.AggregateStaffLeaveReportResolver,
    groupByStaffLeaveReport: actionResolvers.GroupByStaffLeaveReportResolver
  },
  StaffNotification: {
    staffNotification: actionResolvers.FindUniqueStaffNotificationResolver,
    findFirstStaffNotification: actionResolvers.FindFirstStaffNotificationResolver,
    staffNotifications: actionResolvers.FindManyStaffNotificationResolver,
    createStaffNotification: actionResolvers.CreateStaffNotificationResolver,
    createManyStaffNotification: actionResolvers.CreateManyStaffNotificationResolver,
    deleteStaffNotification: actionResolvers.DeleteStaffNotificationResolver,
    updateStaffNotification: actionResolvers.UpdateStaffNotificationResolver,
    deleteManyStaffNotification: actionResolvers.DeleteManyStaffNotificationResolver,
    updateManyStaffNotification: actionResolvers.UpdateManyStaffNotificationResolver,
    upsertStaffNotification: actionResolvers.UpsertStaffNotificationResolver,
    aggregateStaffNotification: actionResolvers.AggregateStaffNotificationResolver,
    groupByStaffNotification: actionResolvers.GroupByStaffNotificationResolver
  },
  Student: {
    student: actionResolvers.FindUniqueStudentResolver,
    findFirstStudent: actionResolvers.FindFirstStudentResolver,
    students: actionResolvers.FindManyStudentResolver,
    createStudent: actionResolvers.CreateStudentResolver,
    createManyStudent: actionResolvers.CreateManyStudentResolver,
    deleteStudent: actionResolvers.DeleteStudentResolver,
    updateStudent: actionResolvers.UpdateStudentResolver,
    deleteManyStudent: actionResolvers.DeleteManyStudentResolver,
    updateManyStudent: actionResolvers.UpdateManyStudentResolver,
    upsertStudent: actionResolvers.UpsertStudentResolver,
    aggregateStudent: actionResolvers.AggregateStudentResolver,
    groupByStudent: actionResolvers.GroupByStudentResolver
  },
  StudentFeedback: {
    studentFeedback: actionResolvers.FindUniqueStudentFeedbackResolver,
    findFirstStudentFeedback: actionResolvers.FindFirstStudentFeedbackResolver,
    studentFeedbacks: actionResolvers.FindManyStudentFeedbackResolver,
    createStudentFeedback: actionResolvers.CreateStudentFeedbackResolver,
    createManyStudentFeedback: actionResolvers.CreateManyStudentFeedbackResolver,
    deleteStudentFeedback: actionResolvers.DeleteStudentFeedbackResolver,
    updateStudentFeedback: actionResolvers.UpdateStudentFeedbackResolver,
    deleteManyStudentFeedback: actionResolvers.DeleteManyStudentFeedbackResolver,
    updateManyStudentFeedback: actionResolvers.UpdateManyStudentFeedbackResolver,
    upsertStudentFeedback: actionResolvers.UpsertStudentFeedbackResolver,
    aggregateStudentFeedback: actionResolvers.AggregateStudentFeedbackResolver,
    groupByStudentFeedback: actionResolvers.GroupByStudentFeedbackResolver
  },
  StudentLeaveReport: {
    studentLeaveReport: actionResolvers.FindUniqueStudentLeaveReportResolver,
    findFirstStudentLeaveReport: actionResolvers.FindFirstStudentLeaveReportResolver,
    studentLeaveReports: actionResolvers.FindManyStudentLeaveReportResolver,
    createStudentLeaveReport: actionResolvers.CreateStudentLeaveReportResolver,
    createManyStudentLeaveReport: actionResolvers.CreateManyStudentLeaveReportResolver,
    deleteStudentLeaveReport: actionResolvers.DeleteStudentLeaveReportResolver,
    updateStudentLeaveReport: actionResolvers.UpdateStudentLeaveReportResolver,
    deleteManyStudentLeaveReport: actionResolvers.DeleteManyStudentLeaveReportResolver,
    updateManyStudentLeaveReport: actionResolvers.UpdateManyStudentLeaveReportResolver,
    upsertStudentLeaveReport: actionResolvers.UpsertStudentLeaveReportResolver,
    aggregateStudentLeaveReport: actionResolvers.AggregateStudentLeaveReportResolver,
    groupByStudentLeaveReport: actionResolvers.GroupByStudentLeaveReportResolver
  },
  StudentNotification: {
    studentNotification: actionResolvers.FindUniqueStudentNotificationResolver,
    findFirstStudentNotification: actionResolvers.FindFirstStudentNotificationResolver,
    studentNotifications: actionResolvers.FindManyStudentNotificationResolver,
    createStudentNotification: actionResolvers.CreateStudentNotificationResolver,
    createManyStudentNotification: actionResolvers.CreateManyStudentNotificationResolver,
    deleteStudentNotification: actionResolvers.DeleteStudentNotificationResolver,
    updateStudentNotification: actionResolvers.UpdateStudentNotificationResolver,
    deleteManyStudentNotification: actionResolvers.DeleteManyStudentNotificationResolver,
    updateManyStudentNotification: actionResolvers.UpdateManyStudentNotificationResolver,
    upsertStudentNotification: actionResolvers.UpsertStudentNotificationResolver,
    aggregateStudentNotification: actionResolvers.AggregateStudentNotificationResolver,
    groupByStudentNotification: actionResolvers.GroupByStudentNotificationResolver
  },
  Assessment: {
    assessment: actionResolvers.FindUniqueAssessmentResolver,
    findFirstAssessment: actionResolvers.FindFirstAssessmentResolver,
    assessments: actionResolvers.FindManyAssessmentResolver,
    createAssessment: actionResolvers.CreateAssessmentResolver,
    createManyAssessment: actionResolvers.CreateManyAssessmentResolver,
    deleteAssessment: actionResolvers.DeleteAssessmentResolver,
    updateAssessment: actionResolvers.UpdateAssessmentResolver,
    deleteManyAssessment: actionResolvers.DeleteManyAssessmentResolver,
    updateManyAssessment: actionResolvers.UpdateManyAssessmentResolver,
    upsertAssessment: actionResolvers.UpsertAssessmentResolver,
    aggregateAssessment: actionResolvers.AggregateAssessmentResolver,
    groupByAssessment: actionResolvers.GroupByAssessmentResolver
  },
  AssessmentReport: {
    assessmentReport: actionResolvers.FindUniqueAssessmentReportResolver,
    findFirstAssessmentReport: actionResolvers.FindFirstAssessmentReportResolver,
    assessmentReports: actionResolvers.FindManyAssessmentReportResolver,
    createAssessmentReport: actionResolvers.CreateAssessmentReportResolver,
    createManyAssessmentReport: actionResolvers.CreateManyAssessmentReportResolver,
    deleteAssessmentReport: actionResolvers.DeleteAssessmentReportResolver,
    updateAssessmentReport: actionResolvers.UpdateAssessmentReportResolver,
    deleteManyAssessmentReport: actionResolvers.DeleteManyAssessmentReportResolver,
    updateManyAssessmentReport: actionResolvers.UpdateManyAssessmentReportResolver,
    upsertAssessmentReport: actionResolvers.UpsertAssessmentReportResolver,
    aggregateAssessmentReport: actionResolvers.AggregateAssessmentReportResolver,
    groupByAssessmentReport: actionResolvers.GroupByAssessmentReportResolver
  },
  Course: {
    course: actionResolvers.FindUniqueCourseResolver,
    findFirstCourse: actionResolvers.FindFirstCourseResolver,
    courses: actionResolvers.FindManyCourseResolver,
    createCourse: actionResolvers.CreateCourseResolver,
    createManyCourse: actionResolvers.CreateManyCourseResolver,
    deleteCourse: actionResolvers.DeleteCourseResolver,
    updateCourse: actionResolvers.UpdateCourseResolver,
    deleteManyCourse: actionResolvers.DeleteManyCourseResolver,
    updateManyCourse: actionResolvers.UpdateManyCourseResolver,
    upsertCourse: actionResolvers.UpsertCourseResolver,
    aggregateCourse: actionResolvers.AggregateCourseResolver,
    groupByCourse: actionResolvers.GroupByCourseResolver
  },
  Subject: {
    subject: actionResolvers.FindUniqueSubjectResolver,
    findFirstSubject: actionResolvers.FindFirstSubjectResolver,
    subjects: actionResolvers.FindManySubjectResolver,
    createSubject: actionResolvers.CreateSubjectResolver,
    createManySubject: actionResolvers.CreateManySubjectResolver,
    deleteSubject: actionResolvers.DeleteSubjectResolver,
    updateSubject: actionResolvers.UpdateSubjectResolver,
    deleteManySubject: actionResolvers.DeleteManySubjectResolver,
    updateManySubject: actionResolvers.UpdateManySubjectResolver,
    upsertSubject: actionResolvers.UpsertSubjectResolver,
    aggregateSubject: actionResolvers.AggregateSubjectResolver,
    groupBySubject: actionResolvers.GroupBySubjectResolver
  }
};
const crudResolversInfo = {
  Admin: ["admin", "findFirstAdmin", "admins", "createAdmin", "createManyAdmin", "deleteAdmin", "updateAdmin", "deleteManyAdmin", "updateManyAdmin", "upsertAdmin", "aggregateAdmin", "groupByAdmin"],
  Staff: ["findUniqueStaff", "findFirstStaff", "findManyStaff", "createStaff", "createManyStaff", "deleteStaff", "updateStaff", "deleteManyStaff", "updateManyStaff", "upsertStaff", "aggregateStaff", "groupByStaff"],
  StaffFeedback: ["staffFeedback", "findFirstStaffFeedback", "staffFeedbacks", "createStaffFeedback", "createManyStaffFeedback", "deleteStaffFeedback", "updateStaffFeedback", "deleteManyStaffFeedback", "updateManyStaffFeedback", "upsertStaffFeedback", "aggregateStaffFeedback", "groupByStaffFeedback"],
  StaffLeaveReport: ["staffLeaveReport", "findFirstStaffLeaveReport", "staffLeaveReports", "createStaffLeaveReport", "createManyStaffLeaveReport", "deleteStaffLeaveReport", "updateStaffLeaveReport", "deleteManyStaffLeaveReport", "updateManyStaffLeaveReport", "upsertStaffLeaveReport", "aggregateStaffLeaveReport", "groupByStaffLeaveReport"],
  StaffNotification: ["staffNotification", "findFirstStaffNotification", "staffNotifications", "createStaffNotification", "createManyStaffNotification", "deleteStaffNotification", "updateStaffNotification", "deleteManyStaffNotification", "updateManyStaffNotification", "upsertStaffNotification", "aggregateStaffNotification", "groupByStaffNotification"],
  Student: ["student", "findFirstStudent", "students", "createStudent", "createManyStudent", "deleteStudent", "updateStudent", "deleteManyStudent", "updateManyStudent", "upsertStudent", "aggregateStudent", "groupByStudent"],
  StudentFeedback: ["studentFeedback", "findFirstStudentFeedback", "studentFeedbacks", "createStudentFeedback", "createManyStudentFeedback", "deleteStudentFeedback", "updateStudentFeedback", "deleteManyStudentFeedback", "updateManyStudentFeedback", "upsertStudentFeedback", "aggregateStudentFeedback", "groupByStudentFeedback"],
  StudentLeaveReport: ["studentLeaveReport", "findFirstStudentLeaveReport", "studentLeaveReports", "createStudentLeaveReport", "createManyStudentLeaveReport", "deleteStudentLeaveReport", "updateStudentLeaveReport", "deleteManyStudentLeaveReport", "updateManyStudentLeaveReport", "upsertStudentLeaveReport", "aggregateStudentLeaveReport", "groupByStudentLeaveReport"],
  StudentNotification: ["studentNotification", "findFirstStudentNotification", "studentNotifications", "createStudentNotification", "createManyStudentNotification", "deleteStudentNotification", "updateStudentNotification", "deleteManyStudentNotification", "updateManyStudentNotification", "upsertStudentNotification", "aggregateStudentNotification", "groupByStudentNotification"],
  Assessment: ["assessment", "findFirstAssessment", "assessments", "createAssessment", "createManyAssessment", "deleteAssessment", "updateAssessment", "deleteManyAssessment", "updateManyAssessment", "upsertAssessment", "aggregateAssessment", "groupByAssessment"],
  AssessmentReport: ["assessmentReport", "findFirstAssessmentReport", "assessmentReports", "createAssessmentReport", "createManyAssessmentReport", "deleteAssessmentReport", "updateAssessmentReport", "deleteManyAssessmentReport", "updateManyAssessmentReport", "upsertAssessmentReport", "aggregateAssessmentReport", "groupByAssessmentReport"],
  Course: ["course", "findFirstCourse", "courses", "createCourse", "createManyCourse", "deleteCourse", "updateCourse", "deleteManyCourse", "updateManyCourse", "upsertCourse", "aggregateCourse", "groupByCourse"],
  Subject: ["subject", "findFirstSubject", "subjects", "createSubject", "createManySubject", "deleteSubject", "updateSubject", "deleteManySubject", "updateManySubject", "upsertSubject", "aggregateSubject", "groupBySubject"]
};
const argsInfo = {
  FindUniqueAdminArgs: ["where"],
  FindFirstAdminArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAdminArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAdminArgs: ["data"],
  CreateManyAdminArgs: ["data", "skipDuplicates"],
  DeleteAdminArgs: ["where"],
  UpdateAdminArgs: ["data", "where"],
  DeleteManyAdminArgs: ["where"],
  UpdateManyAdminArgs: ["data", "where"],
  UpsertAdminArgs: ["where", "create", "update"],
  AggregateAdminArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAdminArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStaffArgs: ["where"],
  FindFirstStaffArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStaffArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStaffArgs: ["data"],
  CreateManyStaffArgs: ["data", "skipDuplicates"],
  DeleteStaffArgs: ["where"],
  UpdateStaffArgs: ["data", "where"],
  DeleteManyStaffArgs: ["where"],
  UpdateManyStaffArgs: ["data", "where"],
  UpsertStaffArgs: ["where", "create", "update"],
  AggregateStaffArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStaffArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStaffFeedbackArgs: ["where"],
  FindFirstStaffFeedbackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStaffFeedbackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStaffFeedbackArgs: ["data"],
  CreateManyStaffFeedbackArgs: ["data", "skipDuplicates"],
  DeleteStaffFeedbackArgs: ["where"],
  UpdateStaffFeedbackArgs: ["data", "where"],
  DeleteManyStaffFeedbackArgs: ["where"],
  UpdateManyStaffFeedbackArgs: ["data", "where"],
  UpsertStaffFeedbackArgs: ["where", "create", "update"],
  AggregateStaffFeedbackArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStaffFeedbackArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStaffLeaveReportArgs: ["where"],
  FindFirstStaffLeaveReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStaffLeaveReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStaffLeaveReportArgs: ["data"],
  CreateManyStaffLeaveReportArgs: ["data", "skipDuplicates"],
  DeleteStaffLeaveReportArgs: ["where"],
  UpdateStaffLeaveReportArgs: ["data", "where"],
  DeleteManyStaffLeaveReportArgs: ["where"],
  UpdateManyStaffLeaveReportArgs: ["data", "where"],
  UpsertStaffLeaveReportArgs: ["where", "create", "update"],
  AggregateStaffLeaveReportArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStaffLeaveReportArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStaffNotificationArgs: ["where"],
  FindFirstStaffNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStaffNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStaffNotificationArgs: ["data"],
  CreateManyStaffNotificationArgs: ["data", "skipDuplicates"],
  DeleteStaffNotificationArgs: ["where"],
  UpdateStaffNotificationArgs: ["data", "where"],
  DeleteManyStaffNotificationArgs: ["where"],
  UpdateManyStaffNotificationArgs: ["data", "where"],
  UpsertStaffNotificationArgs: ["where", "create", "update"],
  AggregateStaffNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStaffNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStudentArgs: ["where"],
  FindFirstStudentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStudentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStudentArgs: ["data"],
  CreateManyStudentArgs: ["data", "skipDuplicates"],
  DeleteStudentArgs: ["where"],
  UpdateStudentArgs: ["data", "where"],
  DeleteManyStudentArgs: ["where"],
  UpdateManyStudentArgs: ["data", "where"],
  UpsertStudentArgs: ["where", "create", "update"],
  AggregateStudentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStudentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStudentFeedbackArgs: ["where"],
  FindFirstStudentFeedbackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStudentFeedbackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStudentFeedbackArgs: ["data"],
  CreateManyStudentFeedbackArgs: ["data", "skipDuplicates"],
  DeleteStudentFeedbackArgs: ["where"],
  UpdateStudentFeedbackArgs: ["data", "where"],
  DeleteManyStudentFeedbackArgs: ["where"],
  UpdateManyStudentFeedbackArgs: ["data", "where"],
  UpsertStudentFeedbackArgs: ["where", "create", "update"],
  AggregateStudentFeedbackArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStudentFeedbackArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStudentLeaveReportArgs: ["where"],
  FindFirstStudentLeaveReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStudentLeaveReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStudentLeaveReportArgs: ["data"],
  CreateManyStudentLeaveReportArgs: ["data", "skipDuplicates"],
  DeleteStudentLeaveReportArgs: ["where"],
  UpdateStudentLeaveReportArgs: ["data", "where"],
  DeleteManyStudentLeaveReportArgs: ["where"],
  UpdateManyStudentLeaveReportArgs: ["data", "where"],
  UpsertStudentLeaveReportArgs: ["where", "create", "update"],
  AggregateStudentLeaveReportArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStudentLeaveReportArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStudentNotificationArgs: ["where"],
  FindFirstStudentNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStudentNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStudentNotificationArgs: ["data"],
  CreateManyStudentNotificationArgs: ["data", "skipDuplicates"],
  DeleteStudentNotificationArgs: ["where"],
  UpdateStudentNotificationArgs: ["data", "where"],
  DeleteManyStudentNotificationArgs: ["where"],
  UpdateManyStudentNotificationArgs: ["data", "where"],
  UpsertStudentNotificationArgs: ["where", "create", "update"],
  AggregateStudentNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStudentNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAssessmentArgs: ["where"],
  FindFirstAssessmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssessmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAssessmentArgs: ["data"],
  CreateManyAssessmentArgs: ["data", "skipDuplicates"],
  DeleteAssessmentArgs: ["where"],
  UpdateAssessmentArgs: ["data", "where"],
  DeleteManyAssessmentArgs: ["where"],
  UpdateManyAssessmentArgs: ["data", "where"],
  UpsertAssessmentArgs: ["where", "create", "update"],
  AggregateAssessmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAssessmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAssessmentReportArgs: ["where"],
  FindFirstAssessmentReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssessmentReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAssessmentReportArgs: ["data"],
  CreateManyAssessmentReportArgs: ["data", "skipDuplicates"],
  DeleteAssessmentReportArgs: ["where"],
  UpdateAssessmentReportArgs: ["data", "where"],
  DeleteManyAssessmentReportArgs: ["where"],
  UpdateManyAssessmentReportArgs: ["data", "where"],
  UpsertAssessmentReportArgs: ["where", "create", "update"],
  AggregateAssessmentReportArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAssessmentReportArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCourseArgs: ["where"],
  FindFirstCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCourseArgs: ["data"],
  CreateManyCourseArgs: ["data", "skipDuplicates"],
  DeleteCourseArgs: ["where"],
  UpdateCourseArgs: ["data", "where"],
  DeleteManyCourseArgs: ["where"],
  UpdateManyCourseArgs: ["data", "where"],
  UpsertCourseArgs: ["where", "create", "update"],
  AggregateCourseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCourseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSubjectArgs: ["where"],
  FindFirstSubjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSubjectArgs: ["data"],
  CreateManySubjectArgs: ["data", "skipDuplicates"],
  DeleteSubjectArgs: ["where"],
  UpdateSubjectArgs: ["data", "where"],
  DeleteManySubjectArgs: ["where"],
  UpdateManySubjectArgs: ["data", "where"],
  UpsertSubjectArgs: ["where", "create", "update"],
  AggregateSubjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySubjectArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Staff: relationResolvers.StaffRelationsResolver,
  StaffFeedback: relationResolvers.StaffFeedbackRelationsResolver,
  StaffLeaveReport: relationResolvers.StaffLeaveReportRelationsResolver,
  StaffNotification: relationResolvers.StaffNotificationRelationsResolver,
  Student: relationResolvers.StudentRelationsResolver,
  StudentFeedback: relationResolvers.StudentFeedbackRelationsResolver,
  StudentLeaveReport: relationResolvers.StudentLeaveReportRelationsResolver,
  StudentNotification: relationResolvers.StudentNotificationRelationsResolver,
  Assessment: relationResolvers.AssessmentRelationsResolver,
  AssessmentReport: relationResolvers.AssessmentReportRelationsResolver,
  Course: relationResolvers.CourseRelationsResolver,
  Subject: relationResolvers.SubjectRelationsResolver
};
const relationResolversInfo = {
  Staff: ["subjects", "staffNotification", "staffLeaveReport", "staffFeedback"],
  StaffFeedback: ["staff"],
  StaffLeaveReport: ["staff"],
  StaffNotification: ["staff"],
  Student: ["notifications", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentFeedback: ["student"],
  StudentLeaveReport: ["student"],
  StudentNotification: ["student"],
  Assessment: ["student", "subject", "assessmentReport"],
  AssessmentReport: ["student", "assessment"],
  Course: ["subjects"],
  Subject: ["course", "staff", "assessment"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Admin: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  Staff: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffFeedback: ["id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffLeaveReport: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffNotification: ["id", "message", "staffId", "createdAt", "updatedAt"],
  Student: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentFeedback: ["id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentLeaveReport: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentNotification: ["id", "message", "studentId", "createdAt", "updatedAt"],
  Assessment: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentReport: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  Course: ["id", "name", "createdAt", "updatedAt"],
  Subject: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAdmin: ["_count", "_avg", "_sum", "_min", "_max"],
  AdminGroupBy: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStaff: ["_count", "_avg", "_sum", "_min", "_max"],
  StaffGroupBy: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStaffFeedback: ["_count", "_avg", "_sum", "_min", "_max"],
  StaffFeedbackGroupBy: ["id", "staffId", "message", "reply", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStaffLeaveReport: ["_count", "_avg", "_sum", "_min", "_max"],
  StaffLeaveReportGroupBy: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStaffNotification: ["_count", "_avg", "_sum", "_min", "_max"],
  StaffNotificationGroupBy: ["id", "message", "staffId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStudent: ["_count", "_avg", "_sum", "_min", "_max"],
  StudentGroupBy: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStudentFeedback: ["_count", "_avg", "_sum", "_min", "_max"],
  StudentFeedbackGroupBy: ["id", "studentId", "message", "reply", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStudentLeaveReport: ["_count", "_avg", "_sum", "_min", "_max"],
  StudentLeaveReportGroupBy: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStudentNotification: ["_count", "_avg", "_sum", "_min", "_max"],
  StudentNotificationGroupBy: ["id", "message", "studentId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAssessment: ["_count", "_avg", "_sum", "_min", "_max"],
  AssessmentGroupBy: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAssessmentReport: ["_count", "_avg", "_sum", "_min", "_max"],
  AssessmentReportGroupBy: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourse: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseGroupBy: ["id", "name", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSubject: ["_count", "_avg", "_sum", "_min", "_max"],
  SubjectGroupBy: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AdminCountAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "_all"],
  AdminAvgAggregate: ["id"],
  AdminSumAggregate: ["id"],
  AdminMinAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminMaxAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffCount: ["subjects", "staffNotification", "staffLeaveReport", "staffFeedback"],
  StaffCountAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "_all"],
  StaffAvgAggregate: ["id"],
  StaffSumAggregate: ["id"],
  StaffMinAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffMaxAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffFeedbackCountAggregate: ["id", "staffId", "message", "reply", "createdAt", "updatedAt", "_all"],
  StaffFeedbackAvgAggregate: ["id", "staffId"],
  StaffFeedbackSumAggregate: ["id", "staffId"],
  StaffFeedbackMinAggregate: ["id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackMaxAggregate: ["id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffLeaveReportCountAggregate: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt", "_all"],
  StaffLeaveReportAvgAggregate: ["id", "staffId"],
  StaffLeaveReportSumAggregate: ["id", "staffId"],
  StaffLeaveReportMinAggregate: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportMaxAggregate: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffNotificationCountAggregate: ["id", "message", "staffId", "createdAt", "updatedAt", "_all"],
  StaffNotificationAvgAggregate: ["id", "staffId"],
  StaffNotificationSumAggregate: ["id", "staffId"],
  StaffNotificationMinAggregate: ["id", "message", "staffId", "createdAt", "updatedAt"],
  StaffNotificationMaxAggregate: ["id", "message", "staffId", "createdAt", "updatedAt"],
  StudentCount: ["notifications", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentCountAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "_all"],
  StudentAvgAggregate: ["id"],
  StudentSumAggregate: ["id"],
  StudentMinAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentMaxAggregate: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentFeedbackCountAggregate: ["id", "studentId", "message", "reply", "createdAt", "updatedAt", "_all"],
  StudentFeedbackAvgAggregate: ["id", "studentId"],
  StudentFeedbackSumAggregate: ["id", "studentId"],
  StudentFeedbackMinAggregate: ["id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackMaxAggregate: ["id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentLeaveReportCountAggregate: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt", "_all"],
  StudentLeaveReportAvgAggregate: ["id", "studentId"],
  StudentLeaveReportSumAggregate: ["id", "studentId"],
  StudentLeaveReportMinAggregate: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportMaxAggregate: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentNotificationCountAggregate: ["id", "message", "studentId", "createdAt", "updatedAt", "_all"],
  StudentNotificationAvgAggregate: ["id", "studentId"],
  StudentNotificationSumAggregate: ["id", "studentId"],
  StudentNotificationMinAggregate: ["id", "message", "studentId", "createdAt", "updatedAt"],
  StudentNotificationMaxAggregate: ["id", "message", "studentId", "createdAt", "updatedAt"],
  AssessmentCount: ["assessmentReport"],
  AssessmentCountAggregate: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt", "_all"],
  AssessmentAvgAggregate: ["id", "studentId", "subjectId"],
  AssessmentSumAggregate: ["id", "studentId", "subjectId"],
  AssessmentMinAggregate: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentMaxAggregate: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentReportCountAggregate: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt", "_all"],
  AssessmentReportAvgAggregate: ["id", "studentId", "assessmentId"],
  AssessmentReportSumAggregate: ["id", "studentId", "assessmentId"],
  AssessmentReportMinAggregate: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  AssessmentReportMaxAggregate: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  CourseCount: ["subjects"],
  CourseCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
  CourseAvgAggregate: ["id"],
  CourseSumAggregate: ["id"],
  CourseMinAggregate: ["id", "name", "createdAt", "updatedAt"],
  CourseMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
  SubjectCount: ["assessment"],
  SubjectCountAggregate: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt", "_all"],
  SubjectAvgAggregate: ["id", "courseId", "staffId"],
  SubjectSumAggregate: ["id", "courseId", "staffId"],
  SubjectMinAggregate: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt"],
  SubjectMaxAggregate: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  AdminWhereInput: ["AND", "OR", "NOT", "id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminOrderByWithRelationInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminWhereUniqueInput: ["id", "email"],
  AdminOrderByWithAggregationInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  AdminScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffWhereInput: ["AND", "OR", "NOT", "id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffLeaveReport", "staffFeedback"],
  StaffOrderByWithRelationInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffLeaveReport", "staffFeedback"],
  StaffWhereUniqueInput: ["id", "email"],
  StaffOrderByWithAggregationInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StaffScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffFeedbackWhereInput: ["AND", "OR", "NOT", "id", "staffId", "staff", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackOrderByWithRelationInput: ["id", "staffId", "staff", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackWhereUniqueInput: ["id"],
  StaffFeedbackOrderByWithAggregationInput: ["id", "staffId", "message", "reply", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StaffFeedbackScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffLeaveReportWhereInput: ["AND", "OR", "NOT", "id", "staffId", "staff", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportOrderByWithRelationInput: ["id", "staffId", "staff", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportWhereUniqueInput: ["id"],
  StaffLeaveReportOrderByWithAggregationInput: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StaffLeaveReportScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffNotificationWhereInput: ["AND", "OR", "NOT", "id", "message", "staffId", "staff", "createdAt", "updatedAt"],
  StaffNotificationOrderByWithRelationInput: ["id", "message", "staffId", "staff", "createdAt", "updatedAt"],
  StaffNotificationWhereUniqueInput: ["id"],
  StaffNotificationOrderByWithAggregationInput: ["id", "message", "staffId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StaffNotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "message", "staffId", "createdAt", "updatedAt"],
  StudentWhereInput: ["AND", "OR", "NOT", "id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentOrderByWithRelationInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentWhereUniqueInput: ["id"],
  StudentOrderByWithAggregationInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StudentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentFeedbackWhereInput: ["AND", "OR", "NOT", "id", "studentId", "student", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackOrderByWithRelationInput: ["id", "studentId", "student", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackWhereUniqueInput: ["id"],
  StudentFeedbackOrderByWithAggregationInput: ["id", "studentId", "message", "reply", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StudentFeedbackScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentLeaveReportWhereInput: ["AND", "OR", "NOT", "id", "studentId", "student", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportOrderByWithRelationInput: ["id", "studentId", "student", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportWhereUniqueInput: ["id"],
  StudentLeaveReportOrderByWithAggregationInput: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StudentLeaveReportScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentNotificationWhereInput: ["AND", "OR", "NOT", "id", "message", "studentId", "student", "createdAt", "updatedAt"],
  StudentNotificationOrderByWithRelationInput: ["id", "message", "studentId", "student", "createdAt", "updatedAt"],
  StudentNotificationWhereUniqueInput: ["id"],
  StudentNotificationOrderByWithAggregationInput: ["id", "message", "studentId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  StudentNotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "message", "studentId", "createdAt", "updatedAt"],
  AssessmentWhereInput: ["AND", "OR", "NOT", "id", "studentId", "student", "subjectId", "subject", "date", "createdAt", "updatedAt", "assessmentReport"],
  AssessmentOrderByWithRelationInput: ["id", "studentId", "student", "subjectId", "subject", "date", "createdAt", "updatedAt", "assessmentReport"],
  AssessmentWhereUniqueInput: ["id"],
  AssessmentOrderByWithAggregationInput: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  AssessmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentReportWhereInput: ["AND", "OR", "NOT", "id", "status", "studentId", "student", "assessmentId", "assessment", "createdAt", "updatedAt"],
  AssessmentReportOrderByWithRelationInput: ["id", "status", "studentId", "student", "assessmentId", "assessment", "createdAt", "updatedAt"],
  AssessmentReportWhereUniqueInput: ["id"],
  AssessmentReportOrderByWithAggregationInput: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  AssessmentReportScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  CourseWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "subjects"],
  CourseOrderByWithRelationInput: ["id", "name", "createdAt", "updatedAt", "subjects"],
  CourseWhereUniqueInput: ["id"],
  CourseOrderByWithAggregationInput: ["id", "name", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CourseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
  SubjectWhereInput: ["AND", "OR", "NOT", "id", "name", "courseId", "course", "staffId", "staff", "createdAt", "updatedAt", "assessment"],
  SubjectOrderByWithRelationInput: ["id", "name", "courseId", "course", "staffId", "staff", "createdAt", "updatedAt", "assessment"],
  SubjectWhereUniqueInput: ["id"],
  SubjectOrderByWithAggregationInput: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SubjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "courseId", "staffId", "createdAt", "updatedAt"],
  AdminCreateInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminUpdateInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminCreateManyInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminUpdateManyMutationInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffCreateInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffLeaveReport", "staffFeedback"],
  StaffUpdateInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffLeaveReport", "staffFeedback"],
  StaffCreateManyInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffUpdateManyMutationInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffFeedbackCreateInput: ["staff", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackUpdateInput: ["staff", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackCreateManyInput: ["id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackUpdateManyMutationInput: ["message", "reply", "createdAt", "updatedAt"],
  StaffLeaveReportCreateInput: ["staff", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportUpdateInput: ["staff", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportCreateManyInput: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportUpdateManyMutationInput: ["date", "message", "status", "createdAt", "updatedAt"],
  StaffNotificationCreateInput: ["message", "staff", "createdAt", "updatedAt"],
  StaffNotificationUpdateInput: ["message", "staff", "createdAt", "updatedAt"],
  StaffNotificationCreateManyInput: ["id", "message", "staffId", "createdAt", "updatedAt"],
  StaffNotificationUpdateManyMutationInput: ["message", "createdAt", "updatedAt"],
  StudentCreateInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentUpdateInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentCreateManyInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentUpdateManyMutationInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentFeedbackCreateInput: ["student", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackUpdateInput: ["student", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackCreateManyInput: ["id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackUpdateManyMutationInput: ["message", "reply", "createdAt", "updatedAt"],
  StudentLeaveReportCreateInput: ["student", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportUpdateInput: ["student", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportCreateManyInput: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportUpdateManyMutationInput: ["date", "message", "status", "createdAt", "updatedAt"],
  StudentNotificationCreateInput: ["message", "student", "createdAt", "updatedAt"],
  StudentNotificationUpdateInput: ["message", "student", "createdAt", "updatedAt"],
  StudentNotificationCreateManyInput: ["id", "message", "studentId", "createdAt", "updatedAt"],
  StudentNotificationUpdateManyMutationInput: ["message", "createdAt", "updatedAt"],
  AssessmentCreateInput: ["student", "subject", "date", "createdAt", "updatedAt", "assessmentReport"],
  AssessmentUpdateInput: ["student", "subject", "date", "createdAt", "updatedAt", "assessmentReport"],
  AssessmentCreateManyInput: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentUpdateManyMutationInput: ["date", "createdAt", "updatedAt"],
  AssessmentReportCreateInput: ["status", "student", "assessment", "createdAt", "updatedAt"],
  AssessmentReportUpdateInput: ["status", "student", "assessment", "createdAt", "updatedAt"],
  AssessmentReportCreateManyInput: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  AssessmentReportUpdateManyMutationInput: ["status", "createdAt", "updatedAt"],
  CourseCreateInput: ["name", "createdAt", "updatedAt", "subjects"],
  CourseUpdateInput: ["name", "createdAt", "updatedAt", "subjects"],
  CourseCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
  CourseUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
  SubjectCreateInput: ["name", "course", "staff", "createdAt", "updatedAt", "assessment"],
  SubjectUpdateInput: ["name", "course", "staff", "createdAt", "updatedAt", "assessment"],
  SubjectCreateManyInput: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt"],
  SubjectUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumGenderFilter: ["equals", "in", "notIn", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AdminCountOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminAvgOrderByAggregateInput: ["id"],
  AdminMaxOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminMinOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  AdminSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  SubjectListRelationFilter: ["every", "some", "none"],
  StaffNotificationListRelationFilter: ["every", "some", "none"],
  StaffLeaveReportListRelationFilter: ["every", "some", "none"],
  StaffFeedbackListRelationFilter: ["every", "some", "none"],
  SubjectOrderByRelationAggregateInput: ["_count"],
  StaffNotificationOrderByRelationAggregateInput: ["_count"],
  StaffLeaveReportOrderByRelationAggregateInput: ["_count"],
  StaffFeedbackOrderByRelationAggregateInput: ["_count"],
  StaffCountOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffAvgOrderByAggregateInput: ["id"],
  StaffMaxOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffMinOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt"],
  StaffSumOrderByAggregateInput: ["id"],
  StaffRelationFilter: ["is", "isNot"],
  StaffFeedbackCountOrderByAggregateInput: ["id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackAvgOrderByAggregateInput: ["id", "staffId"],
  StaffFeedbackMaxOrderByAggregateInput: ["id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackMinOrderByAggregateInput: ["id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackSumOrderByAggregateInput: ["id", "staffId"],
  BoolFilter: ["equals", "not"],
  StaffLeaveReportCountOrderByAggregateInput: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportAvgOrderByAggregateInput: ["id", "staffId"],
  StaffLeaveReportMaxOrderByAggregateInput: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportMinOrderByAggregateInput: ["id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportSumOrderByAggregateInput: ["id", "staffId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StaffNotificationCountOrderByAggregateInput: ["id", "message", "staffId", "createdAt", "updatedAt"],
  StaffNotificationAvgOrderByAggregateInput: ["id", "staffId"],
  StaffNotificationMaxOrderByAggregateInput: ["id", "message", "staffId", "createdAt", "updatedAt"],
  StaffNotificationMinOrderByAggregateInput: ["id", "message", "staffId", "createdAt", "updatedAt"],
  StaffNotificationSumOrderByAggregateInput: ["id", "staffId"],
  EnumAdmissionStatusFilter: ["equals", "in", "notIn", "not"],
  StudentNotificationListRelationFilter: ["every", "some", "none"],
  AssessmentListRelationFilter: ["every", "some", "none"],
  AssessmentReportListRelationFilter: ["every", "some", "none"],
  StudentLeaveReportListRelationFilter: ["every", "some", "none"],
  StudentFeedbackListRelationFilter: ["every", "some", "none"],
  StudentNotificationOrderByRelationAggregateInput: ["_count"],
  AssessmentOrderByRelationAggregateInput: ["_count"],
  AssessmentReportOrderByRelationAggregateInput: ["_count"],
  StudentLeaveReportOrderByRelationAggregateInput: ["_count"],
  StudentFeedbackOrderByRelationAggregateInput: ["_count"],
  StudentCountOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentAvgOrderByAggregateInput: ["id"],
  StudentMaxOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentMinOrderByAggregateInput: ["id", "firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt"],
  StudentSumOrderByAggregateInput: ["id"],
  EnumAdmissionStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StudentRelationFilter: ["is", "isNot"],
  StudentFeedbackCountOrderByAggregateInput: ["id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackAvgOrderByAggregateInput: ["id", "studentId"],
  StudentFeedbackMaxOrderByAggregateInput: ["id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackMinOrderByAggregateInput: ["id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackSumOrderByAggregateInput: ["id", "studentId"],
  StudentLeaveReportCountOrderByAggregateInput: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportAvgOrderByAggregateInput: ["id", "studentId"],
  StudentLeaveReportMaxOrderByAggregateInput: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportMinOrderByAggregateInput: ["id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportSumOrderByAggregateInput: ["id", "studentId"],
  StudentNotificationCountOrderByAggregateInput: ["id", "message", "studentId", "createdAt", "updatedAt"],
  StudentNotificationAvgOrderByAggregateInput: ["id", "studentId"],
  StudentNotificationMaxOrderByAggregateInput: ["id", "message", "studentId", "createdAt", "updatedAt"],
  StudentNotificationMinOrderByAggregateInput: ["id", "message", "studentId", "createdAt", "updatedAt"],
  StudentNotificationSumOrderByAggregateInput: ["id", "studentId"],
  SubjectRelationFilter: ["is", "isNot"],
  AssessmentCountOrderByAggregateInput: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentAvgOrderByAggregateInput: ["id", "studentId", "subjectId"],
  AssessmentMaxOrderByAggregateInput: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentMinOrderByAggregateInput: ["id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentSumOrderByAggregateInput: ["id", "studentId", "subjectId"],
  AssessmentRelationFilter: ["is", "isNot"],
  AssessmentReportCountOrderByAggregateInput: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  AssessmentReportAvgOrderByAggregateInput: ["id", "studentId", "assessmentId"],
  AssessmentReportMaxOrderByAggregateInput: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  AssessmentReportMinOrderByAggregateInput: ["id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  AssessmentReportSumOrderByAggregateInput: ["id", "studentId", "assessmentId"],
  CourseCountOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
  CourseAvgOrderByAggregateInput: ["id"],
  CourseMaxOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
  CourseMinOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
  CourseSumOrderByAggregateInput: ["id"],
  CourseRelationFilter: ["is", "isNot"],
  SubjectCountOrderByAggregateInput: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt"],
  SubjectAvgOrderByAggregateInput: ["id", "courseId", "staffId"],
  SubjectMaxOrderByAggregateInput: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt"],
  SubjectMinOrderByAggregateInput: ["id", "name", "courseId", "staffId", "createdAt", "updatedAt"],
  SubjectSumOrderByAggregateInput: ["id", "courseId", "staffId"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumGenderFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  SubjectCreateNestedManyWithoutStaffInput: ["create", "connectOrCreate", "createMany", "connect"],
  StaffNotificationCreateNestedManyWithoutStaffInput: ["create", "connectOrCreate", "createMany", "connect"],
  StaffLeaveReportCreateNestedManyWithoutStaffInput: ["create", "connectOrCreate", "createMany", "connect"],
  StaffFeedbackCreateNestedManyWithoutStaffInput: ["create", "connectOrCreate", "createMany", "connect"],
  SubjectUpdateManyWithoutStaffInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StaffNotificationUpdateManyWithoutStaffInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StaffLeaveReportUpdateManyWithoutStaffInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StaffFeedbackUpdateManyWithoutStaffInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StaffCreateNestedOneWithoutStaffFeedbackInput: ["create", "connectOrCreate", "connect"],
  StaffUpdateOneRequiredWithoutStaffFeedbackInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StaffCreateNestedOneWithoutStaffLeaveReportInput: ["create", "connectOrCreate", "connect"],
  StaffUpdateOneRequiredWithoutStaffLeaveReportInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BoolFieldUpdateOperationsInput: ["set"],
  StaffCreateNestedOneWithoutStaffNotificationInput: ["create", "connectOrCreate", "connect"],
  StaffUpdateOneRequiredWithoutStaffNotificationInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StudentNotificationCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssessmentCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssessmentReportCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
  StudentLeaveReportCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
  StudentFeedbackCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumAdmissionStatusFieldUpdateOperationsInput: ["set"],
  StudentNotificationUpdateManyWithoutStudentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssessmentUpdateManyWithoutStudentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssessmentReportUpdateManyWithoutStudentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StudentLeaveReportUpdateManyWithoutStudentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StudentFeedbackUpdateManyWithoutStudentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StudentCreateNestedOneWithoutStudentFeedbackInput: ["create", "connectOrCreate", "connect"],
  StudentUpdateOneRequiredWithoutStudentFeedbackInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StudentCreateNestedOneWithoutStudentLeaveReportInput: ["create", "connectOrCreate", "connect"],
  StudentUpdateOneRequiredWithoutStudentLeaveReportInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StudentCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  StudentUpdateOneRequiredWithoutNotificationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StudentCreateNestedOneWithoutAssessmentInput: ["create", "connectOrCreate", "connect"],
  SubjectCreateNestedOneWithoutAssessmentInput: ["create", "connectOrCreate", "connect"],
  AssessmentReportCreateNestedManyWithoutAssessmentInput: ["create", "connectOrCreate", "createMany", "connect"],
  StudentUpdateOneRequiredWithoutAssessmentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SubjectUpdateOneRequiredWithoutAssessmentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AssessmentReportUpdateManyWithoutAssessmentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StudentCreateNestedOneWithoutAssessmentReportInput: ["create", "connectOrCreate", "connect"],
  AssessmentCreateNestedOneWithoutAssessmentReportInput: ["create", "connectOrCreate", "connect"],
  StudentUpdateOneRequiredWithoutAssessmentReportInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AssessmentUpdateOneRequiredWithoutAssessmentReportInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SubjectCreateNestedManyWithoutCourseInput: ["create", "connectOrCreate", "createMany", "connect"],
  SubjectUpdateManyWithoutCourseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedOneWithoutSubjectsInput: ["create", "connectOrCreate", "connect"],
  StaffCreateNestedOneWithoutSubjectsInput: ["create", "connectOrCreate", "connect"],
  AssessmentCreateNestedManyWithoutSubjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  CourseUpdateOneRequiredWithoutSubjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StaffUpdateOneRequiredWithoutSubjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AssessmentUpdateManyWithoutSubjectInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumGenderFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumAdmissionStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumAdmissionStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  SubjectCreateWithoutStaffInput: ["name", "course", "createdAt", "updatedAt", "assessment"],
  SubjectCreateOrConnectWithoutStaffInput: ["where", "create"],
  SubjectCreateManyStaffInputEnvelope: ["data", "skipDuplicates"],
  StaffNotificationCreateWithoutStaffInput: ["message", "createdAt", "updatedAt"],
  StaffNotificationCreateOrConnectWithoutStaffInput: ["where", "create"],
  StaffNotificationCreateManyStaffInputEnvelope: ["data", "skipDuplicates"],
  StaffLeaveReportCreateWithoutStaffInput: ["date", "message", "status", "createdAt", "updatedAt"],
  StaffLeaveReportCreateOrConnectWithoutStaffInput: ["where", "create"],
  StaffLeaveReportCreateManyStaffInputEnvelope: ["data", "skipDuplicates"],
  StaffFeedbackCreateWithoutStaffInput: ["message", "reply", "createdAt", "updatedAt"],
  StaffFeedbackCreateOrConnectWithoutStaffInput: ["where", "create"],
  StaffFeedbackCreateManyStaffInputEnvelope: ["data", "skipDuplicates"],
  SubjectUpsertWithWhereUniqueWithoutStaffInput: ["where", "update", "create"],
  SubjectUpdateWithWhereUniqueWithoutStaffInput: ["where", "data"],
  SubjectUpdateManyWithWhereWithoutStaffInput: ["where", "data"],
  SubjectScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "courseId", "staffId", "createdAt", "updatedAt"],
  StaffNotificationUpsertWithWhereUniqueWithoutStaffInput: ["where", "update", "create"],
  StaffNotificationUpdateWithWhereUniqueWithoutStaffInput: ["where", "data"],
  StaffNotificationUpdateManyWithWhereWithoutStaffInput: ["where", "data"],
  StaffNotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "message", "staffId", "createdAt", "updatedAt"],
  StaffLeaveReportUpsertWithWhereUniqueWithoutStaffInput: ["where", "update", "create"],
  StaffLeaveReportUpdateWithWhereUniqueWithoutStaffInput: ["where", "data"],
  StaffLeaveReportUpdateManyWithWhereWithoutStaffInput: ["where", "data"],
  StaffLeaveReportScalarWhereInput: ["AND", "OR", "NOT", "id", "staffId", "date", "message", "status", "createdAt", "updatedAt"],
  StaffFeedbackUpsertWithWhereUniqueWithoutStaffInput: ["where", "update", "create"],
  StaffFeedbackUpdateWithWhereUniqueWithoutStaffInput: ["where", "data"],
  StaffFeedbackUpdateManyWithWhereWithoutStaffInput: ["where", "data"],
  StaffFeedbackScalarWhereInput: ["AND", "OR", "NOT", "id", "staffId", "message", "reply", "createdAt", "updatedAt"],
  StaffCreateWithoutStaffFeedbackInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffLeaveReport"],
  StaffCreateOrConnectWithoutStaffFeedbackInput: ["where", "create"],
  StaffUpsertWithoutStaffFeedbackInput: ["update", "create"],
  StaffUpdateWithoutStaffFeedbackInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffLeaveReport"],
  StaffCreateWithoutStaffLeaveReportInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffFeedback"],
  StaffCreateOrConnectWithoutStaffLeaveReportInput: ["where", "create"],
  StaffUpsertWithoutStaffLeaveReportInput: ["update", "create"],
  StaffUpdateWithoutStaffLeaveReportInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffNotification", "staffFeedback"],
  StaffCreateWithoutStaffNotificationInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffLeaveReport", "staffFeedback"],
  StaffCreateOrConnectWithoutStaffNotificationInput: ["where", "create"],
  StaffUpsertWithoutStaffNotificationInput: ["update", "create"],
  StaffUpdateWithoutStaffNotificationInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "subjects", "staffLeaveReport", "staffFeedback"],
  StudentNotificationCreateWithoutStudentInput: ["message", "createdAt", "updatedAt"],
  StudentNotificationCreateOrConnectWithoutStudentInput: ["where", "create"],
  StudentNotificationCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
  AssessmentCreateWithoutStudentInput: ["subject", "date", "createdAt", "updatedAt", "assessmentReport"],
  AssessmentCreateOrConnectWithoutStudentInput: ["where", "create"],
  AssessmentCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
  AssessmentReportCreateWithoutStudentInput: ["status", "assessment", "createdAt", "updatedAt"],
  AssessmentReportCreateOrConnectWithoutStudentInput: ["where", "create"],
  AssessmentReportCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
  StudentLeaveReportCreateWithoutStudentInput: ["date", "message", "status", "createdAt", "updatedAt"],
  StudentLeaveReportCreateOrConnectWithoutStudentInput: ["where", "create"],
  StudentLeaveReportCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
  StudentFeedbackCreateWithoutStudentInput: ["message", "reply", "createdAt", "updatedAt"],
  StudentFeedbackCreateOrConnectWithoutStudentInput: ["where", "create"],
  StudentFeedbackCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
  StudentNotificationUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
  StudentNotificationUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
  StudentNotificationUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
  StudentNotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "message", "studentId", "createdAt", "updatedAt"],
  AssessmentUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
  AssessmentUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
  AssessmentUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
  AssessmentScalarWhereInput: ["AND", "OR", "NOT", "id", "studentId", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentReportUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
  AssessmentReportUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
  AssessmentReportUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
  AssessmentReportScalarWhereInput: ["AND", "OR", "NOT", "id", "status", "studentId", "assessmentId", "createdAt", "updatedAt"],
  StudentLeaveReportUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
  StudentLeaveReportUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
  StudentLeaveReportUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
  StudentLeaveReportScalarWhereInput: ["AND", "OR", "NOT", "id", "studentId", "date", "message", "status", "createdAt", "updatedAt"],
  StudentFeedbackUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
  StudentFeedbackUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
  StudentFeedbackUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
  StudentFeedbackScalarWhereInput: ["AND", "OR", "NOT", "id", "studentId", "message", "reply", "createdAt", "updatedAt"],
  StudentCreateWithoutStudentFeedbackInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentLeaveReport"],
  StudentCreateOrConnectWithoutStudentFeedbackInput: ["where", "create"],
  StudentUpsertWithoutStudentFeedbackInput: ["update", "create"],
  StudentUpdateWithoutStudentFeedbackInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentLeaveReport"],
  StudentCreateWithoutStudentLeaveReportInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentFeedback"],
  StudentCreateOrConnectWithoutStudentLeaveReportInput: ["where", "create"],
  StudentUpsertWithoutStudentLeaveReportInput: ["update", "create"],
  StudentUpdateWithoutStudentLeaveReportInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "assessmentReport", "studentFeedback"],
  StudentCreateWithoutNotificationsInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  StudentUpsertWithoutNotificationsInput: ["update", "create"],
  StudentUpdateWithoutNotificationsInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "assessment", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentCreateWithoutAssessmentInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  StudentCreateOrConnectWithoutAssessmentInput: ["where", "create"],
  SubjectCreateWithoutAssessmentInput: ["name", "course", "staff", "createdAt", "updatedAt"],
  SubjectCreateOrConnectWithoutAssessmentInput: ["where", "create"],
  AssessmentReportCreateWithoutAssessmentInput: ["status", "student", "createdAt", "updatedAt"],
  AssessmentReportCreateOrConnectWithoutAssessmentInput: ["where", "create"],
  AssessmentReportCreateManyAssessmentInputEnvelope: ["data", "skipDuplicates"],
  StudentUpsertWithoutAssessmentInput: ["update", "create"],
  StudentUpdateWithoutAssessmentInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessmentReport", "studentLeaveReport", "studentFeedback"],
  SubjectUpsertWithoutAssessmentInput: ["update", "create"],
  SubjectUpdateWithoutAssessmentInput: ["name", "course", "staff", "createdAt", "updatedAt"],
  AssessmentReportUpsertWithWhereUniqueWithoutAssessmentInput: ["where", "update", "create"],
  AssessmentReportUpdateWithWhereUniqueWithoutAssessmentInput: ["where", "data"],
  AssessmentReportUpdateManyWithWhereWithoutAssessmentInput: ["where", "data"],
  StudentCreateWithoutAssessmentReportInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "studentLeaveReport", "studentFeedback"],
  StudentCreateOrConnectWithoutAssessmentReportInput: ["where", "create"],
  AssessmentCreateWithoutAssessmentReportInput: ["student", "subject", "date", "createdAt", "updatedAt"],
  AssessmentCreateOrConnectWithoutAssessmentReportInput: ["where", "create"],
  StudentUpsertWithoutAssessmentReportInput: ["update", "create"],
  StudentUpdateWithoutAssessmentReportInput: ["firstName", "middleName", "lastName", "gender", "email", "dateOfBirth", "profilePic", "password", "admissionStatus", "createdAt", "updatedAt", "notifications", "assessment", "studentLeaveReport", "studentFeedback"],
  AssessmentUpsertWithoutAssessmentReportInput: ["update", "create"],
  AssessmentUpdateWithoutAssessmentReportInput: ["student", "subject", "date", "createdAt", "updatedAt"],
  SubjectCreateWithoutCourseInput: ["name", "staff", "createdAt", "updatedAt", "assessment"],
  SubjectCreateOrConnectWithoutCourseInput: ["where", "create"],
  SubjectCreateManyCourseInputEnvelope: ["data", "skipDuplicates"],
  SubjectUpsertWithWhereUniqueWithoutCourseInput: ["where", "update", "create"],
  SubjectUpdateWithWhereUniqueWithoutCourseInput: ["where", "data"],
  SubjectUpdateManyWithWhereWithoutCourseInput: ["where", "data"],
  CourseCreateWithoutSubjectsInput: ["name", "createdAt", "updatedAt"],
  CourseCreateOrConnectWithoutSubjectsInput: ["where", "create"],
  StaffCreateWithoutSubjectsInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "staffNotification", "staffLeaveReport", "staffFeedback"],
  StaffCreateOrConnectWithoutSubjectsInput: ["where", "create"],
  AssessmentCreateWithoutSubjectInput: ["student", "date", "createdAt", "updatedAt", "assessmentReport"],
  AssessmentCreateOrConnectWithoutSubjectInput: ["where", "create"],
  AssessmentCreateManySubjectInputEnvelope: ["data", "skipDuplicates"],
  CourseUpsertWithoutSubjectsInput: ["update", "create"],
  CourseUpdateWithoutSubjectsInput: ["name", "createdAt", "updatedAt"],
  StaffUpsertWithoutSubjectsInput: ["update", "create"],
  StaffUpdateWithoutSubjectsInput: ["firstName", "middleName", "lastName", "gender", "email", "password", "createdAt", "updatedAt", "staffNotification", "staffLeaveReport", "staffFeedback"],
  AssessmentUpsertWithWhereUniqueWithoutSubjectInput: ["where", "update", "create"],
  AssessmentUpdateWithWhereUniqueWithoutSubjectInput: ["where", "data"],
  AssessmentUpdateManyWithWhereWithoutSubjectInput: ["where", "data"],
  SubjectCreateManyStaffInput: ["id", "name", "courseId", "createdAt", "updatedAt"],
  StaffNotificationCreateManyStaffInput: ["id", "message", "createdAt", "updatedAt"],
  StaffLeaveReportCreateManyStaffInput: ["id", "date", "message", "status", "createdAt", "updatedAt"],
  StaffFeedbackCreateManyStaffInput: ["id", "message", "reply", "createdAt", "updatedAt"],
  SubjectUpdateWithoutStaffInput: ["name", "course", "createdAt", "updatedAt", "assessment"],
  StaffNotificationUpdateWithoutStaffInput: ["message", "createdAt", "updatedAt"],
  StaffLeaveReportUpdateWithoutStaffInput: ["date", "message", "status", "createdAt", "updatedAt"],
  StaffFeedbackUpdateWithoutStaffInput: ["message", "reply", "createdAt", "updatedAt"],
  StudentNotificationCreateManyStudentInput: ["id", "message", "createdAt", "updatedAt"],
  AssessmentCreateManyStudentInput: ["id", "subjectId", "date", "createdAt", "updatedAt"],
  AssessmentReportCreateManyStudentInput: ["id", "status", "assessmentId", "createdAt", "updatedAt"],
  StudentLeaveReportCreateManyStudentInput: ["id", "date", "message", "status", "createdAt", "updatedAt"],
  StudentFeedbackCreateManyStudentInput: ["id", "message", "reply", "createdAt", "updatedAt"],
  StudentNotificationUpdateWithoutStudentInput: ["message", "createdAt", "updatedAt"],
  AssessmentUpdateWithoutStudentInput: ["subject", "date", "createdAt", "updatedAt", "assessmentReport"],
  AssessmentReportUpdateWithoutStudentInput: ["status", "assessment", "createdAt", "updatedAt"],
  StudentLeaveReportUpdateWithoutStudentInput: ["date", "message", "status", "createdAt", "updatedAt"],
  StudentFeedbackUpdateWithoutStudentInput: ["message", "reply", "createdAt", "updatedAt"],
  AssessmentReportCreateManyAssessmentInput: ["id", "status", "studentId", "createdAt", "updatedAt"],
  AssessmentReportUpdateWithoutAssessmentInput: ["status", "student", "createdAt", "updatedAt"],
  SubjectCreateManyCourseInput: ["id", "name", "staffId", "createdAt", "updatedAt"],
  SubjectUpdateWithoutCourseInput: ["name", "staff", "createdAt", "updatedAt", "assessment"],
  AssessmentCreateManySubjectInput: ["id", "studentId", "date", "createdAt", "updatedAt"],
  AssessmentUpdateWithoutSubjectInput: ["student", "date", "createdAt", "updatedAt", "assessmentReport"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}


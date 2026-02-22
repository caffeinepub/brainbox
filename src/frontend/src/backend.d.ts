import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface UserProfile {
    stream?: Stream;
    educationalSystem: EducationalSystem;
    grade: Grade;
    timestamp: Time;
}
export enum EducationalSystem {
    ib = "ib",
    stateBoard = "stateBoard",
    other = "other",
    cbse = "cbse",
    icse = "icse",
    igcse = "igcse"
}
export enum Grade {
    grade1 = "grade1",
    grade2 = "grade2",
    grade3 = "grade3",
    grade4 = "grade4",
    grade5 = "grade5",
    grade6 = "grade6",
    grade7 = "grade7",
    grade8 = "grade8",
    grade9 = "grade9",
    grade10 = "grade10",
    grade11 = "grade11",
    grade12 = "grade12"
}
export enum Stream {
    humanities = "humanities",
    commerce = "commerce",
    science = "science"
}
export interface backendInterface {
    createUserProfile(grade: Grade, educationalSystem: EducationalSystem, stream: Stream | null): Promise<void>;
    getAllUserProfilesByTimestamp(): Promise<Array<UserProfile>>;
    getUserProfile(): Promise<UserProfile>;
}

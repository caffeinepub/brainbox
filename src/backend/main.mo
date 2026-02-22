import Array "mo:core/Array";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  type Grade = {
    #grade1;
    #grade2;
    #grade3;
    #grade4;
    #grade5;
    #grade6;
    #grade7;
    #grade8;
    #grade9;
    #grade10;
    #grade11;
    #grade12;
  };

  module Grade {
    public func compare(grade1 : Grade, grade2 : Grade) : Order.Order {
      let rank : [(Grade, Nat)] = [
        (#grade1, 1),
        (#grade2, 2),
        (#grade3, 3),
        (#grade4, 4),
        (#grade5, 5),
        (#grade6, 6),
        (#grade7, 7),
        (#grade8, 8),
        (#grade9, 9),
        (#grade10, 10),
        (#grade11, 11),
        (#grade12, 12),
      ];

      func getRank(grade : Grade) : Nat {
        for ((g, r) in rank.values()) {
          if (g == grade) { return r };
        };
        0;
      };

      Nat.compare(getRank(grade1), getRank(grade2));
    };
  };

  type Stream = {
    #science;
    #commerce;
    #humanities;
  };

  type EducationalSystem = {
    #cbse;
    #icse;
    #stateBoard;
    #ib;
    #igcse;
    #other;
  };

  type UserProfile = {
    grade : Grade;
    educationalSystem : EducationalSystem;
    stream : ?Stream;
    timestamp : Time.Time;
  };

  module UserProfile {
    public func compareByTimestamp(profile1 : UserProfile, profile2 : UserProfile) : Order.Order {
      Int.compare(profile1.timestamp, profile2.timestamp);
    };
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  func validateGradeStream(grade : Grade, stream : ?Stream) {
    switch (grade) {
      case (#grade11) {
        switch (stream) {
          case (null) { Runtime.trap("Stream is required for Grade 11") };
          case (_) { () };
        };
      };
      case (#grade12) {
        switch (stream) {
          case (null) { Runtime.trap("Stream is required for Grade 12") };
          case (_) { () };
        };
      };
      case (_) { () };
    };
  };

  public shared ({ caller }) func createUserProfile(
    grade : Grade,
    educationalSystem : EducationalSystem,
    stream : ?Stream,
  ) : async () {
    validateGradeStream(grade, stream);

    let newProfile : UserProfile = {
      grade;
      educationalSystem;
      stream;
      timestamp = Time.now();
    };

    userProfiles.add(caller, newProfile);
  };

  public query ({ caller }) func getUserProfile() : async UserProfile {
    switch (userProfiles.get(caller)) {
      case (null) { Runtime.trap("Profile does not exist") };
      case (?profile) { profile };
    };
  };

  public query ({ caller }) func getAllUserProfilesByTimestamp() : async [UserProfile] {
    userProfiles.values().toArray().sort(UserProfile.compareByTimestamp);
  };
};

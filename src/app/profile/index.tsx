import React from "react";
import { getProfile, Profile } from "../../interface/profile";

export default () => {
  const [profile, setProfile] = React.useState<Profile | undefined>();

  if (!profile) {
    getProfile().then(setProfile);
    return (
      <p>
        <i>Loading ...</i>
      </p>
    );
  }

  return (
    <>
      <h3 className="text-xl">Profile</h3>
      <dt>First Name</dt>
      <dd>{profile.firstName}</dd>

      <dt>Last Name</dt>
      <dd>{profile.lastName}</dd>

      <dt>Email</dt>
      <dd>{profile.email}</dd>
    </>
  );
};

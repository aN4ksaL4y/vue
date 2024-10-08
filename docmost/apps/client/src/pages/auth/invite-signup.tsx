import { Helmet } from "react-helmet-async";
import { InviteSignUpForm } from "@/features/auth/components/invite-sign-up-form.tsx";

export default function InviteSignup() {
  return (
    <>
      <Helmet>
        <title>Invitation Signup - Pyjri</title>
      </Helmet>
      <InviteSignUpForm />
    </>
  );
}

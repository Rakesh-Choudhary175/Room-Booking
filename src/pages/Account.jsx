import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import { useUser } from "../features/authentication/useUser";

function Account() {
  const { user } = useUser();
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>

        {user.id === "fde095f0-2c11-4ac3-9be1-2951182b074c" ? (
          "Public Account Not allowed to update password"
        ) : (
          <UpdatePasswordForm />
        )}
      </Row>
    </>
  );
}

export default Account;

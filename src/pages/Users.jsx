import SignupForm from "../features/authentication/SignupForm";
import { useUser } from "../features/authentication/useUser";
import Heading from "../ui/Heading";

function NewUsers() {
  const { user } = useUser();
  console.log(user);
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      {user.id === "fde095f0-2c11-4ac3-9be1-2951182b074c" ? (
        <Heading as="h1">
          Not Allowed to Create new Users for Public Account
        </Heading>
      ) : (
        <SignupForm />
      )}
    </>
  );
}

export default NewUsers;

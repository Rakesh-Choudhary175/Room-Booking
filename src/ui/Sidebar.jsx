import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { useUser } from "../features/authentication/useUser";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { user } = useUser();
  console.log(user);
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {user.id === "fde095f0-2c11-4ac3-9be1-2951182b074c" && <Uploader />}
    </StyledSidebar>
  );
}

export default Sidebar;

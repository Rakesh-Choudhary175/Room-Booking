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
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {user.id === "0834f5f3-84e6-4c25-9906-fbca6d6f779a" && <Uploader />}
    </StyledSidebar>
  );
}

export default Sidebar;

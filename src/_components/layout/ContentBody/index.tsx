"use client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 16px;
`;

const ContentBody = ({ children }: React.PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default ContentBody;

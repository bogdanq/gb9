import styled from "@emotion/styled";
import { Input as DefaultInput } from "@mui/material";
import { Send } from "@mui/icons-material";

export const Input = styled(DefaultInput)`
  color: ${(ctx) => {
    // console.log("ctx mui", ctx);
    return "#9a9fa1";
  }};
  padding: 10px 15px;
  font-size: 15px;
`;

export const SendIcon = styled(Send)`
  cursor: pointer;
  color: #2b5278;
`;

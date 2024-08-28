import styled from "@emotion/styled";

const Button = styled.button`
  /* margin: 20px; */

  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 0;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  background: linear-gradient(
    0deg,
    rgba(255, 151, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;

  ::before,
  ::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  ::before {
    height: 0%;
    width: 2px;
  }

  ::after {
    width: 0%;
    height: 2px;
  }

  :hover {
    color: rgba(251, 75, 2, 1);
    background: transparent;
  }
  :hover::before {
    height: 100%;
  }

  :hover::after {
    width: 100%;
  }

  /* =========== */
`;

const Span = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0;

  :before,
  :after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  :before {
    width: 2px;
    height: 0%;
  }

  :after {
    height: 2px;
    width: 0%;
  }

  :hover:before {
    height: 100%;
  }

  :hover:after {
    width: 100%;
  }
`;

export { Button, Span };

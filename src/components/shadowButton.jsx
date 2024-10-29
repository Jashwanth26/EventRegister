import React from "react";
import { Button } from "antd";
export default function ShadowButton({
  shadowColor,
  buttonName,
  onclick,
  width,
}) {
  return (
    <>
      <Button
        onClick={onclick}
        className="text-lato"
        style={{
          width: `${width || "100%"}`,
          padding: 10,
          borderColor: "black",
          boxShadow: `6px 8px 0px 4px ${shadowColor || "#FF40A5"}`,
        }}
      >
        {buttonName || "Login"}
      </Button>
    </>
  );
}

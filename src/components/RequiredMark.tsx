import React from "react";

export const RequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean }
) => (
  <>
    {label}
    {required && <span style={{ color: "red" }}>*</span>}
  </>
);

export default RequiredMark;

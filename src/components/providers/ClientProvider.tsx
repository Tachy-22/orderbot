"use client";

import React, { ReactNode } from "react";

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default ClientProvider;

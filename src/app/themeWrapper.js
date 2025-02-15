"use client";

import { ConfigProvider, theme } from "antd";

export default function ThemeWrapper(props) {
  const { children } = props;

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          // colorBgBase: "#000",
          borderRadius: 1
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

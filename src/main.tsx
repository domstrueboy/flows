import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/_features/theme/components/theme-provider";
import App from "@/app.tsx";
import { store } from "@/store.ts";

import "@/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);

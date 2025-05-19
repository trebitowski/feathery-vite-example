import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init, Form } from "@feathery/react";

const SDK_KEY = "<sdk_key>";
const FORM_ID = "<form_id>";

function App() {
  init(SDK_KEY);
  // Show the Feathery form
  return <Form formId={FORM_ID} />;
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

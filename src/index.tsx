import r2wc from "@r2wc/react-to-web-component";

import { Checklist } from "./Checklist";

const ChecklistWC = r2wc(Checklist, {
  props: {
    items: "json",
  },
  shadow: "open",
});

customElements.define("checklist-wc", ChecklistWC);

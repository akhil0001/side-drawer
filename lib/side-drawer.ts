// @ts-ignore
import style from "./side-drawer.css";

// declare var html: any;

let tmpl = document.createElement("template");
tmpl.innerHTML = `
  <style>
    ${style}
  </style>
  <div class="container"><slot></slot></div>
`;

export class SideDrawer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define("side-drawer", SideDrawer);

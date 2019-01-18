// @ts-ignore
import style from "./side-drawer.css";

declare var html: any;

export default class SideDrawer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.innerHTML = html`
      <style>
        ${style}
      </style>

      <div class="container"><slot></slot></div>
    `;
  }
}

customElements.define("side-drawer", SideDrawer);

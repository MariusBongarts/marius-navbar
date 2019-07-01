import { css, customElement, html, LitElement, property, unsafeCSS, queryAll } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-navbar')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  title = 'Example button';

  @queryAll('.list-item')
  listItemElements!: HTMLElement[];

  @property()
  selectedIcon!: string;

  @property()
  iconNames = ['house', 'email', 'edit', 'settings', 'user', 'users', 'logout'];

  emit(icon: string) {
    this.dispatchEvent(
      new CustomEvent('selected', {
        detail: icon,
        bubbles: true
      })
    );
  }

  firstUpdated() {
    this.listItemElements.forEach(e => {
      const svgChild = e.firstElementChild as HTMLElement;
      const icon = svgChild.getAttribute('iconName') as string;
      icon === this.selectedIcon ? this.selectItem(e) : '';
      e.addEventListener('click', () => {
        this.doLoop(e);
        this.selectItem(e);
      });
    });
  }

  selectItem(e: HTMLElement) {
    this.deselectItems();
    e.classList.add('selected');
    const svgChild = e.firstElementChild as HTMLElement;
    this.selectedIcon = svgChild.getAttribute('iconName') as string;
  }

  deselectItems() {
    this.listItemElements.forEach((e: HTMLElement) => {
      e.classList.remove('selected');
    });
  }

  doLoop(e: HTMLElement) {
    e.classList.add('loop');
    setTimeout(() => {
      e.classList.remove('loop');
    }, 300);
  }

  render() {
    return html`
          <ul>
            ${this.iconNames.map(icon => html`
            <li class="list-item">

              <svg-icon class=${this.selectedIcon === icon ? 'selected' : '' }
              iconName=${icon} @click=${() =>
                this.emit(icon)}></svg-icon>

            </li>
            `)}
          </ul>
`;
  }

}

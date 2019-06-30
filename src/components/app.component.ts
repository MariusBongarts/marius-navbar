import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-navbar')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  title = 'Example button';

  emit() {
    console.log('Button clicked');
    this.dispatchEvent(
      new CustomEvent('buttonClick', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
          <ul>
            <li class="list-item">
              <svg-icon iconName="house"></svg-icon>
            </li>
            <li class="list-item">
              <svg-icon iconName="email"></svg-icon>
            </li>
            <li class="list-item">
              <svg-icon iconName="edit"></svg-icon>
            </li>
            <li class="list-item">
              <svg-icon iconName="settings"></svg-icon>
            </li>
            <li class="list-item">
              <svg-icon iconName="house"></svg-icon>
            </li>
            <li class="list-item">
              <svg-icon iconName="user"></svg-icon>
            </li>
            <li class="list-item">
              <svg-icon iconName="users"></svg-icon>
            </li>
            <li class="list-item">
              <svg-icon iconName="logout"></svg-icon>
            </li>
          </ul>
`;
  }

}

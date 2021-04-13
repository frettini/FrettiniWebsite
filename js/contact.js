class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="contact" id="contact" style="box-shadow: 0px -4px 23px 1px #999;">
    <div class="container-sm">
      <div class="row justify-content-around align-items-center">
        
        <div class="col-md-9 ">
          <h2 class="pt-3"><b>Contact</b></h2>
          <p><u>myemail@email.email</u></p>
        </div>
        <div class="col-1" >
          <span class="contact-icon">
            <a href="https://www.instagram.com/frettini_/"><i class="fab fa-instagram fa-3x"></i></a>
          </span>
        </div>
        <div class="col-1">
          <span class="contact-icon">
            <a href="https://github.com/frettini"><i class="fab fa-github fa-3x"></i></a>
          </span>
        </div>
        <div class="col-1">
          <span class="contact-icon">
            <a href="https://www.linkedin.com/in/nmartonf/"><i class="fab fa-linkedin fa-3x"></i></a>
          </span>
        </div>
      </div>
    </div>
  </footer>
      `;
    }
  }
  
  customElements.define('contact-component', Footer);
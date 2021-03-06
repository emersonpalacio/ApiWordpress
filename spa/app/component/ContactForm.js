export function ContactForm() {
    const d = document,
  
    $form =d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");
    $form.classList.add("contact-form");

    $styles.innerHTML=`
    /* se hara que todos los elementos hereden del box-size*/
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    /* reset CSS*/
    :root {
        /* se crean variables */
        --main-font: sans-serif;
        --font-size: 16px;
    }

    /* reseteo basico*/
    html {
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 16px;
    }

    /*Formulaior*/
    .contact-form {
        --form-ok--color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    .contact-form > *{/*todos los hijos directos de contact-form se aplica*/
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
    }

    .contact-form textarea{
        resize: none;/*quitar el redimensionamiento*/    
    }

    .contact-form legend,
    .contact-form-response {
        font-size: 1.5rem;
        font-weight: bold;
        text-align:center;
    }

    .contact-form input,
    .contact-form textarea {
        font-size: 0.8rem;
    font-family: sans-serif;
    }

    .contact-form input[type ="submit"]{ /*todos los elementos tipo submit*/
        width: 50%;
        font-weight: bold;
        cursor: pointer;
    }

    /* a todos los elemenot que tengan (::) placeholder */
    .contact-form *::placeholder{
        color:#000;
    }

    .contact-form [required]:valid{/*para cuando el texto sea valido*/
        border: thin solid var(--form-ok--color);     
    }

    .contact-form [required]:invalid{/*para cuando el texto no sea valido*/
        border: thin solid var(--form-error-color);     
    }

    .contact-form-error{
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        transition: all 800ms ease;
    }

    .contact-form-error.is-active{
        display: block;
        /*  se crea animacion llamada (show-message) both= conserve los estilos*/
        animation: show-message 1s normal 0s ease-out both;
    }

    .contact-form-loader{
        text-align: center;
    }

    /*se crea animacion*/

    @keyframes show-message{
        /*se le dice que empiece en 0% y termine en 100% */    
        0%{
            visibility:hidden;
            opacity: 0;
        }
        100%{
            visibility: visible;
            opacity: 1;
        }    
    }

    .none{
        display: none;
    }
    
    `;

    $form.innerHTML=`
    <legend>Evianos tus comentarios.</legend>
    <!---para comentarios  -->
    <input type="text" name="name" placeholder="Escribe tu nombre" title="El campo solo letras" 
        pattern="^[A-Za-zÑñÁÁËéÏïÖóÜúÜü\\s]+$" required>

    <input type="email" name="email" placeholder="Escribe email" title="Email" 
        pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>

    <input type="subject" name="subject" placeholder="Asunto" title="Asunto requerido" required>

    <textarea name="comments" cols="50" rows="5" placeholder="Escribe comentarios" 
        data-pattern="^.{1,255}$" title="No exedas 255 caracteres" required></textarea>

    <input type="submit" value="Enviar">

    <div class="contact-form-loader none">
        <img src="../assets/puff.svg" height="30" width="30" alt="">
    </div>
    <div class="contact-form-response none">
        <p>Los datos han sido enviados</p>
    </div>
    `; 


    function validacionForm() {
        const $form = d.querySelector(".contact-form"),
            $inputs = d.querySelectorAll(".contact-form [required] ");

        $inputs.forEach((input) => {
            const $span = d.createElement("span"); 
            $span.id = input.name;              
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none");              
            input.insertAdjacentElement("afterend", $span);
        });

        d.addEventListener("keyup", (e) => {
            if (e.target.matches(".contact-form [required]")) {
                let $input = e.target;                
                let pattern = $input.pattern || $input.dataset.pattern;
                if (pattern && $input.value !== "") {
                    //console.log("tiene patron");
                    let regex = new RegExp(pattern);
                    //si la expresion regular no valida
                    return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
                }
                if (!pattern) {
                    //console.log("no tiene patron");
                    return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
                }
            }
        });
    }
    setTimeout(() => {
        validacionForm();
        
    }, 100 );
    

    return $form;
    
}

async function enviarInfinito(mensaje) {
    while (true) {
        const textarea = document.querySelector(
            'footer div[contenteditable="true"][role="textbox"]'
        );

        if (!textarea) {
            throw new Error("No hay una conversación abierta");
        }

        textarea.focus();
        document.execCommand("insertText", false, mensaje);
        textarea.dispatchEvent(
            new Event("input", { bubbles: true })
        );

        await new Promise(resolve => setTimeout(resolve, 200));

        const botonEnviar =
            document.querySelector('footer button[aria-label="Enviar"]') ||
            document.querySelector('footer [aria-label="Send"]') ||
            document.querySelector('footer [data-icon="wds-ic-send-filled"]')?.closest('button');

        if (botonEnviar) {
            botonEnviar.click();
        } else {
            console.warn("No se encontró el botón de enviar");

            console.log(
                [...document.querySelectorAll("footer button, footer [role='button']")]
                    .map(b => ({
                        tag: b.tagName,
                        ariaLabel: b.getAttribute("aria-label"),
                        title: b.getAttribute("title"),
                        html: b.outerHTML.slice(0, 300)
                    }))
            );

            return;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

enviarInfinito("mensaje de prueba");

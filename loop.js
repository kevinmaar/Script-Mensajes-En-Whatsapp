async function enviarInfinito(mensaje){
	const textarea = document.querySelector('div[contenteditable="true"][role="textbox"]');

	if(!textarea) throw new Error("No hay una conversación abierta");

	while(true){
		textarea.focus();
		document.execCommand('insertText', false, mensaje);
		textarea.dispatchEvent(new Event('input', {bubbles: true}));

		const botonEnviar = document.querySelector('span[data-icon="wds-ic-send-filled"]')?.closest("div[role=button], button, div");
		if(botonEnviar){
			botonEnviar.click();
		} else {
    console.warn("No se encontró el botón de enviar");
    console.log([...document.querySelectorAll('footer button, footer [role="button"]')].map(b => ({aria: b.getAttribute("aria-label"), title: b.getAttribute("title"), html: b.outerHTML.slice(0, 200)})));
    return;
}
		}

		await new Promise(resolve => setTimeout(resolve, 350)); //400 para evitar sanciones
	}
}

enviarInfinito("mensaje de prueba");

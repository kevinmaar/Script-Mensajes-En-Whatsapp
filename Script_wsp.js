async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);

	const textarea = document.querySelector('div[contenteditable="true"][role="textbox"]');

	if(!textarea) throw new Error("No hay una conversación abierta");

	for(let i = 0; i < lines.length; i++){
		const line = lines[i];

		console.log(line);

		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('input', {bubbles: true}));

		setTimeout(() => {
			const botonEnviar = document.querySelector('span[data-icon="wds-ic-send-filled"]')?.closest("div[role=button], button, div");
			if(botonEnviar){
				botonEnviar.click();
			} else {
				console.warn("No se encontró el botón de enviar");
			}
		}, 100);

		if(i !== lines.length - 1)
			await new Promise(resolve => setTimeout(resolve, 250));
	}

	return lines.length;
}

enviarScript(`
SHREK 2
Encantador: -Había una vez en un reino muy-muy lejano un rey y una reina que habían sido bendecidos con una hermosa niña. Todos en el reino se sentían felices hasta que se ponía el sol. Era entonces, cuando veían que cada noche la princesa era víctima de un terrible hechizo. Desesperados buscaron ayuda de una Hada Madrina, quien les dijo que encerraran a la joven princesa en una torre y esperara el beso del apuesto Príncipe Encantador. 
Sería él, quien haría el peligroso recorrido, soportando vientos despiadados e infernales desiertos, viajando muchos días y noches, poniendo en riesgo su vida para llegar a la guarida del dragón, ya que él era el más valiente y el más apuesto de todo el reino. Y estaba escrito, que su beso rompería el terrible hechizo. Sólo él podría llegar al último cuarto de la torre más alta, entraría a los aposentos de la princesa, atravesaría el cuarto hasta llegar a su durmiente silueta y tras una delicada cortina encontraría a...
Lobo: - ¿Qué?
Encantador: - ¿Princesa Fiona?
Lobo: - ¡No!
Encantador: - Ay, ¡qué susto me diste! ¿Dónde está?
Lobo: - En su luna de miel.
Encantador: - ¿Luna de miel? ¿Con quién?
(SECUENCIA DE LUNA DE MIEL CON MUSICA CON COPYRIGHT)
Shrek:   Aaah hogar, dulce hogar. Solo tu, yo y ….
Burro:  - U-u-uh, pobre burro...
Shrek:   - ¿Burro?
Burro:  - ¡Shrek! ¡Fiona! ¡Qué gusto de volverte a ver! Dame un abrazo, pícara máquina del amor. Ay iren a la señora de Shrek. ¿qué no hay un besito pal´ corcel?
Shrek:   ¡Burro! ¿Qué estás haciendo aquí?
Burro:  - Ps que aquí nada más cuidando el nidito de amor.
Shrek:   - Entonces, ¿supongo que ya revisaste el correo y regaste las plantas?
Burro:  - Sí, y alimenté a los peces.
Shrek:   -Pero yo no tengo peces.
Burro:  - Poos ahora ya tienes. A uno le puse Shrek y al otro Fiona. Ese Shrek es bien canijo, chinguenguenchón.
Shrek:   -Ah, mira la hora. Lo mejor de las visitas es cuando se van.
Burro:  ¿Qué? ¿No vas a platicarme de tu vieja? Perdón, ¿de tu viaje?
Shrek:   ¡¡¡¡¡arggg!!!! 
Fiona: Por cierto, ¿no deberías estar en casa con tu dragona?
Burro:  - Ah sí, este, pues no sé. Es que ha estado medio chipi últimamente. Así que mejor decidí mudarme pa’acá.
Fiona: - Burro, tú sabes que siempre serás bienvenido aquí...
Shrek:   -Pero Fiona y yo ahora estamos casados, y necesitamos tiempo para estar juntos... en privado... solos.
Burro:  - Ya entendí, ya entendí. No te preocupes por nada. Siempre voy a estar aquí pa’ estar seguro que nadien los moleste.
Shrek: - Burro.
Burro:  - ¿Qué onda, carnal?
Shrek: - Tú me molestas.
Burro:  - Ah, este, ‘ta bueno, ‘ta bueno... pus... De todas formas, ya había quedado con el Pinocho pa’ ver el fútbol. Entonces, si quieren vernos el domingo pa’ echarnos unos tacos de chicharrón.
Shrek: Ya se le pasará. Ahora, ¿en qué estábamos? Oh, creo que ya me acordé.
¡Burro!
Burro:  Ya se, ya se, solos… ya me voy, ya me jui. Pero ¿qué le digo a toda la banda?
(trompetas)
Mensajero: Basta Rogelio. Querida princesa Fiona, te esperamos en el reino Muy muy lejano para el baile real en honor de tu matrimonio. En el cual el rey les dará la bendición real a ti y a tu… ehm... príncipe encantador, con cariño el rey y la reina de Muy muy lejano… ósea, mamá y papá. 
Fiona: ¿Mamá y papá?
Shrek: ¿Príncipe encantador?
Burro:  ¿Baile real? ¿me dejaran entrar?
Shrek: No vamos a ir.
Fiona y Burro:  ¡¿QUE?!
Shrek: Digo ¿no crees que les podría dar un… ataque? ¿Cuándo te vean así?
Fiona: Bueno talvez les sorprenda, pero son mis padres, Shrek, me aman, no te preocupes a ti también te van a adorar.
Shrek: Hasta crees, me late que no seré bienvenido en la alta sociedad.
Fiona: No digas tonterías ellos no son así…
Shrek: Entonces explícame por qué mandaron al elenco del lago de los cisnes.
Fiona: Ay por favor, al menos dales la oportunidad.
Shrek: Sí ¿de qué?, ¿de qué afilen sus cuchillos?
Fiona: Nooo, solo quieren darte su bendición.
Shrek: Aah claro, ¿yo necesito su bendición?
Fiona: Pues si quieres ser parte de esta familia sí.
Shrek: ¿Y quien dice que quiero ser parte de esta familia?
Fiona: Aah pues tú, cuando te casaste conmigo.
Shrek: No recuerdo que haya estado en el contrato.
Fiona:¡Ah! ¿Es tu respuesta? ¿No vas a ir?
Shrek: Créeme, no es buena idea, no vamos a ir y es mi última palabra.
Burro:  ¡Órale Shrek! O nos va a agarrar el tráfico.
Jengibre: No se preocupen, les cuidaremos el cuchitril.
BAILA, LOBO, BAILA!
Burro:  Arre, arre, arre, arre, arre, caballo que mas le trote sí, caballo que mas le trote no, caballo que mas le trote le mando, le mando, le mando una burra.  Más, más, más a trotar, a trotar. Guaco, guaco, guaco-guaco malo. Guaco, guaco, guaco-guaco, ¡yajay!
Burro:  - ¿Ya mero llegamos?
Shrek: No.
Burro:  - ¿Ya merito?
Fiona: - Aun no.
Burro:  - ¿Ya mero llegamos?
Fiona: - No
Burro:  - ¿Ya merito?
Shrek: - No
Burro:  - ¿ya merito?
Shrek: - Sí.
Burro:  - ¿De veritas?
Shrek: ¡No!
Burro:  - ¿Ya merito?
Fiona: - No
Burro:  - ¿Ya merito?
Shrek: - Todavía no.
Burro: - ¿Ya merito?
Shrek y Fiona:¡¡¡NOOOO!!!
Burro (y Shrek) :¿Ya merito? 
Burro (y Shrek) : No me hizo gracia.
Burro (y Shrek) : No me arremedes
Burro (y Shrek) : Por eso nadie quieren los ogros. 
Burro (y Shrek) : ‘Ta bueno, ya no juego. 
Burro: Voy a cerrar el hocico.
Shrek: ¡Al fin!
Burro: - Ta rete-lejos, Shrek. Y ni siquiera nos pasaron una película.
Shrek: El reino de Muy-muy lejano. Es a dónde vamos – muy-muy lejano.
Burro: - ‘Ta bien, ya entendí. No soy burro. Lo que pasa, es que me aburro.
Shrek: - Bueno, busca con que desaburrirte...
(SECUENCIA DE BURRO JODIENDO A SHREK)
Shrek: - ¡¡Ahhhh!, Cinco minutos. ¿Podrías dejar de ser burro por sólo cinco minutos?
(MÁS JODER A SHREK)
Shrek: AAAARGHH ¿Ya merito llegamos?
Fiona: - Sí.
Burro: - Ay, ¡al fin!
(FUNKY TOWN CON COPY)
Burro: ¡ira! ”bienvenidos a muy muy lejano”  órale… oooh! Aquí debe haber tamales de caviar y atole de champaña. ¡Rora! ¿A qué hora vas por el pan?
Vendedor: ¡Mapas! ¡Como llegar a las estrellas!
Shrek: “Para vivir felices para siempre, Hada madrina.” Ya veo que ya no estamos en el pantano.
Burro: - Adiós, muñecas. Gócenme que me les voy. Órale, ¿quién te puso los cuernos’ Miren, allí vive la greñuda de Rapuncel. Y allí a la izquierda está el cantón de la Cenicienta. Esto sí que es visitando a las estrellas.
Vocero: - Anunciamos el tan esperado regreso de la hermosa Princesa Fiona y su nuevo esposo.
Fiona: - Bueno, enos aquí.
Rey: -Elos aquí.
Vocero: -Elos aquí.
El señor de las palomas: -Elos aquí.
Burro: ¡Heee! Adelántense, yo voy a estacionar el coche.
Shrek: - Cielo, ¿sigues creyendo que es buena idea?
Fiona: - Claro, mira, mis papás están felices de vernos.
Rey:- ¿De dónde salió ese par?
Reina:  - Me parece que es nuestra pequeñita.
Rey: - Nada de pequeñita. Es un problema mayúsculo. ¿Que no iba a besarla el Príncipe Encantador y a romper el hechizo?
Reina:  - Bueno, no es un Príncipe Encantador, pero al menos Fiona se ve...
Shrek: - ¿Contenta? Ya venimos, ya los vimos. Vámonos antes de que empiecen a encender las antorchas.
Fiona: - Son mis padres.
Shrek: - Amor, te encerraron en una torre.
Fiona: - Sí, pero fue por mi propio...
Rey:  - Bien. Ahora es cuando. Regresemos adentro y que les digan que no estamos.
Reina:  - Harold. Tienes que ser...
Shrek: - Rápido. Están distraídos. Podemos salir corriendo.
Fiona: - Ya, Shrek. Ya basta. Todo va a resultar...
Rey:  - Un desastre! De ninguna manera...
Fiona: - Puedes hacerlo...
Shrek: - Pero de verdad...
Fiona y Rey:  - De verdad...
Fiona: - Yo...
Rey:  - ... no...
Fiona: - ... quiero...
Rey:  ... estar...
Fiona y Rey:  - ... aquí.
Fiona: - ¡Mamá! ¡Pá! Les presento a mi esposo… Shrek.
Shrek: - Bueno, ahora veo, de dónde sacó Fiona sus encantos.
(ESCENA DE CENA)
Fiona: (eructa) perdón.
Shrek: Yo siempre digo mejor afuera que adentro, jajajaja, ¿es bueno no?... creo que no.
Burro: ¿Cómo que no estoy en la lista de invitados? ¿Que no sabes quién soy? HEEEEY QUIBOLE COMO ESTAN? Gracias por esperarme, es que no había lugar para estacionarse. 
Rey:  ¡No no! ¡Burro malo! ¡Bájate, bájate de ahí!
Fiona: No, no, no, no papá, esta bien, burro viene con nosotros, el ayudó a rescatarme del dragón.
Burro: Sip, soy yo, el noble corcel. ¡Mesero! ¡Traite un platito pal corcel!
Shrek: Que pesadilla…
Fiona: Aaah Shrek….
Shrek: ¿Uh? oooh lo siento, ¡rica sopa, suegrita!
Fiona: No no no, cielo….
Shrek: ¡Ooh! Jeje 
Reina:  Y bien Fiona, platíquennos, ¿en dónde viven?
Fiona: Bueno… Shrek es dueño de unas tierras, jaja, ¿verdad, tesoro?
Shrek: ¡Aah sí! Soy dueño de un bosque encantado, abundante en ardillas y lindos patitos.
Burro: ¿QUÉ? Jajaja ¿no me digas que hablas del pantano?
Shrek: Burro…
Rey:  El ogro de un pantano, ja, que original.
Reina: Supongo… que es un bueno lugar para criar a sus hijos.
Shrek: Es un poco precipitado pensar en eso, ¿no creen?…
Rey:  En efecto, estamos comiendo…
Reina: ¡Harold!
Shrek: ¿Y qué significa eso?
Fiona: papá, es maravilloso, ¿sí?
Rey:  bueno, para alguien de su tipo
Shrek: ¿mi tipo?
Burro: eeehm.. voy a mi arbolito.
Chef: La cena esta lista.
Burro: Mejor, aprieto cuerpo.
Chef: Bon appetiu
Burro: Ooh, bon apeti, comida griega.
Reina: Bien que estamos esperando si tenemos hambre, que empiece todo el mundo.
Burro: Yo sí le entro, Lilean.
Rey:  ¿Y supongo que cualquier nieto que esperaría de ustedes sería…
Shrek: Ogro…. ¡sí!
Reina: Aunque eso no tendría nada de malo. ¿o sí, Harold?
Rey:  - Oh, no, no, no. Claro que no. Bueno, eso si no se comen a sus propios hijos.
Fiona: - ¡Papá!
Shrek: - Ah, ahora resulta que es peor comérselos que encerrarlos en una torre.
Fiona:  - Shrek, basta.
Rey:  - Yo hice eso porque la amo.
Shrek: - Claro, y la llevó a la guardería del dragón.
Rey:  - No lo entenderías porque no eres su padre.
Reina: Qué gusto que la familia se reúna para cenar.
Reina: ¡Harold!
Fiona: ¡Shrek!
Shrek: ¡Fiona!
Rey:  ¡Fiona!
Fiona:  ¡Mamá!
Reina: ¡Harold!
Burro: ¡Burro!
(ESCENA DE CUARTO DE FIONA)
Hada madrina (cantando): Tus lagrimas me traen aquí, con un remedio para ti, se lo que una princesa así, desea para ser feliz.
Oh, querida, niña. Qué barbaridad, eres toda una señorita.
Fiona:  - Ah ¿y tú eres?
Hada madrina: - Ay mi muñequita. Yo soy tu Hada Madrina.
Fiona:  - ¿Tengo Hada madrina?
Hada madrina: - ¡¡¡sh, sh, sh, sh... No digas nada, estoy aquí para solucionarte la vida.
Hoy. Vas. A. Ver mi varita usar, tus penas vas a olvidar, mi muñeca al girar con distinción traerá a tu príncipe ricachón ratones tu atuendo van a coser, con magia el estrés vas a vencer, no mas problemas en tu alma habrá, confía en tus amigos los muebles y ya. Podrás lograr la moda encantar. Yo te hare hermosa una deidad. Al príncipe le gustará. Tu nombre veras en cualquier pared
Mueble: Para ser feliz llame a Fiona usted…
Hada madrina (y muebles): Para pasear carruajes pop con un sexy conductor. Barros y caries olvidaras, esas caderas rebajaras. Vas a ver lo que puedo ofrecer.
Hay que hacer aquí haya te espera un príncipe si igual, rímel, sombras y labial, lo atrapará tu toque sensual. Día feliz, gozarán. Sobre Enero, los gorros darán.
Sentirás su pasión al oír mi canción no seas gris se feliz tendrás príncipe en un tris, un querubín de san Valentín y tu amor será su fin, hay que hacer aquí y allá, te espera un príncipe sin igual.
Fiona:  - ¡YA!, es que te lo agradezco mucho, hada madrina, pero no necesito nada de esto.
Shrek: - ¿Fiona?, ¡Fiona!
Burro: Ay un cachorrito, en mi cuarto nomas me dejaron un shampoo.
Fiona:  ¡Ah!, hada madrina, queridos muebles, les presento a mi esposo. Shrek
Hada madrina: - ¿Tu esposo? ¿Qué? ¿Qué has dicho? ¿Y cuando pasó esto?
Fiona:  - Shrek fue el que me rescató.
Hada madrina: Eso no puede ser. 
Shrek: -Ay que bien, más parientes.
Fiona:  -Ella solo quiere ayudar.
Shrek: -Bien, que nos ayude a empacar. Trae tu abrigo, querida, nos vamos.
Fiona:  - ¿Qué?
Burro:  - ¿Irnos?, yo no me quiero ir. 
Fiona:  - ¿Y cuándo lo decidiste?
Shrek: -Desde que llegamos. 
Fiona:  -Bueno, lo siento.
Hada madrina: -No, no te preocupes, yo ya tenía que irme. Pero recuerda querida, si algún día me necesitas, la felicidad está al alcance de una lagrima.
Shrek: -Gracias, pero ya tenemos la felicidad que necesitamos. Vivimos muy muy felices. 
Hada madrina: - Se nota jaja. Vámonos Kyle.
Fiona:  -Ya estarás contento.
Shrek: - ¿Qué? Te dije que venir no era una buena idea.
Fiona:  - Al menos hubieras intentado llevarte bien con mi padre.
Shrek: -Fiona, no creo que tu papá me hubiera dado su bendición, aunque yo hubiera querido. 
Fiona: ¿Y no has pensado qué sería lindo que me preguntaras lo que yo quiero? 
Shrek: -Claro, ¿quieres que empaque tus cosas?
Fiona:  ¡Eres increíble! Te comportas como un….
Shrek: Anda, dilo.
Fiona:  ¡Como un ogro!
Shrek: Noticia de última hora, aunque a tus padres no les guste, ¡yo soy un ogro! AAAAAAHHHHH
¿Y adivina qué, princesa? ¡Eso no cambiara nunca!
Fiona:  Yo sí cambié por ti Shrek… piensa en eso. 
Burro:  Fuiste rete-tierno, Shrek. “Aaah soy un ogro” ¡¡¡AAAAAAHHHH!!!”
Rey:  Sabía que esto pasaría.
Reina:  Por su puesto, tú lo iniciaste.
Rey:  No puedo creer tu actitud Lilean, date cuenta. El es el ogro, no yo.
Reina: Creo que estas tomando esto de forma muy personal, fue Fiona quien lo eligió.
Rey:  Sí pero se suponía que elegiría al príncipe que escogimos para ella. ¡¿Enserio esperas que le de mi bendición a esa... esa cosa?!
Reina:  Fiona lo espera, jamás te perdonaría que no lo hicieras. No quiero volver a perder a nuestra hija, Harold. Actúas como si el amor fuera algo predecible. ¿No recuerdas cuando éramos jóvenes y salíamos a pasear al estanque de lirios? Estaban en flor.
Rey:  Nuestro primer beso. ¡NO ES LO MISMO! ¡¿No te has dado cuenta que nuestra hija se casó con un monstruo?!
Reina:  Ugh.. eres el rey del drama.
Rey:  ¡Bien! finjamos que todo es maravilloso! Chala-la chala-la todo es color de rosa. ¡Quisiera saber si hay algo peor!
Hada madrina: Hola, Harold.
Rey: ¡Ay!
Reina:  ¿Qué te pasa?
Rey: Nada, nada querida, esta lesión de los meniscos que no me ha quedado bien desde las batallas, jajaja. Iré a estirar las piernas un rato.
Hada madrina: Sube a la carroza. Tenemos que hablar.
Rey: De hecho, mi quería hada madrina ya me iba a acostar, ay ya me tomé mis píldoras para dormir. Podría ser una…. ¿Visita muy rápida? ¿sí?
¡Hola! Eeeh jejeje… ¿y qué hay de nuevo?
Hada madrina:¿Recuerdas a mi hijo? ¿El príncipe encantador?
Rey: ¡Encantador eres tú! ¡Que sorpresa! Como pasan los años, cuanto hace que regresaste?
Encantador: Ah, en realidad hace 5 minutos. Soporté vientos despiadados, infernales desiertos, escale hasta el ultimo cuarto de la torre más alta.
Hada madrina: Sh-sh-shu, mami se encargará de esto. Soportó vientos despiadados, infernales desiertos, escaló hasta el ultimo maldito cuarto de la maldita torre más alta.
Rey: Pero- pero-
Hada madrina:: ¿Y qué encontró? Un lobo de sexo dudoso que le dice que su princesa-
Rey: Si me permite-
Hada: ¡Ya está casada!
Rey: Pero no fue culpa mía, él no llegó a tiempo
Hada: ¡DETEN EL AAAAUTO!..... Harold…. me obligas a hacer algo que en verdad no quiero hacer….
Rey:¿Dónde estamos?
Cajera: Bienvenidos a la fonda del renacimiento, su orden por favor.
Hada: ¡Voy a romper mi dieta! Ya estará contento… yo quiero dos tacos renacimiento sin cebolla ni picante…
Encantador: Yo quiero una cajita medieval feliz.
Hada: Una cajita medieval feliz y Harold….. ¿papas?
Rey: No nada, gracias.
Hada: ¿O prefieres unos tacos? ¿Qué quieres?
Rey: No, de verdad yo nada.
Cajera: Su orden, hada madrina. Esto viene con la cajita medieval feliz.
Hada: Ten tesoro. Hicimos un trato Harold, y no querrás que yo no cumpla con mi parte.
Rey: Claro que no…. 
Hada: ¿Así que Fiona y encantador, sí van a casarse?
Rey: Sí….
Hada: Confía en mi Harold, eso es lo mejor… no solo para tu hija…. sino para tu reino.
Rey:¿Y qué puedo hacer al respecto?
Hada: Usa tu imaginación.
(ESCENA DE LA MANZANA ENVENENADA (CANTINA))
Ciclope: Majestad… bienvenido a la Manzana Envenenada.
Rey:¿Disculpe?
Rana: ¿Qué no te conozco?
Rey: No, no, no, me estas confundiendo con alguien más… uh disculpe, buscaba a la hermanastra más fea. Ah pero si eres tú. Verás, busco a quien me ayude a desaparecer a alguien…
Hermanastra: ¿De quién se trata?
Rey: No es exactamente un tipo, de hecho…. es un ogro.
Hermanastra: Amigo, le diré algo, solo existe alguien que haría un trabajo de esos, y créame… no le gusta que lo molesten.
Rey: ¿Dónde lo encuentro?
¿Hola?
Gato: ¿Quién osa importunarme?
Rey: Disculpe espero no interrumpir me dicen que con usted puedo hablar del problema… con un ogro.
Gato: Os han dicho bien, pero cobro por ello una gran suma de dinero.
Rey:¿Esto será suficiente?
Gato: Habéis contratado mi valioso servicio, majestad. Solo decidme, ¿dónde encontraré a ese ogro? 
(ESCENA DE CUARTO DE FIONA ….. DE NOCHE) (MÁS MUSICA CON COPY)
Fiona (figura): Sir caballero, os ruego aceptéis esta prenda como muestra de mi gratitud. 
Fiona (diario): Querido diario, La bella durmiente hará una pijamada mañana, pero papá no me deja ir, siempre dice que tengo que llegar antes de la puesta de sol.
Papá dice que me iré lejos por un tiempo, creo que a un internado para princesas o algo así.
Mi mamá dice cuando tenga edad, mi príncipe encantador me rescatará de la torre y me traerá con mi familia. Y que viviremos felices por siempre.
Señora Fiona de Encantador. Señora Fiona de Encantador. Señora Fiona de Encantador. Señora Fiona de Encantador. Señora Fiona de Encantador.
(Rey toca la puerta)
Rey: Lo siento. Espero no haber interrumpido nada. 
Shrek: No, no, no, estaba leyendo un… libro de terror.
Rey: Solo he venido a disculparme por haber sido tan grosero.
Shrek: Bien….
Rey: No sé lo que me sucedió, ¿podríamos hacer de cuenta que nunca pasó y empezar de nuevo?
Shrek: Escuche majestad, yo….
Rey: Por favor dime papá.
Shrek: Papá…. los dos actuamos como ogros tal vez solo necesitamos tiempo para conocernos.
Rey: Excelente idea, de hecho, yo esperaba que aceptaras ir conmigo mañana de cacería como padre e hijo. Esto significaría mucho para Fiona.
¿Te parece a las 7:30 en el viejo roble?
(ESCENA DEL BOSQUE)
Shrek: Acéptalo, burro, nos perdimos.
Burro:  Me cae que no, seguimos las instrucciones a la pata de la letra. Ahí decía: derecho hasta lo más profundo y oscuro del bosque.
Shrek: Sí.
Burro:  Pasa los arboles siniestros con ramas tenebrosas.
Shrek: Sí.
Burro:  Hasta un arbusto en forma de Paquita la del barrio.
Shrek: Ya pasamos este arbusto 3 veces.
Burro:  Oye tu fuiste el que no quiso pararse a preguntar,
Shrek: Que bien, mi oportunidad de reconciliarme con el papá de Fiona, ¡y termino perdido en el bosque contigo!
Burro:  Oye no te enogres conmigo, yo nomas quiero ayudar.
Shrek: ¡Lo sé!... ya lo sé, Burro, lo siento.
Burro: Hey, no hay bronca. 
Shrek: Es que necesito arreglar mi relación con él.
Burro:  Sí, hay que ser amigos de papito suegro.
Shrek: ¿Qué te pasa burro? Se que te pusiste sentimental hace rato, pero no ronronees.
Burro: Tas loco, yo no ronroneé. 
Shrek: Claro ¿y que sigue, un abrazo?
Burro:  Oye, los Burros no ronroneean, soy burro pero no-
Gato: JA-JA! Temedme, si osáis! JJJJJJJH
Shrek: ¡Mira un gatito!
Burro:  ¡Cuidado Shrek! ¡Esta armado!
Shrek: Es un gatito Burro. Ven acá michito, michito, ven, ven aquí, gatito, gatito.
(GATO ATACA AL CHERC)
Shrek: haaaaaaooo
Burro:  Cuidado Shrek. ¡Aguas!
Shrek: - ¡Quítamelo! ¡Quítamelo!
Burro:  - ¡Cuidado Shrek!
Shrek: - ¡Quítamelo!
Shrek: -¡Es un gato montés!
Burro:  -No te muevas. ¿Fallé?
Shrek: -No, les diste.
Gato: Escucha ogro, pedid piedad... gato con botas. 
Shrek: -Voy a matar a ese gato.
Gato: AJA!! …. jijij …….. un pelo jeje.
Burro:  Wuuaj que marrano eres.
Shrek: - ¿Qué sugieres que hagamos con él?
Burro:  Pues pa mí que debemos hacerle la vasectomía con su propia espada.
Gato: Ay mamá no por favor, por piedad os lo suplico, no era nada personal señor, solo lo he hecho por mi familia, mi madre esta enfermita y mi padre vive de la basura. El rey me ofreció mucho oro, tengo una camada de hermanitos...
Shrek: Oye, oye, oye, oye, ¿el padre de Fiona te pagó para hacer esto?
Gato: - ¿El rey rico? Sí.
Shrek: -Ahhh, adiós a la bendición real de papá suegro.
Burro:  Ya Shrek no te me agüites. Todo el que te conocen te quiere hacer carnitas.
Shrek: -Que consuelo. Tal vez Fiona se sentiría mejor si yo fuera algo así como un príncipe encantador.
Gato: -¡SÍ, lo mismo dijo el rey!
Gato: - Ohhh haaa. Perdón, creía que me habías preguntado a mí.
Burro:  - Shrek, Fiona sabe qué harías lo que juera por ella.
Shrek: -Yo cambiaría cualquier cosa por ella. Quisiera poder hacerla feliz. Que tonto soy. Felicidad al alcance de una lágrima.
Shrek: - Burro, piensa en lo más triste que te haya pasado en la vida.
Burro:  ¡Uuuy! ¿Pues por dónde empiezo? Una vez un granjero me quiso cambiar por un kilo de frijoles mágicos. Eso nunca lo supere. Otro día en una fiesta, jugaron a ponerle la cola al burro conmigo y que crees..., me picotearon las nachas, luego gritaron todos piñata piñata y que todos me agarran a palos.
Shrek: -No burro, necesito que llores.
Burro:  - No te quieras proyectar en mí eh, tú tienes que vivir tu propia tristeza y ¡aaahhhhhh! Mendiga bola de pelos….
Hada: ¿Está grabando? ¿ya ya está grabando? Habla el hada madrina. Por el momento no puedo contestar, pero si pasa por mi oficina con gusto le concederé una cita personal. Sean felices por siempre.
Shrek:- ¿Estás dispuesto para una nueva aventura, Burro?
Burro:  - A sus órdenes jefe, Shrek y Burro, otra vez juntos en una aventura. Nadie nos detendrá. Wuuu todos con las palmas.
Gato: - Alto ogro, os he juzgado mal.
Shrek: - Únete al club, no hay cuota.
Gato: -Es mi honor lo que me obliga a acompañarle hasta salvar yo su vida, por haberme perdonado la mía.
Burro:  -Lo siento, el papel de animal latoso que habla ya me lo dieron a mí. Vámonos Shrek.
Burro:  ¿Shrek?
Shrek: - Conservémoslo burro, míralo. ¿No te dan ternura esas botitas? No cualquier gato llena las botas. Anda quedémonos con él.
Burro:  -¿Qué dijistes?.... aaaarghhhh
Shrek: -Oye como ronronea.
Burro:  -Ahora hasta bonito lo vez.
Shrek: -Ay burro no seas tan amargado.
Burro:  -¿Amargado yo?, quien es el amargadito. Mira quien habla de amargocidad. 
(CUARTO DE FIONA)
Fiona: Jaja Shrek… ¿Shrek?
Reina: Las dos me parecen muy alegres, ¿qué opinas Harold?
Rey: Eh sí, sí, está bien, bien….
Reina: Al menos trata de fingir interés en el baile de la boda de tu hija
Rey: Honestamente Lilean, no creo que importe. ¿Cómo sabemos que este baile se va a celebrar?
Fiona:  Mamá, papá.
Reina: Ah hola, querida.
Rey:¿Qué dices Cedric? Sí, ya voy.
Fiona:  ¿Has visto a Shrek?
Reina: No hija, pregúntale a tu padre, pero háblale despacito, querida, esta un poco distraído esta mañana.
Cedric: ¿Se le ofrece algo, majestad?
Rey: Ah sí… mmh exquisito, ¿qué platillo es este?
Cedric: Lo llamamos “sobras de comida para el perro”, majestad.
Rey:¿Ah sí?, que bien come el perro. Adelante, Cedric.
Fiona:  ¿De casualidad, no has visto a Shrek?
Rey: Oh no, querida, seguramente fue a buscar un lodoso pantano para refrescarse después de su pleitesito de anoche.
Fiona:  Ay, ¿nos escuchaste?
Rey: Hija, el reino entero los escuchó, después de todo es parte de su naturaleza ser un poco bruto.
Fiona:  ¿Él? Tu no lo recibiste precisamente con los brazos abiertos.
Rey:¿Y qué es lo que esperabas, hija? mira lo que te ha hecho.
Fiona:  Shrek me ama como yo soy, creí que eso les daría gusto por mí.
Rey: Querida, yo solo pienso en lo que es mejor para ti. Tal vez tu deberías hacer lo mismo.
(DE VUELTA AL BOSQUE CAMINO A LA FABRICA)
Gato: (susurra en andaluz)
Shrek: ¿No? ¿De veritas?
Burro:  ¡Wow… listo! Ya llegamos, ya vimos, ya vámonos.
Gato: Es la casita del Hada madrina, la mayor fabricante de embrujos y pociones de todo el reino.
Shrek: Pues a ver si tenemos más suerte para la pócima… ja la pócima, ¿entendieron? ¿La pócima?
Gato: ¡Jajaja! ¡Eso sí que es gracioso! 
Shrek: Hola, quisiera ver….
Recepcionista: Al hada madrina… lo siento, no se encuentra.
Hada madrina: Jerónimo, un café y una pizza con queso doble, ¡ahora!
Recepcionista: Sí, Hada madrina, ahí voy… mire el día que de hoy no recibe a nadie, ¿entiende?
Shrek: Tranquilo, amigo, somos del sindicato.
Recepcionista: ¿El sindicato?
Shrek: representamos a los trabajadores de la industria de la magia negra y blanca.
Recepcionista: Uuuh, oh, entiendo.
Shrek: ¿Ha sido victima de malos tratos o presiones?
Recepcionista: Aah un poco, no tengo mi seguro social.
Shrek: No tiene seguro social. Que afortunado, vamos a inspeccionar... aah apropósito, será mejor que el hada madrina no sepa que estamos aquí. ¿entiende? ¿eh?
Burro:  ¿eh? ¿eh?! ¿EH?!
Shrek: Basta.
Recepcionista: Sí, claro, pueden pasar…
--
Hada madrina: Una gota de deseo jajaja, una pisca de pasión jajaja y una probada de…. Lujuria JAJAJAJA
Shrek: Lamento importunarla pero..
Hada: En el nombre de Merlín, ¿qué hacen aquí?
Shrek: Es que… es que, Fiona no es muy feliz que digamos
Hada: ¿jajaja y te ha preguntado por qué podrá ser? Vamos a investigar ¿quieres? ….. 
P-p-p-p princesa…. Cenicienta, “y vivieron felices por siempre” ah jaja no hay ogros… ahora Blancanieves, “un apuesto príncipe” y no hay ogros. La bella durmiente, ah! no hay ogros. Hansel y Gretel, no. Pulgarcita, no. El pájaro de oro, la Sirenita, Mujer bonita…. No, no, no, ¡no NO! ¿lo ves? Los ogros no viven felices por siempre
Shrek: ¡Oiga, escuche, señora!
Hada: No me señales con esos sucios dedos verdes de salchicha.
Trabajador: ¡Pizza con queso doble y café! Uy! Lo siento.
Shrek: Aaah adelante, ya nos íbamos. Lamento haberle quitado su tiempo señora hada madrina
Hada: Ya… váyanse.
Shrek: Vamos, chicos.
--
(SHREK SE INFILTRA COMO TRABAJADOR)
Shrek: Gracias a Dios que es viernes.
¿Trabajando duro, o durando en el trabajo?
Trabajador: Eh, es igual…
Shrek: Aquí es la bodega de pócimas.
Burro:  Oye ¿me podrías quitar tus patotas y tu cola peluda de mi cara?… hieden regacho.
Gato: Pues tú, amigo, no hueles precisamente a rosa.
Shrek: Una de estas tiene que ser…
Gato: Ah ese es el plan que yo estaba tramando, ahora nuestras mentes trabajan como una sola.
Burro:  Oye, oye, ¡oye! Ya bájale, si necesitamos un lame botas te llamaremos. Shrek, no es una buena idea. 
Shrek: Burro, sirve de algo y vigila la puerta. Gato, ¿crees poder alcanzar las de hasta arriba?
Gato: Sin problema, jefe, en una de mis siete vidas fui el gran gato ladrón de Santiago de Compostela.
Burro:  ¿Shrek, que mosco te picó?
Shrek: Burro, tu vigila.
Burro:  ¿Qué vigile? Sí voy a vigilar que esa perversa hada te ponga una madrina hasta que te deje morado por siempre, es lo que voy a vigilar, y luego me voy a ir a carcajear solito.
Shrek: ¿Qué es lo que ves?
Gato: ¿Lax-santiamen?
Burro:  Mejor busca algo para sus apestosos gases, seria la solución a sus problemas maritales. 
Gato: ¿Hada-seltzer?
Shrek: Uh-uh.
Gato: ¿Hechi-soda?
Shrek: ¡No! Tienes que buscar “apuesto”.
Gato: Lo siento, “Apuesto” no está. Hey, ¿qué te parece, “felices para siempre”?
Shrek: ¿y para que sirve?
Gato: aquí dice, “belleza divina”.
Burro:  ¿Sabes? Hay culturas en las que los burros son creaturas sabias, especialmente los que hablamos.
Shrek: ¡Burro! Agarra esa, tenemos compañía.
Burro:  Ay ya vámonos.
Shrek: ¡Deprisa! 
Burro: ¡MIA!
Shrek: Buena atrapado, burro.
Gato: Por fin tu bocaza sirve de algo.
Shrek: ¡VAMONOS!
(ESCENA DE PERSECUCION CON COPYRIGHT)
Hada: a mi no me interesa quien lo hizo. Lo único que quiero es que limpien.
Trabajadores: Sí, hada madrina. 
Hada: Y por favor que alguien me traiga algo frito y cubierto con chocolate.
Encantador: ¡Madre!
Hada: Encantador, tesoro. No puedo atenderte, pequeño, mamá está trabajando.
Encantador: Mami, ¿Qué pasó aquí?
Hada: ¡El ogro! ¡Eso pasó! 
Encantador: ¿Qué?! ¿dónde esta mami? Le cortaré la cabeza de un tajo, dejaré su cuerpo en pedacitos, ¡va a lamentar el día en que se atrevió a despojarme de mi reino!
Hada: Uh… no exageres, hijito, tú vas a ser el rey, solo tenemos que idear un plan más inteligente.
Recepcionista: Pardon, uh ya hemos inventariado todo, hada madrina, solo falta una pócima.
Hada: ¿Qué? ooooh, me parece que podremos sacar ventaja de esto. 
(ESCENA DEL BOSQUE)
Shrek: - “Pócima para vivir felices por siempre, extra concentrada para ti y tu verdadero amor. Si uno de los dos lo bebe ambos se beneficiarán. Felicidad, comodidad y belleza divina tendrán.”
Burro:  - ¿Ambos se beneficiarán?
Shrek: -Ósea que también afectará a Fiona.
Burro:  -Esto como que no me late. Mi sexto sentido animal me dice que algo anda mal. Mejor ya tira ese mugroso menjurje y vámonos de aquí.
Shrek: Aquí dice Belleza divina, ¿qué más puede pasar?... *estornuda*
Burro:  ¡Aja! ¿Lo ves? Eres alérgico a eso, te va a hacer reacción y si crees que voy a andar untándote vaporoe en tu pechito, te equivocas.
Gato: Jefe solo por si… la poción fuera peligrosa, déjame dar el primer sorbo, para mi seria un gran honor arriesgar mi vida, por ti.
Burro:  Nah, nah, nah, nah, ‘tas bien tonto, si tiene que haber un burrillo de indias voy a ser yo, es el deber del mejor amigo. Dame esa botella.
Shrek: ¿Como te sientes?
Burro:  Pues eeh.. no me siento diferente… ¿me veo diferente?
Gato: Yo te veo igual de burro.
Shrek: Tal vez no funciona en burros. Bien, va por nosotros, Fiona.
Burro:  Shrek, si te tragas eso no hay marcha atrás.
Shrek: Ya sé.
Burro:  Ya no vas a revolcarte en el lodo.
Shrek: Ya sé.
Burro:  Ya no vas a rascarte la coliflor. 
Shrek: ¡Ya sé!
Burro:  ¡Pero te encanta ser ogro!
Shrek: ¡YA SÉ! … pero amo más a Fiona.
Burro:  Shrek, no, ¡espera!
Ugh tenía que ser Shrek, creo que te trajiste la fórmula de… pedorrines por siempre.
Gato: Tal vez no haga nada…
Shrek: Quizá Fiona y yo no eramos el uno para el otro.
Burro:  Oh-oh, te lo dije, algo me está pasando, denme un purgante, no quiero morir, ¡no quiero morir! ay santo patrón de los burros, me derrito, me derrito, ¡me derrito!
Shrek: Solo es la lluvia, burro.
Burro:  Aah jaja.
(ESCENA DEL GRANERO)
Burro:  Shrek tranquilo, las cosas se ven mal porque todo está oscuro, lloviendo y porque el papá de Fiona, contrato un ampón pa’ matarte. Todo estará mejor en la mañana, créeme.
Seguro que hay sol mañana… ya verás que…
Shrek: ¿Ya veré qué?
Burro:  ¡Ahí te voy, San Pedro!
Shrek: ¿Burro? ¿Estas bien, burro?
Gato: Hey jefe, ¿lo rasuramos?
Shrek: Bu-burro….
(ESCENA DEL CASTILLO)
Rey: Por fin llegas, te extrañamos en la cena.
Reina: ¿Qué pasa, hija?
Fiona:  Papá, he estado pensando en lo que dijiste y voy arreglar las cosas.
Rey: Excelente esa es mi niña.
Fiona:  Fue un error haber traído aquí a Shrek, voy a salir a buscarlo y regresaremos al pantano que es nuestro hogar.
Reina: ¡Fiona! ¡Por favor!
Rey: Actuemos con cordura, querida, ¡no puedes ir a ningún lado ahora!
Rey, Reina: ¡FIONA!
(ESCENA DEL GRANERO EN LA MAÑANA)
Urgida 1: Buen día, dormilón.
Urgida 2: Buenos días
Urgida 3: Buenos días.
Urgida 2: Que lindo tu gatito.
Shrek: Ay mi cabeza…
Urgida 1: Ten, te traje un balde de agua fría.
Shrek: Ah gracias… AAAH!
Una nariz... ¿pequeña y respingada? ¿El cabello rizado?… y nachas redonditas… soy, soy…..
Urgida 1: Hermoso. 
Urgida 2: Ya lo creo.
Urgida 1: Soy Jill, ¿Cómo te llamas?
Shrek: Uuh Shrek.
Urgida 1: ¿Shrek? Wow ¿eres europeo? 
Urgida 2: Estas muy tenso
Urgida 1: Te daré un masaje.
Urgida 2: Yo se lo daré.
Urgida 3: También quiero darte masaje
Urgida 1: Bueno haz fila.
Shrek: ¿Han visto a mi burro, chicas?
Burro:  ¿A quién le dices burro?
Shrek: Burro?! Eres un…
Burro:  ¡Un semental, mi Shrek! Puedo relinchar, puedo contar, ¡mírame, Shrek! ¡Estoy trotando! Que pócima tan efectiva, ¿de que estará hecha?
Gato: “Ay no te tomes esa poción, jefe, es muy peligrosa”. BAAH. “Aviso. Efectos secundarios. Picores, ardores, diarrea, vómito, no indicada en pacientes hipertensos ni con estado de citabilidad.” 
Burro:  Troto, troto, troto, relincho, troto, troto, troto, relincho, ¡WUUUU!...... ¿Qué?
Gato: Señor, para que sus efectos sean permanentes, quien la tome deberá recibir el beso de su amor verdadero a media noche.
Shrek: Media noche ¿Por qué siempre es a media noche?
Urgida 2: Elígeme y seré tu verdadero amor.
Urgida 1: yo seré tu verdad.
Urgida 3: Yo seré tu amor… a veces.
Shrek: Uh doncellas, yo ya tengo un verdadero amor.
Urgidas: Aaawww….
Gato: Y puedes creerme jefe, tu princesa va estar mucho más que satisfecha.
Burro:  Jaja acéptalo, taras muy guapo por fuera, pero por dentro eres el mismo ogro agrio, gruñón, apestoso y pretenciero que siempre has sido. 
Shrek: y tu sigues siendo un burro desesperante
Burro:  Sí.
Shrek: Bien. ¡Prepárate princesa! ¡Aquí viene el nuevo yo!
Burro:  Bueno, primero lo primero, quítate esos harapos.
(ESCENA DEL ASALTO)
Shrek: ¿Listos?
Gato: Sí
Burro:  Listos.
Burro:  AAAAH 
Papá: ¡Chofer, alto!
Burro:  ¡AYUDENME POR FAVOR! Soy un pura sangre y me estoy coagulando, estoy ciego, díganme la verdad ya no podré ver la tele?
Papá: Oh, pobre creatura, ¿hay algo que pueda hacer por ti?
Burro:  Sí… hay algo que puedes hacer.
Gato: Quítese la empolvada peluca y despréndase del ropaje.
No está mal.
Burro:  Te ves chido.
Gato, Burro:  JAJAJAJA
Hijo: Padre, ¿todo está bien, padre?
Shrek: Gracias caballeros, algún día se los voy a pagar, al menos que no los encuentro o que se me olvide.
Gato: ¡Hey, tu! Pedazo de carne con patas, ¿Cómo te atreves a hacerme esto?
(ESCENA ENTRANDO A MUY MUY LEJANDO CON COPYRIGHT)
Guardia: Alto.
Shrek: Díganle a la princesa Fiona que su esposo, Sir Shrek, vino a verla.
FIONA!
Fiona:  ¿Shrek?... Shrek?
Shrek:  ¿Fiona?
Hada: Hola guapo.
(FIONA SALE A BUSCAR  A SHREK)
Fiona:  ¿Shrek?
Burro:  ¿Princesa?
Fiona:  ¿Burro?
Burro:  Wow, ¿la pócima también te afectó?
Fiona:  ¿cuál pócima?
Burro:  Es una larga historia, Shrek y yo bebimos la pócima mágica y ahora los dos somos… sexys.
Fiona:  ¿Shrek?
Gato: Por ti baby, sería Batman.
Burro:  Eso quisieras….
Fiona:  ¿Burro, donde esta Shrek?
Burro:  Acaba de entrar a buscarte.
Fiona:  ¡¿SHREK?!
Shrek:  ¿Fiona? Fiona?!
Mueble: ¿Quieres bailar, niño bonito? 
Hada: ¿Te vas tan pronto? ¿No quieres ver a tu esposa?
Encantador: Fiona.
Fiona:  ¿Shrek? 
Encantador: Sí, Fiona, soy yo.
Fiona:  ¿Qué le pasó a tu voz?
Encantador: Uh, la pócima modificó una serie de cosas Fiona, pero no mis sentimientos por ti.
Reina: Fiona.
Rey: ¿Encantador?
Encantador: Ah ¿te lo parezco? Jaja papá, esperaba tu aprobación.
Reina: Uh ¿quién eres tú?
Encantador: Mamá, soy yo, Shrek. Se que la primera impresión jamás se olvida, pero bueno, ¿Cómo me veo?
(SHREK GRITA PARA LLAMAR LA ATENCION DE FIONA)
Shrek:  ¡Fiona! Fiona! ¡FIONA! ¡FIONA!
Hada: ¡Fiona! Fiona! Jajaja ¡que horror! creo que no nos escuchan, pichoncito. ¿No crees que ya has interferido bastante en su vida?
Shrek:  Yo solo quería que fuera feliz.
Hada: Y ahora puede serlo. Mira, tesoro, por fin encontró al príncipe de sus sueños.
Shrek:  Pero mírame, mira lo que yo hice por ella.
Hada: Es hora de que dejes de vivir en un cuento de hadas. Ella es una princesa, y tu eres un ogro. Eso es algo que ninguna pócima podrá cambiar nunca.
Shrek:  Pero… yo la amo.
Hada: Si en verdad la amas, déjala ir.
(Shrek sale triste del castillo)
Burro:  ¿Shrek?
Gato: ¿Señor?
Burro:  ¿Oye que pashó? ¿Dónde vas?
Reina: ¿No habrás tenido nada que ver en esto o si, Harold?
(ESCENA DE CANTINA)
Hermanastra: aquí tienen, chicos.
Gato: Deja aquí la botella, Doris.
Hermanastra: Oigan, ¿por qué esas caras largas?
Shrek:  He cometido error tras erros, para empezar, nunca debí haberla rescatada de esa torre. 
Gato: Odio lo lune.
Burro:  No puedo creer que vayas a renunciar a la mejor cosa que te ha pasado en la vida. 
Shrek:  ¿Y qué puedo hacer? ella ama a ese niño bonito, el príncipe encantador.
Burro:  Ah chale, ni que estuviera tan carita.
Hermanastra: ¿Bromeas? Es un papucho, su cara parece tallada por los mismos ángeles.
Gato: Mmh, que suerte.
Shrek:  ¿Saben? aunque no lo crean esto no me hace sentir mejor. Amigos, es lo mejor, mamá y papá lo aprueban y Fiona tendrá al hombre con que siempre soñó. Todos ganan.
Burro:  Menos tu. No te entiendo, Shrek, tus amas a Fiona.
Shrek:  Sí, por eso tengo que dejarla ir.
Rey: ¿Disculpe, ella está aquí?
Hermanastra: Esta en la parte de atrás.
Rey: Uh eh hola, de nuevo.
(EL REY SE REUNE CON EL HADA MADRINA Y ENCANTADOR)
Rey: Hada madrina, Encantador.
Hada: Ugh espero que tengas una buena razón para hacernos venir, Harold. 
Rey: Es que temo que a Fiona en realidad no le atrae mucho el príncipe Encantador.
Encantador: Eh para tu información, no es mi culpa.
Hada: No, no, no, claro que no, querido.
Encantador: Osea, ¿qué tan encantador puedo ser si tengo que fingir que soy ese horrible ogro?
Rey: No, no, no, no es culpa tuya, tal vez serÍa mejor si canceláramos todo esto. ¿Sí?
Encantador, Hada: ¡¿QUÉ?!
Rey: Es que, no pueden obligar a alguien a enamorarse. 
Hada: Jajaja permite diferir, yo lo hago todo el tiempo. Haz que Fiona beba esto y se enamorará del primer hombre al que bese… que será Encantador.
Rey: No.
Hada: ¿Qué dijiste? 
Rey: Es que no puedo y no lo haré.
Hada: Sí lo harás. Por si no te acuerdas yo te di la pócima de Felices por siempre. Y si yo quiero puedo revertirlo. ¿Es lo que quieres? ¿Lo quieres?
Rey: No.
Hada: Que buen chico. Bien, debemos irnos. Debo peinar a Encantador para el baile, él no sabe, se hace mucha crepe en el frente y atrás nada. Siempre has necesitado mi ayuda.
Encantador: Ah, gracias madre. 
Burro:  ¡¿Madre?!
Shrek:  ¡Mira! ¡Un caballo que habla!
Hada: ¡EL OGRO! DETENGANLO!
 ¡BANDIDOS! DETENGANLOS
(ESCENA DE LA ALFOMBRA ROJA)
Espejo: Ah tenemos las caras mas bonitas y los cuerpos mas atléticos en este baile del reino Muy muy lejano, los carruajes se alinean a medida que celebridades como el pequeño Cri-cri descienden, ¿lo dejaran pasar? 
Presentadora: La crema y nata se ha reunida en honor de la princesa Fiona y el príncipe Shrek, wow, sus atuendos son soberbios. Miren Hansel y Gretel, ¿para qué demonios son las migajitas? Y atrás vienen Pulgarcito y Pulgarcita. Ay ¿no son adorables? Aquí viene La bella durmiente, ay ya se durmió. 
Ay ¿quién es? ¿quién será, ¿quién es? Es la única, la inigualable ¡El hada madrina de los cuentos!
Hada: Hola, Muy muy lejano. Jaja, ¡no escucho el ra-ra!
Que todos sus sueños se realicen y… jaja ¡ya conocen el resto! 
Espejo: Esto es Entretenimiento Medieval, regresaremos al baile después de unos mensajes.
Jengibre: Me aburren los espectáculos y los bailes. Cámbiale prefiero la rueda de la tortura.
Pinocho: No le voy a cambiar hasta que salgan Shrek y Fiona.
Jengibre: -Hay ya cállense todos. Ratones pásenme unas alitas de pollo. No, a tu izquierda. ¡A tu izquierda! 
Programa: -Esta noche en CABALLEROS. 
Jengibre: Ah ese si es un buen programa.
Guardias: Un corcel blanco a la fuga en la zona sur, necesitamos refuerzos. 
Programa: Los hombres de acero les enseñan a estos mamíferos que no hay nadie por encima de la ley. 
Guardias: ¡Alto quietos!
Burro:  Esto es brutalidad policiaca. Me quejare con derechos equinos.
Shrek:  -Ya estuvo, ya estuvo por favor, tengo que hablar con la princesa Fiona.
Policía: - Te lo advertimos.
Programa: ¿Se saldrán con la suya? ¿O aquí habrá gato encerrado?
Gato: ALTO! ¡Brutalidad policial!
Policía: Quítenmelo, ¿Qué traes aquí? Arena para gato-
Gato: Eso no es mío.
Shrek:  Espere traigan a la princesa Fiona...,
Soy… su esposo Shrek... 
Programa: CABALLEROS.
Jengibre: -Rápido regrésalo.
Shrek:  -Soy… su esposo Shrek. 
(ESCENA EN EL CASTILLO)
Rey: Querida, ah sabía que te encontraría aquí. ¿quieres una tacita de té caliente antes del baile?
Fiona: No voy a ir.
Rey: Pe-pe-pero si todo el reino ha venido a festejar tu boda.
Fiona:  Hay un problema, ese no es mi esposo, míralo.
Rey: Es diferente, pero nomas tantito, la gente cambia por sus seres amados. No tienes idea de cuanto cambié yo por tu madre. 
Fiona:  ¿Cambiar? Está completamente enloquecido.
Rey: Querida, ¿por qué no bajas al baile y le das otra oportunidad? Tal vez descubras que sí te gusta este nuevo Shrek. 
Fiona:  Del que yo me enamoré es del otro. Daría lo que fuera para recuperarlo.
Rey: Ah querida, ese es mío, sin cafeína, la cafeína me quita el sueño.
Fiona:  Gracias.
(ESCENA DEL CALABOZO)
Burro:  - ¡Saquenme de aquí!, tengo que salir pa fuera, bájenme pa abajo, ni siquiera me leyeron mis derechos. ¡Me tenían que decir que tenía derecho a guardar silencio, nadie me dijo que tengo que guardar silencio!
Shrek:  -Burro, tienes el derecho de guardar en silencio, lo que no tienes es la capacidad.
Gato: Debo mantenerme sereno para no caer en la locura.
Jengibre: - ¿Shrek, Burro?
Gato: - Ya es tarde.
Shrek:  - ¡Jengibre, Pinocho! Sáquennos de aquí.
Cerdos: Cúbranse!
-(ESCENA DE MISION IMPOSIBLE)
Jengibre: ¡Fuera abajo!
Shrek:  Rápido, di una mentira.
Pinocho: ¿Qué puedo decir?
Jengibre: Lo que sea, rápido.
Burro:  Alguna burrada como “traigo ropa interior de mujer”
Pinocho:  Eh tengo ropa interior de mujer.
Shrek:  ¿La traes?
Pinocho:  ¡Por supuesto que no!
Burro:  ¡Se me hace que por supuesto que sí!
Pinocho: ¡No es cierto!
Gato: ¿De qué clase?
Jengibre: ¡Es una tanga!
Pinocho:  ¡Son trusas!
Jengibre: No es cierto.
Pinocho:  Sí es cierto.
Jengibre: No es cierto.
Pinocho:  Sí es cierto.
Jengibre: ¡Con eso basta! ¡Listo!
Burro:  Perate! Perate, carnal, perate!
Ratones: ¿Oye Shrek?
Shrek:  ¿Qué? ¡Gato!
Ratones: ¿Disculpa, me podrías dejar ir?
Gato: ¡Se me antojó!
Shrek:  Déjense de tonterías hay que evitar ese beso.
Burro:  - ¿Pos no que la ibas a dejar ir?
Shrek:  -Iba, pero no puedo hacerle esto a Fiona.
Burro:  ¡Vaya música pa mis orejas! ¡Hasta que usaste la cabeza!
Gato: -Pero es imposible, no podremos entrar al castillo tiene guardias y un foso y toda la venia.
Jengibre: Bien chicos, parece ser que nuestra misión imposible resulto ser imposible.
¿Qué?
Shrek:  - ¿Sigues siendo amigo del pastelero?
Jengibre: -Claro, siempre voy a verlo a la pastelería. ¿Por qué?
Shrek:  -Porque necesitaremos harina. Mucha, mucha harina.
-
Panadero: ¡Jengibre!
Jengibre: ¡Enciende los hornos, pastelero! ¡Tenemos que surtir una orden enorme!
Mongo: JO JO JO
Jengibre: ¡ESTA VIVO!
(ESCENA DE ENTRADA AL CASTILLO)
Burro:  Corre, corre, ¡corre que nadie te puede alcanzar!
Jengibre: ¡Sigue Mongo, sigue! 
Shrek:  Ahí está, Mongo, ¡al castillo! No, no no, pedazo de migaja crecida, ¡deja eso!
Burro:  Mongo, pst! ¡Ira aquí abajo! ¡Nomas sigue al caballito! ¡Eso es a la galletota le vamos a presentar unos bizcochos allá en el castillo! Vengase pa’ca.
Mongo: ¡Caballito!
Presentador: Damas y caballeros, presentamos a la princesa Fiona y a su nuevo esposo el príncipe Shrek.
Fiona:  Shrek ¿qué estás haciendo?
Encantador: Solo les sigo el juego, Fiona. 
Fiona:  ¿Traes brillo en los labios?
Encantador: Sabor cereza, ¿quieres probar?
Fiona:  ¿Qué pasa contigo?
Encantador: Pero… bomboncito.
Hada: Do menor, en tono de do menor. Súbditos y súbditas, quiero dedicar esta canción a la princesa Fiona y el príncipe Shrek.
Encantador: Fiona, mi princesa, me concederías esta pieza. 
(YO QUIERO UN HEROE EN SIMULTANEO)
Fiona:  ¿Cuándo aprendiste a bailar?
Encantador:  Jaja querida Fiona, por si no lo sabias, el amor lo puede todo.
(ESCENA DE ENTRADA AL CASTILLO) 
Shrek:  Muy bien, grandulón, ¡hay que arruinarles su fiesta!
Guardia: ¡Preparen catapultas! ¡Listo! ¡FUEGO!
Shrek:  ¡Prepárense!
Mongo: ¡Oh me gusta!
Jengibre: ¡No lo botones de gomita!
Guardia:: ¡CUBRANSE!
Burro:  ¡WOW! ¡San bombazo! 
Shrek:  Sigue, Mongo, ¡sigue!
Guardia:: ¡FUEGO! ¡PREPAREN CALDEROS!
Shrek:  ¡Después de ti, Mongo! ¡Eso es JALA! ¡CUIDADO!
Mongo: NOOOO
Burro:  ¡Shrek! 
Guardia: ¡Más caliente y menos espuma!
Shrek:  ¡JALA! ¡JALA! 
Mongo: NOOOOOOOO
Jengibre: NOOOOOOOO
(SE ABRE LA PUERTA DEL CASTILLO)
Shrek:  ¡Síganme!
Burro:  ¡Órale!
Jengibre: ¡No!
Mongo: ¡Se bueno!
Jengibre: ¡No, me necesita!
Shrek:  ¡Burro!
 ¡Gato!
Gato: Tu sigue, tu dama te necesita, ¡sigue! 
Shrek, hoy saldaré mi deuda.
Guardias: Awww
Gato: AN GARDE!
----
(SHREK LLEGA CON FIONA)
Shrek:  ¡ALTO! Oye güerito, aléjate de mi esposa
Fiona:  ¡¿Shrek?!
Hada: ¿No pudiste regresar a tu pantano y dejar las cosas como estaban?
Shrek:  ¡AHORA!
Cerdos: ¡Como en el circo chino! 
Shrek:  ¡Pinocho, la varita mágica! 
Pinocho:  ¡Soy un niño de verdad! 
Cerdo: ¡El puerco volador!
Burro:  ¡Pásala! 
Jengibre: ¡Burro! 
Pinocho:  ¡Soy un niño de verdad! Aaawww
Hada: ¡Es mía, es mía!
Burro:  Imploren piedad al gato.
Gato: Y al burro.
Hada: Bebió la pócima. ¡Bésala ya!
Shrek:  ¡NO!
Fiona:  ¡HIYA! 
Shrek:  Fiona.
Fiona:  Shrek.
Hada: ¡Harold, se suponía que le dieras la pócima!
Rey: - Bueno, creo que me equivoqué de taza.
Encantador: - ¡Mami!
Fiona: - ¿Mami?
Hada: ¡Te dije que los ogros no viven felices por siempre! 
Reina: ¡Harold!
Fiona: ¡Shrek!
Rey: NOOOOOOOOO
Hada: Aaah…… JAAAAA!!!! 
Fiona: Papá….
Pinocho:  Está…
Jengibre: Sí… se arranó.
Reina: ¿Harold?
Fiona: ¿Eres tú?
Rey: Ay, nunca pensé que me verías así.
Burro:  Vaya y decía que tu eras verde y feo.
Shrek:   ¡Burro!
Rey: No, no, no, tiene razón. Lo siento, los ofendí. Yo solo quería lo mejor para Fiona, ahora me doy cuenta de que ya lo tiene. Shrek, Fiona, aceptarían las disculpas de un viejo sapo? ¿Y su bendición?
Reina: Harold…
Rey: Lo siento Lilian, quisiera ser el hombre, que mereces. 
Reina: Eres lo mejor para mi hoy más que nunca, a pesar de todo.
Gato: ¡Jefe! ¡La poción Felices para siempre!
Shrek:   Media noche. Fiona ¿esto es lo que quieres? ¿quedarnos así por siempre?
Fiona: ¿Qué?
Shrek:   Que, si me besas ahora, nos quedaremos así.
Fiona: ¿Harías eso por mí?
Shrek:   Sí.
Fiona: Quiero lo que toda princesa quiere: Vivir feliz por siempre. Con el ogro con el que me casé.
Gato: Pase lo que pase, no debo llorar, no podéis os verme llorar.
Burro:  No, no, no…. Ayy nooo.
Shrek:   Oye, sigues siendo un noble corcel para mi….
Fiona: Ahora, ¿en que estábamos?
Shrek:   Ah ya me acordé….
Gato: ¡Hey! ¡¿No se suponía que esto era una FIESTA?!
Burro:  ¡Uno dos cuatro, canten!
(LIVING LA VIDA LOCA)
FIN
`).then(e => console.log(`Código finalizado, ${e} mensajes enviados`)).catch(console.error);

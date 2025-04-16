const flatulence = require("flatulence");

module.exports = flatulence.flatten({
  lang: {
    es: {
      label: "Español",
      image: "/images/flags/es.png",
    },
    en: {
      label: "Inglés",
      image: "/images/flags/uk.png",
    },
  },
  main: {
    header: "La app de citas más dulce",
    slogan: {
      paragraph1: "Descubre la comunidad donde",
      paragraph2: "encontrarás a tu medio bombón",
    },
    buttonText: "Descargar App",
  },
  knowMoreSection: {
    header1: "Toppitea para encontrar tu",
    header2: "bombón",
    paragraph1: "Descubre Toppin y conoce a las mejores personas de tu ciudad.",
    paragraph2: "¡Únete y ponle sabor a la vida!",
    buttonText: "Saber más",
  },
  sweetSection: {
    header1: "¿Qué nos hace",
    header2: "Tan dulces?",
    paragraph1:
      "A todo el mundo le gustan los dulces. Es por ello que a nuestros usuarios les encanta nuestra comunidad de bombones.",
    paragraph2:
      "Para experiencias más apetecibles, te animamos a verificar tu perfil. Aunque no sean los únicos, los bombones verificados son los más sabrosos de la caja!",
    paragraph3:
      "No inviertas tu tiempo en gente que no vale la pena. Únete a Toppin y empieza a conocer a gente interesante desde ya.",
  },
  ruletteSection: {
    header: "Juega y conoce gente",
    paragraph1: "Descubre una nueva forma de conocer a personas.",
    paragraph2:
      "Juega a Toppin para no perderte ninguna cita con gente de tu zona.",
    paragraph3:
      "Usa los Donuts, Muffins y Ositos de gominola para conseguir más citas, porque… ¿A quién no le gusta un dulce?",
    buttonText: "Descargar App",
  },
  storesSection: {
    title1: "¡Empieza ahora!",
    title2: "¿Toppiteamos?",
    buttonText: "Descargar en",
  },
  testimonialSection: {
    header1: "Probaron",
    header2: "Toppin",
    header3: "e hicieron",
    header4: "MATCH",
  },
  footer: {
    downloads: "Descargas",
    help: "Ayuda",
    community: "Comunidad",
    communityStandards: "Normas de la comunidad",
    safetyNotices: "Avisos de seguridad",
    legalTexts: "Textos legales",
    privacyPolicy: "Política de privacidad",
    serviceConditions: "Condiciones del servicio",
    cookiesPolicy: "Política de cookies",
  },
  faq: {
    header: "No lo dudes, pregúntanos y te ayudaremos",
    register: {
      title: "REGISTRARSE Y PRIMEROS PASOS",
      question1: "¿Cómo crear una cuenta en Toppin?",
      answer1:
        "Te damos la bienvenida a Toppin. Para comenzar a disfrutar de esta app necesitas crear una cuenta. Nosotros te explicamos a continuación todas las formas posibles para que comiences a dar Matches.",
      list1: {
        item1: "Descarga la App de Toppin para IOS",
        item2:
          "Crea una cuenta a través de Facebook, Apple o regístrate con tu mail",
        item3: "Configura tu perfil",
        item4: "Concede todos los permisos requeridos",
      },
      list2: {
        item1: "Descarga la App de Toppin para Android",
        item2:
          "Crea una cuenta a través de Facebook, Google o regístrate con tu mail",
        item3: "Configura tu perfil",
        item4: "Concede todos los permisos requeridos",
      },
      question2: "¿Puedo registrarme sin tener una cuenta de Facebook?",
      answer2:
        "En Toppin disponemos de varias formas de registro, por lo que no es necesario tener Facebook para disfrutar de nuestra App. Ya que si no tienes una cuenta en Facebook puedes registrarte utilizando una cuenta de Google, una cuenta de Apple o bien tu correo electrónico. ¡Y a disfrutar!",
      question3: "¿Cómo puedo editar mi perfil?",
      answer3: {
        text1:
          "Para cambiar datos o información en relación con tu perfil entra en el icono del lápiz y comienza a editar tu información. Podrás cambiar las fotos, editar tu biografía, orientación sexual, incluir tu género, añadir diferente información personal y vincular Toppin a Spotify e Instagram.",
        text2:
          "¡De esta forma las personas que te encuentres en la pantalla donde toppiteas podrán conocerte mucho más rápido y saber si les interesas!",
      },
      question4: "¿Cómo puedo configurar mis preferencias de búsqueda?",
      answer4: {
        text1:
          "Puedes personalizar la función para descubrir nuevas personas. Ve a ajustes y decide a través de los filtros que tipo de perfiles quieres ver. Distancia, edad y género son algunos de los filtros que puedes seleccionar.",
        text2: "¡Así tendrás más posibilidades de encajar con tu próxima cita!",
      },
      question5: "¿Qué pasa si me han restringido en Toppin por la edad?",
      answer5:
        "No están permitidos los perfiles de menos de 18 años de edad. Por lo que no puedes registrarte en Toppin si eres menor de 18 años. Si todavía no llegas a esta edad no te preocupes, ¡estaremos encantados de verte en cuándo los cumplas!",
    },
    filters: {
      title: "FILTROS Y PARÁMETROS DE BÚSQUEDA",
      question1: "¿Cómo funcionan los filtros?",
      answer1:
        "Esta función te permitirá ver diferentes perfiles de personas basadas en tus filtros de búsqueda y seleccionar los perfiles que más te gusten deslizando la imagen a la izquierda o derecha según tu elección. En Toppin podrás elegir si quieres que te vean o no y aún así podrás seguir usando la función de filtros.",
      question2: "¿Puedo buscar a una persona específica en Toppin?",
      answer2: {
        text1: "No se pueden buscar personas específicas dentro de la app",
        text2: "a menos que hayas tenido un Match previamente con esa persona.",
        text3:
          "Podrás buscarla en tu lista de Matches y escribir su nombre en el buscador.",
      },
      question3: "¿Cómo puedo enviarle un mensaje a alguien?",
      answer3:
        "Para poder chatear con otros usuarios de Toppin has de haber tenido un Match previo, es decir, que ambos hayáis dicho que gustéis mutuamente.",
      question4: "¿Cómo denunciar un perfil?",
      answer4: {
        text1: `Desde Toppin nos preocupamos por la seguridad de nuestros usuarios y
            por ello ponemos a tu disposición la posibilidad de denunciar un
            perfil si esta persona ha violado alguna de nuestras políticas o
            crees que está haciendo un mal uso de la aplicación.`,
        text2: `Bajo la biografía de cada persona podrás encontrar un botón de
            Denunciar, revisaremos uno a uno todos los perfiles denunciados con
            el fin de proporcionar seguridad a todos los usuarios de Toppin.`,
      },
      question5: "¿Cómo puedo deshacer un “Me gusta” o un “No me gusta”?",
      answer5: {
        text1: `¿Te arrepientes de haber dado un Match o te ha pasado justo lo
            contrario y quieres dar ‘’me gusta’’ a un perfíl que ya habías
            descartado? Para ello ponemos a tu disposición la función vuelve
            atrás.`,
        text2: `Esta función la tendrás disponible si te suscribes a nuestro plan
            Premium. Con ella podrás deshacer un “Me gusta” o un “No me gusta”.`,
      },
    },
    match: {
      title: "MATCHES Y MENSAJES",
      question1: "¿Cómo enviar un mensaje a un Match?",
      answer1:
        "Una vez hayas logrado hacer Match con otro usuario podréis comenzar a chatear. Podrás encontrar a la persona en el listado de Matches y desde ahí enviarle un mensaje.",
      question2: "¿Desmarcar Matches y enviar denuncias?",
      answer2: {
        text1: `Si quieres deshacer un Match puedes hacerlo abriendo el chat con esa
            persona y en la parte superior de la página del chat verás tres
            puntitos, al hacer click se abrirá un menú en el que te saldrá la
            opción “Deshacer Match”.`,
        text2: `Si lo que quieres hacer es denunciar un Match puedes hacerlo
            abriendo el chat con esa persona y en la parte superior de la página
            del chat verás tres puntitos, al hacer click se abrirá un menú en el
            que te saldrá la opción “Denunciar”.`,
      },

      question3: "¿Cómo denuncio un perfil?",
      answer3:
        "Si quieres denunciar un perfil que te ha aparecido en la pantalla de toppitear de la app podrás hacerlo metiéndote en su perfil y deslizando hacia abajo. Te aparecerá una opción donde pone DENUNCIAR PERFIL",
      question4: "¿He deshecho un Match por error?",
      answer4:
        "Deshacer un Match es una acción permanente y lamentablemente no se puede rehacer.",
    },
    profile: {
      title: "PERFIL Y AJUSTES DE LA CUENTA",
      question1: "Verificación por selfie, ¿Cómo funciona?",
      answer1:
        "Tendrás que hacerte una selfie haciendo un gesto con la mano, el mismo que te aparezca en la pantalla de tu móvil. Te pediremos esto con el fin de verificar tu perfil y saber que eres tú quien realmente está utilizando tu cuenta.",
      question2: "¿Cómo puedes editar tu perfil?",
      answer2: {
        text1: `Si quieres editar algún dato o foto de tu cuenta podrás hacerlo
            dentro de tu perfil en la app. Ahí encontrarás un icono de un lápiz,
            y al hacer clic ahí se abrirán todas las opciones de tu perfil
            disponibles para editar.`,
        text2: "¡Puedes editarlo tantas veces como quieras!",
      },
      question3: "¿Cómo puedo borrar mi cuenta?",
      answer3:
        "Si lamentablemente quieres eliminar tu cuenta de Toppin tendrás de acceder a Tu perfil – acceder a los Ajustes – Borrar cuenta.",
      question4: "¿Qué es la verificación fotogénica?",
      answer4:
        "La verificación con foto te permite verificar tu perfil, demostrando así a los posibles Matches que eres tú de realmente quién aparece en las fotos. Esto se hace con el fin de proporcionar seguridad a todos los usuarios de la app.",
    },
    interests: {
      title: "INTERESES",
      question1: "¿Cómo cambio mis preferencias de búsqueda?",
      answer1: {
        text1: ` Si quieres cambiar los filtros para encontrar perosnas más afines a
            ti podrás hacerlo desde la pantalla de toppitear. Si sigues la
            siguiente ruta – Icono de la parte superior derecha, icono de
            Filtros – Podrás definir cuáles son tus preferencias por radio de
            distancia, edad, sexo, gustos, etc.`,
        text2: "¡A conocer gente se ha dicho!",
      },
      question2: "¿Cómo administrar tus notificaciones?",
      answer2:
        "Si quieres administrar tus notificaciones, activarlas o desactivarlas podrás hacerlo dentro de Perfil > Ajustes > Notificaciones. Ahí podrás activar y desactivar las notificaciones que quieras o no recibir y todo lo relacionado con ellas.",
      question3: "¿Cómo se vincula Instagram con tu perfil?",
      answer3: {
        text1: `Si quieres vincular tu perfil de Instagram con el de Toppin
            simplemente tendrás que entrar en los ajustes dentro de la app y
            hacer click en vincular tu cuenta de Instagram.`,
        text2: ` Una vez vinculada los otros usuarios podrán ver tus fotografías de
            Instagram. De este modo podrán conocerte mejor.`,
      },
      question4: "¿Se puede conectar Spotify a tu perfil de Toppin?",
      answer4: {
        text1: `Si, puedes compartir toda tu música desde Spotify. Así las personas
            que te encuentren podrán saber si compartís gustos musicales. Entra
            en ajustes y vincula tu cuenta.`,
        text2: `Una vez vinculada los otros usuarios podrán ver tus listas de
            Spotify así sabrán si compartís gustos musicales.`,
      },
      question5: "¿Sin cuenta de Spotify puedo vincular música a mi perfil?",
      answer5:
        "No, lamentablemente el único modo de compartir la música que te gusta en tu perfil es a través de Spotify.",
      question6: "¿Qué quiere decir que un perfil es verificado?",
      answer6:
        "Un perfil verificado es un perfil que ha pasado exitosamente nuestro método de verificación de identidad. Aparecerá una marca que hará que quien visite tu perfil sepa que eres tú realmente la persona que está utilizando la cuenta.",
      question7: "¿Cómo puedo pedir un perfil verificado?",
      answer7: {
        text1: `Si verificas tu perfil los demás usuarios podrán ver que eres tú
            quien realmente está gestionando tu perfil lo que añadirá un plus de
            seguridad a tus posibles Matches, para algunas personas es un factor
            decisivo la hora de elegir a quién dar “Me gusta”. Así que te
            recomendamos que lo verifiques.`,
        text2: `Puedes verificar tu cuenta dentro de la app en Tu perfil &gt;
            Verifica tu perfil &gt; Sigue los pasos.`,
      },
    },
    subscriptions: {
      title: "SUSCRIPCIONES PREMIUM Y SUPREME",
      question1: "Suscripción Premium",
      answer1: {
        text1: `En Toppin disponemos de la suscripción Premium que harán que tu
            experiencia en la app vaya un paso más allá. En algunos casos
            también ayudarán a que se agilice el proceso de encontrar Matches.`,
        text2: "Las funciones ampliadas con Premium son las siguientes:",
      },
      list1: {
        item1: "Likes ilimitados.",
        item2: "Descubre a quién le gustas.",
        item3: "Acceso ilimitado a los Vip Toppins.",
        item4: "5 Súper Sweet gratis cada semana.",
        item5: "1 Power Sweet gratis al mes.",
        item6: "Filtros avanzados",
        item7: "Elige quién te ve y oculta tu perfil a quién tú elijas",
        item8:
          "Destination: Endulzate en tus destinos y haz tus viajes inolvidables",
        item9: "Vuelve atrás todas las veces que quieras",
        item10: "Desactiva anuncios.",
      },
      note: "*Esta suscripción es de pago",
      question2: "Suscripción Supreme",
      answer2:
        "Además de las las funciones de la suscripción Premium tienes también la opción de hacerte con el pack Supreme, que incluye:",
      list2: {
        item1: "Sugar Sweet: Acompaña tu Super Sweet con un mensaje dulce.",
        item2: "Confirmación de mensajes leídos.",
        item3: "Prioridad para tus “Me gusta”",
        item4: "Incluye las funciones Premium.",
      },
    },
    features: {
      title: "ALGUNAS FUNCIONES TOPPIN",
      question1: "Toppin Sweet",
      answer1: {
        text1: ` ¿Aún no has provado Toppin Sweet? Juega a la ruleta y gana premios
            que podrás gastar dentro de Toppin y que te ayudarán a encontrar tu
            match ideal.`,
        text2: "La primera tirada es gratuita.",
        text3: "Puedes comprar Toppin Sweet dentro de la app.",
      },
      question2: "Super Sweet",
      answer2: {
        text1: `  Envia un Super Sweet al perfil que más te gusta, de este modo le
            llegará una notificación de tu match y no tendrás que esperar a que
            le aparezca tu perfil.`,
        text2:
          "¡Y si le gusta tu perfil y te da un like, tendrás el macth perfecto!",
        text3: "Puedes comprar Super Sweet dentro de la app.",
      },
      question3: "Power Sweet",
      answer3: {
        text1: `Aumenta tus posibilidades de hacer match consiguiendo ser el dulce
            más apetecible y brilla con tus matches durante 30 minutos.`,
        text2:
          "Puedes comprar Power Sweet dentro de la app Puedes comprar Power",
      },
      question4: "Destination",
      answer4: {
        text1: `Con la función Destination podrás geolocalizar tus búsquedas en
            diferentes zonas geográficas.`,
        text2: "¡Una nueva forma de conocer gente en durante tus vacaciones!",
      },
      question5: "Vuelve atrás",
      answer5: {
        text1: `¿Arrepentido de un match? ¿Te quedaste con las ganas volver a ver un
            perfil descartado?`,
        text2:
          "Con esta opción podrás volver a tomar la decisión de dar o no match.",
      },
      question6: "Likes Ilimitados",
      answer6: {
        text1: `Con tu suscripción premium o supreme podrás dar likes ilimitados al
            mes mientras sigas suscrito a una de las dos opciones.`,
        text2: `Si no tienes ninguna suscripción premium o supreme podrás tener
            likes ilimitados comprando una de las dos suscripciones y podrás
            seguir toppeteando sin limites.`,
      },
    },
    billing: {
      title: "FACTURACIÓN Y PAGO",
      question1: "¿Puedo restaurar mis compras de Toppin?",
      answer1:
        "Sí, aunque cambies de teléfono podrás recuperar tus compras con tu cuenta de App Store o Google Play. Por lo que no tendrás que empezar de cero el proceso de compra.",
      question2: "¿Cómo puedo actualizar mi suscripción actual a Toppin?",
      answer2:
        "Si quieres actualizar tu suscripción de Toppin por otra diferente podrás actualizar o mejorar el tipo de suscripción que tienes simplemente tendrás que comprar la que desees tener ahora y se reemplazará por la antigua.",
      question3: "¿Cuáles son los métodos de pago aceptados?",
      answer3:
        "Si quieres hacerte con alguna de nuestras suscripciones Premium o Supreme para poder optar a más funciones dentro de la app podrás pagar a través de tu cuenta de Apple Pay y Google Pay.",
      question4:
        "¿Puedo pasar mi suscripción a Toppin Premium y Toppin Supreme?",
      answer4:
        "Sí, puedes pasar de Premium a Supreme siempre que quieras a través de una nueva compra. No se cargarán más importes por la antigua suscripción.",
    },
    problems: {
      title: "RESOLUCIÓN DE PROBLEMAS",
      question1: "No puedo iniciar sesión en mi cuenta.",
      answer1:
        "Si se está dificultando tu inicio de sesión dentro de la app estos pasos de resolución de problemas suelen ayudar con los problemas de inicio de sesión:",
      list1: {
        item1:
          "Comprueba si tienes una buena conexión a Internet, o cambia de Wi-Fi a datos móviles o viceversa para determinar si el problema está relacionado con tu conexión",
        item2:
          "Elimina y reinstala la aplicación. Esto no solo te actualizará a la última versión de Toppin, sino que también actualizará tu experiencia en la aplicación, lo que debería hacer que las cosas vuelvan a funcionar como deben.",
      },
      note1:
        "Si el problema persiste, queremos saberlo. Ponte en contacto con nosotros a través de nuestro correo support@toppin.es y descríbenos tu problema con el mayor detalle posible, para que podamos analizarlo y resolverlo.",
      question2: "Mi cuenta ha sido deshabilitada.",
      answer2:
        "Si tu cuenta de Toppin se ha cerrado, verás un mensaje que te avisará de ello cuando intentes iniciar sesión. En Toppin cerramos las cuentas cuando detectamos actividades que violan nuestros términos de uso. Si crees que se trata de un error puedes ponerte en contacto a través de nuestro correo suport@toppin.es con nosotros y trataremos de solucionarlo.",
      question3:
        "Quiero actualizar la dirección de correo electrónico asociada a mi cuenta.",
      answer3:
        "Sigue estos pasos para actualizar la dirección de correo electrónico asociada a tu cuenta de Toppin:",
      list3: {
        item1: "Abre la app de Toppin",
        item2: "Ve al icono de perfil",
        item3: "Selecciona los Ajustes",
        item4: "Busca Información de la cuenta > Correo electrónico",
        item5:
          "Sigue las instrucciones y podrás reemplazar tu correo electrónico por uno nuevo.",
      },
      question4: "La app se bloquea.",
      answer4:
        "Esto puede resultar un poco agotador en algunas ocasiones, lo sabemos. Pero, ¡te vamos a ayudar! Quizá sea por alguno de los siguientes motivos:",
      list4: {
        item1:
          "Primero asegúrate de si tienes una buena conexión a Internet, o cambia de Wi-Fi a datos móviles o viceversa para determinar si el problema está relacionado con tu conexión.",
        item2:
          "Si lo anterior no funciona prueba a Eliminar y Reinstalar la aplicación. Además de actualizar a la última versión de Toppin, también actualizará tu experiencia en la aplicación, esto debería conseguir que ya funcionase como corresponde.",
      },
      note4:
        "Si se trata de un problema técnico seguramente ya estemos manos a la obra tratando de resolverlo. ¡Es cuestión de esperar!",
      question5:
        "¿Cómo puedo saber cuál es la dirección de correo electrónico asociada a la cuenta?",
      answer5:
        "Si has olvidado o quieres saber cuál es la dirección de correo electrónico asociada a tu cuenta de Toppin podrás encontrarla dentro de Ajustes > Notificaciones > Correo electrónico. Ahí aparecerá el correo con el que te registraste.",
      question6: "En caso de ser desde un dispositivo iPhone",
      list6: {
        item1: "Abriendo los Ajustes de tu iPhone",
        item2:
          "Pulsas sobre tu nombre, y después en el apartado “Suscripciones”",
        item3: "Seleccione la suscripción que deseas cancelar",
        item4: "Pulsa «Cancelar suscripción»",
      },
      question7: "En caso de ser desde un dispositivo Android:",
      list7_1: {
        title:
          "Si la suscripción la pagaste utilizando tu cuenta de Google Play Store:",
        item1: "En tu teléfono Android abre la app de Google Play Store.",
        item2: "Después pulsa sobre el icono de “Menú” y ve a “Suscripciones”",
        item3: "Elige la suscripción que deseas cancelar",
        item4: "Pulsa «Cancelar suscripción»",
      },
      list7_2: {
        title:
          "Si tu método de pago de la suscripción fue con tarjeta de crédito:",
        item1: "Abre la app de Toppin para Android",
        item2: "Toca el icono de perfil",
        item3: "Selecciona «Administrar cuenta de pago»",
        item4: "Pulsa en «Cancelar suscripción”.",
      },
      question8: "Tengo problemas para cancelar mi suscripción.",
      answer8: {
        text1:
          "Dependiendo de la plataforma los pasos variarán, por lo que tendrás que asegurarte de seguir los pasos correspondientes.",
        text2:
          "Entra en tu cuenta de App Store o de Play Store – Perfil – En el apartado “Suscripciones” podrás gestionar las suscripciones que tengas. Si tienes una suscripción en Toppin te aparecerá un botón que pone “Cancelar suscripción”.",
        text3:
          "A partir de ahí no se debería de volver a cobrar nada, aunque podrás seguir disfrutando de las ventajas de tu suscripción hasta final de ciclo.",
      },
      question9: "Tengo cargos duplicados o incorrectos.",
      answer9: {
        text1:
          "Si tu teléfono es un iPhone, puedes ponerte en contacto con el soporte técnico de Apple e informarles de lo sucedido.",
        text2:
          "Las transacciones las gestiona directamente Apple, incluyéndose los reembolsos.",
        text3: "¿El número de tu pedido empieza por «GPA»?",
        text4:
          "Entonces fue a través de Google Play desde donde se procesó la compra.",
        text5:
          "Te recomendamos que te pongas en contacto con el soporte técnico de Google Play para informarles de este problema.",
      },
    },
    payProblems: {
      title: "PROBLEMAS CON LOS PAGOS O LA FACTURACIÓN",
      question1: "No puedo restaurar mi compra.",
      answer1: {
        text1:
          "Las suscripciones podrán asociarse con una sola cuenta de Toppin a la vez.",
        text2:
          "Si ves un mensaje de error que pone: «Tu suscripción está actualmente vinculada a una cuenta ya existente», eso significará que ya tienes una suscripción activa y que no es con la cuenta que has iniciado sesión actualmente.",
        text3:
          "Si quieres usar un suscripción en una nueva cuenta de Toppin, primero tendrás que eliminar tu anterior cuenta de Toppin. Si borras tu cuenta supondrá eliminar definitivamente todos tus Matches, los mensajes y toda la información asociada a esta cuenta.",
      },
      list1: {
        item1: "Inicia sesión en la cuenta que deseas borrar.",
        item2: "Toca el icono de perfil",
        item3: "Dirígete a los Ajustes",
        item4: "Desplázate hacia abajo y selecciona Borrar cuenta.",
      },
      note1:
        "Una vez esta cuenta esté eliminada ya podrás comprar la suscripción con tu nueva cuenta sin que haya ningún error.",
      question2: "¿Hace poco que has cambiado de dispositivo?",
      answer2:
        "Si has cambiado de plataforma móvil, es decir, pasando de iOS a Android o viceversa, te recomendamos que canceles tu suscripción actual y te suscribas de nuevo en tu nuevo dispositivo móvil. Te resultará más fácil gestionar la suscripción.",
      question3: "¿Sigues teniendo problemas?",
      answer3:
        "Si aún así sigue sin funcionar puedes escribirnos al soporte de Toppin y trataremos de ayudarte lo más rápido posible. Envíanos una captura con el mensaje de error que te aparezca e intentaremos darte una solución lo más rápido posible.",
      question4: "¿Cómo puedo cancelar la suscripción?",
      answer4: {
        text1: "Debes tener en cuenta los siguientes aspectos:",
        text2:
          "· Eliminar Toppin de tu móvil no hará que se cancele tu suscripción, por lo que tendrás que seguir los siguientes pasos si quieres para evitar que se realicen más cobros en el futuro.",
        text3:
          "· Aunque canceles tu suscripción podrás disfrutar de todas sus ventajas hasta que terminen los días abonados que te falten por terminar.",
        text4:
          "· Aunque canceles tu suscripción esto no significa que se emita un reembolso de los pagos y tasas ya pagadas anteriormente.",
      },
      question5: "¿Cómo cancelar?",
      answer5:
        "Dependiendo de la plataforma que hayas utilizado para suscribirte deberás seguir unos pasos u otros.",
    },
    platformBilling: {
      title: "FACTURACIÓN EN IOS y ANDROID",
      question1: "He cancelado una suscripción pero se me ha vuelto a cobrar",
      answer1:
        "Asegúrate de haber cancelado tu suscripción a Toppin correctamente. Si no quieres que se carguen más cobros en el futuro esto lo impedirá. Así se cancelan las suscripciones tanto en dispositivos iOS como en Android:",
      iosList: {
        item1: "En los Ajustes de tu iPhone > [tu nombre] > iTunes y App Store",
        item2:
          "En la parte superior de la pantalla pulsa en tu ID de Apple, y después selecciona «Ver ID de Apple» (quizá te pida que inicies sesión)",
        item3: "Desliza hacia abajo y pulsa «Suscripciones»",
        item4: "Elige cual es la suscripción que quieres gestionar",
        item5: "Pulsa «Cancelar suscripción»",
      },
      androidList: {
        item1: "Si te suscribiste usando tu cuenta de Google Play Store:",
        item2: "Ve a la web de play.google.com",
        item3:
          "Comprueba si has iniciado sesión en tu cuenta de Google de manera correcta.",
        item4: "En la izquierda, haz clic en «Mis suscripciones»",
        item5: "Elige cual es la suscripción que deseas cancelar.",
        item6: "Haz clic en «Gestionar» y luego en «Cancelar suscripción»",
        item7: "Si te suscribiste mediante tarjeta de crédito:",
        item8: "Abre la app de Toppin para Android",
        item9: "Toca el icono de perfil",
        item10: "Selecciona «Administrar cuenta de pago»",
        item11: "Pulsa «Cancelar suscripción»",
      },
      question2: "¿Cómo actualizar tus datos de facturación?",
      answer2:
        "Desde la plataforma que utilizaste para suscribirte podrás actualizar tu método de pago (Apple Pay o Google Pay). Las instrucciones variarán en función de la plataforma que utilices para realizar la compra.",
      iosList2: {
        item1:
          "Si quieres actualizar tus datos de facturación desde un dispositivo iOS, dirígete a laaplicación de Ajustes, selecciona iTunes & App Store, haz clic en tu ID de Apple, ypulsa en Ver ID de Apple y Datos de facturación.",
      },
      androidList2: {
        item1:
          "Si efectuaste la compra usando tu cuenta de Google Play Store, pulsa el icono demenú en Google Play Store, a continuación pulsa en Mi cuenta y selecciona «Añadirmétodo de pago» o «Editar método de pago»",
        item2:
          "Si efectuaste la compra mediante tarjeta de crédito en Android, entra en la app deToppin, pulsa en el icono de perfil y selecciona Administrar cuenta de pago.",
      },
    },
    payMethod: {
      title: "EL MÉTODO DE PAGO QUE ESTOY INTENTANDO UTILIZAR NO FUNCIONA.",
      question1:
        "Estos son los problemas más habituales con los métodos de pago",
      list1: {
        item1:
          "Errores tipográficos: Ten en cuenta que todas las letras, números y cualquier dígitoque utilices debe ser idéntico a los de tu tarjeta de crédito/débito..",
        item2:
          "Uso de tarjetas regalo, tarjetas de prepago y ciertas tarjetas de débito: Siadquieres una suscripción, puede que las tarjetas regalo, las tarjetas de prepago yciertas tarjetas de débito no acepten los pagos recurrentes.",
        item3:
          "Si tienes problemas con la dirección de facturación: ¿Has cambiado de casarecientemente? ¿Tienes que actualizar la información de facturación? Comprueba que los datos introducidos respecto a la dirección de facturación sean los correctos.",
      },
      question2:
        "Si el problema sigue, puedes consultar los métodos de pago aceptados por la App Store (iOS) o la Google Play Store(Android), depende de tu dispositivo.",
      question3: "Ver historial de pagos.",
      answer3:
        "Si quieres ver tu historial de pagos podrás hacerlo en tu cuenta de iOS o de Android dentro de tu perfil de cualquiera de estas dos plataformas. Según cual hayas utilizado para pagar tus compras lo podrás localizar en una o en otra.",
      question4:
        "Si has realizado una compra usando tu ID de Apple, podrás encontrar tu historial de pagos siguiendos estos pasos:",
      list4: {
        item1: "Abre iTunes en tu ordenador",
        item2:
          "Inicia sesión con tu ID de Apple clica en tu nombre, en la esquina superior derecha de la ventana de iTunes",
        item3: "Selecciona Detalles de la cuenta en el menú que se despliega",
        item4:
          "Desliza hasta abajo hasta que llegues a Historial de compras > Ver todo",
        item5:
          "Pulsa en la flecha que aparece a la izquierda de la fecha de compra y podrás ver los detalles de una compra.",
      },
      question5:
        "Si la compra la has efectuado desde una cuenta de Google Play, podrás ver tu historial de pagos siguiendo estos pasos:",
      list5: {
        item1:
          "Entra en la web de pay.google.com e inicia sesión usando tu cuenta de Google Play",
        item2: "Encuentra Otras actividades de compra",
        item3: "Selecciona Ver compras",
        item4: "Elige un pedido concreto y podrás ver su recibo",
      },
      question6:
        "Tengo una suscripción a Toppin y no he recibido mi PowerSweet mensual.",
      answer6: {
        text1:
          "Si hace poco que has renovado tu suscripción a Toppin, no afectará a tu periodo de espera para recibir el siguiente PowerSweet. El periodo de espera de 30 días se basa en la última vez que usaste tu PowerSweet mensual gratuito, no en la renovación o restauración de una suscripción.",
        text2:
          "Cuando uses tu PowerSweet gratuito, tendrás que esperar 30 días para usar tu siguiente PowerSweet gratuito, a menos que decidas comprar un lote de PowerSweet adicionales.",
      },
      question7:
        "He usado un SuperSweet pero no he conseguido ningún “Match” mutuo.",
      answer7: {
        text1:
          "Los SuperSweet están ahí justo para eso, para dar ese impulso que todo perfil necesita. Aparecerás a las personas de tu área mucho más rápido. ¡Aumentarás las posibilidades de encontrar esa conexión que tanto esperas!",
        text2:
          "La cantidad de veces que aparecerá tu perfil aumentará en hasta 10 veces más con un SuperSweet.",
        text3:
          "Aunque el Superweet como tal no puede garantizar un Match, son muy muy eficaces a la hora de ayudarte a tenerlo. Incluso después de que se haya terminado Sabrás que has conseguido un Match gracias al SuperSweet porque aparecerá una Estrella amarilla indicandolo.",
      },
      question8:
        "Los Super Sweets, PowerSweet, confirmaciones de lectura etc… ¿Desaparecerán si me creo una cuenta nueva?",
      answer8:
        "Lamentablemente las compras de artículos así como suscripciones no se pueden transferir de una cuenta a otra. Si eliminas una cuenta en la que tenías artículos comprados y te creas una nueva, se perderán.",
      question9:
        "He recibido una notificación de que alguien me envió un Super Sweet pero no lo veo en la app.",
      answer9: {
        text1:
          "Si recibiste una notificación acerca de un Super Sweet, abre Toppin y entra en mensajes, en el apartado de nuevos matches, para descubrir quién es la persona que te dio ese Super Sweet o un match. Puede que su perfil no te aparezca el primero, pero al final aparecerá con un ícono de estrella amarilla.",
        text2:
          "Si te suscribes a Toppin Premium o Toppin Supreme, podrás descubrir quién te ha dado ese Super Sweet.",
        text3:
          "Ten en cuenta que a veces, puede enviarse por error un Super Sweet (a cualquiera puede sucederle), si la persona que lo ha enviado utiliza la función vuelta atrás podrá deshacerlo. Por lo tanto este podría ser uno de los motivos por el cual no veas el Super Sweet del cual has recibido la notificación.",
      },
      question10: "No puedo cambiar mi ubicación con Destination.",
      answer10:
        "Si estás intentando cambiar tu ubicación y no puedes, intenta comprobar la conexión de tu teléfono móvil a Internet. Si no es este el problema inténtalo de nuevo en un rato. Si el problema persiste ponte en contacto con nosotros a través del correo support@toppin.es.",
      question11: "No puedo actualizar mi perfil.",
      answer11: {
        text1:
          "¿Estás cambiando información o datos de tu perfil como fotos, canciones o biografía y no se guardan? Revisa si puede ser problema de tu conexión a internet y si no es el caso borra y reinstala Toppin.",
        text2:
          "Esto también hará que se actualice a la última versión de la aplicación. Por lo que debería volver a funcionar como siempre.",
        text3:
          "Si sigue sin funcionar ponte en contacto con nosotros e infórmanos de lo sucedido. Detallanos tu problema para que podamos encargarnos de tu caso cuanto antes al correo support@toppin.es.",
      },
      question12: "No puedo subir fotos a mi perfil.",
      answer12: {
        text1:
          "Si estás intentando subir una foto desde tu teléfono móvil, asegúrate de haber dado acceso a Toppin a las fotos de tu dispositivo. Si aún no lo has hecho puedes habilitar el acceso desde los ajustes de tu móvil.",
        text2: "Prueba a intentarlo más tarde si ves que el problema sigue.",
      },
      question13: "¿Por qué se ha eliminado mi foto de Toppin?",
      answer13: {
        text1:
          "Hay ocasiones en las que eliminamos contenido de Toppin para que la experiencia sea lo más agradable posible para todos. Si ves que una foto de tu perfil se ha eliminado, significará que se ha detectado una violación de nuestros Términos de uso. Pedimos a todos los usuarios que sean respetuosos. Por favor, revisa nuestras Normas de la comunidad así podrás tenerla en cuenta cada vez que vayas a subir contenido a tu perfil.",
        text2: "¡Gracias a ti, Toppin es un lugar más seguro!",
      },
      question14:
        "La información de mi trabajo y/o centro de estudios no se actualiza.",
      answer14:
        "Desde la app puedes editar y actualizar directamente la información relacionada con tu trabajo y centro de estudios.",
      list14: {
        item1:
          "Toca el icono del perfil en la esquina superderecha de la pantalla principal",
        item2: "Selecciona Editar información",
        item3:
          "Desplázate hasta las secciones Trabajo actual o Centro de estudios",
      },
      question15: "No recibo ninguna notificación push.",
      answer15: {
        text1:
          "Si has dejado de recibir nuestras notificaciones push es probable que sea un problema temporal.",
        text2:
          "Por si acaso te recomendamos que verifiques que tienes las notificaciones correctamente habilitadas dentro de los Ajustes de tu dispositivo – Notificaciones.",
      },
      question16: "¿Cómo habilitar las notificaciones push en tu dispositivo?",
      answer16: {
        text1:
          "En dispositivos iOS: Abre la app de Ajustes iOS, selecciona Notificaciones y luego Toppin.",
        text2:
          "En dispositivos Android: Dirígete a los ajustes del dispositivo, selecciona Notificaciones, luego Notificaciones de aplicaciones y Toppin",
      },
      question17: "Habilitar las notificaciones en Toppin",
      list17: {
        item1: "Abre la app de Toppin",
        item2: "Toca el icono de perfil",
        item3: "Selecciona los Ajustes",
        item4:
          "Desplázate hasta Notificaciones, ahí podrás habilitarlas en caso de no tenerlas.",
      },
      question18: "Los perfiles que veo están muy lejos.",
      answer18:
        "Si sólo algunos de tus Matches potenciales están lejos, esto podría estar sucediendo por varias razones:",
      list18: {
        item1:
          "Destination: Puede que haya personas que tengan esta acción activada para encontrar Matches en tu ubicación. Si visitas recientemente una ciudad puede que sigas apareciendo en la ubicación de donde has estado hasta 24 horas después de haberte marchado. Solo los suscriptores de Toppin pueden editar su ubicación.",
        item2:
          "Ajustes de Destination: Puedes comprobar y editar tus preferencias de distancia. Y así decidir a qué radio de kilómetros quieres o no encontrar personas. Simplemente tienes que tocar el icono del perfil > Ajustes > Baja hasta Destination y ahí podrás ver y cambiar la distancia máxima que tienes configurada. Si piensas que puede ser un problema más bien técnico puedes probar a seguir estos pasos para tratar de solucionarlo:",
        item3:
          "Sal e inicia sesión: toca el icono de perfil > Ajustes > desliza hacia abajo y toca en el botón “Cerrar sesión”.",
        item4: "Borra Toppin y vuelve a instalarla.",
      },
      question19:
        "Los perfiles no concuerdan con mis preferencias de género o edad.",
      answer19:
        "Si esto ha empezado de repente, comprueba que hayas configurado a tu gusto las preferencias de búsqueda.",
      list19: {
        item1: "Abre Toppin",
        item2: "Toca el icono de perfil",
        item3: "Ve a tus Ajustes",
        item4:
          "Desplázate hasta Ajustes de perfil. Si todo está configurado correctamente, cierra tu sesión de Toppin y vuelve a iniciarla.",
      },
      question20: "No puedo subir fotos a mi perfil.",
      answer20: {
        text1:
          "Si estás intentando subir una foto desde tu teléfono móvil, asegúrate de haber dado acceso a Toppin a las fotos de tu dispositivo. Si aún no lo has hecho puedes habilitar el acceso desde los ajustes de tu móvil.",
        text2: "Prueba a intentarlo más tarde si ves que el problema sigue",
      },
      question21: "He denegado el acceso a Toppin a mi ubicación",
      answer21:
        "Al menos mientras estés utilizando Toppin será necesario que nos des acceso a la ubicación de tu teléfono móvil.",
      question22: "Ubicación en IOS",
      list22: { item1: "Ve a tus ajustes de iOS > Toppin > Ubicación" },
      question23: "Ubicación en Android",
      list23: {
        item1:
          "Ve a los ajustes de tu teléfono > Apps > Toppin > Permisos > Ubicación",
      },
      question24: "Mis Matches se quedan cargando todo el rato.",
      answer24:
        "Prueba a seguir estos pasos si ves que tus Matches no cargan o tardan demasiado tiempo en cargarse:",
      list24: {
        item1:
          "Revisa si tienes buena conexión a Internet, puedes probar a cambiar de datos móviles a Wi-Fi, y al revés, quizá el problema esté relacionado con tu conexión.",
        item2:
          "Elimina e instala la aplicación. Esto no solo te actualizará a la última versión de Toppin, sino que también actualizará tu experiencia en la aplicación, lo que debería hacer que las cosas vuelvan a funcionar como deberían. Con esto debería estar resuelto el problema. En caso de no ser así entonces es muy probable que se nos haya caído el sistema y ya estemos trabajando por solucionarlo. Agradeceremos tu espera.",
      },
      question25: "Mis mensajes no se están enviando.",
      answer25:
        "Sabemos que pueden ser desesperantes los problemas relacionados con el chat. Pero suelen durar poco tiempo. En cuanto nos damos cuenta los solucionamos. Mientras tanto, hay algunos pasos que puedes seguir para intentar resolverlo:",
      list25: {
        item1:
          "Revisa la conexión a internet y cambia de Wi-Fi a datos móviles o viceversa, quizá elproblema esté relacionado con la conexión.",
        item2:
          "Elimina e instala la aplicación. Se te actualizará Toppin a la última versión, y también actualizará tu experiencia en la app, después de esto debería volver a funcionar sin problemas.",
        item3:
          "Una vez estés dentro de la app de nuevo, vuelve a enviar el mensaje.",
      },
      note25: {
        text1:
          "○ En iOS: Toca el signo de exclamación rojo al lado del mensaje que ha dado fallo.",
        text2: "○ En Android: Toca el mensaje para intentar enviarlo de nuevo.",
        text3: "Si deseas contactarnos escribenos a support@toppin.es",
      },
      question26: "He deshecho un Match por error.",
      answer26:
        "Puede pasar que sin querer le des a deshacer Match sin darte cuenta. Pero tanto si tú, como tu Match deshace lo deshace será una acción permanente que lamentablemente no se puede rehacer y ya no aparecerá en la lista de ninguno de los dos perfiles",
      question27: "Las fotos de mis Matches no se cargan.",
      answer27: {
        text1:
          "Puedes probar a cerrar y abrir sesión si ves que las fotos de tus Matches no se cargan a pesar de que ya llevan un buen rato.",
        text2:
          "Para cerrar sesión: ve dentro de tu perfil y si deslizas hacia abajo verás el botón de “Cerrar sesión”.",
        text3:
          "Ahora sólo tendrás que volver a iniciar sesión y comprobar si ahora cargan sus fotos.",
      },
    },
    payFunctions: {
      title: "PROBLEMAS CON LAS FUNCIONES DE PAGO",
      question1:
        "No puedo acceder a mi suscripción de Toppin por motivos de cambio de dispositivo, te ayudamos a recuperarla.",
      answer1: {
        text1:
          "Si Toppin no reconoce una suscripción que tienes en la app, restaura la compra.",
        text2:
          "La función Restaurar compras te ayuda a mantener el acceso a tu suscripción cada vez que elimines y vuelvas a crear tu cuenta de Toppin, cuando te compres un teléfono nuevo, o en otras situaciones donde la aplicación no reconozca tu suscripción. Sigue los pasos siguientes para intentar restaurar tu compra.",
        text3:
          "Restaurar una compra hace que se mantenga el acceso a la suscripción si cambias de teléfono móvil, eliminas y te creas una nueva cuenta o cualquier otro caso en el que la app no reconozca tu suscripción activa. Estos son los pasos para restaurar la compra.",
      },
      question2:
        "¿Cómo hiciste la compra? ¿Con tu Apple ID o con Google Play Store?",
      list2: {
        item1: "Abre Toppin",
        item2: "Toca el icono de perfil",
        item3: "Dirígete a los Ajustes",
        item4: "Desliza hacia abajo y para Restaurar compra",
      },
      note2:
        "Importante: Restaurar tu compra no creará una nueva transacción; simplemente volverá a vincular la suscripción existente y activa con Toppin.",
      question3: "Problemas al desactivar el Power Sweet",
      answer3: {
        text1:
          "PowerSweet activación: solo tienes que abrir Toppin y pulsar en el icono con forma de bateria de color azul en la pantalla principal.",
        text2:
          "Si quieres saber cuántos PowerSweet te quedan toca el icono de perfil y echa un vistazo al contador en la parte inferior de la pantalla.",
      },
      question4: "¿Problemas técnicos?",
      answer4:
        "Si estás intentando utilizar cualquier función de toppin pero estás teniendo problemas, escríbenos un mensaje con los detalles exactos del problema o envíanos una captura de pantalla donde se vea claramente el problema que estás teniendo para que podamos ayudarte al correo support@toppin.es.",
    },
    profileProblems: {
      title: "PROBLEMAS CON MI PERFIL Y AJUSTES",
      question1: "Estoy teniendo problemas con la eliminación de mi cuenta",
      answer1:
        "Si estás intentando eliminar tu cuenta de Toppin pero estás teniendo problemas, estos son los pasos que debes seguir para proceder a la eliminación de tu cuenta:",
      list1: {
        item1: "Abre la app de Toppin e inicia sesión",
        item2: "Toca el icono de tu perfil",
        item3: "Ve hacia los Ajustes",
        item4:
          "Desliza hacia abajo y haz clic en “Borrar cuenta” Si necesitas ayuda puedes ponerte en contacto con nosotros y trataremos de ayudarte al correo suppor@toppin.es",
      },
      question2:
        "Problemas técnicos relacionados con la eliminación de la cuenta",
      answer2:
        "Si cuando intentas eliminar tu cuenta aparece un mensaje de error, comprueba tu conexión a internet. Si el problema es de la app, ten un poco de paciencia y pronto estará resuelto. Si el problema persiste durante mucho tiempo contacta con Toppin y trataremos de ayudarte lo antes posible a traves del correo support@toppin.es",
      question3: "Mi cuenta está en investigación.",
      answer3: {
        text1:
          "Si tu perfil recibe varias denuncias de diferentes usuarios de la aplicación investigaremos tu cuenta para ver cuál es el motivo o qué está sucediendo con tu perfil. Durante la investigación, buscaremos violaciones de nuestros Términos de uso o de las Normas de la comunidad. Si tu perfil no ha violado ninguna de las políticas de Toppin, se te permitirá volver a acceder como siempre. Pero si alguno de tus comportamientos ha violado nuestros términos, tomaremos las medidas necesarias, una de ellas es la posibilidad de la prohibición permanente de ser miembro de Toppin o eliminación de la cuenta.",
        text2:
          "Si todavía no se ha completado la investigación de tu perfil, es solo cuestión de tiempo; intentaremos hacerlo lo antes posible.",
        text3:
          "Consulta nuestras Terminos de uso o Normas de la comunidad para obtener información sobre lo que no está permitido en Toppin.",
      },
      question4: "Problemas con la verificación de las fotos.",
      answer4: {
        text1:
          "Si tienes problemas con una pose concreta, siempre puedes salir de la página de verificación por fotos y empezar de nuevo refescando la página de verificación de fotografía.",
        text2:
          "Si necesitas más ayuda con la pose o estás teniendo algún otro problema relacionado con la verificación fotográfica, háznoslo saber poniéndote en contacto con nosotros a support@toppin.es",
      },
      question5: "Mi nombre o edad son incorrectos.",
      answer5: {
        text1:
          "Una vez que has creado una cuenta los detalles del nombre y la edad no podrán actualizarse ni editarse. Si has tenido un despiste y te has equivocado poniendo tu fecha de nacimiento, o si necesitas actualizar tu nombre, lo que puedes hacer es eliminar tu cuenta y comenzar de cero otra vez.",
        text2:
          "Ten en cuenta que si la eliminas lamentablemente perderás los Matches, los mensajes, y todos tus artículos comprados (Super Sweet, Power Sweets, etc.) y demás información enlazada a tu cuenta.",
      },
      question6: "Sigue estos pasos para eliminar tu cuenta de Toppin:",
      list6: {
        item1: "Abre Toppin",
        item2: "Toca el icono de perfil",
        item3: "Dirígete a los Ajustes",
        item4: "Desliza hasta abajo y pulsa en Borrar cuenta",
      },
      note6:
        "Si tienes una suscripción a Toppin, podrás restaurarla y volver a usarla en tu nueva cuenta. Sigue las instrucciones de cómo restaurar una compra en tu nuevo perfil.",
    },
    editionProblems: {
      title: "PROBLEMAS EN EDITAR PERFIL",
      question1: "No me sale ningún perfil en la pantalla donde toppiteas",
      answer1:
        "Para conseguir más Matches potenciales en tu página de editar perfil intenta aumentar tus preferencias de búsqueda. Ajusta la configuración de editar perfil con estos pasos:",
      list1: {
        item1: "Abre Toppin",
        item2: "Toca el icono de perfil",
        item3: "Dirígete a los Ajustes",
        item4:
          "En “Ajustes de perfil” podrás cambiar el ratio de distancia o el intervalo de edades.",
      },
      question2: "¿Estás teniendo problemas técnicos?",
      answer2:
        "Asegúrate si tu conexión a Internet está funcionando correctamente. Sí sí que lo está haciendo prueba a borrar y desinstalar la aplicación. Esto actualizará a la app a la última versión de y también actualizará tu experiencia en Toppin, por lo que deberían de funcionar las cosas con normalidad.",
      question3: "Estoy viendo perfiles que ya he visto antes.",
      answer3:
        "Si en la página donde toppiteas te ha aparecido un perfil que ya habías visto antes es probable que la persona haya eliminado su anterior cuenta y se haya abierto una nueva o que haya comprado una suscripción de Power Sweet para tener mayor visibilidad y por ello puede que lo veas repetido. También puede que te vuelva a salir un perfil de nuevo si cuando deslizabas en la app tenías mala conexión.",
    },
    matches: {
      title: "PROBLEMAS CON LOS MATCHES Y MENSAJES",
      question1: "Todos mis Matches han desaparecido",
      answer1:
        "Si todos tus Matches han desaparecido, lo mejor que puedes hacer es cerrar sesión y volver a iniciar sesión en la app con el fin de que esto se solucione.",
      question2: "No me sale ningún perfil en la pantalla donde toppiteas",
      answer2:
        "Para conseguir más Matches potenciales en tu página de editar perfil intenta aumentar tus preferencias de búsqueda. Ajusta la configuración de editar perfil con estos pasos:",
      list2: {
        item1: "Abre Toppin",
        item2: "Toca el icono de perfil",
        item3: "Dirígete a los Ajustes",
        item4: "Desliza hacia abajo y pulsa en el botón de Cerrar sesión",
      },
      note2:
        "Si no se soluciona puede ser que estemos sufriendo un periodo de caída del servicio; agradecemos tu paciencia mientras que trabajamos para lograr que funcione correctamente.",
      question3: "No tengo nuevos Matches.",
      answer3:
        "Es cuestión de tiempo (y esfuerzo) encontrar conexiones y personas interesantes. Aquí te dejamos algunos consejillos para que tu perfil llame más la atención a posibles “Matches”",
      list3: {
        item1:
          "Sube fotos nuevas y actualiza tu biografía, tu perfil tendrá un aspecto renovado.",
        item2:
          "Intenta que aparezca primero tu foto con más “Me gusta” así atraerás a más personas",
        item3:
          "Conecta tus cuentas de Instagram y Spotify a tu perfil de Toppin, así tus Matches podrán saber qué cosas te gustan y podréis conectar más rápido.",
      },
      note3: "¡Es cuestión de tiempo!",
    },
  },
  communityStandards: {
    header: "Normas de la comunidad",
    paragraph1:
      'TOPPIN proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") pertenecientes a EL TITULAR o a sus licenciantes a los que puedes tener acceso.',
    paragraph2:
      "El usuario asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos. En dicho registro serás responsable de aportar información veraz y lícita. Como consecuencia de este registro, se te puede proporcionar una contraseña de la que serás responsable, comprometiéndote a hacer un uso diligente y confidencial de la misma.",
    paragraph3:
      "Te comprometes a hacer un uso adecuado de los contenidos y servicios (p.e. servicios de chat, foros de discusión o grupos de noticias) que EL TITULAR ofrece a través de la aplicación. Al utilizar nuestro servicio, te comprometes a no hacer uso del mismo para ningún propósito que sea ilegal o esté prohibido por el presente Acuerdo. Sin carácter limitativo, te comprometes a no realizar las siguientes actuaciones:",
    listItem1:
      "Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.",
    listItem2:
      "Difundir contenidos o propaganda racista, xenófoba, pornográfico-ilegal, de apología del terrorismo o atentatoria contra los derechos humanos.",
    listItem3:
      "Provocar daños en los sistemas físicos y lógicos de TOPPIN, de sus proveedores o de terceras personas, introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.",
    listItem4:
      "Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.",
    listItem5:
      "Utilizar la aplicación ni las informaciones que en él se contienen con fines comerciales, políticos, publicitarios y para cualquier uso comercial, sobre todo en el envío de correos electrónicos no solicitados.",
    listItem6:
      "En general, cualquier otro propósito ilícito o prohibido, en especial cuando su cuenta ya hubiera sido cancelada por nosotros por cualquiera de estos motivos.",
    conclusion:
      "EL TITULAR se reserva el derecho a retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultarán adecuados para su publicación. En cualquier caso, EL TITULAR no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats, u otras herramientas de participación.",
  },
  safetyNotices: {
    header: "Avisos de Seguridad",
    item1: {
      title: "Toppitea con seguridad",
      text: "Desde Toppin sabemos de la importancia que tiene la seguridad para nuestros usuarios y por ello.",
    },
    item2: {
      title: "Consejos para tener la primera cita perfecta",
      text: "Las primeras citas siempre nos causan nervios, inseguridades, pero también emoción. Por ello,...",
    },
    item3: {
      title: "Como terminar una relación de match",
      text: "Toppin está pensada para conocer gente y disfrutar de cada momento, para encontrar el amor de tu...",
    },
  },
  privacyPolicy: {
    header: "Política de privacidad",
    intro:
      'Bienvenido a TOPPIN! El propósito de esta política es informarte sobre los diversos tratamientos realizados por TOPPIN a través de esta aplicación que puedan afectar tus datos personales de acuerdo con la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales y el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016. A lo largo de esta política nos referiremos directamente a ti o mediante las palabras "usuario" o "interesado".',

    contactTitle: "Identificación y datos de contacto del responsable",
    contactText:
      "Estás visitando la aplicación TOPPIN propiedad de TOPPIN GLOBAL COMPANY S.L., con domicilio social en C/ALGEPSERS, N.I.F. B16886756, PUERTA 1, 46980, PATERNA, VALENCIA, en adelante EL TITULAR. Puedes contactar con EL TITULAR/TOPPIN a través de cualquiera de los siguientes medios:",
    emailContact: "Correo electrónico de contacto: privacy@toppin.es",

    purposesTitle: "Finalidades del tratamiento de tus datos personales",
    purposesText:
      "La finalidad principal del tratamiento de los datos personales de los usuarios de TOPPIN es proporcionar y mejorar el servicio. A continuación se exponen el resto de finalidades. Continúa leyendo para obtener más información:",
    purposesList: {
      item1:
        "Creación, registro y gestión de las cuentas, oferta de nuestros servicios y atención a las diferentes solicitudes de los usuarios.",
      item2:
        "Mostrar y recomendar los diferentes perfiles de los usuarios a otros usuarios de TOPPIN.",
      item3:
        "Administración de sorteos, concursos, descuentos y otras ofertas y, en su caso, comunicarnos con los usuarios para la informarles sobre nuestros productos o servicios.",
      item4:
        "Interacción y consulta con los usuarios para mejorar la calidad de nuestros productos o servicio",
      item5:
        "Informar a los usuarios de nuestras ventajas, sorteos, oportunidades y nuevos productos y servicios.",
      item6:
        "Identificar y tratar aquellas infracciones y conductas inapropiadas o contrarias a la buena fe y a nuestras condiciones de uso, así como guardar información relacionada con violaciones de nuestras condiciones de uso, con el objetivo de evitar que vuelvan a repetirse.",
      item7:
        "Entender el comportamiento del navegante dentro de la aplicación con el fin de detectar posibles ataques informáticos a la misma.",
      item8:
        "Para proteger y ejercer nuestros derechos o responder ante reclamaciones de cualquier índole.",
      item9:
        "Cumplir con las obligaciones legales que nos resulten directamente aplicables y regulen nuestra actividad.",
      item10:
        "Prestación de los servicios y/ artículos que haya contratado y/o adquirido respectivamente.",
      item11:
        "La gestión administrativa, contable y fiscal de los pagos y compras realizados a través de la aplicación.",
    },

    legalBasisTitle: "Base jurídica del tratamiento",
    legalBasisList: {
      item1:
        "Consentimiento de los usuarios, prestado para tratar tus datos con las finalidades indicadas. La negativa a facilitar dicho consentimiento conllevará a la imposibilidad de tratar tus datos con las finalidades mencionadas, y por tanto TOPPIN no podrá prestar su servicio a los usuarios de la aplicación.",
      item2:
        "Cumplimiento de las obligaciones legales aplicables. En este caso, el interesado no podrá negarse al tratamiento de los datos personales.",
      item3:
        "Interés legítimo por parte de TOPPIN de proteger nuestra imagen, negocio y trayectoria evitando ataques a nuestra aplicación En este caso, el interesado no podrá negarse al tratamiento de los datos personales, aunque podrá ejercer, en su caso, los derechos reconocidos en la presente política de privacidad.",
    },

    retentionTitle: "Plazos o criterios de conservación de datos",
    retentionText:
      "Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con las finalidades para los que fueron recopilados inicialmente.",
    retentionText2:
      "Una vez que los datos dejen de ser necesarios para el tratamiento en cuestión, estos se mantendrán debidamente bloqueados para, en su caso, ponerlos a disposición de las Administraciones y Organismos Públicas competentes, Jueces y Tribunales o el Ministerio Fiscal, durante el plazo de prescripción de las acciones que pudieran derivarse de la relación mantenida con el cliente y/o los plazos de conservación previstos legalmente.",

    automatedDecisionsTitle:
      "Decisiones automatizadas y elaboración de perfiles",
    automatedDecisionsText:
      "TOPPIN no toma decisiones automatizadas ni elabora perfiles. No obstante, te informamos que por medio de nuestros algoritmos, si hubieras seleccionado que busquemos perfiles que se encuentren cercanos a tu ubicación, solamente será utilizada dicha ubicación con esos estrictos fines. No se realizan perfilados en función de gustos o intereses sino que será el usuario quien, directamente, seleccione los usuarios que resulten de su interés en base a los hobbies que cada uno publique y personalice en la aplicación.",

    recipientsTitle: "Destinatarios",
    recipientsText1:
      "Durante el período de duración del tratamiento de tus datos personales, la organización podrá ceder estos a los siguientes destinatarios:",
    recipientsText2:
      "Para la prestación del servicio podemos contratar a terceros que deberán tener acceso a tus datos para permitir el funcionamiento de la aplicación. Dicho acceso es seguro y se encuentra amparado en un contrato de Encargo de tratamiento. Llevamos a cabo un previo proceso de evaluación de proveedores para asegurarnos de que cuentan con medidas adecuadas en materia de protección de datos personales.",
    recipientsList: {
      item1: "Jueces y Tribunales.",
      item2: "Fuerzas y Cuerpos de Seguridad del Estado.",
      item3:
        "Otras autoridades u organismos públicos competentes, cuando el responsable tenga la obligación legal de facilitar los datos personales.",
      item4: "Bancos y Entidades Financieras.",
      item5: "Empresas de procesamiento de pagos y telecomunicaciones.",
    },

    internationalTransfersTitle: "Transferencias internacionales de datos",
    internationalTransfersText:
      "TOPPIN no realiza transferencias internacionales de datos personales. Nuestros servidores están alojados dentro de la Unión Europea. No obstante, debes saber que la aplicación tiene un alcance universal para que cualquier usuario en cualquier parte del mundo pueda hacer uso de la misma. Esto puede comportar una transferencia internacional de datos desde tu lugar de residencia a España. Dicha transferencia es consentida por el usuario con al descargar la aplicación y aceptar los términos, condiciones y la presente política de privacidad.",

    rightsTitle: "Derechos",
    rightsText1:
      "Podrás ejercer en cualquier momento y de forma totalmente gratuita los derechos de acceso, rectificación y supresión, así como solicitar que se limite el tratamiento de tus datos personales, oponerte al mismo, solicitar la portabilidad de estos (siempre que sea técnicamente posible) o retirar el consentimiento prestado, y en su caso, cuando proceda, a no ser objeto de una decisión basada únicamente en un tratamiento automatizado, incluido la elaboración de perfiles.",
    rightsText2:
      "Para ello podrás emplear los formularios habilitados por la organización, o bien dirigir un escrito a la dirección postal o correo electrónico arriba indicadas. Podremos solicitar una fotocopia de tu D.N.I. o documento equivalente, con la finalidad de acreditar tu identidad cuando existan dudas razonables sobre la misma y no podamos hacerlo por otros medios.",
    rightsText3:
      "En caso de que sientas vulnerados tus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puedes presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente (Agencia Española de Protección de Datos), a través de su sitio web:",
    rightsText4:
      "En caso de que no desees recibir más información sobre nuestros servicios, puedes darte de baja enviando un correo electrónico a la dirección indicada en el inicio de esta política, con asunto “BAJAS” o bien haciendo click en el apartado del correo *para darse de baja*.",

    accuracyTitle: "Veracidad de los datos",
    accuracyText1:
      "El interesado garantiza que los datos aportados son verdaderos, exactos, completos y se encuentran actualizados; comprometiéndose a informar de cualquier cambio respecto de los datos que aportara, por los canales habilitados al efecto e indicados en el punto uno de la presente política. Será responsable de cualquier daño o perjuicio, tanto directo como indirecto, que pudiera ocasionar como consecuencia del incumplimiento de la presente obligación.",
    accuracyText2:
      "En el supuesto de que el usuario facilite datos de terceros, declara que cuenta con el consentimiento de los interesados y se compromete a trasladarle la información contenida en esta cláusula, eximiendo a la organización de cualquier responsabilidad derivada por la falta de cumplimiento de la presente obligación.",

    socialNetworksTitle: "Redes sociales",
    socialNetworksText1:
      "Las Redes Sociales forman parte del día a día de muchos usuarios de Internet, y para ellos, la Entidad ha creado diferentes perfiles en algunas de ellas.",
    socialNetworksText2:
      "Todos los usuarios que visitan nuestra aplicación tienen la oportunidad de unirse a nuestras redes sociales o grupos.",
    socialNetworksText3:
      "Sin embargo, debes tener en cuenta que, salvo que te solicitemos tus datos directamente (por ejemplo, mediante acciones de marketing, concursos, promociones, o cualquier otra forma válida), tus datos pertenecerán a la Red Social correspondiente, por lo que le recomendamos que leas detenidamente tus condiciones de uso y políticas de privacidad, así como, te asegures de configurar tus preferencias en cuanto al tratamiento de los datos.",
    socialNetworksText4:
      "Por otro lado, cuando inicias sesión en nuestra aplicación con tu cuenta de Facebook o de Goole, le das permiso a estas para que compartan con nosotros ciertos datos de tu perfil. En caso de eliminar la aplicación de tu configuración de Facebook, o de tu ID de Apple, no olvides eliminar también tu cuenta de TOPPIN.",

    dataTypesTitle: "Tipos de datos que tratamos",
    dataTypesText1:
      "El tipo de información que recopilamos y tratamos dependerá en todo momento de la manera en la que se relaciona con nosotros, del servicio o de la fuente de obtención de los datos. Te informamos que los datos que obtenemos proceden directamente de ti o de aquellas fuentes que el interesado ha querido compartir directamente con nosotros al crear su cuenta a través de plataformas o redes sociales externas o al vincular estas últimas a la aplicación.",
    dataTypesText2:
      "Por dato personal se entiende todo aquel que identifica o hace identificable a una persona ya sea de manera directa o indirecta. La personalización del perfil por parte del usuario indicando gustos, introduciendo una descripción personal u otros rasgos individualizadores, dependerá exclusivamente del interesado. La mayor personalización del perfil por tu parte será totalmente voluntaria no siendo exigido por TOPPIN. TOPPIN únicamente determina como obligatorios aquellos datos estrictamente necesarios para la creación y gestión de su perfil. TOPPIN tampoco se hará responsable de los datos personales y la información que los usuarios de la aplicación intercambien entre sí y advierte del peligro de facilitar información personal a desconocidos.",
    dataTypesList: {
      item1:
        "Datos identificativos: como su nombre y apellido, dirección de correo electrónico, dirección postal, número de teléfono y otros datos de contacto similares.",
      item2:
        "Datos de usuario: como contraseñas y otra información de seguridad para la autenticación y el acceso, dirección IP o la ubicación.",
      item3: "Datos académicos y profesionales: Formación y/o titulaciones.",
      item4: "Datos de detalles de empleo: Profesión.",
      item5:
        "Datos económico-financieros. Datos bancarios, tarjetas de crédito.",
      item6: "Datos de características personales. Idioma.",
      item7:
        "Datos del dispositivo a través del cual te conectas (identificador único, modelo y sistema operativo).",
      item8: "Datos de categoría especial: orientación sexual.",
      item9:
        "Datos de ubicación (puntos de acceso wifi, longitud, latitud..). Solamente tendremos acceso a este dato mientras la aplicación esté en uso o incluso en segundo plano si así lo hubieras autorizado en tus ajustes de privacidad. Si has habilitado los servicios de localización y deseas desactivarlos, deberás realizarlo desde los ajustes de la propia aplicación.",
      item10: "Otros: imagen.",
    },

    profileVerificationTitle: "Verificación del perfil",
    profileVerificationText:
      "En caso de que voluntariamente decidas verificar tu perfil, te informamos que se empleará una tecnología de reconocimiento facial para comparar el selfie enviado con las fotos de tu perfil. Tras el envío y una vez verificado dicho perfil, en el mismo aparecerá que este está verificado y, por tanto otros podrás conocer que eres tú verdaderamente.",

    privacitySettiongsTitle: "Ajustes de privacidad",
    privacitySettiongsText:
      "Dentro de la pestaña de ajustes, podrás gestionar tu cuenta y perfil, los datos que quieres que vean el resto de usuarios y las notificaciones que deseas recibir. TOPPIN aplica la privacidad desde el diseño y por defecto por lo que, te solicitaremos cualquier permiso para acceder a otras funcionalidades de tu dispositivo como la ubicación, cámara o similares.",

    updatesTitle: "Modificaciones / actualización",
    updatesText1:
      "La presente política de privacidad puede verse modificada/actualizada en función de las exigencias legales establecidas o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos o cambios en nuestra aplicación. Por esta razón, aconsejamos a los usuarios que visiten periódicamente nuestra política de privacidad.",
    updatesText2:
      "Si tienes dudas acerca de esta política, puedes contactar con TOPPIN a través de los medios de contacto indicados al inicio de esta política.",
  },
  legalConditions: {
    header: "Condiciones de contratación y aviso legal",
    item1: {
      title: "Identificación y medio de contacto",
      text1: "Te damos la bienvenida a",
      text2:
        "y, en particular, a las Condiciones que rigen tu relación con nosotros. Estás visitando la aplicación TOPPIN titularidad de TOPPIN GLOBAL COMPANY S.L, con domicilio en C/ALGEPSERS con N.I.F. B16886756, PUERTA 1, 46980 PATERNA, VALENCIA, en adelante EL TITULAR. Puedes contactar con el TITULAR/TOPPIN por cualquiera de los siguientes medios:",
      text3: "Correo electrónico de soporte:",
    },
    item2: {
      title: "Aceptación de nuestras condiciones de uso y condición de usuario",
      text1:
        "Las presentes condiciones tienen por finalidad regular el uso de la aplicación que TOPPIN pone a disposición del público. El acceso y/o uso de esta aplicación te atribuyen la condición de USUARIO, por la cual aceptas, desde dicho acceso y/o uso, las condiciones generales aquí reflejadas. La vulneración de cualquiera de dichos términos, implicará que podamos cerrar tu cuenta. Lee atentamente dichas condiciones y, si no estás de acuerdo con las mismas, no utilices nuestro servicio. Los términos aquí recogidos así como en el resto de textos de nuestro aplicativo pueden sufrir modificaciones, deberás consultar estos con periodicidad. En caso de cambios materiales que pudieran afectar a derechos y obligaciones del usuario, se notificará previamente salvo que no sea posible de acuerdo a la normativa vigente.",
      text2:
        "Las citadas condiciones serán de aplicación independientemente de las condiciones generales de contratación que en su caso resulten de obligado cumplimiento desde el momento en que el usuario realice un pago a través de TOPPIN.",
      text3:
        "Para poder utilizar TOPPIN, deberás ser mayor de edad de acuerdo a la legislación vigente. Los menores de esta edad no están autorizados a utilizar nuestros servicios y no deberán, por tanto, enviarnos sus datos personales. Informamos de que si se da tal circunstancia, TOPPIN no se hace responsable de las posibles consecuencias que pudieran derivarse del incumplimiento del aviso que en esta misma cláusula se establece.",
    },
    item3: {
      title: "Cuenta en TOPPIN",
      text1: "Para crear tu cuenta puedes iniciar sesión de diversas formas:",
      list: {
        item1:
          "A través de tu cuenta de En este supuesto podremos acceder a y utilizar cierta información de dicha cuenta. Si deseas conocer más respecto al tratamiento de tus datos, puedes consultar nuestra política de privacidad expuesta en esta página. No obstante, debemos informarte que la vinculación que tengas con terceros deberá ser resuelta directamente con ellos.",
        item2:
          "A través de su cuenta de Google.En este supuesto podremos acceder a y utilizar cierta información de dicha cuenta. Si deseas conocer más respecto al tratamiento de tus datos, puedes consultar nuestra política de privacidad expuesta en esta página. No obstante, debemos informarte que la vinculación que tengas con terceros deberá ser resuelta directamente con ellos.",
        item3:
          "A través de un email creando un perfil exclusivo en nuestra aplicación.",
      },
      text2:
        "Serás el responsable de mantener en secreto tus credenciales de acceso así como de las acciones que se lleven a cabo utilizando las mismas. En caso de creer que has sufrido un robo, suplantación de identidad o uso ilegítimos de tu cuenta y tus credenciales, ponte en contacto inmediatamente con nosotros a través de los medios de contacto expuestos en el apartado 1 de este texto.",
    },
    item4: {
      title: "Cancelación de cuenta",
      text1:
        "TOPPIN puede realizar modificaciones en el aplicativo a los fines de mejorar el servicio. En caso de que no estuvieras de acuerdo con las nuevas condiciones o funcionalidades, así como en el momento en que no quieras hacer más uso de nuestra aplicación, podrás, desde el menú de ajustes, proceder a cancelar tu cuenta. En caso de cancelación, perderás toda la información y no podrás volver a recuperarla debiendo crear una cuenta nueva si quisieras volver a utilizar nuestra aplicación.",
      text2:
        "A su vez, te informamos que TOPPIN podrá cancelar tu cuenta en cualquier momento y sin previo aviso si considera que has infringido estos términos o cualesquiera de los expuestos en el resto de textos legales incluidos en esta aplicación. En este supuesto no recibirás reembolso alguno por las compras que se hubieran efectuado a través de nuestra aplicación.",
    },
    item5: {
      title: "Seguridad",
      text1:
        "TOPPIN no es responsable de la interacción entre los usuarios. En caso de que dicha interacción fuera contraria a la legislación vigente o a la buena fe y esta se produjera dentro de nuestra aplicación, puede ponerse en contacto con nosotros de inmediato para que procedamos a cancelar la cuenta del usuario infractor. No obstante, te informamos que TOPPIN no es responsable de la conducta de ningún usuario dentro o fuera del Servicio. Te comprometes a actuar adecuadamente en todas las interacciones con el resto de usuarios. Te informamos que serás el único responsable de la relación con otros usuarios y la información que a estos les facilites. Tu perfil es totalmente personalizable y podrás elegir qué información se hace pública y cual no. Desde TOPPIN hacemos hincapié en la importancia de no dar a conocer información sensible o que pudiera generar perjuicios hacia tu persona.",
    },
    item6: {
      title: "Veracidad de la información",
      text1:
        "Nos garantizas que toda la información proporcionada es correcta y veraz. TOPPIN podrá supervisar e investigar cualquier Contenido que publiques en el servicio si este pudiera resultar ilícito, sospechoso o contrario al uso social. Podemos eliminar cualquier contenido, total o parcialmente, que a nuestro criterio infrinja este acuerdo o pueda dañar la reputación del servicio. Debes saber que TOPPIN puede acceder a la información y al contenido de tu cuenta, además de almacenarla y divulgarla dentro de la aplicación y siempre de acuerdo al grado de publicidad que hayas seleccionado. Aunque TOPPIN se reserva el derecho a revisar y eliminar el contenido comentado, dicho contenido es de tu responsabilidad exclusiva no pudiendo garantizar un control exhaustivo y continuo. En todo caso garantizamos que nuestra respuesta será inmediata en caso de que nos remitas denuncia o notificación por estos motivos a través de los medios que ponemos a disposición.",
      text2:
        "El Titular ha contratado para su aplicación un certificado SSL («Secure Sockets Layer»). Un certificado SSL permite proteger toda la información personal y confidencial que se pueda manejar en esta aplicación, independientemente de la información que se esté transmitiendo, como por ejemplo, desde cualquiera de los formularios de contacto de la aplicación hasta el servidor, o los datos introducidos para la suscripción de boletines de noticias o accesos a las áreas protegidas, etc.",
    },
    item7: {
      title: "Normas de nuestra aplicación",
      text1:
        "TOPPIN proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, “los contenidos”)pertenecientes a EL TITULAR o a sus licenciantes a los que puedes tener acceso.",
      text2:
        "El usuario asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos. En dicho registro serás responsable de aportar información veraz y lícita. Como consecuencia de este registro, se te puede proporcionar una contraseña de la que serás responsable, comprometiéndote a hacer un uso diligente y confidencial de la misma.",
      text3:
        "Te comprometes a hacer un uso adecuado de los contenidos y servicios (p.e. servicios de chat, foros de discusión o grupos de noticias) que EL TITULAR ofrece a través de la aplicación. Al utilizar nuestro servicio, te comprometes a no hacer uso del mismo para ningún propósito que sea ilegal o esté prohibido por el presente Acuerdo. Sin carácter limitativo, te comprometes a no realizar las siguientes actuaciones:",
      list: {
        item1:
          "Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.",
        item2:
          "Difundir contenidos o propaganda racista, xenófoba, pornográfico-ilegal, de apología del terrorismo o atentatoria contra los derechos humanos.",
        item3:
          "Provocar daños en los sistemas físicos y lógicos de TOPPIN, de sus proveedores o de terceras personas, introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.",
        item4:
          "Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.",
        item5:
          "Utilizar la aplicación ni las informaciones que en él se contienen con fines comerciales, políticos, publicitarios y para cualquier uso comercial, sobre todo en el envío de correos electrónicos no solicitados.",
        item6:
          "En general, cualquier otro propósito ilícito o prohibido, en especial cuando su cuenta ya hubiera sido cancelada por nosotros por cualquiera de estos motivos.",
      },
      text4:
        "EL TITULAR se reserva el derecho a retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultarán adecuados para su publicación. En cualquier caso, EL TITULAR no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats, u otras herramientas de participación",
    },
    item8: {
      title: "Protección de datos",
      text1:
        "Todo lo relativo a la política de protección de datos se encuentra recogido en el documento de política de privacidad.",
    },
    item9: {
      title: "Compras y condiciones generales de contratación",
      text1: "Precios",
      text2:
        "Podrás realizar compras a través de nuestra aplicación ya sea para suscribirse a una cuenta de pago ya sea para adquirir power sweet u otras funcionalidades que le ofrezcamos y desee adquirir. Los precios que se indican de cada servicio se expresarán en la moneda euro (€) y, a menos que se indique lo contrario, los mismos incluyen los impuestos legalmente aplicables (el IVA español). La utilización de esta aplicación así como cualquier compra realizada en el mismo se considera efectuada en España, y por tanto sujeta a las leyes y normas españolas vigentes, cuando proceda, sin perjuicio de la legislación que resultara aplicable según la condición del consumidor.",
      text3: "Proceso de compra y método de pago",
      text4:
        "El proceso de compra será muy sencillo. Tan solo tendrás que seleccionar la opción que desees y adquirir una suscripción de pago o cambiar la que tuvieras contratada. Esto mismo será aplicable cuando quieras adquirir un artículo virtual como los power sweet . No será necesario en ningún caso introducir datos pues estos ya constan en el perfil a través del cual efectúa la compra. Siempre que el proceso de compra se realice a través de TOPPIN y no de terceros, deberás aceptar las condiciones generales de contratación que se incluyen en este apartado.",
      text5:
        "La compra se realizará mediante el proveedor de pagos pertinente, y el método de pago podrá ser tarjeta de crédito mediante cuenta de terceros, como la Google Play Store o la App Store. El pago del precio se realiza en el momento de la compra.",
      text6:
        "Las facturas y confirmaciones de pagos serán enviadas por el proveedor de pagos. Si no la recibieras, puedes contactar con nosotros e intentaremos resolver el problema.",
      text7:
        "Desde el momento de la confirmación del pago, podrás hacer uso de las ventajas de la cuenta de pago suscrita o aplicar el artículo virtual que hubiera adquirido. Si tras la compra no recibieras el email de confirmación o no se reflejara adecuadamente en tu perfil el cambio realizado o el artículo mencionado, podrás ponerte en contacto con nosotros en cualquier momento para solventar el problema.",
      text8: "Tipos de suscripciones",
      text9:
        "Aunque podrás utilizar nuestro servicio de forma totalmente gratuita, TOPPIN te da la posibilidad de obtener mejores ventajas en función de la suscripción que elijas:",
      list1: {
        item1: "Mejor oferta: 6 meses.",
        item2: "Más popular: 3 meses.",
        item3: "Pago mensual: 1 mes.",
      },
      text10: "TOPPIN SWEET:",
      text11:
        "Con esta opción podrás participar en un sorteo en el que obtendrás diferentes beneficios. Podrás elegir entre 5, 10 y 20 tiradas según la opción adquirida. ¡Prueba suerte y gana!",
      text12: "TOPPIN PREMIUM:",
      list2: {
        item1: "Podrás dar likes ilimitados.",
        item2: "Descubre a quién le gustas.",
        item3: "VIP toppins acceso ilimitado.",
        item4: "5 Super sweets gratis cada semana.",
        item5: "1 Power sweet gratuito al mes.",
        item6: "Filtros avanzados.",
        item7: "Visibilidad de tu perfil.",
        item8: "Destination para utilizar toppin en cualquier lugar.",
        item9: "Vuelve atrás para no perder match.",
        item10: "Desactiva anuncios.",
      },
      text13: " TOPPIN SUPREME:",
      list3: {
        item1: "Sugar sweet.",
        item2: "Confirmación de mensaje leído.",
        item3: "Prioridad para tus “me gustas”",
        item4: "Incluye las funciones PREMIUM.",
      },
      text14: "Renovaciones del servicio",
      text15:
        "En caso de haberte suscrito a una cuenta de pago, la renovación será automática y se hará efectiva de manera mensual hasta la cancelación. Para ello, será necesario almacenar los datos de tu tarjeta que serán utilizados posteriormente para realizar los pagos automáticos según lo estipulado en el acuerdo. Las objeciones o disconformidades sobre pagos ya realizados, deben dirigirse a TOPPIN o a la cuenta de terceros correspondiente que te facturó directamente. También puedes dirigir tu reclamación a su banco o proveedor de pagos, que podrás proporcionarle más información sobre tus derechos y los plazos aplicables. Puedes eliminar los datos de la tarjeta almacenada en cualquier momento pero, te informamos, que una vez transcurra el plazo cubierto por el pago realizado, tu cuenta volverá a tener carácter de gratuita no pudiendo disfrutar de las ventajas que la cuenta de pago incluye. Los pagos pendientes no podrán ser objeto de cancelación cuando ya hubieras disfrutado de los servicios o ventajas oportunas. Si solicitas una devolución o cancela un pago realizado, TOPPIN puedes cancelar inmediatamente la cuenta de pago del usuario.",
      text16:
        "Si se produjera alguna modificación en los precios, esta no afectará a los artículos virtuales que ya hubieras adquirido o a la suscripción vigente. No obstante, para renovaciones de la misma, será necesario que confirmes los nuevos términos y condiciones.",
      text17:
        "En caso de haber optado por un servicio de 3 meses o 6 meses, también dispondrás de la posibilidad de realizar la cancelación en cualquier momento antes de cumplir el periodo por el que se hubiera efectuado la suscripción. No obstante, al haberse beneficiado de un ahorro mensual por la suscripción inicial elegida, TOPPIN procederá a la devolución del importe de los meses restantes descontando las cantidades que procediera haber abonado por los efectivamente disfrutados si se hubiera elegido la modalidad de suscripción mensual.",
      text18: "Cancelaciones de suscripción",
      text19:
        "Podrás modificar o cancelar cualquier suscripción desde la pestaña de ajustes. Te informamos que la eliminación de la aplicación de su dispositivo sin eliminar tu cuenta con nosotros o sin realizar los cambios oportunos desde la pantalla de ajustes no produce el mismo efecto. Los cargos así como los datos, información e imágenes almacenadas en tu perfil se mantendrán en vigor.",
      text20: "Derecho de desistimiento y reembolsos",
      text21:
        "Tal y como se explica anteriormente, para cualquier compra realizada a través de nuestra aplicación se respetará el derecho de desistimiento del comprador siempre que este resultara de aplicación. Dicho plazo es de 14 días desde la realización de la compra. No obstante, tratándose de un servicio virtual, son aplicables algunas excepciones previstas para este tipo de servicios. Es por ello que:",
      list4: {
        item1:
          "En el caso de suscripción de una cuenta de pago, dado que las nuevas ventajas ya son accesibles desde el mismo momento en que se realiza y confirma el pago, no podrás solicitar el reembolso de las cantidades salvo que fueras residente en un país de la UE o del Espacio económico europeo o de un país en que dicha legislación así lo permitiera. No obstante, podrás solicitar la cancelación a dicha suscripción en cualquier momento y evitar la renovación del servicio pudiendo disfrutar hasta ese instante de las ventajas que ofrece la cuenta de pago.",
        item2:
          "Cualquier artículo virtual adquirido a través de la aplicación tendrá un plazo de desistimiento de 14 días desde la confirmación del pago siempre que no se haya hecho uso del mismo. En este mismo instante, el derecho de desistimiento quedará anulado pues el servicio contratado ya ha sido disfrutado.",
      },
      text22:
        "En caso de que hubieras realizado cualquier compra y el servicio o artículo virtual adquirido no pudiera prestarse por cualquier motivo imputable a TOPPIN, procederemos a la devolución total o parcial del importe según proceda en atención al tiempo disfrutado, por el mismo método de pago que hubieras utilizado. No obstante, si la no utilización del servicio se deriva de la cancelación o eliminación voluntaria de tu cuenta, TOPPIN no está obligado a la devolución de los importes cobrados una vez transcurra el plazo de desistimiento sin haberlo utilizado. La cancelación voluntaria de la cuenta o la no utilización del producto adquirido no implicará derecho de reembolso en ningún caso.",
      text23:
        "En caso de haber realizado la compra usando una cuenta de terceros en Apple u otro similar, no será TOPPIN el responsable de la gestión de la devolución.",
      text24:
        "Para cualquier devolución deberás ponerte en contacto con nosotros a través del correo electrónico introducido en el apartado 1 de este texto, indicando tu número de pedido (se encuentra en el correo electrónico de confirmación del pedido). También puedes enviar (por correo electrónico o postal a la dirección indicada en el más arriba) una notificación firmada, fechada e identificándote debidamente, indicando que deseas cancelar este acuerdo. Junto al número de pedido, deberás señalar la dirección de correo electrónico o el teléfono que estuvieran asociados a tu cuenta.",
      text25:
        "La devolución se efectuará, en un plazo máximo de 14 días desde la fecha de recepción de tu notificación. El reembolso se realizará mediante el método de pago que utilizaste en la transacción inicial sin cobrarte tasa salvo que hubieras solicitado un método de pago diferente que implicara algún coste para TOPPIN.",
      text26: "Puedes utilizar este modelo para solicitar la devolución:",
      text27:
        "A la atención de la entidad XXXXXX., con N.I.F. XXXXXX con domicilio social sito en XXXXXX, con teléfono de contacto: XXXXXX y correo electrónico XXXXXX",
      text28:
        "Por la presente le comunico/comunicamos (……………………………………………………..) que desisto de mi/desistimos de nuestro (………………………………………………………………………………..) contrato de venta del siguiente bien/prestación del siguiente servicio (……………………………………………….)",
      text29: "Pedido el/recibido el …………………………………………. .",
      text30:
        "Nombre del consumidor y usuario o de los consumidores y usuario: ………………………………………………………………………………………",
      text31:
        "Domicilio del consumidor y usuario o de los consumidores y usuarios: …………………………………………………………………………………",
      text32:
        "Firma del consumidor y usuario o de los consumidores y usuarios (Solo si el presente formulario se presenta en papel)",
    },
    item10: {
      title: "Derechos de propiedad intelectual e industrial",
      text1:
        "EL TITULAR es propietario de todos los derechos de propiedad intelectual e industrial de su página o aplicación, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, fotografías, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc), titularidad del TITULAR o bien de sus licenciantes.",
      text2:
        "Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta aplicación, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del TITULAR.",
      text3:
        "Si crees que se ha producido una vulneración de tus derechos de autor, envía una solicitud de eliminación del contenido indicando la siguiente información: firma electrónica o física de la persona autorizada para actuar en nombre del titular de los derechos de autor; descripción de la obra o contenido con derechos de autor que afirma han sido infringidos; descripción de la ubicación dentro del Servicio; información de contacto, incluida dirección, número de teléfono y dirección de correo electrónico, así como la identidad del propietario de los derechos de autor; declaración de buena fe de creer la afirmación que sostienes. TOPPIN cancelará las cuentas de los infractores reincidentes.",
    },
    item11: {
      title: "Exclusión de garantías y responsabilidad",
      text1:
        "Reconoces que la utilización de la aplicación y de tus contenidos y servicios se desarrolla bajo tu exclusiva responsabilidad. En concreto, a título meramente enunciativo, EL TITULAR no asume ninguna responsabilidad, salvo que la legislación de aplicación determinara algo diferente, en los siguientes ámbitos :",
      list: {
        item1:
          "La disponibilidad del funcionamiento de la aplicación, sus servicios y contenidos y su calidad o interoperabilidad.",
        item2:
          "La finalidad para la que la aplicación sirva a los objetivos del USUARIO.",
        item3:
          "La infracción de la legislación vigente por parte del USUARIO o terceros y, en concreto, de los derechos de propiedad intelectual e industrial que sean titularidad de otras personas o entidades.",
        item4:
          "La existencia de códigos maliciosos o cualquier otro elemento informático dañino que pudiera causar el sistema informático del USUARIO o de terceros. Corresponde al USUARIO, en todo caso, disponer de herramientas adecuadas para la detección y desinfección de estos elementos.",
        item5:
          "El acceso fraudulento a los contenidos o servicios por terceos no autorizados, o, en su caso, la captura, eliminación, alteración, modificación o manipulación de los mensajes y comunicaciones de cualquier clase que dichos terceros pudiera realizar.",
        item6:
          "La exactitud, veracidad, actualidad y utilidad de los contenidos y servicios ofrecidos y la utilización posterior que de ellos haga el USUARIO. EL TITULAR empleará todos los esfuerzos y medios razonables para facilitar la información actualizada y fehaciente.",
        item7:
          "Los daños producidos a equipos informáticos durante el acceso a la aplicación y los daños producidos a los USUARIOS cuando tengan su origen en fallos o desconexiones en las redes de telecomunicaciones que interrumpan el servicio.",
        item8:
          "Los daños o perjuicios que se deriven de circunstancias acaecidas por caso fortuito o fuerza mayor.",
      },
      text2:
        "En caso de que existan foros, el uso de los mismos u otros espacios análogos, ha de tenerse en cuenta que los mensajes reflejen únicamente la opinión del USUARIO que los remite, que es el único responsable. EL TITULAR no se hace responsable del contenido de los mensajes enviados por los usuarios.",
      text3:
        "En todo caso te informamos que la responsabilidad total de TOPPIN por todas las demandas relacionadas con el servicio no excederá de la cantidad que hubieras pagado, en caso de haber mediado cantidad, salvo que resultara de aplicación normativa que impidiera esta limitación o cualesquiera de las incluidas en este apartado.",
    },
    item12: {
      title: "Enlaces de terceros y redes sociales",
      text1:
        "En el caso de que en TOPPIN se incluyan enlaces o hipervínculos hacia otros sitios de Internet, EL TITULAR no ejercerá ningún tipo de control sobre dichos sitios y contenidos. Aunque podrás vincular tu perfil a otras cuentas de otras redes sociales como Spotify o Instagram en ningún caso EL TITULAR asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier materia o información contenida en ninguno de dichos hipervínculos y otros sitios en Internet. Igualmente, la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas.",
      text2:
        "Te informamos que en caso de que realicemos sorteos en las Redes Sociales como Facebook o Instagram, usted debe saber que estas plataformas no patrocinan ni se asocian de modo alguno con el organizador del mismo. El participante exonera a Facebook / Instagram de cualquier tipo de responsabilidad causada por el incumplimiento de las Bases legales del sorteo.",
    },
    item13: {
      title: "Resolución judicial de conflictos",
      text1:
        "Salvo para usuarios residentes en la UE o el Espacio Económico Europeo y otros lugares donde esté prohibido por la legislación que resultara de aplicación, el único mecanismo para resolver cualquier litigio o demanda relacionados con el servicio será la resolución extrajudicial de conflictos. Queda, por tanto, prohibido acudir a tribunales si no se hubiera tratado de resolver el conflicto extrajudicialmente así como a participar en demandas u otros procedimientos colectivos salvo que ka ley aplicable así lo permitiera.",
      text2:
        "De conformidad con lo dispuesto en el artículo 14.1 del Reglamento 524/2013 del Parlamento europeo y del Consejo de 21 de mayo de 2013 sobre resolución de litigios en línea en materia de consumo, se informa al consumidor y usuario de que en caso de conflicto podrá acudir a la",
      linkText: " resolución extrajudicial de litigios en línea.",
    },
    item14: {
      title: "Legislación aplicable y jurisdicción competente",
      text1:
        "Cuando el usuario tenga la condición de consumidor, en particular para aquellos usuarios residentes en la Unión Europea o el Espacio Económico Europeo o en otros lugares donde así lo prevea la legislación vigente, será de aplicación la ley del consumidor. En el resto de dudas, cualquier asunto se regirá por la ley española.",
      text2:
        "Excepto para usuarios residentes en la Unión Europea o el Espacio Económico Europeo, que podrán presentar sus demandas en el país de residencia de conformidad con la legislación aplicable, todas las demandas que no pudieran resolverse mediante resolución extrajudicial de conflictos se litigarán exclusivamente en los tribunales españoles.",
    },
    item15: {
      title: "Responsabilidad del usuario",
      text: "Serás responsable de un uso adecuado de este aplicativo debiendo responder ante TOPPIN y ante el resto de la comunidad de usuarios, de cualquier conducta irregular que llevara a cabo así como de toda queja, demanda, reclamación, daño, pérdida, coste, o cualquier otro perjuicio que generara perjuicios y/o daños a las partes ya mencionadas así como a licenciantes o terceros cuyos derechos se vieran vulnerados.",
    },
  },
  firstDateTips: {
    header: "Consejos para tener la primera cita perfecta",
    prevLinkText: "Cómo terminar una relación de match",
    nextLinkText: "Toppitea con seguridad",
    description:
      "Las primeras citas siempre nos causan nervios, inseguridades, pero también emoción. Por ello, desde Toppin queremos daros algunos consejos que os ayudarán a que vuestra primera cita se a lo más perfecta posible. Y recuerda, siempre puede haber fallo, es algo natural.",
    item1: {
      title: "Tus amigos, tus mejores valedores",
      text1:
        "Cuando rellenamos nuestros perfiles en redes sociales solemos mostrar una imagen nuestra que no se ajusta del todo a la realidad, lo que proyecta una imagen equivocada de nosotros mismos. El problema surge que, al conocernos, podemos decepcionar a nuestra cita, la cual tiene una imagen predefinida por lo que ha visto en nuestro perfil.",
      text2:
        "Para evitar esta falsa impresión, primero debemos mostrarnos tal y como somos en realidad y ajustarnos a ella en el perfil que nos abramos en Toppin. Otro gran consejo es pedir ayuda a nuestros amigos, para que nos aseguremos de que nos mostramos tal y como somos.",
    },
    item2: {
      title: "Elegir bien el lugar de nuestra primera cita",
      text1:
        "Solemos pensar que el mejor lugar para tener una primera cita es elaborar un plan complejo y sofisticado. Nada más lejos de la realidad. Una cena, un café en algún lugar de moda. Elegir un sitio tranquilo e informal es que este nos ayudará a relajarnos y no aumentará nuestro nerviosismo.",
    },
    item3: {
      title: "La conversación, punto de apoyo",
      text1:
        "Cuando pensamos en la primera cita solemos darle muchas vueltas a como fluirá la conversación. Es normal pensar en ello pues es un punto en el que podemos fallar, y esto nos pone aún más nerviosos.",
      text2:
        "Si bien partimos de la premisa de que esa primera cita será con alguien con quien ya hemos chateado con anterioridad, recurrir a temas banales puede hacer que esta cita acabe en desastre.",
      text3:
        "Una buena opción es tener previamente una cita por videochat, podremos de este modo charlar tranquilamente y ver si la conversación es fluida y agradable.",
      text4:
        "Una buena opción es tener previamente una cita por videochat, podremos de este modo charlar tranquilamente y ver si la conversación es fluida y agradable.",
    },
    item4: {
      title: "Que no te traicione tu lenguaje corporal",
      text1:
        "Una de las cosas que más transmite sobre nosotros mismo es el lenguaje corporal. Estar atentos a que este no nos traicione es más sencillo de lo que pensamos. Según ciertos estudios, copiar el lenguaje de nuestra cita puede ayudarnos a crear una atmósfera mejor, si nos sonríe, sonreímos, por ejemplo.",
      text2:
        "Otra forma de cuidar el lenguaje corporal es el como nos sentamos, de frente y sin cruzar los brazos, con una postura abierta hacia nuestro interlocutor.",
    },
    item5: {
      title: "Aceptación, no coincidiréis en todo",
      text1:
        "Ante una primera cita nos aferramos a la idea de que podemos estar ante una persona con la que tendremos muchas cosas en común. Si bien esto es posible, hemos de entender que nadie es cien por cien igual a nosotros.",
      text2:
        "Este hecho no solo es normal, sino que es incluso, bueno. De este modo podremos establecer temas de conversación variados y descubrir facetas interesantes de nuestra cita.",
      text3:
        "Recuerda, prepararse bien para una primera cita puede ayudaros a que esta fluya y sea lo más cómodo posible, pero, si al final no sale bien no hay de que preocuparse, pues hay factores que no podemos controlar.",
    },
  },
  contentPage: {
    backToText: "Volver a:",
    linkText: "Avisos de Seguridad",
  },
  howToFinish: {
    header: "Como terminar una relación de match",
    nextLinkText: "Consejos para tener la primera cita perfecta",
    description: {
      text1:
        "Toppin está pensada para conocer gente y disfrutar de cada momento, para encontrar el amor de tu vida o conocer gente que te haga pasar momentos dulces. Pero no siempre sucede al primer match. Por ello, desde Toppin queremos enseñarte diferentes formas de hacerle saber a ese match que ya no estamos interesados en ellos.",
      text2:
        "Es importante la forma como lo hacemos, pues con ello conseguiremos crear una comunidad sana y además, respetaremos al resto de usuarios. El Ghosting no es la única opción.",
    },
    item1: {
      title: "No existe progresión en vuestra relación",
      text1:
        'Si llegados a un punto te das cuenta de que no estás ante la persona que endulzará tu vida, y no te gusta tanto como pensabas, no hace falta salir corriendo, simplemente puedes abordar la situación con un simple "fue un placer conocerte, lo pasamos bien, pero creo que no congeniamos lo suficiente".',
    },
    item2: {
      title: "Del amor a la amistad hay un pequeño paso",
      text1:
        "Puede que encontraras a alguien muy dulce toppiteando. Que vuestras primeras citas fueran increíbles pero llegados a un punto ves a esa persona más como un amigo que como el amor de tu vida.",
      text2:
        "¿Cómo puedes transmitir esa idea? Lo primero que has de hacer es ser amable pero muy claro con tus intenciones. Trazar una línea de hacia donde quieres llevar la relación y que pretendes con ello.",
      text3:
        "Puede que la otra persona no pretenda una amistad y corte toda relación. Se respetuoso con la decisión de los demás, al igual que querrías que lo fueran con las tuyas.",
    },
    item3: {
      title: "No tienes claro si tu match siente lo mismo que tú",
      text1:
        "Puede que te encuentres ante ciertas situaciones en las que puedes pensar que tú siempre das el primer paso, siempre comienzas tú la conversación o eres quien propone las citas. Ante estas situaciones es recomendable parar, ser conciso y exponer lo que quieres de la relación.",
      text2:
        "Transmitir a la persona a la que estas conociendo que buscas, que necesitas y hacia donde quieres llevar la relación que se está formando es imprescindible para que tu match se convierta en algo dulce.",
    },
    item4: {
      title: "Ha sido maravilloso, pero toca a su fin",
      text1:
        "Conociste a alguien muy especial y vivisteis momentos inolvidables. El momento de afrontar una ruptura siempre es complicado y puede que no exista la forma perfecta de hacerlo. Pero si hay formas incorrectas y una de ellas es no hacerlo en persona.",
      text2:
        "Se honesto y sincero. Puede que la ruptura se produzca por un hecho concreto o porque tus sentimientos toman otro rumbo. Se sincero con esa persona que tan buenos momentos te hizo pasar.",
    },
    item5: {
      title: "De mal en peor",
      text1:
        "Hiciste match con alguien, todo funcionaba a la perfección, pero sucedió algo que no puedes pasar por alto un hecho concreto o una serie de situaciones que no quieres en tu vida.",
      text2:
        "Transmitir a esa persona lo que ha hecho para que decidas dejar de verlo, de manera clara y sincera es un buen punto de partida.",
    },
    item6: {
      title: "Marcar límites",
      text1:
        "Tras varias citas empiezas a ver ciertos comportamientos o situaciones que no quieres tener en una futura relación. Se salta todos los límites que tienes y ves con claridad que si esto sucede al principio luego puede ir a peor. En este caso te aconsejamos que bloquees al usuario y si el caso es peor, lo denuncies en la aplicación.",
      text2:
        "Toppin está pensada para crear momentos dulces y conocer a gente que aporte algo a tu vida, disfrutando de cada pequeño momento. Por ello, respetar a todos los usuarios de la aplicación y ser sincero y cordial ayudará a crear una comunidad sana.",
      text3: "Endulza tu vida con Toppin.",
    },
  },
  securityContent: {
    header: "Toppitea con seguridad",
    prevLinkText: "Consejos para tener la primera cita perfecta",
    description:
      "Desde Toppin sabemos de la importancia que tiene la seguridad para nuestros usuarios y por ello queremos ayudaros con algunos consejos a que tu dulce aventura dentro de Toppin sea 100% segura y tu sólo tengas que disfrutar de los momentos más dulces.",
    item1: {
      title: "El registro, primer paso para tu seguridad",
      text: "El primer paso para que tu aventura en Toppin sea 100% segura pasa por nuestro método de registro a través de diferentes métodos. Por ello es recomendable que los usuarios que quieran toppitear con seguridad se registren siguiendo los pasos de manera correcta.",
    },
    item2: {
      title: "Verifica tu perfil",
      text1:
        "Uno de los puntos que aportan más seguridad a tu cuenta de Toppin es nuestro sistema de verificación de perfil mediante selfie.",
      text2:
        "Mediante un selfie en el que tendrás que realizar un gesto con la mano, el mismo que te aparecerá en la pantalla del móvil, verificaremos tu cuenta. De este modo ganarás en seguridad a la hora de visitar perfiles verificados y nosotros sabremos que eres tu realmente quién esta usando la cuenta con el fin de disfrutar de Toppin.",
    },
    item3: {
      title: "Bloquea contactos no deseados",
      text1:
        "Otra de las opciones que te proporciona Toppin es la de bloquear usuarios no deseados. De este modo salvaguardamos tu privacidad, siendo tu quien decida quién puede ver tu perfil, o simplemente quien puede seguir chateando contigo.",
      text2:
        "Así que recuerda, si crees que estás ante un perfil el cual no te hace sentir seguro, bloquéalo.",
    },
    item4: {
      title: "No compartas datos susceptibles",
      text1:
        "Es importante, por la seguridad de los usuarios de Toppin, que no se compartan datos susceptibles. No únicamente datos bancarios, si no de direcciones de donde vives o trabajas, o datos relacionados con tu vida más privada.",
      text2:
        "Desde Toppin creemos en una comunidad sana que busca divertirse y compartir este tipo de datos puede crear situaciones incomodas que hemos de evitar.",
      text3: "Disfruta toppiteando de forma segura.",
    },
    item5: {
      title: "No compartas fotografías privadas",
      text1:
        "Uno de los grandes problemas que han traído las redes sociales no es otro que el uso indiscriminado de fotografías privadas. Hemos de tener cuidado de qué tipo de fotografías mandamos y a quién se las mandamos, pues nunca sabemos que uso pueden dar de estas.",
      text2:
        "Por ello, te invitamos a no compartir ciertas imágenes, para que el uso de Toppin sea 100% seguro.",
    },
    item6: {
      title: "Compartir videollamada",
      text1:
        "Si has conocido a alguien interesante en Toppin y queréis dar el siguiente paso, te recomendamos que uses nuestra opción de establecer una videollamada.",
      text2:
        "Os conoceréis mejor, podréis charlar tranquilamente y de manera más fluida y, sobre todo poneros cara el uno al otro.",
      text3:
        "La opción de videollamada puede resultar una gran opción dentro de Toppin para disfrutar y sentirse seguro.",
    },
    item7: {
      title: "No dudes en contactar con nosotros",
      text1:
        "Esperamos que esta guía te ayude a disfrutar de los momentos más dulce en Toppin. Pero si tienes alguna duda, sugerencia o quieres ponerte en contacto con nosotros porque crees que tu seguridad esta siendo vulnerada, no dudes en ponerte en contacto con nosotros a través de nuestro correo electrónico supportoppin.es.",
      text2: "Tu seguridad es primordial para nosotros.",
    },
  },
  cookiePolicy: {
    header: "Política de cookies (UE)",
    description:
      "Esta Política de cookies fue actualizada por última vez el noviembre 7, 2022 y se aplica a los ciudadanos y residentes legales permanentes del Espacio Económico Europeo y Suiza",
    item1: {
      title: "Introducción",
      text1: "Nuestra web,",
      text2:
        "(en adelante: «la web») utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.",
    },
    item2: {
      title: "¿Qué son las cookies?",
      text: "Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que su navegador almacena en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros servidores o a los servidores de terceros apropiados durante una visita posterior.",
    },
    item3: {
      title: "¿Qué son los scripts?",
      text: "Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en su dispositivo.",
    },
    item4: {
      title: "¿Qué es un web beacon?",
      text: "Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que se utiliza para monitorear el tráfico en una web. Para ello, se almacenan varios datos sobre usted mediante estas balizas web.",
    },
    item5: {
      title: "Cookies",
      subtitle1: "5.1 Cookies técnicas o funcionales",
      text1:
        "Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. De esta manera, no necesitas introducir repetidamente la misma información cuando visitas nuestra web y, por ejemplo, los artículos permanecen en tu cesta de la compra hasta que hayas pagado. Podemos colocar estas cookies sin tu consentimiento.",
      subtitle2: "5.2 Cookies de estadísticas",
      text2:
        "Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. Con estas cookies estadísticas obtenemos información sobre el uso de nuestra web. Te pedimos tu permiso para colocar cookies de estadísticas.",
      subtitle3: "5.3 Cookies de Marketing/Seguimiento",
      text3:
        "Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en varias webs con fines de marketing similares.",
    },
    item6: { title: "Cookies usadas" },
    item7: {
      title: "Consentimiento",
      text: "Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas que usemos las categorías de cookies y plugins que has seleccionado en la ventana emergente, tal y como se describe en esta política de cookies. Puedes desactivar el uso de cookies a través de tu navegador, pero, por favor, ten en cuenta que nuestra web puede dejar de funcionar correctamente.",
      subtitle: "7.1 Gestiona tus ajustes de consentimiento",
    },
    item8: {
      title: "Activación/desactivación y eliminación de cookies",
      text1:
        "Puedes utilizar tu navegador de Internet para eliminar las cookies de forma automática o manual. También puedes especificar que ciertas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu navegador de Internet para que recibas un mensaje cada vez que se coloca una cookie. Para obtener más información sobre estas opciones, consulta las instrucciones de la sección «Ayuda» de tu navegador.",
      text2:
        "Ten en cuenta que nuestra web puede no funcionar correctamente si todas las cookies están desactivadas. Si borras las cookies de tu navegador, se volverán a colocar después de tu consentimiento cuando vuelvas a visitar nuestras webs.",
    },
    item9: {
      title: "Tus derechos con respecto a los datos personales",
      text1:
        "Tienes los siguientes derechos con respecto a tus datos personales:",
      list: {
        item1:
          "Tiene derecho a saber por qué se necesitan tus datos personales, qué sucederá con ellos y durante cuánto tiempo se conservarán.",
        item2:
          "Derecho de acceso: tienes derecho a acceder a tus datos personales que conocemos.",
        item3:
          "Derecho de rectificación: tienes derecho a completar, rectificar, borrar o bloquear tus datos personales cuando lo desees.",
        item4:
          "Si nos das tu consentimiento para procesar tus datos, tienes derecho a revocar dicho consentimiento y a que se eliminen tus datos personales.",
        item5:
          "Derecho de cesión de tus datos: tienes derecho a solicitar todos tus datos personales al responsable del tratamiento y a transferirlos íntegramente a otro responsable del tratamiento.",
        item6:
          "Derecho de oposición: puedes oponerte al tratamiento de tus datos. Nosotros cumplimos con esto, a menos que existan motivos justificados para el procesamiento.",
      },
      text2:
        "Para ejercer estos derechos, por favor, contacta con nosotros. Por favor, consulta los detalles de contacto en la parte inferior de esta política de cookies. Si tienes alguna queja sobre cómo gestionamos tus datos, nos gustaría que nos la hicieras saber, pero también tienes derecho a enviar una queja a la autoridad supervisora (la autoridad de protección de datos).",
    },
    item10: {
      title: "Datos de contacto",
      text1:
        "Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, por favor, contacta con nosotros usando los siguientes datos de contacto:",
      text2: "Esta política de cookies ha sido sincronizada con",
      text3: "el noviembre 7, 2022",
    },
  },
  cookieConsent: {
    functional: "Funcional",
    use: "Uso",
    explain: "Usamos Complianz para cookie consent management.",
    readMore: "Leer más",
    share: "Compartir datos",
    dataExplain:
      "Estos datos no se comparten con terceros. Para más información, por favor, lee la",
    policy: "política de privacidad de Complianz",
    days: "días",
    day: "día",
    year: "año",
    years: "años",
    minute: "minuto",
    cookies: {
      store:
        "Almacenar información sobre las cookies que se han detectado en el sitio",
      save: "Guardar preferencias de consentimiento de cookies",
      idStore: "Almacenar la ID de la política de cookies aceptada",
      bannerStore: "Almacenar si el banner de cookies ha sido descartado",
      count: "Contar y rastrear páginas vistas",
      uniqueStore: "Almacenar un ID de usuario único",
    },
    expiry: "Caducidad",
    function: "Función",
    statistics: "Estadísticas",
    useStatistics: "Usamos Google Analytics para website statistics.",
    moreInfo: "Para más información, por favor, lee la",
    privacy: "política de privacidad de Google Analytics",
    divi: "Usamos Divi (Elegant Themes) para website design.",
    noShare: "Estos datos no se comparten con terceros.",
    expirySession: "Caducidad: sesión",
    functionNotAvailable: "Función: No disponible",
    wpmlUse: "Usamos WPML para locale management.",
    expireDay: "Caducidad: 1 día",
    saveConfig: "Función: Guardar configuraciones de lenguaje",
    varius: "Varios",
    investigation: "Propósito pendiente de investigación",
    pending: "El intercambio de datos está pendiente de investigación",
    expireNotAvailable: "Caducidad: No disponible",
    notAvailable: "No disponible",
  },
  cookieConsentManager: {
    functional: "Funcional",
    alwaysOn: "Siempre activo",
    functionalText:
      "El almacenamiento o acceso técnico es estrictamente necesario para el propósito legítimo de permitir el uso de un servicio específico explícitamente solicitado por el abonado o usuario, o con el único propósito de llevar a cabo la transmisión de una comunicación a través de una red de comunicaciones electrónicas.",
    preferences: "Preferencias",
    preferencesText:
      "El almacenamiento o acceso técnico es necesario para la finalidad legítima de almacenar preferencias no solicitadas por el abonado o usuario.",
    statistics: "Estadísticas",
    statisticsText1:
      "El almacenamiento o acceso técnico que es utilizado exclusivamente con fines estadísticos.",
    statisticsText2:
      "El almacenamiento o acceso técnico que se utiliza exclusivamente con fines estadísticos anónimos. Sin un requerimiento, el cumplimiento voluntario por parte de tu Proveedor de servicios de Internet, o los registros adicionales de un tercero, la información almacenada o recuperada sólo para este propósito no se puede utilizar para identificarte.",
    marketingText:
      "El almacenamiento o acceso técnico es necesario para crear perfiles de usuario para enviar publicidad, o para rastrear al usuario en una web o en varias web con fines de marketing similares.",
  },
});

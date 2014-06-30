module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "FrontInterior 2014",
      description: "Conference description",
      date: "29 e 30 de Agosto de 2014",
      theme: "Mobile Web",
      // If your event is free, just comment this line
      //price: "Aguarde",
      venue: "SESI (Horto)",
      address: "Rua Profa. Zenita Alcântara Nogueira, 10166",
      city: "Bauru",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    /*callToAction: {
        text: "Inscreva-se!",
        link: "http://eventick.com.br/frontinterior2014"
    },*/

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/talitapagani/frontinterior2014"
    },

    // Site info
    site: {
      theme: "frontinterior",
      url: "http://www.frontinterior.com.br"
      //googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      //'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O Evento",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Apoiadores",
      contact: "Seja um patrocinador"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Almir Filho",
        photo: "themes/frontinterior/img/speaker-almir-filho.jpg",
        bio: "Desenvolvedor web na Globo.com e co-fundador do Loop Infinito, onde compartilha seu conhecimento, experiências e pensamentos sobre front-end. Possui mestrado em Ciência da Computação, é entusiasta e extremamente interessado pelo mundo dos padrões web e produtividade. Artista de sanduíches nas horas vagas.",
        company: "Globo.com",
        link: {
          href: "http://twitter.com/almirfilho",
          text: "@almirfilho"
        },
        presentation: {
          title: "TBD",
          description: "TBD",
          time: "10h00"
        }
      },
      {
        name: "Davidson Fellipe",
        photo: "themes/frontinterior/img/speaker-davidson-fellipe.jpg",
        bio: "É Front-end engineer na Globo.com, onde já se envolveu com projetos para o Globoesporte.com, Futpédia, Tempo Real, Eu Atleta e Sportv. Bastante envolvido com a comunidade JS, sendo o fundador do Riojs e Pernambucojs, além de organizar os eventos Front in BH e Front in Recife. Graduado em engenharia da computação pela UPE, técnico em eletrônica pelo IFPE e Mestrando em Ciência da Computação na PUC-Rio.",
        company: "Globo.com",
        link: {
          href: "http://github.com/davidsonfellipe",
          text: "@davidsonfellipe"
        },
        presentation: {
          title: "TBD",
          description: "TBD",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      /*{
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }*/
    ],

    // List of Sponsors
    sponsorsPremium: [
      /*{
        name: "Eventick",
        logo: "themes/frontinterior/img/sponsor.png",
        url: "http://eventick.com.br"
      }*/
    ],

    sponsorsGold: [
      {
        name: "Globo.com",
        logo: "themes/frontinterior/img/sponsor-globocom.png",
        url: "https://github.com/globocom"
      }
    ],

    sponsorsSilver: [
      /*{
        name: "Eventick",
        logo: "themes/frontinterior/img/sponsor.png",
        url: "http://eventick.com.br"
      }*/
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/frontinterior/img/partner.png",
        url: "http://braziljs.org"
      },
      {
        name: "Eventick",
        logo: "themes/frontinterior/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
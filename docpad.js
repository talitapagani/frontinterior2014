module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "FrontInterior 2014",
      description: "O FrontInterior 2014 é a segunda edição do maior evento de desenvolvimento web do interior paulista!",
      date: "29 e 30 de Agosto de 2014",
      theme: "Mobile Web",
      // If your event is free, just comment this line
      price: "40 (primeiro lote promocional)",
      venue: "Obeid Plaza Hotel (Salão Beyrute)",
      address: "Avenida Nações Unidas, 19-50, Jardim Brasil",
      city: "Bauru",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "http://eventick.com.br/frontinterior2014"
    },

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
      'schedule',
      'tickets',
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
      tickets: "Garanta seu ingresso",
      sponsors: "Patrocinadores",
      partners: "Apoiadores",
      contact: "Seja um patrocinador"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento / Networking",
        time: "8h00"
      },
      {
        name: "Gil Crespo",
        photo: "themes/frontinterior/img/speaker-gil-crespo.jpg",
        bio: "Trabalha na UPPERCASE Consultoria e atua na área de desenvolvimento Front-End desde 2005. Vem utilizando CSS3, HTML5 e jQuery para melhorar toda a experiência do usuário na operação de websites e sistemas. Trabalha com design resposivo aplicado à mobile e é autor do livro \"Responsive Web Design with jQuery\" (2013), lançado pela Editora PACKT Publishing.",
        company: "UPPERCASE Consultoria",
        /*link: {
          href: "http://twitter.com/gilcrespo",
          text: "@gilcrespo"
        },*/
        presentation: {
          title: "Plugins jQuery para turbinar sites responsivos",
          description: "Veremos alguns elementos ainda pouco explorados em sites responsivos e como turbiná-los usando plugins jQuery. Explorando mais detalhes desses elementos, teremos como resultado final pouca programação e grande melhoria na experiência do usuário graças à comunidade.",
          time: "09h00"
        }
      },
      {
        name: "Pausa para o café / Mais Networking!",
        time: "10h00"
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
          title: "Padrões Throttle e Debounce em Aplicações Web",
          description: "Serão apresentados os padrões throttle e debounce. Onde, quando e porque utilizá-los? Eles resolvem alguns problemas que podem comprometer o desempenho de uma aplicação web inteira devido ao mau uso dos eventos.",
          time: "10h30"
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
          title: "Workflow para desenvolvimento mobile usando Grunt.JS",
          description: "Como utilizar o Grunt.js associado ao desenvolvimento mobile? Quais são as tarefas relevantes para monitorar? Quais plugins são necessários? Se interessou? Então, venha conhecer essas dicas!",
          time: "11h30"
        }
      },
      {
        name: "Almoço batuta",
        time: "12h30"
      },
      {
        name: "Loiane Groner",
        photo: "themes/frontinterior/img/speaker-loiane-groner.jpg",
        bio: "Bacharel em Ciência da Computação, trabalha como Gerente de Desenvolvimento de Projetos no Citibank (maior instituição financeira do mundo), em São Paulo. Possui 8+ anos de experiência em TI. Autora dos livrosExt JS 4 First Look, Mastering Ext JS e Sencha Architect App Development, todos publicados pela editora Packt e lançados mundialmente em inglês. Evangelista Java e Sencha Community Leader no Brasil.",
        company: "Citibank",
        link: {
          href: "http://twitter.com/loiane",
          text: "@loiane"
        },
        presentation: {
          title: "10 dicas de desempenho para apps mobile híbridas",
          description: "Muitos desenvolvedores se questionam se aplicações mobile híbridas possuem boa performance se comparadas a apps nativas. Nessa palestra veremos dicas,truques e boas práticas que realmente fazem a diferença no desempenho de aplicativos móveis, envolvendo tecnologias como Phonegap, jQuery Mobile e Sencha Touch. Entre outras técnicas, mostraremos como lidar com problemas gerados pelo atraso do evento touch, dicas para melhorar o desempenho de requisições assíncronas, a melhor forma de carregar dados do servidor, além de otimização de código no jquery mobile.",
          time: "14h00"
        }
      },
      {
        name: "Cafézinho esperto da tarde / Networking",
        time: "15h00"
      },
      {
        name: "Beto Muniz",
        photo: "themes/frontinterior/img/speaker-beto-muniz.jpg",
        bio: "Beto Muniz é um Mineiro-Capixaba apaixonado por Front End e que atualmente trabalha na Tagon8 como Front End Engineer, inspirado pelo estudo de novas tecnologias e pela comunidade, Beto está sempre atento no que esta acontecendo e disposto a contribuir com a comunidade e prova disso é sua participação em Projetos Open-Source, Eventos e Organizações como LearnLayout.com, Google I/O Extended, TDC, EmberJS Meetup, GoLang Meetup, NodeJS Meetup, MinasDev etc.",
        company: "Tagon8",
        link: {
          href: "http://twitter.com/obetomuniz",
          text: "@obetomuniz"
        },
        presentation: {
          title: "Web Components, a próxima revolução do web desenvolvimento",
          description: "Nesta palestra será abordado conceitos envolvendo Web Components e exemplos práticos. Iremos avaliar todo o poder que esta nova feature trás consigo e também tópicos relacionados a como utilizá-la desde já de forma funcional, cross-browser e multi-plataforma. Sem dúvidas, depois desta apresentação você ficará fascinado por este novo mundo que está surgindo e que não está tão distante da realidade dos desenvolveres atuais.",
          time: "15h30"
        }
      },
      {
        name: "Palestra a definir",
        time: "16h30"
      },
      {
        name: "Encerramento e Sorteio de Brindes",
        time: "17h00"
      },
      {
        name: "Pós-evento a.k.a. Party Hard",
        time: "18h00"
      }
    ],

    // List of Sponsors
    sponsorsPremium: [
      {
        name: "W3C",
        logo: "themes/frontinterior/img/sponsor-w3c.png",
        url: "http://w3c.br"
      },
      {
        name: "Nic.br",
        logo: "themes/frontinterior/img/sponsor-nicbr.png",
        url: "http://nic.br"
      },
      {
        name: "CGI.br",
        logo: "themes/frontinterior/img/sponsor-cgibr.png",
        url: "http://cgi.br"
      }
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
      },
      {
        name: "Novatec",
        logo: "themes/frontinterior/img/partner-novatec.png",
        url: "http://novatec.com.br"
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
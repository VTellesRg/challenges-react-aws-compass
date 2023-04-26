import { Router } from 'express';

const router = Router();
// api users router
router.get('/v1/user', (req, res) => {
    res.json({
        "users": [
            {
                "name": "Ana Luiza Landim Irschlinger",
                "user": "analuizalandimirschlinger",
                "birthdate": "1992-08-05",
                "email": "ana.irschlinger.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=1"
            },
            {
                "name": "Camila Florão Barcellos",
                "user": "camilafloraobarcellos",
                "birthdate": "1993-04-10",
                "email": "camila.barcellos.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=2"
            },
            {
                "name": "Dener Kisner Borges",
                "user": "denerkisnerborges",
                "birthdate": "1992-06-03",
                "email": "dener.borges.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=3"
            },
            {
                "name": "Diego Leonardo Martinicorena Suarez",
                "user": "diegomartinicorenasuarez",
                "birthdate": "1994-09-27",
                "email": "diego.suarez.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=4"
            },
            {
                "name": "Emanuelle Fritzen Machado",
                "user": "emanuellefritzenmachado",
                "birthdate": "1993-01-28",
                "email": "emanuelle.machado.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=5"
            },
            {
                "name": "Emmanuel Enrick Scortegagna",
                "user": "emmanuelscortegagna", "birthdate": "1994-05-21",
                "email": "emmanuel.scortegagna.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=6"
            },
            {
                "name": "Gabriel Afonso Fiss",
                "user": "gabrielfiss",
                "birthdate": "1992-12-07",
                "email": "gabriel.fiss.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=7"
            },
            {
                "name": "Gabriel Medeiros Garcia",
                "user": "gabrielmedeiros",
                "birthdate": "1993-10-18",
                "email": "gabriel.garcia.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=8"
            },
            {
                "name": "Isadora de Pinho Brito",
                "user": "isadorapinhobrito",
                "birthdate": "1994-06-17",
                "email": "isadora.brito.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=9"
            },
            {
                "name": "José Valério da Silva Figueira",
                "user": "josevaleriofigueira",
                "birthdate": "1993-09-15",
                "email": "jose.figueira.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=10"
            },
            {
                "name": "Josiel Jesus Matos",
                "user": "josieljesusmatos",
                "birthdate": "1992-11-29",
                "email": "josiel.matos.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=11"
            },
            {
                "name": "Kaiane Gabriela Rodrigues Cardozo",
                "user": "kaianecardozo",
                "birthdate": "1994-02-22",
                "email": "kaiane.cardozo.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=12"
            },
            {
                "name": "Luiz Ricardo Brugnera",
                "user": "luizbrugnera",
                "birthdate": "1993-05-14",
                "email": "luiz.brugnera.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=13"
            },
            {
                "name": "Luiz Tadeu Nespatti Sureto",
                "user": "luizsureto",
                "birthdate": "1992-07-06",
                "email": "luiz.sureto.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=14"
            },
            {
                "name": "Maria Flor Oliveira Di Piero",
                "user": "mariaflordipiero",
                "birthdate": "1994-03-31",
                "email": "maria.piero.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=15"
            },
            {
                "name": "Pedro Fajreldin Poglia",
                "user": "pedropoglia",
                "birthdate": "1993-02-25",
                "email": "pedro.poglia.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=16"
            },
            {
                "name": "Victor Rodrigues Pithan",
                "user": "victorpithan",
                "birthdate": "1994-07-12",
                "email": "victor.pithan.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=17"
            },
            {
                "name": "Vinicius Faller de Oliveira",
                "user": "viniciusfaller",
                "birthdate": "1992-09-08",
                "email": "vinicius.oliveira.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=18"
            },
            {
                "name": "Vinicius Gonçalves Peres",
                "user": "viniciusperes", "birthdate": "1993-11-17",
                "email": "vinicius.peres.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=19"
            },
            {
                "name": "Vinicius Madruga Telles",
                "user": "viniciustelles",
                "birthdate": "1994-01-23",
                "email": "vinicius.telles.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=20"
            },
            {
                "name": "Yuri Gonçalves Caetano",
                "user": "yuricaetano",
                "birthdate": "1992-10-20",
                "email": "yuri.caetano.pb@compasso.com.br",
                "password": "BolsistasUOL",
                "profile_photo": "https://picsum.photos/200/300?random=21"
            }
        ]
    }
    )
})
// api posts router
router.get('/v1/user/post', (req, res) => {
    res.json({
        "posts": [
            {
                "user": "anairschlinger",
                "post_date": "2023-04-22T10:15:00",
                "description": "A primavera chegou! 🌺",
                "likes": 8,
                "comments": [
                    {
                        "user": "diegosuarez",
                        "comment": "Linda foto Ana! 🌸"
                    },
                    {
                        "user": "luizbrugnera",
                        "comment": "Que flores maravilhosas! 🌷"
                    }
                ],
                "url_imagem": "https://picsum.photos/200/300?random=22"
            },
            {
                "user": "camilabarcellos",
                "post_date": "2023-04-20T17:30:00",
                "description": "Finalmente terminei de ler este livro incrível! 📚",
                "likes": 12, "comments": [
                    {
                        "user": "gabrielfiss",
                        "comment": "Esse livro é muito bom mesmo! 😍"
                    },
                    {
                        "user": "emanuellemachado",
                        "comment": "Adorei a resenha, vou ler também! 📖"
                    }
                ]
            },
            {
                "user": "denerborges",
                "post_date": "2023-04-19T12:00:00",
                "description": "Praia no outono é tudo de bom! 🌊🍂",
                "likes": 20,
                "comments": [
                    {
                        "user": "viniciusperes",
                        "comment": "Que vista incrível! 🌅"
                    },
                    {
                        "user": "josevalerio",
                        "comment": "Aproveita aí, Dener! 😎"
                    }
                ],
                "url_imagem": "https://picsum.photos/200/300?random=23"
            },
            {
                "user": "diegosuarez",
                "post_date": "2023-04-18T14:45:00",
                "description": "Mais um dia de trabalho concluído! 💻",
                "likes": 6
            },
            {
                "user": "emanuellescortegagna",
                "post_date": "2023-04-17T09:30:00",
                "description": "Bom dia pessoal! ☀️",
                "likes": 15,
                "comments": [
                    {
                        "user": "isadorabrito",
                        "comment": "Bom dia, Emanuelle! 😃"
                    },
                    {
                        "user": "viniciusfaller",
                        "comment": "Linda foto, ótimo dia pra todos! 🌞"
                    }
                ],
                "url_imagem": "https://picsum.photos/200/300?random=24"
            },
            {
                "user": "gabrielfiss",
                "post_date": "2023-04-16T21:00:00",
                "description": "Noite de jogos com a galera! 🎲🃏",
                "likes": 18,
                "comments": [
                    {
                        "user": "emanuellescortegagna",
                        "comment": "Que divertido, Gabi! 🎉"
                    },
                    {
                        "user": "pedropoglia",
                        "comment": "Já quero participar da próxima! 🙌"
                    }
                ]
            },
            {
                "user": "gabrielgarcia",
                "post_date": "2023-04-15T16:20:00",
                "description": "Adoro visitar museus e ver obras incríveis como essa! 🎨",
                "likes": 10,
                "comments": [
                    {
                        "user": "luizsureto",
                        "comment": "Que legal, Gabriel! Qual museu é esse?"
                    },
                    {
                        "user": "yuricaetano",
                        "comment": "Ficou linda a foto, hein! 😍"
                    }
                ],
                "url_imagem": "https://picsum.photos/200/300?random=25"
            },
            {
                "user": "isadorabrito",
                "post_date": "2023-04-14T08:00:00",
                "description": "Bom dia, galera! ☕️🌞",
                "likes": 25,
                "comments": [
                    {
                        "user": "josielmatos",
                        "comment": "Bom dia, Isa! Ótima semana pra nós! 🙌"
                    },
                    {
                        "user": "luizsureto",
                        "comment": "O café tá pronto, Isa? 🤤"
                    }
                ]
            },
            {
                "user": "josevalerio",
                "post_date": "2023-04-12T19:30:00",
                "description": "Noite de futebol com a turma! ⚽️", "likes": 14,
                "comments": [
                    {
                        "user": "viniciusperes",
                        "comment": "Jogão hoje, hein! 🤩"
                    },
                    {
                        "user": "luizbrugnera",
                        "comment": "Esse gol que eu perdi ainda tá me assombrando 😂"
                    }
                ]
            },
            {
                "user": "josielmatos",
                "post_date": "2023-04-11T11:10:00",
                "description": "Trabalhando de casa hoje! 💻",
                "likes": 7,
                "comments": [
                    {
                        "user": "emanuellemachado",
                        "comment": "Boa sorte, Josiel! 😉"
                    },
                    {
                        "user": "viniciustelles",
                        "comment": "Essa é a vida, né Josiel! 😅"
                    }
                ]
            },
            {
                "user": "kaianecardozo",
                "post_date": "2023-04-10T14:00:00",
                "description": "Meu ♀ novo visual! ‍♀",
                "likes": 23,
                "comments": [
                    {
                        "user": "anairschlinger",
                        "comment": "Ficou incrível, Ka! Adorei o corte! 😍"
                    },
                    {
                        "user": "gabrielgarcia",
                        "comment": "Tá linda, Kaiane! 🤩"
                    }
                ],
                "url_imagem": "https://picsum.photos/200/300?random=26"
            },
            {
                "user": "luizsureto",
                "post_date": "2023-04-08T21:15:00",
                "description": "Sextou! 🎉",
                "likes": 31,
                "comments": [
                    {
                        "user": "viniciusoliveira",
                        "comment": "Eita, é hoje que eu fico até de manhã! 😅"
                    },
                    {
                        "user": "gabrielfiss",
                        "comment": "Vai rolar live aí, Luiz? 🤔"
                    }
                ]
            },
            {
                "user": "victorpithan",
                "post_date": "2023-04-07T13:00:00",
                "description": "Dia de almoçar com os amigos do trabalho! 🍝🍷",
                "likes": 16,
                "comments": [
                    {
                        "user": "diegosuarez",
                        "comment": "Tava tudo delicioso! 😍"
                    },
                    {
                        "user": "emanuellescortegagna",
                        "comment": "Precisamos repetir mais vezes! 🙌"
                    }
                ],
                "url_imagem": "https://picsum.photos/200/300?random=27"
            },
            {
                "user": "viniciusperes",
                "post_date": "2023-04-05T17:30:00",
                "description": "Dia de praia com a galera! 🌊☀️",
                "likes": 28,
                "comments": [
                    {
                        "user": "isadorabrito",
                        "comment": "E essa marquinha de sol, hein, Vinicius? 😅"
                    },
                    {
                        "user": "camilabarcellos",
                        "comment": "Foi muito divertido, precisamos fazer de novo! 🙌"
                    }
                ],
                "url_imagem": "https://picsum.photos/200/300?random=28"
            },
            {
                "user": "yuricaetano",
                "post_date": "2023-04-03T22:00:00",
                "description": "Noite de karaokê com os amigos! 🎤🎶",
                "likes": 18,
                "comments": [
                    {
                        "user": "isadorabrito",
                        "comment": "Quando é a minha vez de escolher a música, hein? 😜"
                    },
                    {
                        "user": "gabrielgarcia",
                        "comment": "Você arrasou no Queen, Yuri! 👏"
                    }
                ]
            }
        ]
    });
})

export default router;
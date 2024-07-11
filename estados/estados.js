let estados = [
    {
        "id": 11,
        "sigla": "RO",
        "nome": "Rondônia",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 12,
        "sigla": "AC",
        "nome": "Acre",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 13,
        "sigla": "AM",
        "nome": "Amazonas",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 14,
        "sigla": "RR",
        "nome": "Roraima",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 16,
        "sigla": "AP",
        "nome": "Amapá",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 17,
        "sigla": "TO",
        "nome": "Tocantins",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 21,
        "sigla": "MA",
        "nome": "Maranhão",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 24,
        "sigla": "RN",
        "nome": "Rio Grande do Norte",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 25,
        "sigla": "PB",
        "nome": "Paraíba",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 26,
        "sigla": "PE",
        "nome": "Pernambuco",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 27,
        "sigla": "AL",
        "nome": "Alagoas",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 28,
        "sigla": "SE",
        "nome": "Sergipe",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 32,
        "sigla": "ES",
        "nome": "Espírito Santo",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 33,
        "sigla": "RJ",
        "nome": "Rio de Janeiro",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
            "id": 4,
            "sigla": "S",
            "nome": "Sul"
        }
    },
    {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
            "id": 4,
            "sigla": "S",
            "nome": "Sul"
        }
    },
    {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
            "id": 4,
            "sigla": "S",
            "nome": "Sul"
        }
    },
    {
        "id": 50,
        "sigla": "MS",
        "nome": "Mato Grosso do Sul",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    },
    {
        "id": 51,
        "sigla": "MT",
        "nome": "Mato Grosso",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    },
    {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    },
    {
        "id": 53,
        "sigla": "DF",
        "nome": "Distrito Federal",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    }

        ]

        let cont = 0
        let cont1 = 0
        let cont2 = 0
        let cont3 = 0

        let nordeste = []
        for(let i = 0; i < estados.length; i++){
            if(estados[i].regiao.nome === 'Sul'){
            cont++
        }
            if(estados[i].regiao.nome === 'Nordeste'){
                nordeste.push(estados[i].nome)
            }
    }
        let norte = []
        for(let i = 0; i < estados.length; i++){
            if(estados[i].regiao.nome === 'Sul'){
            cont1++
        }
            if(estados[i].regiao.nome === 'Nordeste'){
                nordeste.push(estados[i].nome)
            }
    }
        let centro = []
        for(let i = 0; i < estados.length; i++){
            if(estados[i].regiao.nome === 'Sul'){
            cont2++
        }
            if(estados[i].regiao.nome === 'Nordeste'){
                nordeste.push(estados[i].nome)
            }
    }
        let sudeste = []
        for(let i = 0; i < estados.length; i++){
            if(estados[i].regiao.nome === 'Sul'){
            cont3++
        }
            if(estados[i].regiao.nome === 'Nordeste'){
                nordeste.push(estados[i].nome)
            }
    }

    console.log('Temos ' + cont + ' Estados na Região Sul.')
    console.log('Temos os seguintes Estados na Região Nordeste: ' + nordeste)

    


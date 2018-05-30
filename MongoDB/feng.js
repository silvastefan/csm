db.feng.insert(
    {
        "id": "1",
        "name": "Teste de desenvolvimento",
        "description": "Teste para desenvolvedor back-end",
        "category": "Testes",
        "basePoints": "100",
        "startDate": "2018-02-15 00:00:00",
        "endDate": "2018-02-22 00:00:00",
        "isActive": true,
        "alreadyAnswered": false,
        "questions": [
            {
                "id": "1",
                "text": "Qual o seu nome?",
                "type": "text"
            },
            {
                "id": "2",
                "text": "Para qual área você está aplicando?",
                "type": "select",
                "options": [
                    {
                        "id": "1",
                        "text": "Front-end",
                        "value": "front-end"
                    },
                    {
                        "id": "2",
                        "text": "Back-end",
                        "value": "back-end"
                    }
                ]
            }
        ]
    }
)
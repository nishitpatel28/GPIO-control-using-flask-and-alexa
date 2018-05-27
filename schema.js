{
    "interactionModel": {
        "languageModel": {
            "invocationName": "sample flask",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "HelloWorldIntent",
                    "slots": [],
                    "samples": [
                        "say hello"
                    ]
                },
                {
                    "name": "GpioIntent",
                    "slots": [
                        {
                            "name": "status",
                            "type": "GPIO_NUMBER"
                        }
                    ],
                    "samples": [
                        "turn {status} light"
                    ]
                }
            ],
            "types": [
                {
                    "name": "GPIO_NUMBER",
                    "values": [
                        {
                            "id": "off",
                            "name": {
                                "value": "off",
                                "synonyms": [
                                    "low"
                                ]
                            }
                        },
                        {
                            "id": "on",
                            "name": {
                                "value": "on",
                                "synonyms": [
                                    "high"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "dialog": {
            "intents": [
                {
                    "name": "GpioIntent",
                    "confirmationRequired": true,
                    "prompts": {
                        "confirmation": "Confirm.Intent.1166112385726"
                    },
                    "slots": [
                        {
                            "name": "status",
                            "type": "GPIO_NUMBER",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.805653981845.440976978977"
                            }
                        }
                    ]
                }
            ]
        },
        "prompts": [
            {
                "id": "Confirm.Intent.1166112385726",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "are you sure"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.805653981845.440976978977",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "status please"
                    }
                ]
            }
        ]
    }
}

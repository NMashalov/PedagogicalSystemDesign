import {SettingsType } from "../../datastruct/settings";
import {StrategySettings } from "../../datastruct/strats";

export const strategySettings : StrategySettings = {
    export : [{
        name: 'Чтение',
        fields:[
        {
            name: 'Число событий',
            type: SettingsType.text,
            default_value: '30'
        },
        {
            name: 'Часы',
            type: SettingsType.text,
            default_value: '30',
            hint: 'Допустимые часы'
        }
        ]
    }], 
    filter: [{
        name: 'Фильтрация',
        fields:[
        {
            name: 'Число событий',
            type: SettingsType.text,
            default_value: '30'
        },
        {
            name: 'Часы',
            type: SettingsType.text,
            default_value: '30'
        }
        ]
    }],
    form: [{
        name: 'Фильтрация',
        fields:[
        {
            name: 'Лимит',
            type: SettingsType.text,
            default_value: '30'
        },
        {
            name: 'Часы',
            type: SettingsType.text,
            default_value: '30'
        }
        ]
    }],   
}
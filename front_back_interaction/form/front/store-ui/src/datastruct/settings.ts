export enum SettingsType {
    range='range',
    text='text',
    selector='selector'
}

export interface SettingsField{
    name: string,
    type: SettingsType,
    default_value?: string,
    hint?: string
}

export interface SettingsGroup{
    name: string,
    fields: SettingsField[]
}




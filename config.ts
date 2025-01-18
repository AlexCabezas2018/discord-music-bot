import 'dotenv/config'

interface Config {
    applicationId: string,
    publicKey: string,
    botToken: string
}

const evaluate = (value: any, isRequired: boolean, defValue?: any) => {
    if (value === undefined || value === "") {
        if (isRequired) throw new Error('Missing required properties')
        else return defValue;
    }

    return value;
}

export const Config: Config = {
    applicationId: evaluate(process.env.APPLICATION_ID, true),
    publicKey: evaluate(process.env.PUBLIC_KEY, true),
    botToken: evaluate(process.env.BOT_TOKEN, true)
}
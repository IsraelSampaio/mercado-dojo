interface Link {
    title: string
    url: string
}

interface autocomplete {
    text: string
    value: string
}

export interface HeaderProps {
    links?: Link[]
    image?: string
    autocomplete?: autocomplete[]
    redirectAutoComplete?: () => void
    signIn?: () => void
    signUp?: () => void
    buy?: () => void
    cart?: () => void
}

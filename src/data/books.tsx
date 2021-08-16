
export enum rating {"Excellent", "Good", "Fair" }
export enum bookType {"Novel", "SF", "Sea Novel"}

export class book {
    title: string
    author: string[]
    publishDate: Date
    dateRead: Date
    comment: string
    review: rating
    type: bookType
    olid: string
}

export const books: book[] = [
    {
        title: "Blood of Patriots",
        author: ["Neil Abercrombie", "Richard Hoyt"],
        dateRead: new Date(1997, 1, 2),
        publishDate: new Date(1996, 1),
        comment: "Terrorists storm the crowded House of Representitives & open fire. The country is in panic & the remaining governmentsttles down to finding out who and why...",
        review: rating.Excellent,
        type: bookType.Novel,
        olid: "OL974616M"
    }
]
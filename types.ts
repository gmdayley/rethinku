interface Course {
    id: string,
    stem: string,
    number: string,
    title: string,
    description: string,
    outcomes: string[],

    learningUnitType: string,
    learningUnits: number,
}
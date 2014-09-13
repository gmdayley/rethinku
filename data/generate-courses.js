// run this in: http://www.json-generator.com/
[
  '{{repeat(150)}}',
  {
    stem: '{{this.stem=random("MUS","REL","MATH","ART","PHYS","CHEM","PHIL","ENGL","CS","BIO","GEOL")}}',
    number: '{{integer(100, 550)}}',
    title: '{{lorem()}}',
    description: '{{lorem(10)}}',
    learningUnitType: '{{this.stem}}',
    learningUnits: '{{integer(5, 12)}}',
    outcomes: [
      '{{repeat(5, 8)}}',
      '{{lorem(1, "word")}}'
    ]
  }
]

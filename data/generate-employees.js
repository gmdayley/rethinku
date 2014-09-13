// run this in: http://www.json-generator.com/
[
  '{{repeat(150)}}',
  {
    firstName: '{{firstName()}}',
    lastName: '{{surname()}}',
    picture: 'http://placehold.it/32x32',
    gender: '{{gender()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    dob: '{{date(new Date(1960, 1, 1), new Date(1990, 1, 1), "MM/dd/YYYY")}}'
  }
]

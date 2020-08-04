export default {
  groups: [
    {
      legend: 'Alumni Info',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'First Name',
          model: 'name',
          required: true,
          validator: ['string', 'required']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Last Name',
          model: 'lastName',
          required: true,
          validator: ['string', 'required']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Educational Field',
          model: 'field',
          validator: ['string']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Educational Grade',
          model: 'grade',
          validator: ['string']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Graduation Year',
          placeholder: '2000',
          model: 'graduationYear',
          validator: ['string']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'City of Birth',
          model: 'birthCity',
          validator: ['string']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Email',
          model: 'email',
          validator: ['string']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Birth Date',
          placeholder: "1990-03-25",
          model: 'birthDate',
          validator: ['string']
        }
        // {
        //   type: 'select',
        //   label: 'Birth Date',
        //   model: 'birthDate',
        //   values: [
        //     {id: 'male', name: 'Male'},
        //     {id: 'female', name: 'Female'}
        //   ],
        //   selectOptions: {
        //     noneSelectedText: 'Choose One'
        //   },
        //   required: true,
        //   validator: ['string', 'required']
        // },
      ]
    }
  ]
}
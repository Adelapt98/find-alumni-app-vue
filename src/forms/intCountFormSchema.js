export default {
  groups: [
    {
      legend: '',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Country Name',
          model: 'countryName',
          placeholder: 'Iran',
          required: true,
          validator: ['string', 'required']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Interests',
          model: 'interests',
          placeholder: 'machine learning, deep learning, artificial intelligence',
          required: true,
          validator: ['string', 'required']
        }
      ]
    }
  ]
}
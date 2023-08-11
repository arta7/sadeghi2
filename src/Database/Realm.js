import Realm from 'realm';


const realm = new Realm({
    path: 'Diabets.realm',
    schema: [
      {
        name: 'DoctorsList',
        properties: {
          Id: { type: 'int', default: 0 },
          DoctorName: 'string',
          Place: 'string',
          Date:'string',
          Time:'string'
        },
      },
      {
        name: 'DrugsList',
        properties: {
          Id: { type: 'int', default: 0 },
          Name: 'string',
          Date:'string',
          Time:'string',
          Doz:'string'
        },
      },

    ],
  })


  export default realm;

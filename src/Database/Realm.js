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
      {
        name: 'BloodTestList',
        properties: {
          Id: { type: 'int', default: 0 },
          Amount: 'string',
          Time: 'string',
          Date:'string',
          ItemIndex:'string'
        },
      },

      {
        name: 'DoctorsListControl',
        properties: {
          Id: { type: 'int', default: 0 }
        },
      },
      {
        name: 'DrugsListControl',
        properties: {
          Id: { type: 'int', default: 0 }
        },
      },
      {
        name: 'BloodTestListControl',
        properties: {
          Id: { type: 'int', default: 0 }
        },
      },

    ],
  })


  export default realm;

module.exports = {

  friendlyName: 'All',
  description: 'All complaint.',

  inputs: {
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/complaint/all',
    },
  },


  fn: async function (inputs, exits) {
    const complaints = await Complaint.find({}).populate('owner');

    return exits.success({ complaints: complaints });
  }

};

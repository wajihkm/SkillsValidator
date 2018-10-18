module.exports = {

  friendlyName: 'Add',
  description: 'Add complaint.',


  inputs: {
    title: {
      type: 'string',
      required: true
    },

    desc: {
      type: 'string',
      required: false
    },

    lat: {
      type: 'number',
      required: true
    },

    lng: {
      type: 'number',
      required: true
    },
  },

  exits: {},


  fn: async function (inputs, exits) {
    const user = this.req.me;

    await Complaint.create({
      title: inputs.title,
      desc: inputs.desc,
      lat: inputs.lat,
      lng: inputs.lng,
      owner: user.id
    });

    return this.res.redirect('/complaint/view-add');
  }

};

module.exports = {

  friendlyName: 'Manage skills',
  description: '',


  inputs: {},


  exits: {
    success: {
      viewTemplatePath: 'pages/admin/manage-skills',
    },

    forbidden: {
      responseType: 'forbidden'
    }
  },


  fn: async function (inputs, exits) {
    if (!this.req.me.isSuperAdmin) {
      return exits.forbidden();
    }

    const skills = await UserSkills.find({ status: { '!=': 'judged' } })
      .populate('user').populate('skill');

    return exits.success({ skills: skills });
  }

};

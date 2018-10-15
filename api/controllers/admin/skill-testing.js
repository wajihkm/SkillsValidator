module.exports = {
  friendlyName: 'Skill testing',
  description: '',


  inputs: {
    skill: {
      type: 'string',
      required: true
    },

    user: {
      type: 'string',
      required: true
    },
  },


  exits: {},


  fn: async function (inputs, exits) {
    if (!this.req.me.isSuperAdmin) {
      return exits.forbidden();
    }

    await UserSkills.update(
      { user: inputs.user, skill: inputs.skill },
      { judge: null, status: 'testing' }
    );

    const isAjax = this.req.wantsJSON;
    if (isAjax) {
      return exits.success({});
    } else {
      return this.res.redirect('/admin/manage-skills');
    }
  }

};

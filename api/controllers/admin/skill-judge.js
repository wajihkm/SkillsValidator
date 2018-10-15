module.exports = {

  friendlyName: 'Skill status',
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

    level: {
      type: 'number',
      required: true
    }
  },


  exits: {},


  fn: async function (inputs, exits) {
    if (!this.req.me.isSuperAdmin) {
      return exits.forbidden();
    }

    await UserSkills.update(
      { user: inputs.user, skill: inputs.skill },
      { judge: inputs.level, status: 'judged' }
    );

    const isAjax = this.req.wantsJSON;
    if (isAjax) {
      return exits.success({});
    } else {
      return this.res.redirect('/admin/manage-skills');
    }
  }

};

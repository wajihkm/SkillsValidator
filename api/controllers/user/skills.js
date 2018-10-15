module.exports = {

  friendlyName: 'Skills',
  description: 'Skills user.',


  inputs: {},

  exits: {
    success: {
      viewTemplatePath: 'pages/user/skills',
    }
  },


  fn: async function (inputs, exits) {
    const user = this.req.me;

    const allSkills = await Skill.find({});
    const skills = await UserSkills.find({ user: user.id }).populate('skill');

    return exits.success({ skills: skills, allSkills: allSkills });
  }

};

module.exports = {

  friendlyName: 'Skill add',
  description: '',

  inputs: {
    skill: {
      type: 'string',
      required: true
    },

    level: {
      type: 'number',
      required: true
    },

    years: {
      type: 'number',
      required: true
    },

    location: {
      type: 'string',
      required: false
    },
  },


  exits: {},


  fn: async function (inputs, exits) {
    const user = this.req.me;

    Skill.findOrCreate(
      { title: inputs.skill },
      { title: inputs.skill, level: inputs.level }
    ).exec(async function (err, skill, wasCreated) {
      if (err) {
        return exits.error();
      }
      if (wasCreated) {
        console.log('new Skill created: ', inputs.skill);
      }

      await UserSkills.create({
        user: user.id, skill: skill.id,
        level: inputs.level,
        years: inputs.years,
        location: inputs.location
      })

      return exits.success({});
    });
  }

};

"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Qnas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      qna_sex: {
        type: Sequelize.STRING,
      },
      qna_age: {
        type: Sequelize.STRING,
      },
      qna_blood: {
        type: Sequelize.STRING,
      },
      qna_digest: {
        type: Sequelize.STRING,
      },
      qna_skin: {
        type: Sequelize.STRING,
      },
      qna_eye: {
        type: Sequelize.STRING,
      },
      qna_brain: {
        type: Sequelize.STRING,
      },
      qna_stemina: {
        type: Sequelize.STRING,
      },
      qna_bone: {
        type: Sequelize.STRING,
      },
      qna_immune: {
        type: Sequelize.STRING,
      },
      qna_hair: {
        type: Sequelize.STRING,
      },
      qna_diet: {
        type: Sequelize.STRING,
      },
      qna_stress: {
        type: Sequelize.STRING,
      },
      qna_sleep: {
        type: Sequelize.STRING,
      },
      qna_symptom: {
        type: Sequelize.STRING,
      },
      qna_height: {
        type: Sequelize.STRING,
      },
      qna_weight: {
        type: Sequelize.STRING,
      },
      qna_workout: {
        type: Sequelize.STRING,
      },
      qna_afterworkout: {
        type: Sequelize.STRING,
      },
      qna_outdoor: {
        type: Sequelize.STRING,
      },
      qna_etc: {
        type: Sequelize.STRING,
      },
      qna_familydisease: {
        type: Sequelize.STRING,
      },
      qna_femaledisease: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Qnas");
  },
};

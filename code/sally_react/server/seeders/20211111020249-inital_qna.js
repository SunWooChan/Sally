"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Qnas", [
      {
        qna_sex: "1",
        qna_age: "24",
        qna_blood: "1",
        qna_digest: "1",
        qna_skin: "1",
        qna_eye: "1",
        qna_brain: "1",
        qna_stemina: "1",
        qna_bone: "1",
        qna_immune: "1",
        qna_hair: "1",
        qna_diet: "1",
        qna_stress: "1",
        qna_sleep: "1",
        qna_symptom: "1",
        qna_height: "180",
        qna_weight: "70",
        qna_workout: "1",
        qna_afterworkout: "1",
        qna_outdoor: "1",
        qna_eathabit: "1",
        qna_symbolfood: "1",
        qna_etc: "1",
        qna_familydisease: "1",
        qna_femaledisease: "2",
        qna_checkup: "1",
        qna_nutritionalhabit: "1",
        qna_marketing: "1",
        createdAt: "2021-05-17",
        updatedAt: "2021-05-17",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Qnas", null, {});
  },
};

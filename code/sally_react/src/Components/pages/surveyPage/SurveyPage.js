import * as Survey from "survey-react";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

import "./SurveyPage.css";

var surveyJSON = {
  locale: "ko",
  title: "Sally",
  description: {
    default: "건강상태 확인 위한 데이터 수집 ",
    ko: "건강상태 확인 위한 데이터 수집\n ",
  },
  pages: [
    {
      name: "나이 성별",
      elements: [
        {
          type: "radiogroup",
          name: "qna_sex",
          title: { ko: "고객님의 성별은 무엇인가요?" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "남성" } },
            { value: "2", text: { ko: "여성" } },
          ],
        },
        {
          type: "text",
          name: "qna_age",
          title: { ko: "고객님의 나이를 적어주세요." },
          isRequired: true,
          inputType: "number",
          min: "1",
          max: "120",
        },
      ],
    },
    {
      name: "혈관/ 혈액 순환",
      elements: [
        {
          type: "radiogroup",
          name: "qna_blood",
          title: { ko: "혈관 / 혈액순환" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "상처가 생기면 잘 아물지 않아요." } },
            { value: "2", text: { ko: "손끝 또는 발끝이 자주 저려요." } },
            {
              value: "3",
              text: { ko: "충치가 잘 생기고, 잇몸이 자주 붓고, 피가 나요." },
            },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "소화/ 장",
      elements: [
        {
          type: "radiogroup",
          name: "qna_digest",
          title: { ko: "소화 / 장" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "복통이나 속 쓰림이 자주 발생해요." } },
            { value: "2", text: { ko: "변비가 있어요." } },
            {
              value: "3",
              text: { ko: "설사와 같은 묽은 변을 자주 보는 편이에요." },
            },
            {
              value: "4",
              text: {
                ko: "술을 마실 때 얼굴이나 몸이 붉어지고 소화가 안돼요.",
              },
            },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "피부",
      elements: [
        {
          type: "radiogroup",
          name: "qna_skin",
          title: { ko: "피부" },
          isRequired: true,
          choices: [
            {
              value: "1",
              text: {
                ko: "피부가 건조하여 벗겨지거나 머리에 비듬이 많이 생겨요.",
              },
            },
            { value: "2", text: { ko: "여드름이 많아서 걱정이에요." } },
            { value: "3", text: { ko: "피부에 염증이 자주 생겨요." } },
            { value: "4", text: { ko: "입안이 헐고 입술이 자주 갈라져요. " } },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "눈",
      elements: [
        {
          type: "radiogroup",
          name: "qna_eye",
          title: { ko: "눈" },
          isRequired: true,
          choices: [
            {
              value: "1",
              text: { ko: "눈이 건조하여 뻑뻑하고 가려움을 느껴요." },
            },
            { value: "2", text: { ko: "눈 주변이 떨리는 현상이 있어요." } },
            {
              value: "3",
              text: {
                ko: "핸드폰이나 컴퓨터를 본 후에 시야가 흐릿하게 느껴져요.",
              },
            },
            { value: "4", text: { ko: "어두워지면 시력이 저하돼요." } },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "두뇌활동",
      elements: [
        {
          type: "radiogroup",
          name: "qna_brain",
          title: { ko: "두뇌활동" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "기억력이 떨어지는 것 같아요." } },
            { value: "2", text: { ko: "두통이 자주 생겨요." } },
            { value: "3", text: { ko: "불안 혹은 긴장감을 자주 느껴요." } },
            { value: "4", text: { ko: "우울한 감정을 자주 느껴요." } },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "피로감",
      elements: [
        {
          type: "radiogroup",
          name: "qna_stemina",
          title: { ko: "피로감" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "무기력하고 식욕이 없어요." } },
            { value: "2", text: { ko: "자고 일어나도 아침부터 피곤해요." } },
            {
              value: "3",
              text: { ko: "신경이 예민하고 잠을 이루기 힘들어요." },
            },
            { value: "4", text: { ko: "잠을 매우 잘 자요." } },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "뼈 관절",
      elements: [
        {
          type: "radiogroup",
          name: "qna_bone",
          title: { ko: "뼈 관절" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "뼈가 부러져 본 경험이 있어요." } },
            { value: "2", text: { ko: "평소 뼈가 약한 느낌이 있어요." } },
            {
              value: "3",
              text: {
                ko: "스테로이드(염증치료제)를 3개월 이상 섭취한 경험이 있어요.",
              },
            },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "면역",
      elements: [
        {
          type: "radiogroup",
          name: "qna_immune",
          title: { ko: "면역" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "스트레스가 매우 많아요." } },
            {
              value: "2",
              text: { ko: "아토피 또는 비염 등 알레르기 질환이 있어요." },
            },
            {
              value: "3",
              text: { ko: "감기와 같은 감염성 질환에 자주 걸려요." },
            },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "모발",
      elements: [
        {
          type: "radiogroup",
          name: "qna_hair",
          title: { ko: "모발" },
          isRequired: true,
          choices: [
            {
              value: "1",
              text: { ko: "탈모가 진행되고 있거나 탈모가 걱정돼요." },
            },
            {
              value: "2",
              text: {
                ko: "머리카락이 갈라지고 끊어지는 등 모발 상태가 나빠요.",
              },
            },
            { value: "3", text: { ko: "같은 또래보다 새치가 많이 나요." } },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "다이어트",
      elements: [
        {
          type: "radiogroup",
          name: "qna_diet",
          title: { ko: "다이어트" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "탄수화물을 많이 섭취하는 것 같아요." } },
            { value: "2", text: { ko: "체지방량이 줄지 않는 것 같아요." } },
            { value: "3", text: { ko: "허기짐이 계속 돼요." } },
            { value: "4", text: { ko: "식사량 감소로 인한 변비가 있어요." } },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "스트레스",
      elements: [
        {
          type: "radiogroup",
          name: "qna_stress",
          title: { ko: "스트레스 정도" },
          isRequired: true,
          choices: [
            { value: "0", text: { ko: "거의 스트레스를 받지 않아요." } },
            { value: "1", text: { ko: "가끔 스트레스를 받아요." } },
            { value: "2", text: { ko: "자주 스트레스를 받아요." } },
          ],
        },
      ],
    },
    {
      name: "수면",
      elements: [
        {
          type: "radiogroup",
          name: "qna_sleep",
          title: { ko: "수면의 질" },
          isRequired: true,
          choices: [
            { value: "0", text: { ko: "잠을 잘 자서 아침에 개운해요." } },
            { value: "1", text: { ko: "가끔 잠을 설쳐서 피곤해요." } },
            { value: "2", text: { ko: "숙면을 취하지 못해 자주 피곤해요." } },
          ],
        },
      ],
    },
    {
      name: "공통 증상 불편",
      elements: [
        {
          type: "radiogroup",
          name: "qna_symptom",
          title: { ko: "해당되는 바가 있으신가요?" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "혈압이 높아요. (140/90 이상)" } },
            { value: "2", text: { ko: "평소 더위를 타고, 땀을 많이 흘려요." } },
            {
              value: "3",
              text: { ko: "혈액항응고제(와파린 등)을 복용하고 있어요." },
            },
            {
              value: "4",
              text: { ko: "꿀 또는 프로폴리스에 알레르기가 있어요." },
            },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "키와 몸무게",
      elements: [
        {
          type: "text",
          name: "qna_height",
          title: { ko: "키" },
          isRequired: true,
          inputType: "number",
        },
        {
          type: "text",
          name: "qna_weight",
          title: { ko: "몸무게" },
          isRequired: true,
          inputType: "number",
        },
      ],
    },
    {
      name: "운동빈도",
      elements: [
        {
          type: "radiogroup",
          name: "qna_workout",
          title: { ko: "운동빈도" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "운동을 많이 해요. (주 4회 이상)" } },
            { value: "2", text: { ko: "운동을 적당히 해요. (주 2~3회 정도)" } },
            {
              value: "3",
              text: { ko: "운동을 거의 하지 않아요. (주 1회 이하)" },
            },
          ],
        },
        {
          type: "radiogroup",
          name: "qna_afterworkout",
          title: { ko: "운동 후 증상" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "근육 운동을 많이 해요." } },
            { value: "2", text: { ko: "근육통이 자주 발생해요." } },
            { value: "3", text: { ko: "근육 경련이나 쥐가 자주 나요." } },
            {
              value: "4",
              text: { ko: "가벼운 운동 후에도 피로감을 많이 느껴요." },
            },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: { ko: "하루 야외 활동" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "4시간 이상 야외활동을 해요." } },
            {
              value: "2",
              text: { ko: "1시간에서 4시간 이내로 야외활동을 해요." },
            },
            { value: "3", text: { ko: "1시간 이내로 야외활동을 해요." } },
          ],
        },
      ],
    },
    {
      name: "그외 해당사항",
      elements: [
        {
          type: "radiogroup",
          name: "qna_etc",
          title: { ko: "그외 해당사항" },
          isRequired: true,
          choices: [
            {
              value: "1",
              text: {
                ko: "하루 12시간 이상의 업무 또는 학업을 일주일에 3일 이상해요.",
              },
            },
            {
              value: "2",
              text: {
                ko: "하루에 6시간 이상 핸드폰 또는 모니터 화면을 집중해서 봐요.",
              },
            },
            {
              value: "3",
              text: { ko: "식사량을 줄이는 다이어트를 하고 있어요." },
            },
            { value: "4", text: { ko: "입에 구내염이 자주 생겨요." } },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
    {
      name: "가족 질환",
      elements: [
        {
          type: "radiogroup",
          name: "qna_familydisease",
          title: { ko: "가족 질환" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "간 질환을 가지고 있어요." } },
            {
              value: "2",
              text: { ko: "혈관(심근경색, 뇌출혈 등) 질환을 가지고 있어요." },
            },
            {
              value: "3",
              text: {
                ko: "뼈/관절 질환(골다공증, 골감소증 등)을 가지고 있어요.",
              },
            },
            { value: "4", text: { ko: "당뇨/혈당을 가지고 있어요." } },
            {
              value: "0",
              text: { ko: "저희 가족은 위와 같은 질환이 없어요." },
            },
          ],
        },
      ],
    },
    {
      name: "여성 질환",
      elements: [
        {
          type: "radiogroup",
          name: "qna_femaledisease",
          title: { ko: "여성한정 질환" },
          isRequired: true,
          choices: [
            { value: "1", text: { ko: "임신, 수유 중이에요." } },
            { value: "2", text: { ko: "갱년기 증상이 있어요." } },
            {
              value: "3",
              text: { ko: "생리 전 증후군이나 유방 통증이 심해요." },
            },
            { value: "0", text: { ko: "선택할 것이 없어요." } },
          ],
        },
      ],
    },
  ],
};

// on page load...

// var surveyJSON = {"locale":"ko","title":"Sally","description":{"default":"건강상태 확인 위한 데이터 수집 ","ko":"건강상태 확인 위한 데이터 수집\n "},"pages":[{"name":"여성 질환","elements":[{"type":"radiogroup","name":"qna_femaledisease","title":{"ko":"여성한정 질환"},"isRequired":true,"choices":[{"value":"1","text":{"ko":"임신/수유중"}},{"value":"2","text":{"ko":"갱년기"}},{"value":"3","text":{"ko":"생리 전 증후군이나 유방 통증"}},{"value":"0","text":{"ko":"선택할 것이 없어요"}}]}]}]}

export default function SurveyPage() {
  const history = useHistory();
  function SendDataToServer(survey) {
    //send Ajax request to your web server.
    axios.post("http://ubuntu@54.180.38.13:3001/survey", survey.data).then((res) => {
      console.log(res);
      
      history.push({
        pathname: "/result",
        state: { result: JSON.stringify(res.data) },
      });
    });

    // res를 그... 분석 결과를 받아야할 듯, 받고 result 페이지로 이동하면서,
    alert(JSON.stringify(survey.data));
  }
  return (
    <div id="surveyContainer">
      {/* <!-- Change the below data attribute to play --> */}
      <div class="progress-wrap progress" data-progress-percent="25">
        <div class="progress-bar progress"></div>
      </div>
      <Survey.Survey json={surveyJSON} onComplete={SendDataToServer} />
    </div>
  );
}

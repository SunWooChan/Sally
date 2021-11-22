import pandas as pd

survey = pd.read_excel('survey.xlsx',engine='openpyxl', index_col=0) # user id to survey
vege2survey = pd.read_csv('vege2survey.csv',index_col=0) # vege to survey

# survey column related to nutrients
cor_nutri = ['qna_blood',
            'qna_digest',
            'qna_skin',
            'qna_eye',
            'qna_brain',
            'qna_stemina',
            'qna_bone',
            'qna_immune',
            'qna_hair',
            'qna_diet',
            'qna_stress',
            'qna_sleep',
            'qna_symptom',
            'qna_workout',
            'qna_afterworkout',
            'qna_outdoor',
            'qna_etc',
            'qna_familydisease',
            'qna_femaledisease']
# survey column not related to nutrients
noncor_nutri = ['qna_sex', 'qna_age', 'qna_height', 'qna_weight']

# survey one hot dict
id_survey = {'qna_blood1': 0,
            'qna_blood2': 0,
            'qna_blood3': 0,
            'qna_familydisease4': 0,
            'qna_digest1': 0,
            'qna_digest2': 0,
            'qna_diet4': 0,
            'qna_digest3': 0,
            'qna_digest4': 0,
            'qna_familydisease1': 0,
            'qna_skin1': 0,
            'qna_skin2': 0,
            'qna_skin3': 0,
            'qna_immune2': 0,
            'qna_skin4': 0,
            'qna_eye1': 0,
            'qna_eye3': 0,
            'qna_etc2': 0,
            'qna_eye2': 0,
            'qna_stemina2': 0,
            'qna_workout3': 0,
            'qna_afterworkout4': 0,
            'qna_etc4': 0,
            'qna_etc1': 0,
            'qna_eye4': 0,
            'qna_brain1': 0,
            'qna_brain2': 0,
            'qna_brain3': 0,
            'qna_brain4': 0,
            'qna_stemina1': 0,
            'qna_stemina3': 0,
            'qna_sleep2': 0,
            'qna_sleep3': 0,
            'qna_bone1': 0,
            'qna_bone2': 0,
            'qna_bone3': 0,
            'qna_familydisease3': 0,
            'qna_immune1': 0,
            'qna_hair3': 0,
            'qna_stress2': 0,
            'qna_stress3': 0,
            'qna_immune3': 0,
            'qna_hair1': 0,
            'qna_hair2': 0,
            'qna_diet1': 0,
            'qna_diet2': 0,
            'qna_symptom1': 0,
            'qna_workout1': 0,
            'qna_workout2': 0,
            'qna_afterworkout1': 0,
            'qna_afterworkout2': 0,
            'qna_afterworkout3': 0,
            'qna_outdoor2': 0,
            'qna_outdoor3': 0,
            'qna_etc3': 0,
            'qna_familydisease2': 0,
            'qna_femaledisease1': 0,
            'qna_femaledisease3': 0,
            'qna_femaledisease2': 0}

# convert user survey to one hot dict
id = 1 # choose user id
dict_survey = dict(survey.loc[id])
for i in dict_survey.keys():
    if i in noncor_nutri:
        pass
    colname = i+str(dict_survey[i])
    if colname in id_survey.keys():
        id_survey[colname] = 1
id_survey = pd.Series(id_survey)

# matrix mul
res = vege2survey.dot(id_survey)

# printing descending order
sorted_dict = sorted(res.items(), key = lambda item: item[1], reverse = True)
print(sorted_dict[:5]) # setting want to print num
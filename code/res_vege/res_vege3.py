import pandas as pd
import numpy as np
import json
from surprise import SVD
from surprise.model_selection import cross_validate
from sklearn.decomposition import randomized_svd, non_negative_factorization
import pymysql

host = 'sally-security-db.cgyhak5wcn11.ap-northeast-2.rds.amazonaws.com'
username = 'sally'
database = 'Survey'
password = 'sally5770'
port = 3306

conn = pymysql.connect(host=host, port=port, user=username, passwd=password, db=database, charset='utf8')
cursor = conn.cursor()

sql = "SELECT * FROM Qnas";
# sql = "SELECT * FROM Qnas ORDER BY id DESC LIMIT 1;"
cursor.execute(sql)
result = cursor.fetchall()


front_survey = pd.DataFrame(result, columns=['id','qna_sex','qna_age','qna_blood','qna_digest','qna_skin','qna_eye','qna_brain','qna_stemina','qna_bone','qna_immune','qna_hair','qna_diet','qna_stress','qna_sleep','qna_symptom','qna_height','qna_weight','qna_workout','qna_afterworkout','qna_outdoor','qna_etc','qna_familydisease','qna_femaledisease','createdAt','updatedAt'])

# user_survey = pd.read_csv('/Users/seon-uchan/Desktop/sally/survey_common.csv',index_col=0) # user id to survey

# user_survey = pd.read_csv('/home/ubuntu/Sally/code/res_vege/survey.csv',index_col=0) # user id to survey

vege2survey = pd.read_csv('/home/ubuntu/Sally/code/res_vege/vege2survey.csv',index_col=0) # vege to survey
toping2survey = pd.read_csv('/home/ubuntu/Sally/code/res_vege/toping2survey.csv',index_col=0) # vege to survey
user2vege_score = pd.read_csv('/home/ubuntu/Sally/code/res_vege/user2vege_score.csv')

def convert_onehot(survey):
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
    noncor_nutri = ['id','qna_sex', 'qna_age', 'qna_height', 'qna_weight','createdAt','updatedAt']

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

    dict_survey = dict(survey) # user choose
    #print(dict_survey)
    for i in dict_survey.keys():
        if i in noncor_nutri:
            pass
        colname = i + str(dict_survey[i])
        if colname in id_survey.keys():
            id_survey[colname] = 1
    return pd.Series(id_survey)

# calcuate matrix mul
def matrix_product(onehot_survey, data, num):
    # matrix mul
    reco_matrix = data.dot(onehot_survey)
    # printing descending order
    sorted_dict = sorted(reco_matrix.items(), key = lambda item: item[1], reverse = True)
    res_dict = dict((x, minmax(y, list(reco_matrix))) for x, y in sorted_dict[:num])
    
    ############### json ###################
    # file_path='matrix_result.json'
    # with open(file_path, 'w') as f:
    #     json.dump(res_dict, f, ensure_ascii=False);
    ########################################

    # return json form
    json_object = json.dumps(res_dict, ensure_ascii=False)
    print(json_object)
    return json_object

# define cos similarity
def compute_cos_similarity(v1, v2):
    norm1 = np.sqrt(np.sum(np.square(v1)))
    norm2 = np.sqrt(np.sum(np.square(v2)))
    dot = np.dot(v1, v2)
    return dot / (norm1 * norm2)

# define minmax
def minmax(x, l):
    return round((x - min(l))/(max(l)-min(l))*100, 2)

# find best match id using by SVD
def reco_svd(user2vege_score, my_id):
    raw_user2vege_score = np.array(user2vege_score, dtype=float)
    n_users = int(np.max(raw_user2vege_score[:, 0]))
    n_veges = int(np.max(raw_user2vege_score[:, 1]))
    shape = (n_users+1, n_veges+1)

    # create adjust matrix
    adj_matrix = np.ndarray(shape, dtype=float)
    for user_id, vege_id, score in raw_user2vege_score:
        adj_matrix[int(user_id)][int(vege_id)] = score
    adj_matrix


    # create matrix decomposition
    U, S, V = randomized_svd(adj_matrix, n_components=6, random_state=0)
    S = np.diag(S)

    # user based content filtering using by cosin similarity
    my_vector = U[my_id]
    best_match, best_match_id, best_match_vector = -1, -1, []
    for user_id, user_vector in enumerate(U):
        if my_id != user_id:
            similarity = compute_cos_similarity(my_vector, user_vector)
            if similarity > best_match:
                best_match = similarity
                best_match_id = user_id
                best_match_vector = user_vector
    #print('Best Match: {}, Best Match ID: {}'.format(best_match, best_match_id))
    return best_match_id

# find best match user's vege
def find_reco_svd(best_match_id, reco_matrix):
    vege_list = ['가지', '고수', '로카', '루꼴라', '배추', '브로콜리', '비트', '로메인', '셀러리', '시금치',
       '아스파라거스', '양배추', '적양배추', '양상추', '양파', '오이', '청경채', '치커리', '케일', '방울토마토',
       '파슬리', '파프리카', '피망', '바질']
    # set condition : user id == best match id
    condition = user2vege_score.user_id == best_match_id
    sorted_svd = user2vege_score[condition].sort_values(by=['score'], ascending=False)
    
    # search best 3 vege
    reco_dict = {}
    for vege_id, score in zip(sorted_svd.vege_id, sorted_svd.score):
       reco_dict[vege_list[int(vege_id)]] = minmax(score, sorted_svd.score)
       if len(reco_dict) == 3:
          break
    
    # return json form
    json_object = json.dumps(reco_dict, ensure_ascii=False)
    print(json_object)
    return json_object

# update user - vege - score info
def update_user2vege_score(user2vege_score, onehot_survey, user_id):
    # calculate score
    series_onehot = pd.Series(onehot_survey)
    scores = vege2survey.dot(series_onehot)

    # append score vector
    for vege_id, score in enumerate(scores.values):
        series_score = pd.Series([user_id, vege_id, score], index=['user_id', 'vege_id', 'score'])
        user2vege_score = user2vege_score.append(series_score, ignore_index=True)
    user2vege_score.to_csv('user2vege_score.csv', index=False)
    return user2vege_score

if __name__=="__main__":
    # set user
    #user_id = user_survey.index[-1]
    user_id = front_survey.iloc[-1]['id']-1
    # convert to survey's onehot vector
    onehot_survey = convert_onehot(front_survey.iloc[user_id])

    # USE ONLY WHEN UPDATING NEW USER'S SURVEY
    #user2vege_score = update_user2vege_score(user2vege_score, onehot_survey, user_id)
    
    ### reco_matrix = health analysis recommend ###
    reco_matrix = matrix_product(onehot_survey, vege2survey, 3)
    ### reco_toping = toping recommend ###
    reco_toping = matrix_product(onehot_survey, toping2survey, 2)
    
    ### search best match user
    best_match_id = reco_svd(user2vege_score, user_id)
    ### reco_svd = vege recommend ### 
    reco_svd = find_reco_svd(best_match_id, reco_matrix = json.loads(reco_matrix).keys())
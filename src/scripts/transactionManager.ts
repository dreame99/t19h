interface FetchResult {
    code: number;
    message: string;
}
interface FetchResponse {
    result: FetchResult;
    data?: object[] | object;
    option?: any;
}

const API_RESULT_CODE: {[key : string] : string} = {
"100" : "성공적으로 로그인 되었습니다."
, "103" : "성공적으로 회원가입 되었습니다."
, "105" : "성공적으로 로그아웃 되었습니다."
, "402" : "아이디가 입력되지 않았습니다."
, "403" : "비밀번호가 입력되지 않았습니다."
, "404" : "비밀번호 확인이 입력되지 않았습니다."
, "405" : "이름이 입력되지 않았습니다."
, "406" : "아이디 형식이 올바르지 않습니다."
, "407" : "비밀번호 형식이 올바르지 않습니다."
, "408" : "비밀번호 확인 형식이 올바르지 않습니다."
, "409" : "이름 형식이 올바르지 않습니다."
, "410" : "아이디가 중복됩니다."
, "400" : "아이디 또는 비밀번호가 입력되지 않았습니다."
, "401" : "아이디 또는 비밀번호의 형식이 올바르지 않습니다."
, "104" : "성공적으로 조회되었습니다."
, "411" : "조회에 실패했습니다."
, "426" : "비밀번호와 비밀번호 확인이 서로 일치하지 않습니다."
, "106" : "성공적으로 생성되었습니다."
, "412" : "생성에 실패했습니다."
, "413" : "프로젝트명이 입력되지 않았습니다."
, "414" : "모집 인원이 입력되지 않았습니다."
, "415" : "프로젝트 시작 일자가 입력되지 않았습니다."
, "416" : "프로젝트 종료 일자가 입력되지 않았습니다."
, "417" : "팀원 모집 시작 일자가 입력되지 않았습니다."
, "418" : "팀원 모집 종료 일자가 입력되지 않았습니다."
, "419" : "모집 인원 형식이 올바르지 않습니다."
, "420" : "프로젝트 시작 일자 형식이 올바르지 않습니다."
, "421" : "프로젝트 종료 일자 형식이 올바르지 않습니다."
, "422" : "팀원 모집 시작 일자 형식이 올바르지 않습니다."
, "423" : "팀원 모집 종료 일자 형식이 올바르지 않습니다."
, "424" : "프로젝트 시작 일자가 종료 일자보다 큽니다."
, "425" : "팀원 모집 시작 일자가 종료 일자보다 큽니다."
};

const API_URL = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/";
function postFetch(uri: string, data?: object): Promise<FetchResponse> {
    console.log("post fetch to " + API_URL + uri);
    console.log("data ", data);
    return fetch(API_URL + uri, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}

function getFetch(uri: string, data?: string): Promise<FetchResponse> {
    console.log("get fetch to " + API_URL + uri);
    console.log("data ", data);
    var cond: string = "";
    if( data && data.length ) {
        cond = "?" + data;
    }
    return fetch(API_URL + uri + cond, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "GET",
        credentials: "include",
    })
    .then(response => response.json());
}

function patchFetch(uri: string, data?: string): Promise<FetchResponse> {
    console.log("patch fetch to " + API_URL + uri);
    console.log("data ", data);
    var cond: string = "";
    if( data && data.length ) {
        cond = "?" + data;
    }
    return fetch(API_URL + uri + cond, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "PATCH",
        credentials: "include",
    })
    .then(response => response.json());
}
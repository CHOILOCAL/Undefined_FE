// ex. import { maskingFunc } from 'utils/makeMasking';
//     value={makeingFunc.email(reservationInfo?.email)};
export const maskingFunc = {
  checkNull: function (str: string) {
    if (typeof str == undefined || str == null || str == '') {
      return true;
    } else {
      return false;
    }
  },

  // 1) 이메일 마스킹 처리 ex) hyunchoi@hist.co.kr => hy******@hist.co.kr
  email: function (str: any) {
    const originStr = str;
    const emailStr = originStr.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    let strLength;

    if (this.checkNull(originStr) == true || this.checkNull(emailStr) == true) {
      return originStr;
    } else {
      strLength = emailStr.toString().split('@')[0].length - 3;
      return originStr
        .toString()
        .replace(new RegExp('.(?=.{0,' + strLength + '}@)', 'g'), '*');
    }
  },

  // 2) 연락처(휴대전화) 마스킹 처리 ex) +01012345678 => *******5678
  phone: function (str: any) {
    const originStr = str;
    const phoneStr = originStr.replace(/\+/, ''); // '+' replace
    let maskingStr;

    if (this.checkNull(originStr) == true) {
      return originStr;
    }

    return (maskingStr = phoneStr.replace(/\d(?=\d{4})/g, '*'));
  },

  // 3) 스카이패스 마스킹 처리 ex) 1234567890123 => *********0123
  skypass: function (str: any) {
    const originStr = str;
    const skypassStr = originStr;
    let maskingStr;
    console.log(skypassStr);

    if (this.checkNull(originStr) == true) {
      return originStr;
    }

    return (maskingStr = skypassStr.replace(/\d(?=\d{4})/g, '*'));
  },
};

function a (email, agreeEmailAddress) {
if(typeof (email)=== 'string' && Array.isArray(agreeEmailAddress) === ture) {

  Array.from(email).forEach((element) => { 
    if(element === '@') {
      console.log('이메일이 맞슴');

      let emailSplit = [];
      emailSplit = email.split('@');
      console.log(emailSplit);
      agreeEmailAddress.filter((element) => {
        if (element === emailSplit[1]) {
          console.log('이메일 도메인 맞음')
          return true;
        } else { 
          console.error('이메일 도메인 안마즘')
        }
      });
    } else { 
      new Error(' 이메일이 안맞음');
    }
  });
} else{
  console.error('이메일이 문자열 아님 ')
}
}

export default a ;

const axios = require('axios').default;

//replace
const chatId = 0;
const token = 'token';
const externalUrl = 'https://blablabla.ngrok.io/';
//replace

const attachmentUrl=`https://api.telegram.org/bot${token}/sendDocument`;

const candidateName = 'Dante';
const message = `Hey Fluix, ${candidateName} has done your task. See attachment`;

const headers = {
	'Content-Type': 'application/json',
};

const attachment = {
	chat_id:chatId,
	caption: message,
	document: `${externalUrl}static/whiteboard.zip`
};

//attachment
axios.post(attachmentUrl, attachment, {headers: headers})
	.then(response => console.log(response))
	.catch((error) => console.log(error))
;

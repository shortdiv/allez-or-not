const {google} = require('googleapis');

exports.handler = async (event, context) => {
  try {
    console.log(process.env.CLIENT_EMAIL)
    const authClient = new google.auth.JWT({
      email: process.env.CLIENT_EMAIL,
      key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    })
    await authClient.authorize()
    const sheets = google.sheets({version: 'v4', auth: authClient});
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: '1C4QYgfMh6tOQbf0M0eQVwzP-inHQcnm4YlA273uBtTI',
      range: 'Status!A1:J18',
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res.data),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

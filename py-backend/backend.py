from flask import Flask
from google.oauth2 import service_account
from googleapiclient.discovery import build


app = Flask(__name__)

@app.route('/')
def hello_world():
  CREDENTIALS = 'secrets.json'
  SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
  SHEET_ID = '11TLb2eesRU5EC3N7fv6wX0ted5O2jik2T8SpM67PYm0'
  RANGE = "Sheet1!A2:B3"

  creds = None
  creds = service_account.Credentials.from_service_account_file(
    CREDENTIALS, scopes=SCOPES)

  try:
    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=SHEET_ID,
                                    range=RANGE).execute()
    values = result.get('values', [])
    print(values)
  except:
    print('failed')

  return 'hi'
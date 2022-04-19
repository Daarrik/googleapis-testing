from flask import Flask

# from google.oauth2 import service_account
# from googleapiclient.discovery import build
import requests

app = Flask(__name__)

@app.route('/api/events')
def get_events():
  # CREDENTIALS = 'secrets.json'
  # SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
  # SHEET_ID = '11TLb2eesRU5EC3N7fv6wX0ted5O2jik2T8SpM67PYm0'
  # RANGE = "Sheet1!A2:B3"

  # creds = service_account.Credentials.from_service_account_file(
  #   CREDENTIALS, scopes=SCOPES)

  # try:
  #   service = build('sheets', 'v4', credentials=creds)

  #   # Call the Sheets API
  #   sheet = service.spreadsheets()
  #   result = sheet.values().get(spreadsheetId=SHEET_ID,
  #                                   range=RANGE).execute()
  #   return result
  # except:
  #   print('failed')
  spreadsheetId = '11TLb2eesRU5EC3N7fv6wX0ted5O2jik2T8SpM67PYm0'
  range = 'Sheet1!A2:B3'
  api_key = 'AIzaSyB7bzY4r_lr7gjDCZ0fetgDjM2vjixKIPs'
  try:
    req = requests.get(f'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}?key={api_key}')
    return req.json()
  except:
    print('request failed')
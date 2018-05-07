function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {
      name : "コースデータインポート",
      functionName : "importGora"
    }
  ];
  sheet.addMenu("スクリプト実行", entries);
};

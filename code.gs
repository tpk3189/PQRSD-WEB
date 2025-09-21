function doGet(e) {
  return ContentService
    .createTextOutput("WebApp activo. Use POST para enviar datos.")
    .setMimeType(ContentService.MimeType.TEXT);
}
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const SPREADSHEET_ID = "16JhyzzQw-oRAD-6ZZIrX6WKE9iG8Ibm11nU5xGreZQk";
    const SHEET_NAME = "Respuestas";
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({
          status: "error",
          mensaje: `No se encontró la hoja llamada '${SHEET_NAME}'`
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    sheet.appendRow([
      new Date(),
      data.nombre || "",
      data.correo || "",
      data.mensaje || ""
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        mensaje: "Datos recibidos correctamente"
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        mensaje: error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

using System;
using System.Text.RegularExpressions;

namespace Comp4945_Assignment1
{
	internal class UploadServlet : Servlet
	{
		public static readonly string END = "\r\n";

		public override void doGet(HttpRequest request, HttpResponse response)
		{
			response.setContentType("text/html");

			string content =
					"<!DOCTYPE html>" +
					"<html>" + "<head>" + "<title>File Upload Form</title>" + "</head>" +
					"<body>" + "<h1>Upload file and this is a doGet Btw</h1>" +
					"<form method=\"POST\" action=\"/\"enctype=\"multipart/form-data\">" +
					"<input type=\"file\" name=\"fileName\"/><br/><br/>" +
					"Caption: <input type=\"text\" name=\"caption\"<br/><br/>" + "<br />\n" +
					"Date: <input type=\"date\" name=\"date\"<br/><br/>" +
					"<br/>" +
					"<input type=\"submit\" value=\"Submit\"/>" +
					"</form>";

			content += "</body>" + "</html>";

			response.Write(content);

		}







		public override void doPost(HttpRequest request, HttpResponse response)
		{

			// Need to write to filepart **
			string capa = request.getCaption();
			string extension = request.getExtension();
			string captionName = "";
			for (int i = 0; i < capa.Length - 1; i++)
			{
				captionName += capa.ToCharArray()[i];
			}
			string formDate = request.getDate();
			string dateCorrected = "";
			for (int i = 0; i < 10; i++)
			{
				dateCorrected += formDate.ToCharArray()[i];
			}

			string[] contentLines = request.getContent().Split('\n');
			string insideFile = "";
			for (int i = 0; i < contentLines.Length - 1; i++)
			{
				insideFile += contentLines[i]+'\n';
			}

			FilePart filePart = new();
			string fileName = request.getFileName();


			if (fileName != null && !string.IsNullOrEmpty(captionName) && !string.IsNullOrEmpty(formDate))
			{

				//THE CURRENT PROBLEM IS HERE: FOR SOME REASON THE FILEPATH STRING ON LINE 47 CAN NOT HAVE ANOTHER STRING APPENDED TO IT. CHECK CONSOLE LOGS FOR DETAIL
				string filePath = filePart.getImgFolder();
				filePath += captionName;
				string moreF = filePath + "_" + dateCorrected + "." + extension;
				
				filePart.write(moreF, insideFile);
			}

			string path = filePart.getImgFolder();
			HashSet<string> images = new HashSet<string>();
			DirectoryInfo directory = new DirectoryInfo(path);
			FileInfo[] files = directory.GetFiles(".");

			foreach (FileInfo x in files)
			{
				images.Add(x.Name);
			}

			string content = "";
			bool brows = request.isBrowserReq();
			if (request.getUserAgent())
			{
			Console.WriteLine("ITS A BROWSER");
			response.setContentType("text/html");
			content += "<!DOCTYPE html>" +
				"<html>" + "<head>" + "<title>Uplaoded files</title>" + "</head>" +
				"<body>" +
				"<h2>Uploaded Files</h2>" +
				"<ul>";
			foreach (string imgPath in images)
			{
				content += "<li>" + imgPath + "</li>";
			}
			content += "</ul>" +
				"</body>" +
				"</html>";
			}
			else
			{
				response.setContentType("application/json");
				content += "{\"images\": [";
				foreach (string fn in images)
				{
					content += "\"" + fn + "\", ";
				}
				content += "]}";
			}
			response.Write(content);
		}

	}

}


using System;
using System.Net.Sockets;

namespace Comp4945_Assignment1
{
	internal class HttpResponse
    {
		public string outputStream = "";
		private string contentLengthHeader = "";
		private string contentTypeHeader = "";
		private Socket socket;

		public static readonly string END = "\r\n";

		public HttpResponse(Socket socket)
		{
			this.socket = socket;
			writeHeader();
		}

		public void Write(string content)
		{
			outputStream += content;
			setContentLength();
			byte[] msg = System.Text.Encoding.ASCII.GetBytes(outputStream);
			socket.Send(msg, msg.Length, 0);
			//socket.Close();
		}

		public void writeHeader()
		{
			DateTime dt = DateTime.Now;
			string date = dt.ToString();

			string res = "HTTP/1.0 200 OK" + END;
			res += "Date: " + date + END;
			res += "Server: Custom C# Server" + END;
			res += "Connection: close" + END;
			res += contentTypeHeader;
			res += contentLengthHeader + END + END;
			outputStream = res;
		}

		public void setContentLength()
		{
			string nCLH = "Content-Length: " + Convert.ToString(outputStream.Length);
			contentLengthHeader = nCLH;
		}

		public void setContentType(string contentType)
		{
			string nCTH = "Content-Type: " + contentType;
			contentTypeHeader = nCTH;
		}

		public string getResponse()
		{
			return outputStream;
		}

	}
}

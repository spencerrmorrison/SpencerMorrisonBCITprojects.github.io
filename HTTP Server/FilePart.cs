using System;
using System.Text;
using System.Drawing;

namespace Comp4945_Assignment1
{
    internal class FilePart
    {
		private string IMG_FOLDER = "c:\\temp\\images\\";

		public FilePart(){}

		public string getImgFolder()
		{
			return IMG_FOLDER;
		}

		public void write(string fileName, string content)
		{
			Console.WriteLine("\n\nCreating a file with the full name: "+fileName+"\n\n");

			try
			{
				// Create a new file     
					using (FileStream fs = File.Create(fileName))
					{
						// Add some text to file    
						byte[] bytes = Encoding.ASCII.GetBytes(content);
						fs.Write(bytes, 0, bytes.Length);
					}
			
			}
			catch (Exception Ex)
			{
					Console.WriteLine(Ex.ToString());
			}
		}
	}
}

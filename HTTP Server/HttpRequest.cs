using System;
using System.Net.Sockets;
using System.Text;

namespace Comp4945_Assignment1
{
    public class HttpRequest
    {
        string[] browserAgents = new string[4] { "Mozilla", "Chrome", "Firefox", "Safari" };
        string[] imageFormats = new string[3] { "png", "jpeg", "jpg" };
        private string a = "";
        private string method = "";
        private string fileName = "";
        private string caption = "";
        private string boundary = "";
        private string content = "";
        private string date = "";
        private bool isUA = false;

        private string userAgent = "";
        public static readonly string boundaryKey = "boundary=";

        public HttpRequest(Socket sock)
        {
            Byte[] bytesReceived = new Byte[1];
            while (true)
            {
                if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                 (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                {
                    break;
                }
                a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
            }
            Console.WriteLine("\n\n\n-------Request Start----------\n");
            Console.WriteLine(a);

            if (a.Contains("GET"))
            {
                method = "GET";
            }
            if (a.Contains("POST"))
            {
                method = "POST";

                while (true)
                {
                    a = "";
                    while (true)
                    {
                        if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                      (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                        {
                            if (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n')
                            {
                            }
                            break;
                        }
                        a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                    }
                    Console.Write("\n\n----" + a + "----\n\n");
                    if (a.Contains("Mozilla"))
                    {
                        isUA = true;
                    }
                    if (a.Contains("--\n"))
                    {
                        Console.WriteLine("break time");
                        break;
                    }
                    else if (a.Contains("------WebKitFormBoundary"))
                    { // WE FOUND THE DELIMITER
                      // NOTE: This code will run fine assuming we have uploaded a .txt file.
                      //skip 3 lines
                        a = "";
                        while (true) // This while breaks as soon as we find 'filename='
                        {
                            if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                             (a.Contains("filename=")))
                            {
                                if (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n')
                                {
                                    Console.WriteLine("\nnewlinechar\n");
                                }
                                break;
                            }
                            a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                        }
                        Console.WriteLine(a);

                        a = "";
                        while (true) // This while breaks as soon as we find ' " '
                        {
                            if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                             (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\"'))
                            {
                                if (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n')
                                {
                                    Console.WriteLine("\nnewlinechar\n");
                                }
                                break;
                            }
                            a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                            fileName = a;
                        }
                        Console.WriteLine(a);
                        a = "";
                        for (int i = 0; i < 3; i++)
                        {
                            while (true)
                            {
                                if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                 (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                                {
                                    if (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n')
                                    {
                                        Console.WriteLine("\nnewlinechar\n");
                                    }
                                    break;
                                }
                                a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                            }
                            Console.WriteLine("\n-popa--" + a + "---\n");
                        }
                        a = "";
                        //print the next lines
                        while (true) // this while breaks when we find delimiter
                        {
                            string tempContent = "";

                            while (true) // this while breaks when it encounters '\n'
                            {
                                if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                    (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\r'))
                                {
                                    tempContent = a;
                                    Console.WriteLine("\n\n\n----" + tempContent + "----\n\n\n");
                                    content += tempContent;
                                    break;
                                }
                                a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                            }
                            if (a.Contains("------WebKitFormBoundary")) { break; }
                            caption += tempContent;
                            a = "";
                        }
                        //skip 2 lines
                        a = "";
                        for (int i = 0; i < 2; i++)
                        {
                            while (true)
                            {
                                if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                 (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                                {
                                    break;
                                }
                            }
                        }
                        while (true) // this while breaks when we find delimiter
                        {
                            while (true) // this while breaks when it encounters '\n'
                            {
                                if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                    (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                                {
                                    break;
                                }
                                a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                            }
                            if (a.Contains("------WebKitFormBoundary")) { break; }
                            caption = a;
                            a = "";
                        }
                        while (true) // this while breaks when we find delimiter
                        {
                            while (true) // this while breaks when it encounters '\n'
                            {
                                if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                    (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                                {
                                    break;
                                }
                                a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                            }
                            // Console.WriteLine(a);
                            if (a.Contains("------WebKitFormBoundary"))
                            {
                                //  Console.WriteLine("Delimiter found");
                                break;
                            }
                            date = a;
                            a = "";
                        }

                        while (true) // this while breaks when it encounters '\n'
                        {
                            if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                            {
                                break;
                            }
                            a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                        }

                        a = "";
                        while (true) // this while breaks when it encounters '\n'
                        {
                            //Grabbing Date
                            if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                            {
                                break;
                            }
                            a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                            date = a;
                        }

                        a = "";
                        while (true) // this while breaks when it encounters '\n'
                        {
                            if ((sock.Receive(bytesReceived, bytesReceived.Length, 0) == 0) ||
                                (Encoding.ASCII.GetString(bytesReceived, 0, 1)[0] == '\n'))
                            {
                                break;
                            }
                            a += Encoding.ASCII.GetString(bytesReceived, 0, 1);
                        }

                        Console.WriteLine("filename: " + fileName);
                        Console.WriteLine("caption: " + caption);
                        Console.WriteLine("date: " + date);
                        Console.WriteLine("CONTENT: " + content);

                        break;


                    }

                }

            }
            // Need to parse better. Need content!
            // Need get content method to write into new file
            // Also need to get user agent to identify browser vs native app
        }


        public string getMethod()
        {
            return method;
        }

        public string getFileName()
        {
            return fileName;
        }

        public string getBoundary()
        {
            return boundary;
        }

        public string getDate()
        {
            return date;
        }

        public string getContent()
        {
            return content;
        }
        public string getCaption()
        {
            return caption;
        }

        public bool getUserAgent()
        {
            return isUA;
        }
        public string getExtension()
        {
            string[] parts = fileName.Split('.');
            if (parts.Length == 2)
            {
                return parts[1];
            }
            return "";
        }

        public bool isBrowserReq()
        {
            foreach (string browser in browserAgents)
            {
                if (userAgent.Contains(browser))
                {
                    return true;
                }
            }
            return false;
        }


        public bool isAnImage()
        {
            foreach (string image in imageFormats)
            {
                if (userAgent.Contains(image))
                {
                    return true;
                }
            }

            return false;
        }
    }
}

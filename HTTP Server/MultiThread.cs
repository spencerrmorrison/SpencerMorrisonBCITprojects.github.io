using System.Net;
using System.Net.Sockets;
using System.Reflection;
using Comp4945_Assignment1;
    public class MultiThread
    {
        Socket cls;
    public MultiThread(Socket socket) { this.cls = socket; }
        public void threadMethod()
        {

            HttpRequest httpRequest = new(cls);
            HttpResponse httpResponse = new(cls);

            //Refelction
            Type dsType = typeof(UploadServlet);
            Servlet uploadServlet = (Servlet)Activator.CreateInstance(dsType);

        if (httpRequest.getMethod() == "GET")
            {

           Console.WriteLine("Started a GET request\n");
            uploadServlet.doGet(httpRequest, httpResponse);
            Console.WriteLine("Finished a GET request\n");
        }
        else if (httpRequest.getMethod() == "POST")
            {
            Console.WriteLine("Received a Post request\n");

            uploadServlet.doPost(httpRequest, httpResponse);
            Console.WriteLine("Finished a Post request\n");
        }
        else
        {
            Console.WriteLine("A method different from POST or GET has been executed. METHOD : "+httpRequest.getMethod()+"\n");
        }

    }
        static void Main(string[] args)
        {
        createDirIfNone("c:\\temp\\images");
            try
            {
                int port = 8888; IPAddress address = IPAddress.Parse("127.0.0.1");
                IPEndPoint ipe = new IPEndPoint(address, port);
                Socket s = new Socket(ipe.AddressFamily, SocketType.Stream, ProtocolType.Tcp);
                s.Bind(ipe); s.Listen(10);
                while (true)
            {

                Socket cls = s.Accept();
                
                MultiThread dirListing = new MultiThread(cls);
                Thread thread = new Thread(new ThreadStart(dirListing.threadMethod));
                thread.Start();
                }
                

            
            s.Close();
            }
            catch (SocketException e)
            {
                Console.WriteLine("Socket exception: {0}", e);
            }
        }


        public static void createDirIfNone(string path)
        {
            if (Directory.Exists(path) == false)
            {
                Directory.CreateDirectory(path);
            }
        }
    }

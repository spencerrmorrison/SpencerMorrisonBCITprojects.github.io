using System;

namespace Comp4945_Assignment1
{
    internal abstract class Servlet
    {
        public abstract void doGet(HttpRequest request, HttpResponse response);

        public abstract void doPost(HttpRequest request, HttpResponse response);
    }
}

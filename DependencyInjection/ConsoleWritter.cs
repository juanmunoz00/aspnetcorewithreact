using System.Diagnostics;

namespace aspnetcorewithreact2.DependencyInjection
{
    public class ConsoleWritter : IConsoleWritter
    {
        public void write()
        {
            Debug.WriteLine("Testing Dependency Injection...");

        }
    }
}

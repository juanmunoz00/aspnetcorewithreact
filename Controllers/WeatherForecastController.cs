using aspnetcorewithreact2.DependencyInjection;
using aspnetcorewithreact2.Model.Entities;
using Microsoft.AspNetCore.Mvc;

namespace aspnetcorewithreact2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private IConsoleWritter _IConsoleWritter;
        private ILibraryService _ILibraryService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IConsoleWritter prIConsoleWritter, ILibraryService prLibraryService)
        {
            _logger = logger;
            _IConsoleWritter = prIConsoleWritter;
            _ILibraryService = prLibraryService;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            // Dependency injection
            //_IConsoleWritter.write();

            /// Get library
            //List<Library> ILibraries = _ILibraryService.GetAll();
            //List<Library> ILibraries = _ILibraryService.GetByName("PEDRO");

            /// Add library
            //Library lNewLibrary = new Library() { name = "john", address = "6598 kelly st", telephone = "326598" };
            //_ILibraryService.Save(lNewLibrary);

            /// Update library
            //Library lNewLibraryToUpdate = _ILibraryService.GetByName("john").FirstOrDefault();
            //lNewLibraryToUpdate.address = "2386 El Encino St.";
            //_ILibraryService.Update(lNewLibraryToUpdate);

            /// Delete library
            //Library lLibraryToUpdate = _ILibraryService.GetByName("john").FirstOrDefault();
            //_ILibraryService.Delete(lLibraryToUpdate);

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
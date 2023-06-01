using aspnetcorewithreact2;
using aspnetcorewithreact2.CustomMiddleware;
using aspnetcorewithreact2.DependencyInjection;
using aspnetcorewithreact2.Model.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddTransient<IConsoleWritter, ConsoleWritter>();
builder.Services.AddTransient<ILibraryService, LibraryService>();
builder.Services.AddDbContext<AppDataContext>( x => x.UseSqlServer(builder.Configuration.GetConnectionString("AspNetCoreAndReact")) );
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "ASP.NEW CORE API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "React ASP.NET");
});

app.UseRouting();
app.UseMyMiddleware();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();

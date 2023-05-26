using aspnetcorewithreact2.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace aspnetcorewithreact2
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options)
            : base(options)
        {

        }

        public DbSet<Library> Libraries { get; set; }

    }
}

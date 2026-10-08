namespace HospitalSystem.Data
{
    public class HospitalSystemDbContext : DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=HospitalSystemDb;Trusted_Connection=True;TrustServerCertificate=True;");
        }
    }
}
